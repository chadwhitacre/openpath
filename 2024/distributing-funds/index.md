---
title: Distributing Funds
excerpt: More experiments please.
noindex: true
---
Solving the [Open Source sustainability
crisis](/2024/the-open-source-sustainability-crisis/) has two parts:

1. unlocking funds from corporations, and
2. distributing funds to individuals.

Both are hard. I've [talked
elsewhere](/2024/a-vision-for-software-commons/#three-funding-levers) about the
[three basic approaches](https://spectrum.ieee.org/open-source-crisis) to
solving the first problem. The [Open Source
Pledge](https://opensourcepledge.com/) is one implementation of one of the
approaches. In this post I want to talk about the second part: assuming funds
are flowing, how do we distribute them?

{% include img.html src="pachinko.jpg" caption="Not a perfect analogy but I picture distribution as a sort of pachinko machine." url="https://www.youtube.com/watch?v=7RTg89WEsXQ" %}


## A Policy Goal

Let's define a policy goal: **We should distribute money to
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
   individuals leading projects who make distribution decisions, and individuals
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

There are two basic approaches to distributing funds to individuals. We can
come up with algorithms to distribute funds at scale, and we can empower some
individuals to make direct decisions. All variations of both approaches are
worth trying at this stage. It's early days on Open Source sustainability, a
time for divergence and exploration. Over time and as the sustainability
movement matures, I expect we'll settle into relatively stable, long-lived
patterns.

### Algorithms

I am aware of seven examples of an algorithmic approach: two from individuals,
two from companies, and three products from funding platforms, two of which are
still going.

#### Individual Experiments With Algorithmic Distribution

Let's start by looking at algorithmic Open Source funding experiments from two
generous **individuals**: Serkan Holat and Konstantin Vinogradov.

<b>[Serkan Holat](https://www.linkedin.com/in/serkanholat/)</b>, a software
developer and independent researcher, [launched a monthly funding
experiment](https://dev.to/coni2k/open-source-public-fund-experiment-lc8)
nearly two years ago. He has been running it faithfully ever since, with
[monthly updates on this X/Twitter
thread](https://x.com/coni2k/status/1865379070030033053), and higher-level
write-ups at [six](https://x.com/coni2k/status/1543986591286321152),
[twelve](https://www.linkedin.com/feed/update/urn:li:activity:7022915965306712064/),
and [eighteen
months](https://dev.to/coni2k/open-source-public-fund-experiment-one-and-a-half-years-update-367d).

{% include img.html src="serkan.png" caption="Each month, Serkan Holat distributes $100 among three projects on Open Collective." url="https://x.com/coni2k/status/1865379070030033053" %}

Serkan's experiment uses [Rob Pike's Criticality Score
algorithm](https://github.com/ossf/criticality_score), part of the
[OpenSSF](https://openssf.org/) initiative. A project's Criticality Score is a measure of its influence and importance. Serkan takes his monthly budget of
$100, picks three projects at random from Open Collective, and distributes his
budget based on the Criticality Score of each. I love Serkan for doing
this consistently for so long. It's a humble but inspiring experiment. Serkan's
long-term vision is to [fund Open Source through a public tax on proprietary
software](https://podcast.sustainoss.org/175). His experiment points towards a
method for distributing this tax should it ever come about.

Venture capitalist <b>[Konstanin Vinogradov](https://kvinogradov.com/)</b>
recently conducted an algorithmic funding experiment of his own, framed as "[an
open-source analogue of the S&P 500](https://kvinogradov.com/algo-sponsors/)."
He distributed a budget of $5,000 within the Python ecosystem through GitHub
Sponsors.

{% include img.html src="konstantin.png" caption="Konstantin Vinogradov sent $5,037 to 866 users via GitHub Sponsors." url="https://kvinogradov.com/algo-sponsors/" %}

Like Serkan, Konstantin incorporated work from OpenSSF, in this case
the [Scorecard](https://github.com/ossf/scorecard/). Whereas Criticality Score
measures influence and importance, Scorecard measures security
best practices. A lower Scorecard score indicates a project at higher risk of
security compromise. Konstanin's algorithm is a function of Scorecard score,
number of sponsors (another proxy for risk), and number of downloads (a proxy
for value, a rough substitute for Criticality Score). Also like Serkan,
Konstantin's experiment contributes to the development of
a long-term vision: an [Open Source
endowment](https://kvinogradov.com/oss-universities/).

#### Company Experiments

Serkan and Konstantin are to be commended for their individual initiatives.
That said, corporations are the primary beneficiaries of Open Source and must
be its primary funders. Let's look at two approaches to algorithmic funding
from **companies**.

<b>Microsoft</b>
[Microsoft's data-driven
   expansion](https://opensource.microsoft.com/blog/2024/06/27/5-things-we-learned-from-sponsoring-a-sampling-of-our-open-source-dependencies/)
   of [their FOSS Fund](https://aka.ms/microsoftfossfund). They use [CHAOSS](https://chaoss.community/) and Ecosyste.ms.

<b>Sentry</b> - "[We Just Gave](https://blog.sentry.io/we-just-gave-750-000-dollars-to-open-source-maintainers/)" - only looking at deps and employee input, no external metrics.

#### Platform Products

These are great but we need basically every company to participate, and ain't nobody got time for that. Therefore we need **platforms**.

<b>[thanks.dev](https://thanks.dev/home)</b>

<b>[ecosyste.ms funds](https://funds.ecosyste.ms/)</b>

Also <b>[StackAid](https://www.stackaid.us/)</b>. RIP StackAid. ✌️

#### Summary of Algorithmic Approaches

Here are some design tradeoffs and questions I notice with these approaches:

1. Do we incorporate usage data specific to donors (thanks.dev, Microsoft), or
   donate based on general data not tied to specific funding sources
   (ecosyste.ms, Konstantin)?

1. How do we best [balance transparency and resistance to
   gamification](https://news.ycombinator.com/item?id=42350238)?

1. Can we at least get [post-distribution transparency per
   sponsor](https://bsky.app/profile/chadwhitacre.com/post/2lckusuwvas2p) even
   if the algorithm is semi-secret?

#### But What About DAOs?

A little voice in my said tells me I should also mention [decentralized autonomous
organizations](https://en.wikipedia.org/wiki/Decentralized_autonomous_organization)
(DAOs), but to be honest they make little sense to me and feel like an esoteric
waste of time. I don't know of any Open Source-focused ones. I supposed they can 
be a scaled-up version of what we find in typescript-eslint, which has [a
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

- The [Sovereign Tech Agency](https://www.sovereign.tech/) distributes tens of
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
for distributing funds to individuals within a high-trust Open Source project. In
this scenario, each individual can see what others are taking. Based on that,
they can decide for themselves what is fair for themselves to take. Given
proper management, it can be [a fantastic way to optimize fairness without
ruining intrinsic
motivation](https://opensource.com/open-organization/16/7/compensating-employees-letting-them-take-what-they-want).
Liberapay continues to offer [a "team takes"
implementation](https://en.liberapay.com/about/teams).

{% include img.html src="twyw.png" caption="Kids ate first in Gratipay's twyw implementation." url="https://opensource.com/open-organization/16/7/compensating-employees-letting-them-take-what-they-want" %}

## Attention Is Costly

Whether we can find algorithms we trust to distribute funds from companies to
individual maintainers, or whether we [continue evolving FOSS
governance](/2024/the-future-of-foss-foundations/) to include directing funding
flows, encapsulation is key to scaling.

When I buy a cup of coffee, I am not burdened with deciding how much of my five
dollars to distribute to the farmer who grew the beans, and the shipping company
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
