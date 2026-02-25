---
title: Fueling Open Source with Vibes & Money
excerpt: Economists think Open Source is a business model. Devs know better, and fund it accordingly.
noindex: true
---

Some economists published a paper last month titled "[Vibe Coding Kills Open
Source](https://arxiv.org/abs/2601.15494)". They hypothesized that, because
agentic coding relieves human devs of direct interaction with the Open Source
projects on which they depend, attention-based business models adjacent to
those dependencies are set to collapse, even if (agentic) usage grows. In other
words, you can't upsell agents in the docs.

As they were going to press, Tailwind dramatically [proved them
right](https://vlad.website/llms-are-accelerating-the-open-source-sustainability-crisis/).
The problem is real, and affects real people. I feel for them.

However, to say vibe coding _kills_ Open Source is only true if we identify "Open Source"
with this type of business model. Yet, agreeing with what Cramer and
[many](http://oss-watch.ac.uk/resources/businessofopensource#open-source-is-not-a-business-model)
[before](https://blog.senko.net/open-source-is-not-a-business-model)
[him](https://medium.com/@stephenrwalli/there-is-no-open-source-business-model-cdc4cc20238)
[have](https://anonymoushash.vmbrasseur.com/2018/08/24/open-source-is-not-a-business-model-and-your-business-will-fail-if-you-think-that-it-is/)
asserted, [Open Source is not a business
model](https://cra.mr/open-source-is-not-a-business-model) at all. This is why I [prefer the word
"subsidize"](https://openpath.quest/2024/the-open-source-sustainability-crisis/)
instead of "sustain" (as is used in the paper) to name what, e.g., the company
**Tailwind Labs Inc.** does relative to the **Tailwind CSS** Open Source project. Open
Source projects are a unique entity that [doesn't fit
neatly](https://www.youtube.com/watch?v=VTY-lQ3S1gw&list=PLivwfG4q6DTBweyVkYRjoPvebmgq5c1qg&index=4)
into conventional economic models, so the imprecision of conventional
economists is understandable.


## Ways to Fund Open Source

I do agree with the conclusion of the vibe coding paper, that the rise of AI agents amplifies
the pressure to "redesign the business models and institutions that channel
value back to OSS maintainers" (p. 27). I've [spoken
before](https://openpath.quest/2024/a-vision-for-software-commons/#three-funding-levers)
about [the three levers](
https://openpath.quest/2024/a-vision-for-software-commons/#three-funding-levers)
we have available to pull:

1. <b>Commercialization</b>---This is the subsidization that Tailwind Labs has been attempting, and which is now under threat.
1. <b>Social Validation</b>---[Open Source Pledge](https://opensourcepledge.com/) and [Open Source
Endowment](https://endowment.dev/) are two promising redesigns with which I am directly involved.
1. <b>Taxation</b>---[Sovereign Tech
Fund](https://www.sovereign.tech/programs/fund) is the best example here.

The economists propose a metering approach that they call the "Spotify model"
(p. 23; cf.  27). I proposed [something
similar](/2024/a-vision-for-software-commons/#a-proof-of-concept-invoice) a
couple years ago, a line-item for Open Source on the invoices of major cloud
providers or other infrastructure companies. I see it as the social-validation
approach that would feel most like taxation. As the paper authors say, "[t]he
infrastructure for these interventions largely exists; what is needed is
coordination and will" (p. 28).  I don't disagree. I even had a couple
conversations with candidate companies at the time, which made crystal clear
that "coordination and will" are quite costly.

Also, artists [don't love
Spotify](https://en.wikipedia.org/wiki/Criticism_of_Spotify#Allegations_of_unfair_artist_compensation)
(here is [Spotify's side of the story](https://loudandclear.byspotify.com/)).
As [Mitchell Hashimoto has
said](https://www.youtube.com/watch?v=77fH--tlIOk#t=2m14s), "I don't know if
you can reach a 'more' that is socially accepted to be good enough unless it is
forced, taxed."

So, yes. Let's keep trying all the things to fund Open Source---whether subsidy
or sustenance. But let's not confuse the decline of one adjacent business model
with the death of the Open Source development model.



## Vibe Coding Rocket Fuel

The title of the paper rings hollow on closer inspection ... and also on a
surface level. Exhibit A: Peter Steinberger has vibe-coded the most explosively
popular project in Open Source history, [OpenClaw](https://openclaw.ai/). In three months it has become the 14th-most popular project on GitHub, recently [overtaking the official Linux mirror](https://www.reddit.com/r/openclaw/comments/1rcsbci/openclaw_overtakes_linux_in_github_star_count/) in number of stars, with React (the last "[non-aggregator](https://www.star-history.com/blog/openclaw-surpasses-linux-14th-most-starred)" project) likely to fall in a week or so.

{% include img.html src="stars.webp" caption="Crashing the Open Source popularity contest" url="https://www.reddit.com/r/openclaw/comments/1rcsbci/openclaw_overtakes_linux_in_github_star_count/" %}

[Personal
crises](https://openpath.quest/2026/spitting-out-the-agentic-kool-aid/)
notwithstanding, the energy here cannot be denied. There are
[scores](https://x.com/avi_press/status/2026522871762399736) of [OpenClaw
meetups](https://luma.com/claw?compact=true) coming up. Peter is putting his
MIT-licensed project [into a
foundation](https://steipete.me/posts/2026/openclaw) rather than
commercializing it. Open Source, a community-based development model, has never
been more back.

{% include img.html src="clawcon.jpg" caption="ClawCon, Vienna. Shout-out to my coworker Michi in the Internet hat." url="https://steipete.me/posts/2026/openclaw" %}

Yes, vibe-coding creates a slop PR problem in the short term. Workarounds like Mitchell's [vouch](https://github.com/mitchellh/vouch) 
and [GitHub's more coordinated
efforts](https://github.blog/open-source/maintainers/welcome-to-the-eternal-september-of-open-source-heres-what-we-plan-to-do-for-maintainers/)
will dampen this relatively soon.

On the flip side, vibe coding enables competent developers to make
contributions they never would have found time for otherwise. Here are a couple
[anecdotal](https://github.com/npmx-dev/npmx.dev/pull/115)
[examples](https://github.com/npmx-dev/npmx.dev/pull/113) from my friend BYK.
Cloudflare's Steve Faulkner [rebuilt all of
Next.js](https://blog.cloudflare.com/vinext/) in a week (both the original and
the replacement are MIT-licensed). Many front-runners---[Armin
Ronacher](https://lucumr.pocoo.org/2025/12/22/a-year-of-vibes/), [Mitchell
Hashimoto](https://mitchellh.com/writing/my-ai-adoption-journey), [Salvatore
Sanfilippo](https://antirez.com/news/158), [Evan
You](https://x.com/youyuxi/status/2026647622057079165), [Guido van
Rossum](https://x.com/gvanrossum/status/2026116763470217352), [Linus
Torvalds](https://github.com/torvalds/AudioNoise/blob/3a6b51032da587e5d2e269515f3dc21c96da15c4/README.md#L37C1-L38C14)---have embraced agentic coding. In fact, Tailwind founder [Adam
Wathan is among them](https://www.youtube.com/watch?v=X3yfVo2oxlE).

So, no. Vibe coding does not kill Open Source. Vibe coding _accelerates_ Open
Source---_and_ it requires that we accelerate the shift to truly sustainable
funding paradigms that are in line with Open Source's nature as a [gift
community](https://www.youtube.com/watch?v=tOn-L3tGKw0&list=PLivwfG4q6DTBweyVkYRjoPvebmgq5c1qg&index=2)
and not a market economy. Wanna help? We made [Endowment](https://endowment.dev/) and
[Pledge](https://opensourcepledge.com/) just for you. 🦞😎🦞
