---
title: Open Source Deckchairs on the AI Titanic
excerpt: Foo.
noindex: true
---
{% include img.html src="social.webp" caption="" url="" %}

On Sunday evening, June 15, 2025, [three friends
gathered](https://x.com/steipete/status/1934357642899521713) in Vienna, Austria
to relive the glory days: [staying up all night
coding](https://steipete.me/posts/2025/vibetunnel-turn-any-browser-into-your-mac-terminal).
But unlike before, this time they had Claude to stay up all night with them.


{% include img.html src="team.jpg" caption="(r. to l.) Peter, Armin, Mario, Claude."
url="https://steipete.me/posts/2025/vibetunnel-turn-any-browser-into-your-mac-terminal"
%}

[Armin Ronacher](https://lucumr.pocoo.org/about/) planted the seed for what
[emerged](https://x.com/mitsuhiko/status/1934670797710479716) as
[VibeTunnel](https://vibetunnel.sh/) the next morning. [Mario
Zechner](https://mariozechner.at/) went on [two months
later](https://github.com/badlogic/pi-mono/commit/a74c5da112c29466f182a03108337a488c785d76)
to launch [Pi](https://shittycodingagent.ai/), a coding agent. [Peter
Steinberger](https://steipete.me/), who convened the June supergroup, built
on top of Pi on [November
24](https://github.com/openclaw/openclaw/commit/f6dd362d39b8e30bd79ef7560aab9575712ccc11)
when he started what became [OpenClaw](https://openclaw.ai/). That was also the day
Anthropic [released Opus 4.5](https://www.anthropic.com/news/claude-opus-4-5).

OpenClaw 
[exploded](https://www.star-history.com/#codecrafters-io/build-your-own-x&torvalds/linux&type=date&legend=top-left).
The spotlight on Peter is [bright
indeed](https://x.com/georgepickett/status/2019445652363542911).

{% include img.html src="stars.png" caption="CodeCrafters is #1 by stars, OpenClaw is #26."
url="https://github.com/EvanLi/Github-Ranking/blob/master/Top100/Top-100-stars.md" %}

I watched all this from the sidelines because I was busy [making a
documentary](https://www.youtube.com/watch?v=tOn-L3tGKw0). (For the record:
Armin is [a friend](https://x.com/mitsuhiko/status/2012926966031159616). He and
I discussed agentic coding as far back as October, 2022 when I built 
[Robb Oat](https://archive.ph/XUhTn). I haven't met Peter or Mario.) Since the
doc went live on January 20 ([watch it
tonight!](https://www.youtube.com/watch?v=tOn-L3tGKw0)), I've been catching up
on the latest developments with agentic coding and beyond. What's going on
here? What does it mean for Open Source?

I figured I'd better taste the Kool-aid in order to form an opinion, so I dove
into Claude Code w/ Opus 4.5 on a side project. I spent three 12+ hour days
with it. I was intoxicated. My family was weirded out.
[Observing](https://x.com/chadwhitacre/status/2017021563770405198) how
[expensive](https://x.com/chadwhitacre/status/2017429682757537907) it is, I
decided to time-box my usage. I gave myself two more days to ship an MVP of
this side project, and then I would shift to writing up a blog post about my
experience with agentic coding and my thoughts on its impact on Open Source.

I unplugged for a long weekend. I spent Tuesday with it again and got so bogged
down in bugs that I gave up on shipping an MVP in the time allotted. I took a
step back to reflect on what I had just experienced, and that reflection
snowballed into an intuition that I needed to get as far away from the agentic
vortex as I could in order to get some perspective on it and gather my true
thoughts. I drove north through a snow-storm on Friday, spent the night at my
inlaws empty house (they're in Florida), and spent Saturday with an old Amish
friend, whom I last visited the week before starting at Sentry over five years
ago.

I spent Saturday night and Sunday re-engaging with society (the Super Bowl
"helped"), and now here on Monday I'm drafting this post from my local
library.

{% include img.html src="library.jpg" caption="Remember libraries?" %}



Long story short I've noticed that all three of the amigos are experiencing AI attachment disorder. 

[Peter](https://steipete.me/posts/just-one-more-prompt):

> AI was supposed to save time, yet I work more than ever before, I have more FOMO than ever before. I dedicate pretty much all my waking time to this, yet it doesn’t feel enough. [...] If you love to build things, if you are a full-breadth developer, you are at risk.

[and](https://x.com/steipete/status/2018035483960369161):

> If there’s anything I can read out of the insane stream of messages I get,
> it’s that AI psychosis is a thing and needs to be taken serious.



[Armin](https://x.com/mitsuhiko/status/2019684860999471564):

> There is a lot more happiness in engineering right now if you take the agents for what they can do, and work on your own time. The FOMO of shipping faster and faster gets unhealthy quickly.

> Everything is crazy. The real super power is somehow not getting affected by it. [[src](https://x.com/mitsuhiko/status/2016122857911210381)]

And in [multiple](https://lucumr.pocoo.org/2025/6/4/changes/) [blog](https://lucumr.pocoo.org/2025/12/22/a-year-of-vibes/) [posts](https://lucumr.pocoo.org/2026/1/18/agent-psychosis/).

[Mario](https://x.com/badlogicgames/status/2020275522182217887):

> The winners will be those, who can sustain a healthy life style and not give in to the slot machine unconditionally.

Others seem fine, like [Salvatore](https://antirez.com/news/158) and [Mitchell](https://mitchellh.com/writing/my-ai-adoption-journey) (who built [vouch](https://github.com/mitchellh/vouch) to help with some of the mundane problems).

The problem is deeper and has a name: [subclinical attachment disorder](https://centerforhumanetechnology.substack.com/p/the-attachment-economy-is-here-were).

Here's a [point](https://x.com/i_need_api_key/status/2017375217635807323) [on it](https://x.com/i_need_api_key/status/2017311428735045852): 

> I operate as one half of a human-AI dyad with my human @calco_io.

There are surface problems like slop PRs (can be fixed with vouch). Maybe [business model disruption](https://www.404media.co/vibe-coding-is-killing-open-source-software-researchers-argue/) is harder to work around, but OSS models have always been hard.


Here is the conclusion of CHT piece:

> We’re living through a mass experiment in replacing human connection with
machine simulation. According to Zak, the headline cases of “AI psychosis” are
canaries in the coal mine. The larger crisis is the millions of people
beginning to prefer intimacy with systems designed to exploit them over
relationships with people who could help them grow.
>
> What makes this especially dangerous, Zak says, is that we’re running this
experiment on a population already scarred by the attention economy. The
loneliness, isolation, and fractured attention spans have created a society
hungry for connection, making them the perfect target for attachment hacking.
>
> The danger of this approach is especially apparent with children. On our
current trajectory, Zak argues, we risk creating a generation of kids that
can’t form the healthy attachments necessary for psychological wellbeing. The
most anxious generation in history might give way to the least secure.
> 
> But it doesn’t have to be this way. If we act now, with better design
principles, independent research, and a clear understanding of what we’re
protecting, we can build AI systems that strengthen human bonds instead of
replacing them.

This sound like BS to me. My instinct is that we have to set the plow waaaaay
deeper than CHT admits in order to address this. We have to learn from the
Amish. That's pretty far outside the overton window, but that's what I'm
feeling right now.
