---
title: Relicensing and Rug Pulls
excerpt: If a viable fork materializes, relicensing was a rug pull. If not, it wasn't ... and that's kinda sad.
---

Another day, [another major Open Source project
relicenses](https://redis.com/blog/redis-adopts-dual-source-available-licensing/)
to avoid [getting
Jeff'd](https://www.youtube.com/watch?v=XZ3w_jec1v8#t=29m27s).  This time it's
Redis ... again. Was it a rug pull? It's too soon to tell. It's only a rug pull
if someone was standing on the rug.


## A Brief History of Redis Licensing

- <b>2009</b>—After working on it privately for three years (yes?), Salvatore
[publishes](https://github.com/redis/redis/commit/ed9b544e10b84cd43348ddfab7068b610a5df1f7) Redis core on GitHub [under
BSD-3](https://github.com/redis/redis/blob/ed9b544e10b84cd43348ddfab7068b610a5df1f7/COPYING).
{% include img.html src="betatesters.webp"
url="https://github.com/redis/redis/blob/ed9b544e10b84cd43348ddfab7068b610a5df1f7/BETATESTING.txt" %}

- <b>2016</b>—Redis starts making modules, licensing them under AGPL (e.g. [RediSearch](https://github.com/RediSearch/RediSearch/commit/c60925a9268ac9843244ee33c033c4789dd4ce50), [RedisJSON](https://github.com/RedisJSON/RedisJSON/commit/6f638aca7df52e884f14b494168462add5366e7a#diff-c693279643b8cd5d248172d9c22cb7cf4ed163a3c98c8a3f69c2717edd3eacb7), [RediTimeSeries](https://github.com/RedisTimeSeries/RedisTimeSeries/commit/7224436f2c0b981f48e9331cea306bea85a01ed7#diff-c693279643b8cd5d248172d9c22cb7cf4ed163a3c98c8a3f69c2717edd3eacb7)).

- <b>2018</b>—Redis relicenses its modules from AGPL to
Apache-2.0-with-Commons-Clause. I don't find an announcement from them, but
here's [a version of events in a TechCrunch
op-ed](https://techcrunch.com/2018/09/07/commons-clause-stops-open-source-abuse/#m_-47614634501600442334829)
from a VC who was involved, and Redis refers to the 2018 Commons Clause
relicensing in [their 2021
post](https://redis.com/blog/redis-labs-modules-license-changes/).

- <b>2021</b>—[Commons Clause](https://commonsclause.com/) is a fine idea with
an unfortunate name. It's a non-compete rider on an otherwise Open Source
license ... but a commons is precisely a resource that is [governed
openly](https://www.amazon.com/dp/0521405998), not corporately. Due in part to
related controversy, Redis [relicenses its modules
again](https://redis.com/blog/redis-labs-modules-license-changes/) to a new
license: the non-compete Redis Source Available License (RSAL).

- <b>2022</b>—Redis [relicenses its modules
again](https://redis.com/blog/rsalv2-sspl-announcement/) to a dual licensing
arrangement: a cleaned-up RSALv2, and—in a bid to reduce license
proliferation—MongoDB's
[SSPL](https://en.wikipedia.org/wiki/Server_Side_Public_License).

- <b>2024</b>—Yesterday, after 15 years, core Redis went from BSD-3 to the same
RSALv2/SSPL arrangement as the modules.


## Criteria for a Rug Pull

In cases like this, the cry "Foul!" [goes
up](https://news.ycombinator.com/item?id=37904640):

> [C]ompanies dominate their space by having an open ecosystem and a large
> community of volunteers and then unilaterally switch the license terms from
> under everyone so that the founding team and VCs can make billions.

It's a smooth narrative, but it's a little _too_ smooth. Not every relicensing
is a rug pull, because not every project has "a large community of volunteers."
Moving a rug with no-one standing on it is not a rug pull, it's just moving a
rug. For a relicensing to be a rug pull, there has to have been a true
developer community around the project—not just users, developers.

Clearly HashiCorp pulled the rug, because in the wake of [their
relicensing](https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license),
people outside HashiCorp did a lot of work to get the
[OpenTofu](https://www.linuxfoundation.org/press/announcing-opentofu) fork off
the ground. It seems to be viable. On the other hand, since Sentry relicensed
in 2019, no viable fork has emerged. There was no community of people not
employed by Functional Software, Inc. dba Sentry who were developing the
product. There was no-one standing on the rug.

{% include img.html src="Percentage_of_Commits_by_Era_and_Relation.webp"
url="https://blog.sentry.io/nows-the-time-for-delayed-open-source/?original_referrer=https%3A%2F%2Fblog.sentry.io%2F" caption="Sentry has always been built by Sentry" %}

Was Redis relicensing a rug pull? I don't know. They
mention "efforts to support a community-led governance model, and our desire to
[maintain the BSD
license](https://redis.com/blog/redis-license-bsd-will-remain-bsd/)." I
eagerly clicked the link regarding their desire. More eagerly would I have
clicked to learn about their efforts. Maybe they did make an effort,
maybe they didn't. Ultimately, the proof of the pudding is in the eating. Are
there enough people who care enough to launch a viable Open Source fork of
Redis? Was anyone standing on the rug? In the court of public ~~opinion~~
_action_, the jury is out.

## But Also, Empty Rugs are Kinda Sad

I do have to admit that there's something poignant about yesterday's
announcement. I felt a pang of loss when digging up the history shared above.
Fifteen years ago, Salvatore [put something beautiful out into the
world](https://news.ycombinator.com/item?id=35871462), with a sparkle in his
eye and a spring in his step. Redis has always topped my personal list of
really elegant pieces of software—alongside Postgres and Python, Vim, maybe
Git—and Salvatore has always seemed like he's got really good energy. When he
[stepped back](http://antirez.com/news/133) four years ago, he wrote (emphasis
mine):

> I believe I’m not just leaving Redis in the hands of a community of expert
> programmers, but also in the hands of **people who care about the legacy of the
> community spirit of Redis**.

If no fork emerges, it seems a death knell for Salvatore's dreams for
Redis-the-community, even while it vindicates the decision of
Redis-the-company. I felt a similar pang of loss when I [watched David
say](https://www.youtube.com/watch?v=MYoipcYW_Qk&t=1713s) (emphasis mine):

> There's no billion-dollar revenue companies that are exclusively [permissive]
> Open Source[.] I want to believe somebody will do it, at some point, they'll
> take that leap, and it will work. **We were not going to be the ones to
> quite do it**, because it was just frustrating for us.

Community is at the heart of Open Source. Companies are at the heart of our
economy. Somehow it would sure be great if we could [figure out
how](https://gratipay.news/the-second-open-company-4cbab7ca1a47) to have
[the best of
both](https://blog.gittip.com/post/25215503687/corporations-and-open-ones/).
