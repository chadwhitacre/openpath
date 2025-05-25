// Heavily modified from https://github.com/czue/bluesky-comments under MIT.
// This file is also under MIT.

const ICONS = {
  bsky: `<svg class="bsky-icon" viewBox="0 0 600 600" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" fill="#f0eadb" transform="translate(0, 35)" /></svg>`,
  heart: `<svg class="bsky-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#f0eadb"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>`,
  repost: `<svg class="bsky-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#f0eadb"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" /></svg>`,
  reply: `<svg class="bsky-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#f0eadb"><path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" /></svg>`
};

class BlueskyReplies {
  constructor(selector, httpUri, atUri) {
    this.container = document.querySelector(selector);
    this.uri = atUri;
    this.httpUri = httpUri;
    this.visibleCount = 3;
    this.thread = null;
    this.init();
  }

  async init() {
    try {
      this.renderMessage('Loading ...');
      await this.fetchThreadData();
      this.render();
    } catch (err) {
      this.renderMessage(`Failed to load replies for ${this.httpUri}: ${err.message}`);
    }
  }

  renderMessage(message) {
    this.container.innerHTML = `<div class="bsky-message">${message}</div>`;
  }

  async fetchThreadData() {
    try {
      const params = new URLSearchParams({ uri: this.uri });
      const res = await fetch(
        "https://public.api.bsky.app/xrpc/app.bsky.feed.getPostThread?" + params.toString(),
        {
          method: 'GET',
          headers: { "Accept": "application/json" },
          cache: "no-store",
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`API Error: ${errorData.message || 'Unknown error'} (${res.status})`);
      }

      const data = await res.json();
      if (!data || !data.thread) {
        throw new Error('Invalid response format from API');
      }
      this.thread = data.thread;
    } catch (error) {
      throw new Error(`Failed to fetch thread: ${error.message}`);
    }
  }

  createReply(reply) {
    const author = reply.post.author;
    const authorLink = `https://bsky.app/profile/${author.did}`;
    const postLink = `${authorLink}/post/${reply.post.uri.split("/").pop()}`;
    const el = document.createElement('div');
    el.className = 'bsky-reply';
    el.innerHTML = `
      <a class="bsky-text" href="${postLink}">
        ${reply.post.record.text}
        <div class="bsky-meta">
          ${author.avatar
              ? `<img src="${author.avatar}" alt="avatar" class="bsky-avatar">`
              : `<div class="bsky-avatar"></div>`
            }
          ${author.displayName ?? author.handle}
          ${ICONS.reply} ${reply.post.replyCount ?? 0}
          ${ICONS.repost} ${reply.post.repostCount ?? 0}
          ${ICONS.heart} ${reply.post.likeCount ?? 0}
        </div>
      </a>
    `;

    // Recursively append replies.
    if (reply.replies && reply.replies.length > 0) {
      const repliesContainer = document.createElement('div');
      repliesContainer.className = 'bsky-replies';

      reply.replies
        .sort((a, b) => (b.post.likeCount ?? 0) - (a.post.likeCount ?? 0))
        .forEach(reply => {
          if (this.isThreadViewPost(reply)) {
            repliesContainer.appendChild(this.createReply(reply));
          }
        });

      el.appendChild(repliesContainer);
    }

    return el;
  }

  isThreadViewPost(post) {
    return post && post.post && post.post.uri && post.post.author;
  }

  render() {
    this.container.innerHTML = '';

    const topMeta = document.createElement('a');
    topMeta.className = 'bsky-meta bsky-top';
    topMeta.href = this.httpUri;
    const stats = [
      { icon: 'heart', count: this.thread.post.likeCount ?? 0, label: 'likes' },
      { icon: 'repost', count: this.thread.post.repostCount ?? 0, label: 'reposts' },
      { icon: 'reply', count: this.thread.post.replyCount ?? 0, label: 'replies' }
    ];
    topMeta.innerHTML = `Comment on ${ICONS['bsky']} Bluesky` + stats.map(stat => `
      <div class="bsky-group">${ICONS[stat.icon]} ${stat.count} ${stat.label}</div>
    `).join('');

    const nested = document.createElement('div');
    if (this.thread.replies) {
      const sortedReplies = this.thread.replies
        .filter(reply => this.isThreadViewPost(reply))
        .sort((a, b) => (b.post.likeCount ?? 0) - (a.post.likeCount ?? 0));

      sortedReplies.slice(0, this.visibleCount).forEach(reply => {
        nested.appendChild(this.createReply(reply));
      });

      if (this.visibleCount < sortedReplies.length) {
        const loadMoreButton = document.createElement('button');
        loadMoreButton.className = 'bsky-load-more';
        loadMoreButton.textContent = 'Load More Replies';
        loadMoreButton.onclick = () => {
          this.visibleCount += 5;
          this.render();
        };
        nested.appendChild(loadMoreButton);
      }
    }

    this.container.append(topMeta, nested);
  }
}

window.initReplies = (selector, httpUri) => {
  const match = httpUri.match(/profile\/([\w.]+)\/post\/([\w]+)/);
  const [, did, postId] = match;
  const atUri = `at://${did}/app.bsky.feed.post/${postId}`;
  new BlueskyReplies(selector, httpUri, atUri);
};
