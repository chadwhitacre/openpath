---
title: Allocating Funds
excerpt: More experiments please.
noindex: true
---
{% include img.html src="social.webp" caption="" url="" %}

Solving the [Open Source sustainability
crisis](/2024/the-open-source-sustainability-crisis/) has two parts:

1. unlocking funds from corporations, and
2. allocating funds to individuals.

Both are hard. I've [talked
elsewhere](/2024/a-vision-for-software-commons/#three-funding-levers) about the
[three basic approaches](https://spectrum.ieee.org/open-source-crisis) to
solving the first problem. The [Open Source
Pledge](https://opensourcepledge.com/) is one implementation of one of the
approaches. In this post I want to talk about the second part: assuming funds
are flowing, how do we allocate them?

## A Policy Goal

Let's define a policy goal: **We should allocate money to
individuals to fairly reward past contributions and motivate valuable
future contributions.** Notice these subordinate aims:

1. <b>Balance perspectives.</b> Consumers of Open Source want high-quality
   software today and into the future. Producers want compensation for past
   time spent, and stability to plan for the future.

1. <b>Recognize all contributions.</b> Code is the core, but complete
   software involves much more, such as testing, documentation, design, and
   support. All contributions have some value.

1. <b>Focus on individuals.</b> Funding flows are complex, often involving
   multiple entities, both for-profit or non-profit. Yet, ultimately, it is
   individuals who produce Open Source software, individuals who make corporate
   funding decisions, individuals at platforms who develop funding algorithms,
   individuals leading projects who make allocation decisions, and individuals
   who ultimately receive funds.

1. <b>Negotiate fairness.</b> The crux of the problem is optimizing a feeling
   of fairness across the wide web of individuals involved.

Of course, fair compensation is a key contributor to future motivation. Why
not fold down to a single goal of creating future value? Well, on a certain
interpretation of this attribute taken in isolation, we already have an optimal
status quo. Companies receive tremendous value from Open Source. The problem to
solve is maintainer burn-out. The maintainer perspective needs to be explicitly
in view.

## Algorithms and People

There are two basic approaches to allocating funds to individuals. We can
come up with algorithms to allocate funds at scale, and we can empower some
individuals to make direct decisions. All variations of both approaches are
worth trying at this stage. It's early days on Open Source sustainability, a
time for divergence and exploration. Over time and as the sustainability
movement matures, I expect we'll settle into relatively stable, long-lived
patterns.

### Algorithms

I'm aware of four current algorithmic approaches:

1. [thanks.dev](https://thanks.dev/home),
2. [ecosyste.ms funds](https://funds.ecosyste.ms/),
3. [Microsoft's data-driven
   expansion](https://opensource.microsoft.com/blog/2024/06/27/5-things-we-learned-from-sponsoring-a-sampling-of-our-open-source-dependencies/)
   of [their FOSS Fund](https://aka.ms/microsoftfossfund), and
4. [an experiment from Konstantin
   Vinogradov](https://kvinogradov.com/algo-sponsors/) contributing to his
   [proposal for an Open Source
   endowment](https://kvinogradov.com/oss-universities/).

{% include img.html src="grantees-lg.png" caption="Konstantin Vinogradov donated $5,037 to 866 users via GitHub Sponsors." url="https://kvinogradov.com/algo-sponsors/" %}

Here are some design tradeoffs and questions I notice with these approaches:

1. Do we incorporate usage data specific to donors (thanks.dev, Microsoft), or
   donate based on general data not tied to specific funding sources
   (ecosyste.ms, Konstantin)?

1. How do we best [balance transparency and resistance to
   gamification](https://news.ycombinator.com/item?id=42350238)?

1. Can we at least get [post-distribution transparency per
   sponsor](https://bsky.app/profile/chadwhitacre.com/post/2lckusuwvas2p) even
   if the algorithm is semi-secret?

I should mention [decentralized autonomous
organizations](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization)
(DAOs), but to be honest they make little sense to me and feel like an esoteric
waste of time. I don't know of any Open Source-focused ones. I supposed they're
a scaled-up version of what we find in typescript-eslint, which has [a
point-based system for recognizing
contributions](https://typescript-eslint.io/maintenance/contributor-tiers/). Unlike [Drupal's credit system](https://dri.es/balancing-makers-and-takers-to-scale-and-sustain-open-source), points in typescript-eslint [directly drive compensation](https://typescript-eslint.io/maintenance/contributor-tiers#reimbursement). Crucially, though, they note:

> We treat everything here as approximate numbers. We're a small enough team to
> informally discuss changes ad hoc and allow off-by-one-or-two months.

In other words, they operate at a human scale.

### People

Frankly, I find algorithms insufficient. There are too many factors in the
computation of fairness across all individuals involved in the production of
Open Source:

1. need
1. ambition
1. seniority
1. stage of life
1. productivity
1. cost of living
1. cultural expectations

On the one hand, algorithms can offer a level playing field, impartial rules
for all. On the other hand, algorithms are developed by people. They are an
abstraction over decisions by individuals, but without recourse for individuals
unjustly affected to appeal. Let's develop systems that augment rather than
replace human judgement and relationships.

Models for human decision-making include tried-and-true negotiation of
employment or contractor relationships, as well as grant programs with an
application process.

- The [Sovereign Tech Agency](https://www.sovereign.tech/) allocates tens of
millions of euros a year for critical digital infrastructure based on direct
decision-making. 
- Django has [an active Fellows
program](https://www.djangoproject.com/fundraising/#fellowship-program), as
does [Django CMS](https://www.django-cms.org/en/fellowship-program/).
- Foundations such as
[Python](https://pyfound.blogspot.com/2023/06/announcing-our-new-security-developer.html)
and
[Ruby](https://rubycentral.org/news/ruby-central-welcomes-new-software-engineer-in-residence-sponsored-by-aws/)
have started employing software engineers.
- The PHP Foundation makes this [their raison
d'etre](https://thephp.foundation/foundation/#foundation-activities): "The
primary task of the PHP Foundation is to fund developers to work on PHP."

Ten years ago I experimented with [a take-what-you-want (twyw)
model](https://gratipay.news/sharing-our-take-what-you-want-story-911dad62ac32)
for allocating funds to individuals within a high-trust Open Source project. In
this scenario, each individual can see what others are taking. Based on that,
they can decide for themselves what is fair for themselves to take. Given
proper management, it can be [a fantastic way to optimize fairness without
ruining intrinsic
motivation](https://opensource.com/open-organization/16/7/compensating-employees-letting-them-take-what-they-want).
Liberapay continues to offer [a "team takes"
implementation](https://en.liberapay.com/about/teams).

{% include img.html src="twyw.png" caption="Kids ate first in Gratipay's twyw implementation." url="https://opensource.com/open-organization/16/7/compensating-employees-letting-them-take-what-they-want" %}

## Attention Is Costly

Whether we can find algorithms we trust to allocate funds from companies to
individual maintainers, or whether we [continue evolving FOSS
governance](/2024/the-future-of-foss-foundations/) to include directing funding
flows, encapsulation is key to scaling.

When I buy a cup of coffee, I am not burdened with deciding how much of my five
dollars to allocate to the farmer who grew the beans, and the shipping company
that transported them, and the roaster who roasted them, and the suppliers of
the cup, the paper sleeve, the lid, the milk, and the sugar, and the barista. I
pay for a product. We need the same with Open Source.

At Sentry [we sponsor upwards of 1,000
projects](https://blog.sentry.io/we-just-gave-750-000-dollars-to-open-source-maintainers).
Classical sponsorship models such as the original [FOSS Contributor
Fund](https://www.oreilly.com/library/view/investing-in-open/9781098111915/)
require way too much attention to each project to work at this scale. This is
also the limitation I see with attempts such as
[Drips](https://www.drips.network/), where "anyone can create a _Drip List_ to
flexibly send funds to a list of up to 200 open-source GitHub repositories and
Ethereum addresses at a time." Who has time for that? Same with issue bounties.
I don't see that scaling, because it depends a lot of attention at a really
fine-grained level.

I see this mismatched expectation at the project level as well. I hear from
maintainers trying to sell me ad space on their README. Sentry does a handful
of sponsorships for Open Source projects out of our digital marketing budget,
where we're closely tracking ROI of paid logo placement based on click-through
and conversion rates. Our [main funding
program](https://blog.sentry.io/we-just-gave-750-000-dollars-to-open-source-maintainers/)
(which is the pattern for the [Open Source
Pledge](https://opensourcepledge.com/)) operates at a much higher level of
abstractionl. Maybe someone will build DoubleClick for Open Source to scale
this up. Until then I don't have time to pay individual attention to thousands
of placements.
