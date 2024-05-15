---
title: Widespread Use of a Fair Source Product
excerpt: Self-hosted Sentry is a clear existence proof of the viability of the Fair Source model.
noindex: true
---

We aim to [launch Fair Source](https://github.com/fairsource/fair.io/issues/14)
in July, just shy of a year since Adam Jacob's [call for a new
term](https://twitter.com/adamhjk/status/1687113805237714944) after our
[Codecov misstep](https://news.ycombinator.com/item?id=36971490).  Yesterday,
we hit ESR's radar. His [reaction was
negative](https://twitter.com/esrtweet/status/1790350881424056680): "No
corporate legal department will *ever* sign off on letting a 'fair source'
project be used in house[.]" I
[said](https://twitter.com/chadwhitacre_/status/1790382981028159807) that
Sentry seems a clear existence proof to the contrary. Eric [inquired
further](https://twitter.com/esrtweet/status/1790680602053579084):

> I find your claim about widespread "fair source" use surprising and in fact
> barely even believable.
>
> 1. There seems to be an inconsistency between the claim that "fair source" is
>    already in wide use and the fact that some people are only now getting
>    around to naming and formulating the concept and putting up a website
>    about it. 
>
> 2. If it's nevertheless true, I'm wondering why no word of such an important
>    development had never [sic] reached me before.
>
> Color me skeptical but willing to learn.

In this post I aim to back up my claim. I'll explain what self-hosted Sentry
is, then unpack my claim that we have 10,000+ installations out in the wild.
I'll end by addressing Eric's additional points.


## Self-hosted Sentry

[Sentry](https://sentry.io/welcome/) is a software product for monitoring
errors and performance issues in software products. David Cramer started the
project 16 years ago as [an unlicensed 71-line Django
plugin](https://github.com/getsentry/sentry/commit/3c2e87573d3bd16f61cf08fece0638cc47a4fc22).
Today 300+ people produce Sentry in a corporation with a SaaS hosting business
serving 90,000+ customers. We get occassional code contributions from non-staff
(much more so in our SDKs, which are MIT-licensed), but by and large
Sentry-the-product has [always been produced](https://blog.sentry.io/nows-the-time-for-delayed-open-source/#sentrys-history-with-delayed-open-source) by Sentry-the-company.

{% include img.html src="Percentage_of_Commits_by_Era_and_Relation.webp" caption="Sentry has always been produced by Sentry" url="https://blog.sentry.io/nows-the-time-for-delayed-open-source/#sentrys-history-with-delayed-open-source" %}

In addition to SaaS, we offer [self-hosted
Sentry](https://github.com/getsentry/self-hosted), a Docker Compose packaging
of the [core Django monolith](https://github.com/getsentry/sentry) and other
services ([too many!](https://github.com/getsentry/team-ospo/issues/232)). It
is suitable out of the box for low-volume and proof-of-concept deployments, and
also serves as a blueprint for those who want to operate Sentry at scale. The
feature set is the same between self-hosted and SaaS. In fact, sufficiently
motivated self-hosted users can enable bleeding edge features before they're
enabled in SaaS. We do not monetize self-hosted Sentry. 

Since 2019, we have licensed Sentry using what the Open Source Initiative (OSI)
recently called "[delayed Open Source
publication](https://blog.opensource.org/a-historic-view-of-the-practice-to-delay-releasing-open-source-software-osis-report/)."
We [used the Business Source
License](https://blog.sentry.io/relicensing-sentry/) (BSL or BUSL) until 2023,
at which point we [introduced the Functional Source
License](https://blog.sentry.io/introducing-the-functional-source-license-freedom-without-free-riding/)
(FSL). Both our BSL and the FSL count for what we now classify as "Fair
Source." We have almost five years of history with the practice.

## Receipts (Almost)

Sentry has a dashboard on one of our internal BI platforms that we use to
monitor self-hosted. The data comes from our [opt-in
beacon](https://develop.sentry.dev/self-hosted/#self-hosted-beacon). Of course,
many users do not opt in, or have network configurations that block beacon
traffic even if sent. (A few months ago we noticed a precipitous decline over
the course of an hour. Nearly 20% of instances stopped reporting.
Investigation showed patterns in admin emails of dropped instances that lead us
to hypothesize that China blocked us at the Great Firewall.) The self-hosted
instances visible to us are an unknowable fraction of the overall install base.

{% include img.html src="dashboard.webp" caption="No, you can't actually see the dashboard." %}

We show <b>18,751</b> self-hosted instances in the wild running versions published
in the past five years. Not all of these are active instances, however, and we
had [a bug until recently](https://github.com/getsentry/sentry/pull/62441) that
prevents us from filtering out inactive instances from versions older than five
months. We currently show <b>3,950</b> active instances running versions published
in the past five months. These two bounds, along with the recognition that many
instances do not report their existence to us, led me to [claim **<b>10,000+
instances</b>** as a conservative
estimate](https://twitter.com/chadwhitacre_/status/1790382981028159807).

As to my claim that users range from hobbyists to FAANG companies, I'm not
going to speak further. I'm content to let those doubt who will.

## Formulating the Concept

Besides doubting my claim about the widespread adoption of Sentry under
licenses that we now call Fair Source, Eric makes another point worth
addressing.

> There seems to be an inconsistency between the claim that “fair source” is
> already in wide use and the fact that some people are only now getting around
> to naming and formulating the concept and putting up a website about it.

Let's be careful. I don't claim that "fair source" is already in wide use. I do
claim more modestly that _Sentry_ is already in wide use under licenses that we
now call Fair Source. This is sufficient to disprove Eric's original statement,
that "No corporate legal department will ever sign off on letting a ‘fair
source’ project be used in house[.]" Thousands have.

That said, the roots of Fair Source are not as shallow as they might seem.
[Fair Code](https://web.archive.org/web/20240508232939/https://faircode.io/)
was a similar initiative driven by [n8n](https://n8n.io/) with a [similar
origin story](https://github.com/n8n-io/n8n/issues/40) that [kicked off five
years
ago](https://github.com/faircode-io/faircode/commit/fd15361f8af9c19910f773768f632a1713f3e89b).
They [agree in principle](https://github.com/fairsource/fair.io/issues/10) to
merge into Fair Source once we're further along. The reason they chose Fair
Code in the first place is because Fair Source was already staked out for the
name of a particular license. That license has little traction (it's not listed
in SPDX) and the steward has moved on, making way for us to revive the term for
a wider conversation about what lies between closed source and Open Source.

What's more, OSI executive director Stefano Maffulli is on record about "[Open
Source’s lost
decade](https://opensource.net/lost-decade-crucial-lessons-for-ai/)":

> Over the last decade, Open Source hasn’t widely addressed the challenges of
> mobile and cloud computing. That means we don’t have an easy way to judge
> what Open Source means in those contexts.

Maybe that was OSI's job. Maybe they would have been able to forestall the
proliferation of non-compete licenses—SSPL, RSAL, EL, Commons Clause, BSL, now
FSL. Now OSI is trying to [catch
up](https://opensource.org/blog/practical-open-source-2024-submit-your-proposal),
but the [pot is
poisoned](https://opensource.net/why-single-vendor-is-the-new-proprietary/) for
a company like Sentry. Open Source, like Free Software, takes user freedom as
its sole guiding value. [We value developer
sustainability](https://blog.sentry.io/sentrys-open-source-values/) just as
much. As consumers of Open Source this means [we pay for
it](https://blog.sentry.io/we-just-gave-500-000-dollars-to-open-source-maintainers/).
As producers of software—yes, we are "now getting around to naming and
formulating the concept and putting up a website about it." The reason it took
Sentry so long is because we wanted to make this work inside of Open Source.
Like n8n before us, we have now
[ceded](https://blog.sentry.io/lets-talk-about-open-source/).

Agree or disagree with the formulation of Fair Source, it's not tenable to
argue against it _a priori_. The proof of the pudding is in the eating, and
10,000+ are happily doing so.
