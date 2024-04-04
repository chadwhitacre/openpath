---
title: A Vision for Software Commons
excerpt: Imagine an indy Open Source contingent thriving alongside our corporations and governments.
---

[Heartbleed](https://heartbleed.com/),
[Log4shell](https://en.wikipedia.org/wiki/Log4Shell), and now
[XZ](https://tukaani.org/xz-backdoor/). The time has come to take
definitive concrete action to resolve the [Open Source sustainability
crisis](https://openpath.chadwhitacre.com/2024/the-open-source-sustainability-crisis/).
This post puts forward a plan for a new entity called [**<b>Software Commons</b>**](https://softwarecommons.com/) that
combines real funding with real accountability, without losing the [hacker
spirit](https://en.wikipedia.org/wiki/Hacker_ethic) that is the heart and
soul of Open Source. It builds on posts I've been publishing for the past
couple months (with the caveat that my thinking was a bit muddled until [earlier this
week](/2024/fair-source-does-not-equal-software-commons/)).

{% include img.html src="first-commit.png" url="https://research.swtch.com/xz-timeline" caption="Russ Cox documents a crucial moment in the XZ attack timeline." %}

We have a huge opportunity. Honestly, it's so big I'm kind of scared to put it
out there, because a _lot_ of things will have to come together for this to
become a reality. Perhaps [the breathtaking sophistication of the XZ
attack](https://research.swtch.com/xz-timeline) and [our sheer dumb luck in
catching it](https://mastodon.social/@AndresFreundTec/112187009607854132) will
prove a shock sufficient to get this ball rolling. We shall see. Certainly
[maintainer burnout](https://twitter.com/feross/status/1774499395721150816) was
[at the
heart](https://robmensching.com/blog/posts/2024/03/30/a-microcosm-of-the-interactions-in-open-source-projects/)
of [the XZ
story](https://twitter.com/thaJeztah/status/1774193037406593218), just as
it is at the heart of my [understanding of the
sustainability crisis](/2024/the-open-source-sustainability-crisis/#what-is-the-sustainability-crisis):

> Open Source has created an economic value vacuum. Our society depends utterly
> on the common pool resource of Open Source software, and this commons is
> severely underprovisioned. How do we know? The real indicator of the Open
> Source sustainability crisis as I define it is **maintainer burnout**.

My [initial
sketch](/2024/the-case-for-a-new-institution/#sketching-an-institution) for
Software Commons was an institution that "brings together producers and
consumers of FOSS under one roof, alongside platform partners, to negotiate an
enduring solution to [the Open Source sustainability
crisis](/2024/the-open-source-sustainability-crisis/)." Let's fill in the
picture more. This is gonna be terrifying or thrilling, I don't
know which yet.

## What We Need, What We Can't Give Up

In designing Software Commons, there are two new realities we need to create,
and one we can't give up. The two things we need are:

- <b>Funding</b>. Security crises are the most painful symptom highlighting our
  chronic underprovisioning of maintainer attention. The answer is to pay
  people to pay attention.

- <b>Accountability</b>. We need assurances that all companies are doing their
  part to fund Open Source, and that the money is being used to actually improve the ecosystem.

The thing we can't give up is the [<b>hacker
spirit</b>](https://en.wikipedia.org/wiki/Hacker_ethic). If the only real
option to make a living in Open Source is to take a job at a megacorp, we will
have [lost](/2024/the-case-for-a-new-institution/#enclosure-of-attention). For
companies, Open Source is about cost savings and brand equity. That's fine. For
humans, Open Source is about autonomy, creativity, and free-spirited
collaboration within a welcoming community. It's wonderful when companies
employ maintainers, _and_ we need to sustain a significant indy maintainer
contingent in the Open Source community. We need to fix the XKCD pic with many
more small blocks, not one big one.

{% include img.html src="lets-fix-it-this-way.webp" url="https://xkcd.com/2347/" caption="Remix of xkcd.com/2347, ofc" %}

So how do we unlock funding and provide accountability without ruining what's
special about Open Source?

## Three Funding Levers

We have basically three levers available to pull to unlock real funding for
Open Source: ROI, taxation, and FOMO.

<b>ROI</b>, in my book, covers a whole huge swath of approaches, from
[Tidelift](https://tidelift.com/) to the [bounty
model](https://en.wikipedia.org/wiki/Open-source_bounty) to
[sponsorware](https://calebporzio.com/sponsorware) to tried-and-true consulting
businesses. I think of these as using capitalist market economics to
_subsidize_ Open Source development. It gets gray, but I put security-focused
efforts such as [OpenSSF](https://openssf.org/) and [security
fellowships](https://rubycentral.org/news/ruby-central-welcomes-new-software-engineer-in-residence-sponsored-by-aws/)
in this bucket as well, because the essence of the ROI lever is _convincing
companies to pay for a future result_. This is what our companies have evolved
to do best, so it can be difficult to think beyond this approach. I'm not
saying ROI-based solutions are bad. I agree with Jacob: let's [celebrate every time
a maintainer gets
paid](https://jacobian.org/2024/feb/16/paying-maintainers-is-good/#any-time-someone-gets-paid-to-write-open-source-its-a-win).
I'm saying the Software Commons opportunity is even bigger.

<b>Taxation</b> is what [Sovereign Tech
Fund](https://www.sovereigntechfund.de/),
[FOSSEPS](https://joinup.ec.europa.eu/collection/fosseps/news/funding-sustainability)
and other Euro-centric [Digital
Commons](https://openfuture.eu/policies-for-the-digital-commons/public-digital-infrastructure-fund/)
efforts are hooking into. I love to see it. More power to 'em. This might be
what we have to resort to in America as well, but there's an option we could
try first.

<b>FOMO</b> is the new, unproven option. You could also call it social proof or
corporate social validation. Companies are herd animals. Look how quickly every company
in the industry became an AI company. Eighteen months ago, we were still
[talking about the
metaverse](https://www.youtube.com/watch?v=egHs3Yc7jUY#t=1m50s). At the
individual level, quirks of our psychology can be [used to influence
behavior](<https://en.wikipedia.org/wiki/Nudge_(book)>)—for good or ill. How
can we work with the grain of &ldquo;corporate psychology&rdquo; (if you will)
to overcome the [tragedy of the Open Source
commons](/2024/the-case-for-a-new-institution/#tragedy-of-the-software-commons)?

FOMO is the tack I've taken with [FOSS
Funders](https://fossfunders.com/), collecting logos of companies that care
enough to participate in Open Source funding and talk about it, in order to
inspire others. After six months, we're at 17 companies. That's not very many.
Maybe we'll hit a tipping point, but to be honest it feels like building a
ladder to the moon.

Can we build a FOMO rocket? If so, we first need to properly frame our
situation.

## The Restaurant Analogy

Open Source is like a restaurant, not a grocery store. At a grocery store (or
pretty much any other store), you pay _first_, then you get the thing. At a
restaurant, you get the thing first, and _then_ you are expected to pay. Yes,
it's possible to [dine and dash](https://en.wikipedia.org/wiki/Dine_and_dash).
But we don't. When we are presented with a tab for a meal we have already
consumed, we pay the tab.

Now picture a meal with a large group of friends. Inevitably, someone forgot
their wallet—or &ldquo;forgot&rdquo; &ldquo;their&rdquo; &ldquo;wallet.&rdquo;
The rest of the group has to pick up their share. Sometimes, one person gets
stuck with the whole tab.

Our companies are sitting around the table. Open Source is the meal we consume
year after year. The opportunity with Software Commons is to split the check.

## Splitting the Check With a Fair Share

The problem is that we need a check to split. We need a tab, a hook, some
entrypoint that provides these properties:

1. a way to meter <b>consumption</b> of Open Source software;
1. a way to weight <b>distribution</b> to maintainers; and
1. a way to actually collect the money, an <b>invoice</b>.

I believe the answer, if we don't want to have to resort to taxation, is for
one or more large developer tools companies to step up and add a line-item to
their invoices, for an opt-out "**Software Commons Open Source Fair Share**." 😳

Now, I work for a developer tools company. Maybe Sentry will be the one to pull
this off, maybe not. Other strong candidates would be cloud providers (AWS,
GCP, Azure) or code hosting platforms (GitHub, GitLab, Bitbucket), maybe even
project management products (Atlassian, GitHub, Linear). Maybe it's one
company, maybe it's a consortium, in which case we would need to reconcile
customers between them to account properly for Fair Share payments.

### A Proof of Concept Invoice

Let's imagine some large developer tools company called Excellent Software,
Inc. that has per seat pricing of $320 per year plus some usage based pricing.
Let's put the Fair Share at a nice even $128 per user per year.

Okay, ready? Here's what a customer's bill might look like:

{% include img.html src="invoice-58306118.webp"
url="invoice-58306118.pdf"
caption="To dream the impossible dream."
%}

For this example I've taken it that user seats are enough of a proxy for Open
Source consumption that we don't need to include usage-based pricing in the
equation. But notice that the number of units for Fair Share is 920 instead of
1000 for the main product. This is because Fair Share is based on previous
year's consumption, so we would look at previous year's seats. The 1000 is for
the customer's future usage of Excellent Software's own product. Restaurant vs.
grocery store.

Now, that dollar amount, $128, is pulled out of thin air. Some napkin math I did a few
years back puts the amount at more like [$2,000 per user per
year](https://gratipay.news/your-company-should-probably-pay-2000-per-person-for-open-source-9205443e209d)—a
lot to plop onto an invoice unannounced. How would we get where we need to be?

## Finding Level Over a Decade

One critical success factor for Fair Share would be almost universal
participation. It's essentially a voluntary tax—and let's be clear, taxation
might in fact be the only long-term answer. If we think we are headed there and
want to try something else first that might lessen or obviate the need for a
tax (and create something really new and interesting in the world), then here's
how I think we could do it:

1. <b>Start with a really, really small amount.</b> Let's say $8 per user per
   year, something just barely above a rounding error. The goal is to make it
   as easy as possible for as many companies as possible to say "yes," so we
   see _at least_ 95% participation across all customers of whichever dev tool
   companies participate. Really, 99% participation should be the goal at this
   stage.

1. <b>Ratchet up year by year.</b> Go from $8 to $16 to $32 to $64 to $128 to
   $256 to $512 to $1024 to $2048. What's that? Nine years. Maybe we start at
   $4, and a decade from now we're up into hypothetical real money.

1. <b>Monitor participation metrics.</b> We would need to balance transparency
   with privacy for the dev tools company, who won't share their total
   user seats. We should have some public metrics, though, probably total
   annual dollar volume, percentage participating at all, and percentage
   participating above, at, and below the set Fair Share amount.

1. <b>Level out in response to reality.</b> This is important: we will need to
   learn over time how knowledge of participation metrics affects
   participation. It feels to me a bit like setting the [fed
   rate](https://en.wikipedia.org/wiki/Federal_funds_rate#Predictions_by_the_market),
   a delicate game with a lot riding on it. If participation dips below 80%, does
   that trigger a collapse? Will we be lucky to see 50% participation even at
   $4/user/year? We can make some educated guesses, but ultimately there's no
   way to fully predict what will happen. We would have to try it and adapt.

1. <b>Communicate constantly.</b> We should have announcements from the stage
   at every Open Source conference with town halls to field questions and
   feedback. It should feel like this is a thing the whole industry is doing
   together and nobody is a sucker for participating—you're a pariah if you
   don't!

1. <b>Account for other contributions.</b> Fair Share should be only one part
   of what companies contribute to Open Source. Some already contribute
   financially. Two other major components are employee time spent on Open
   Source projects, and gifts-in-kind (Fastly donating PyPI bandwidth is the
   best example). We need a robust reporting framework to factor in these
   contributions to the overall picture.

1. <b>Frame the aggregates in terms of
   [GDP](https://data.worldbank.org/indicator/NY.GDP.PCAP.CD)</b>. The best way
   to think about [the value of Open
   Source](https://gratipay.news/open-source-captures-almost-none-of-the-value-it-creates-9015eb7e293e)
   is in terms of the productivity boost it gives to the rest of the economy.
   Today the value of Open Source is anchored at zero. We need to shift that to
   "1% of GDP" or whatever. However, it is very important that we let this
   figure _emerge_ from the interaction of companies voluntarily participating
   in Fair Share, rather than trying to determine the value _a priori_. In
   other words, this would be a 10-year experiment to truly answer the
   question, "What is Open Source worth?"

## Accountability Through Foundations

Where would the money go? It would go to Open Source foundations, weighted in
part by the aggregate language breakdown across the developer tools company's
customer base. Sentry is like half JavaScript projects, for example. Another
part would go to foundations that support the operating systems, databases, and
developer tools that don't show up in a language breakdown.

Each foundation would be responsible for their ecosystem. As budgets grow
year over year, we would expect them to take more and more responsibility:

- Foundations would be able to take on new responsibility for <b>security</b>.
  Right now we depend on products like Socket, Snyk, and Dependabot to bolt
  security onto mostly unregulated package repositories. With real funding, we
  would be able to expect real accountability from foundations for their own
  package repositories, proactively finding and removing [malicious
  packages](https://twitter.com/feross/status/1774153518800404494) such as XZ
  5.6.x. This tees up nicely with [European
  negotations](https://twitter.com/chadwhitacre_/status/1775189599402311990) over
  the [Cyber Resilience
  Act](https://digital-strategy.ec.europa.eu/en/library/cyber-resilience-act),
  and [EO
  14028](https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity) in the U.S.

- Foundations would also be able to make real strides in <b>diversity</b>. The
  uncompensated nature of much current Open Source maintenance work exacerbates
  existing inequalities of opportunity. Ecosystem foundations can partner with
  Outreachy and other specialists to recruit and mentor participants from diverse
  backgrounds.

- Just as companies will want to have their Open Source contributions beyond
  the Fair Share accounted for, we should also ask foundations to transparently
  report their budget <b>allocations</b> in high-level categories such as R&D,
  registry maintenance, events, marketing, outreach, and general administration. Shared norms can
  emerge over time. What is the acceptable ratio of spending on events to
  spending on engineering? Let's find out.

### The Heart of Open Source

I'm gonna come out and say it: the bulk of foundation funds should go to
**individual people who created value by writing Open Source software**. _This_ is
the heart of Open Source: people freely sharing their code with other people in
the community—and yes, companies—who are free to read, run, modify, and
redistribute it for any purpose.

In order to preserve this essential element of Open Source, foundations should
utilize mechanisms such as [Open Collective
expenses](https://docs.opencollective.com/help/expenses-and-getting-paid/submitting-expenses)
and [Liberapay teams](https://liberapay.com/about/teams) to give individuals
real economic autonomy. Jobs are fine. Grants are fine. But individual
contributors are like the restaurant staff who did the actual work of
preparing, serving, and cleaning up the meal we just enjoyed. Asking
maintainers to pitch grants for future projects in order to access funds has it
the wrong way around. They already did the work.

Forward-thinking foundations will find ways to distribute the economic benefits
of Fair Share in keeping with the Open Source spirit of collaborative autonomy.
This is how we will ultimately reach [Open Source
sustainability](/2024/the-open-source-sustainability-crisis/#what-is-open-source-sustainability):

> Open Source sustainability is when any smart, motivated person can produce
> widely adopted Open Source software and get paid fairly without jumping
> through hoops.

## Challenges Aplenty

Getting money into Open Source is a huge challenge. ROI has not gotten us where
we need to be. _Just maybe_ we can build a FOMO rocket—if some developer tools
company steps up as the booster stage. If not FOMO, there's always taxation,
which will be even _more_ work to pull off, though if it is our only option,
even in the United States, we'll likely have to try it.

Getting money to the right people is another huge challenge. It will take years
for foundations to scale up to handle the responsibility. But scale they must,
in order to meet the increasing demands of government and business for
security-hardened Open Source ecosystems.

The hardest challenge will be ensuring that the flickering heart and soul of
Open Source does not dwindle further as pressure mounts. It can never truly
die, of course, as long as two people exist who freely share their code with
each other. But the ideal future—mine, anyway—is a thriving indy Open Source
contingent, stewarded by foundations, coexisting alongside the corporations and
governments of our civilization.

_That_ is the opportunity I see for [Software Commons](https://softwarecommons.com/).

---

_Share the vision? Contribute [on GitHub](https://github.com/softwarecommons/softwarecommons.com/issues)._
