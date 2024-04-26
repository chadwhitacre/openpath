---
title: OSS Stewards as Software Restaurants
excerpt: With new EU legislation, Open Source foundations are growing up fast. Where are we headed?
noindex: true
---

I took AP Computer Science in 1994, in a small lab with a dozen
Macintoshes. For homework, we scribbled top-down
designs and Pascal snippets on paper. Some we typed in the next day.

A few weeks in, my mom (a math teacher in a different district) drove me to CompUSA at Parkway
Center Mall and plunked $124.99 plus tax for a shrink-wrapped box with Borland
Turbo Pascal on probably half a dozen 3½" floppies to install on our Gateway 2000.
We [ate at Chi-Chi’s](https://www.reddit.com/r/pittsburgh/comments/16ufhkw/who_remembers_shopping_at_compusa_and_then/) and I got fried ice cream but not
[hepatitis](https://en.wikipedia.org/wiki/Chi-Chi%27s#Bankruptcy,_hepatitis_A,_and_closure_in_United_States_and_Canada)
(thankfully) and I really hope I can visit [the last one standing](https://www.chi-chis.at/)
in September. So epic. Back home I wrote Pascal on the Gateway instead of
paper.

{% include img.html src="level-3.gif" caption="Parkway Center Mall floorplan dot tumblr dot com" url="https://www.tumblr.com/kirbypuckett/42594346160/parkway-center-mall" %}

I thought about this experience when I read Stephen Walli's "[My [Memes About] Free and
Open Source
Software"](https://medium.com/@stephenrwalli/my-history-of-free-and-open-source-software-1bac0a75a6ba#5ea4)
(a good post with a bad title; also, the emphasis below is mine):

> <b>Meme #7: Don’t confuse products with projects.</b>
>
> A project is a collection of working software that installs and runs and
> solves an interesting problem. It’s a collaboration and conversation in code.
> Projects are NOT products. **A product is something that solves a customer’s
> problem for money.** While a lot of excellent software can come out of a
> well-run open source project that relieves some of the work for engineering,
> there is enormous work still to be done to turn it into a problem-solving
> product for customers.

Borland Turbo Pascal was clearly a product for me in 1994, on this
definition. It solved my problem for money. I had the shrink-wrap and
blank paper to prove it.

Now, besides a war on terror and a global pandemic, what's the delta between
1994's Borland Turbo Pascal and 2024's JavaScript or Rust or Python? I think
it's just the money part. Some projects certainly _feel_ like products, highly
dependable opaque-in-practice solutions to a problem. How many of us
[open](https://chromium.googlesource.com/v8/v8.git)
[the](https://github.com/rust-lang/rust)
[hood](https://github.com/python/cpython)? Probably as many as fix our own car.

## Stewarding Borland Turbo ... Python?

If Python is a product, who is the producer? The Python community, yes, of
which the Python Software Foundation is presently being chiseled into European
Union law as the <b>steward</b>. This is one of the most remarkable aspects of
the [Cyber Resilience Act
(CRA)](https://www.europarl.europa.eu/doceo/document/TA-9-2024-0130_EN.pdf), a
new piece of legislation that has kept the Open Source community in Europe
quite busy for the past 18 months. Many outside Europe are less aware of it, but it will
have a profound impact on all of us in the coming years. (I started [wrapping my
head around the CRA in this
ticket](https://github.com/chadwhitacre/openpath/issues/40), so if you want to
do the same you might start there.)

Here is the text in the CRA that enshrines Open Source foundations as a
new kind of economic actor alongside manufacturers and consumers (§ 19, emphasis
added):

> Taking into account the importance for cybersecurity of many products with
> digital elements qualifying as free and open-source software that are
> published, but not made available on the market within the meaning of this
> Regulation, <b>legal persons who provide support on a sustained basis</b> for
> the development of such products which are intended for commercial
> activities, and <b>who play a main role in ensuring the viability of those
> products</b> (**open-source software stewards**), should be subject to a
> light-touch and tailor-made regulatory regime. Open-source software stewards
> include certain foundations as well as entities that develop and publish free
> and open-source software in a business context, such as not-for-profit
> entities developing free and open-source software in a business context. The
> regulatory regime should take account of their specific nature and
> compatibility with the type of obligations imposed.

Here it is as a slide from the author of the CRA explaining to FOSDEM, "[what
the open-source software steward will
be](https://www.youtube.com/watch?v=wRzqvHulcEA#t=18m07s)":

{% include img.html src="osss.webp" caption="OSS stewards are a new economic actor in the EU." url="https://fosdem.org/2024/events/attachments/fosdem-2024-3683-the-regulators-are-coming-one-year-on/slides/22201/Slides_CRA_FOSDEM_v3_ukPnQUG.pdf" %}

The European Union does not regularly invent new kinds of economic actor. The
last time was in 2008, with the "[new legislative
framework](https://single-market-economy.ec.europa.eu/single-market/goods/new-legislative-framework_en),"
since compacted, ossified, solidified, and hardened by 15+ years of government
built atop it. An Open Source carve-out in the CRA is _a really big deal_.

## EU Is Saying the Word "Restaurant"

Stephen Walli's Meme #3 is, "[There is no scale without
discipline](https://medium.com/@stephenrwalli/my-history-of-free-and-open-source-software-1bac0a75a6ba#5d29),"
which he unpacks elsewhere [using a cooking
metaphor](https://medium.com/@stephenrwalli/sustaining-open-source-software-4a62a4b6d0f3#595f)
(emphasis added):

> Everyone knows how to fry an egg. You can become a reasonable cook with some
> practice, expanding your repertoire and toolset. You may get good enough to
> cook for friends or tackle the Holiday meal for family. You might specialize
> and become very good at baking. But **the world of cooking changes dramatically
> when you say the word ‘restaurant.’**
>
> Restaurants, regardless of whether they are 2-person taco trucks or
> Michelin-starred experiences, are businesses that happen to involve cooking.
> There is suddenly an array of cooking skills required to consistently,
> reliably, repeatably deliver the same food outcome every time. There is a
> team with roles, and that adds all manner of communications challenges to
> ensure the consistent delivery of food (and experience). **There are rules
> and regulations.** Added on top of that customers need to be served, accounts
> payable/receivable need to be managed, (you need to spend less than you
> earn,) and the team needs to be hired, trained, motivated, and paid.
>
> So too with software. There is a considerable difference between the problem
> sets that need to be solved to deliver software solutions consistently at
> scale (to large numbers of users in a community or large numbers of
> customers) versus bespoke solutions in the small or solutions with dozens of
> users not tens of thousands. These aren’t ‘open source’ problems. They’re
> software skillset and experience problems. These problems have everything to
> do with software hygiene and software engineering and **apply to all software
> regardless of licensing regime or community versus corporate creation**.

With the CRA, the European Union is saying the word "restaurant" over the whole
software industry, including Open Source.  The "rules and regulations" are
arriving. They intend a "light-touch and tailor-made regulatory regime" for
Open Source. Cue the unintended consequences. It was green onions from a
distant supplier that took down Chi-Chi's restaurant in the worst hepatitis A
outbreak in U.S. history. My friend's father's friend died. Log4j and XZ are the
green onions. They are grown in [someone's back
yard](https://www.softwaremaxims.com/blog/not-a-supplier). How does this play
out?

"Open source projects will not be required to directly implement the mandated
processes described in the CRA," [observes Mike
Milinkovich](https://eclipse-foundation.blog/2023/12/19/good-news-on-the-cyber-resilience-act/),
a leader in the Open Source community's response. "But every commercial product
made available in the EU which is built on top of those open source projects
_will_. I predict this will put pressure on projects and communities to enhance
their processes to assist in downstream commercialization." There is no scale
without discipline. Mike continues (emphasis added):

> After all, if a project is used in hundreds of products, doing the bulk of
> the CE Mark conformance work in the project rather than repeating the effort
> hundreds of times makes enormous sense. But as we all know, **OSS projects at
> the moment simply do not have the resources to do this**. It is impossible to
> know how all of this will play out, but an optimistic hypothesis is that once
> companies are required by law to meet secure software development practices
> they will be incented to invest in the upstream projects they rely upon.

Pessimistic hypotheses are also available, but let's share Mike's optimism. If
we are to make the best of this new legal landscape, we need to support FOSS
foundations _now more than ever_ in order for them to live up to the demands of
an Open Source software steward. If we are to regulate Open Source like a
restaurant, let us also [fund Open Source like a
restaurant](/2024/open-source-is-a-restaurant/#the-restaurant-analogy).

## Rounding Out the Roles

Historically, FOSS foundations have focused on some things and not others. Back in
2009, Stephen Walli and co-author Paula Hunter [taxonomized these things as
follows](https://www.jolts.world/index.php/jolts/article/view/64/148):

1. <b>Legal Framework for IP Management</b>
   1. Ownership Neutrality
   1. Liability and Risk Management
   1. Code Provenance
   1. The License of a FOSS Project and License Curation
1. <b>Technical Services</b>
   1. The Forge and the Communications Channel
   1. Mentorship and Incubation
1. <b>General Management and Operations</b>
   1. Support Across the Project Lifecycle
   1. Funding: Members, Dues, and Donations

With some minor modifications (rip forges lol), these still apply. Two
things foundations own today more clearly than 15 years
ago jump out:

1. <b>Packaging.</b> The Python Software Foundation [runs
   PyPI](https://pypi.org/help/#about). The Rust Foundation [runs
   Crates.io](https://www.rust-lang.org/governance/teams/crates-io). Ruby Central [runs RubyGems](https://rubygems.org/pages/sponsors).
1. <b>Events.</b> Ruby Central runs [two conferences](https://rubycentral.org/conferences/). PyCon is "the [single biggest
   fundraiser](https://psf-docs.readthedocs.io/en/latest/_docs/faq.html#what-is-the-relationship-between-pycon-us-and-the-psf)
   the PSF has every year." "[~60-70% of [CNCF's]
   budget](https://twitter.com/cra/status/1763632743127126190) goes to running
   events for the community."

With government regulation of Open Source, foundations seem poised to take on
even more responsibility. In the limit, they could even evolve to look like weird
software companies. Consider a software company like my employer, Sentry. It provides a legal framework for IP
management, technical services, and general management and operations. We have
a service reliability team, and events and marketing staff. We _also_ have a
full-fledged product engineering organization—the bulk of our company.

Will the foundations of the future employ engineers, to meet the demands
(direct or indirect) of regulators?
[Django](https://www.djangoproject.com/fundraising/#who-are-the-django-fellows)
and [Ruby
Central](https://rubycentral.org/news/ruby-central-welcomes-new-software-engineer-in-residence-sponsored-by-aws/)
have started down this path. PHP is [furthest
along](https://thephp.foundation/structure/#core_developers). Taken to its
conclusion, this would change the character of our foundations, but not
necessarily in a bad way. There is no scale without discipline, and there are
ways to scale that [preserve the heart and soul of Open
Source](/2024/a-vision-for-software-commons/#the-heart-of-open-source).
Foundations have an opportunity—perhaps an obligation—to play a pivotal role in
ensuring that homegrown green onions from a thousand back yards are safe for
mass consumption.
