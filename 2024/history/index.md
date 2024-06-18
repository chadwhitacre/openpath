---
title: The Historical Case for Fair Source
excerpt: "First there was Free Software, then Open Source. How did we get to Fair Source?"
noindex: true
---

We're creating a new brand of software sharing called [Fair
Source](https://fair.io/). It relates historically to Open Source (started in 1998) and Free Software (1983). In some fashion, software sharing goes back
to the dawn of computing. What is Fair Source? Why do we need it now?

Fair Source is software that is safe for companies to share and developers to
use. We need it because Open Source, historically, has been a tenuous alliance
of commercial and community interests, and this alliance is unraveling. The key
to Fair Source is delayed Open Source publication, also known as
eventual Open Source.

## Safe for Developers and Companies Alike

One lens through which to view Fair Source is **safety**. Fair Source software is:

1. safe for <b>developers</b> to read, run, modify, and contribute back to
   without undue compliance risk; and
1. safe for <b>companies</b> to adopt for their core software products without
   undue risk to their business.

At Sentry we have been applying what we are now calling Fair Source principles
for 5+ years, and we have clearly been able to achieve a balance between these
two.

1. Fair Source is safe for <b>developers</b>: we have [10,000+ organizations
   using self-hosted Sentry](/2024/widespread-use-of-a-fair-source-product/)
   under [FSL](https://fsl.software/), the flagship license of Fair Source.
1. Fair Source is safe for <b>companies</b>: we recently announced
   [100,000 cloud customers and $100 million
   ARR](https://blog.sentry.io/building-for-the-fortune-500-000/).

{% include img.html src="not-bad.jpg" caption='Considered "not bad" by 4M developers. Yuk yuk.' url="https://x.com/virtualmilin/status/1790867028905271647" %}

Sentry is an existence proof of the viability of Fair Source. We've taken it
from zero to one. Our goal now is to help other companies open up their
closed-source products. FSL has allowed
[AnswerOverflow](https://www.answeroverflow.com/),
[Codecrafters](https://codecrafters.io/), [Convex](https://www.convex.dev/),
[GitButler](https://gitbutler.com/), and
[PowerSync](https://www.powersync.com/) to do just that. But FSL is not right
for every company. We want to recognize and encourage alternative approaches
that also combine safety for developers with safety for companies.

But why make it a new brand, Fair Source? Why is Free and Open Source Software
(FOSS) not sufficient? FOSS is safe for developers, surely. Open Source is
known and loved by practically the whole developer community. Is it really unsafe for
companies sharing their core products?

### The Limitations of FOSS for Core Products

Kubernetes is Open Source, but Google Search is not. React is Open Source, but
Facebook News Feed is not. Linux is Open Source, but Amazon Web Services is
not. Open Source has carried the day for shared infrastructure, but has barely
made any inroads into end-user products. Why?

Open Source licenses, [by definition](https://opensource.org/osd), forego the
right to exclusive monetization that forms the basis of any viable business
model. Non-compete licenses are not Open Source licenses, and Open Source
licenses are not non-compete licenses. Companies that try to Open Source
their core products habitually come up against this reality. In the ugliest
cases, it leads to [relicensing rug pulls](/2024/relicensing-and-rug-pulls/).
Instead, we have evolved many solutions for [subsidizing Open Source
projects](/2024/the-open-source-sustainability-crisis/#whats-wrong-with-hoops)
through adjacent scarcities, but Open Source itself is [not a business
model](https://dirkriehle.com/2008/05/18/open-source-is-a-business-strategy-not-a-business-model/).

While companies cannot maintain control of how their core products are used and
still be Open Source, they _can_ control the roadmap. Historically, this plays
out in two very different understandings of Open Source: _community_ and
_commercial_. These have formed an uneasy alliance since the beginning. Fair
Source reinforces the community view of Open Source, by creating a new brand
for commercial entities sharing their core products. In the [words of Matt
Wilson](https://x.com/_msw_/status/1792710296957841408), early Red Hat employee
and long-time FOSS advocate:

> Fair Source provides as many of the benefits of Open Source that its
> producers are comfortable giving, while reserving and asserting a minimal set
> of exclusive rights to help achieve a sustainable business model.

How do community and commercial Open Source differ?

## The Great Governance Divide

Dirk Riehle, professor of Open Source software at University of Erlangen,
published an article in 2009 entitled, "[The Single-Vendor Commercial Open
Source Business
Model](https://dirkriehle.com/publications/2009-selected/the-commercial-open-source-business-model/)."
He distinguished [_commercial_ and
_community_ projects](https://dirkriehle.com/publications/2009-selected/the-commercial-open-source-business-model/#section3)
based on "their different control and ownership structures":

> - Community open source is open source that is controlled by a community of
>   stakeholders;
> - Single-vendor commercial open source is controlled by exactly one
>   stakeholder with the purpose of commercially exploiting it.

Notable examples of the latter in 2009 were MySQL, SugarCRM, Jaspersoft, and
Alfresco. There are many more examples today, including Sentry and other FSL
adopters.

Already a year earlier, in 2008, Dirk had drawn attention to the confusion and
tensions that can arise from housing both models under one Open Source tent.
In "[The Perils of Going from Community to Commercial Open
Source](https://dirkriehle.com/2008/11/04/the-perils-of-going-from-community-to-commercial-open-source/),"
Dirk discussed the case of the now-forgotten TWiki. "[U]sing his root access
privileges, Peter Thoeny changed twiki.org, the main project website, to
implement a new governance model. [...] A few days later, the core developers
left the project and created a fork."

{% include img.html src="twiki.webp" caption="" url="https://twiki.org/" %}

Change the name to HashiCorp or Redis, and we have the same controversy over
[relicensing and rug
pulls](https://openpath.chadwhitacre.com/2024/relicensing-and-rug-pulls/) today
as 16 years ago. An ideal outcome with Fair Source is that fewer companies
would rug-pull, because more companies would start out Fair Source to begin
with. Developers would clearly know up front [what kind of
community](https://dirkriehle.com/2021/01/23/two-types-of-open-source-communities/)
they're getting into.

### The Gradual Rejection of COSS

The "single-vendor" article maintains a tone of academic neutrality. The
"perils" post leaks a little more negative sentiment: "community open source is
a temptation for startups to make a buck[.]" Dirk in that era seems guardedly
suspicious of commercial Open Source (COSS) but he does not outright reject the
concept. By his account, [SugarCRM coined the term in
2004](https://dirkriehle.com/2009/06/19/commercial-open-source-the-naming-confusion-remains/).
It is [still used today](https://www.coss.community/), most often in referrence
to [open
core](https://alampitt.typepad.com/lampitt_or_leave_it/2009/03/opencore-licensing-the-new-standard-in-commercial-software-business-models.html)
software, most often by [Joseph Jacks](https://x.com/josephjacks_) and [OSS
Capital](https://oss.capital/) portfolio companies. But trust has dwindled.

"[What's So Bad About the Open Core
Model?](https://dirkriehle.com/2019/11/11/whats-so-bad-about-the-open-core-model/)"
Dirk asked in 2019. "I suspect that a big part of the mistrust against the
open core model is directed at the single vendor case, as users suspect that
over time, the core will be turned into useless crippleware, as the open source
strategy to drive market adoption has run its course for the vendor."

By 2020, Dirk had grown comfortable shifting from neutrality to [value
judgement](https://dirkriehle.com/2020/03/12/please-help-keep-our-language-precise-single-vendor-open-source-is-neo-proprietary-source-not-closed-source/) (emphasis his):

> Community open source is the proper open source, open both in license and
> process. If you want to chide single-vendor open source as “not being proper
> community open source”, calling it closed source will only confuse.
>
> I offer <b>neo-proprietary</b> as a better term. Neo-proprietary captures the
> dominance and control of a proprietor in both the traditional closed source
> and the single-vendor open source case without confusing the two.

In 2023, he observed efforts to outright [exclude commercial Open Source from the Open
Source
Definition (OSD)](https://dirkriehle.com/publications/2023-selected/the-future-of-the-open-source-definition/):

> Both the closed governance and the copyright assignment are bothersome, even
> infuriating, to true open source enthusiasts. Vendor-owned open source has
> been called “faux-pen source software” (fake open-source software) or simply
> just a fraud.
>
> As a consequence, many such enthusiasts have asked that open source
> governance be added to the open source definition. Not just the artifact, but
> also the development process should be open, before some software should be
> called open-source software, and nobody should centralize the rights in the
> software in one controlled place."

Dirk is not alone. Thierry Carrez, vice-chair of the Open Source Initiative
(OSI), recently [took up Dirk's
offer](https://opensource.net/why-single-vendor-is-the-new-proprietary/) of a
term with which "to chide single-vendor open source as 'not being proper
community open source'":

> Beware of single-vendor Open Source software, it’s a proprietary development
> model that happens to temporarily use Open Source licensing. So yes, let’s
> all agree: Single vendor is the new proprietary.

Where did single-vendor come from? When did this tension arise?

### The Divide Was There All Along

[Mozilla](https://en.wikipedia.org/wiki/Mozilla) was the first Open Source
project. Competing with Microsoft and losing badly, Jamie Zawinski (jwz) and
other Free Software advocates at Netscape convinced CEO Jim Barksdale and his
management team to try a desperate gambit: release the source code for the
Navigator web browser in order to attract a global workforce of volunteer
developers. Product lead Michael Toy [said at the
time](https://www.youtube.com/watch?v=4Q7FTjhvZ7Y#t=4m08s), "We're probably
doomed. We're probably gonna fail. Microsoft is probably gonna squish us like a
bug anyway." Opening up Navigator was a marketing and product development Hail
Mary that Netscape agreed to out of desperation.

{% include img.html src="code_rush.webp" caption="There's an hour-long documentary about Netscape called <i>Code Rush</i>." url="https://www.youtube.com/watch?v=4Q7FTjhvZ7Y" %}

Free Software advocates outside the company, including Eric Raymond (ESR) and
Bruce Perens, eagerly jumped in to help, but the parties had different motivations.
Netscape was making a last-ditch attempt to save the business. ESR,
jwz & co. were capitalizing on an opportunity to advance the community-minded Free Software
movement. Along the way they realized that "Free Software" confused people, so they
[rebranded](https://opensource.com/article/18/2/coining-term-open-source-software)
to "Open Source Software." It worked. The story caught fire, and Eric and Bruce
quickly formed the [Open Source Initiative](https://opensource.org/) (OSI) to
steward the new brand.

Consider this, though: Netscape published Mozilla under the [Netscape Public
License](https://en.wikipedia.org/wiki/Netscape_Public_License), yet this
license was either never submitted to OSI or rejected. Why might
OSI reject the license of its flagship first project?

Richard Stallman (RMS) [documented the
reasons](https://www.gnu.org/philosophy/netscape-npl.html). Richard had founded
the Free Software movement in 1983. He did _not_ participate in the
Navigator release, and he [carefully
distinguished](https://www.gnu.org/philosophy/open-source-misses-the-point.html)
between Free Software and Open Source. RMS [pointed
out](https://www.gnu.org/philosophy/netscape-npl.html) that NPL-1.0 subtly
privileges Netscape:

> The first problem I noticed in the NPL was that it does not give Netscape and
> the rest of us equal rights, as the GNU GPL does. Under the NPL, we can use
> Netscape's code only as specified in the NPL, but Netscape can use our
> changes in any way at all—even in proprietary licensed versions of the
> software.
>
> [...]
>
> It denies the idea of cooperation among equals that our community rests on,
> and says that working on a free program means contributing to a proprietary
> software product.

Here is the relevant text from [NPL-1.0](https://spdx.org/licenses/NPL-1.0.html):

> V.2. Other Products. Netscape may include Covered Code in products other
> than the Netscape's Branded Code which are released by Netscape during the
> two (2) years following the release date of the Original Code, without such
> additional products becoming subject to the terms of this License, and may
> license such additional products on different terms from those contained in
> this License.
>
> V.3. Alternative Licensing. Netscape may license the Source Code of
> Netscape's Branded Code, including Modifications incorporated therein,
> without such additional products becoming subject to the terms of this
> License, and may license such additional products on different terms from
> those contained in this License.

{% include img.html src="navigator.webp" caption="Source: Wikipedia (modified)" url="https://en.wikipedia.org/wiki/Netscape_Navigator#Decline" %}

It wasn't until [late 2001](https://wiki.mozilla.org/Timeline), after the dot-com
bubble had burst and Netscape had lost all relevance, that the community could
convince then-owner AOL Time Warner to [relicense
Mozilla](https://www-archive.mozilla.org/mpl/relicensing-faq) under a proper,
OSI-approved license.

**Open Source was born precisely as a tenuous alliance of
commercial and community interests**. The first Open Source project, Mozilla,
was a single-vendor commercial Open Source project. Dirk, Thierry, and others
who wish to chide, must chide Netscape. If single-vendor is to be written out
of the OSD, then the alliance seems to be at an end.

## Eventual Open Source, Better Than Closed

One defining element of Fair Source is [delayed Open Source
publication](https://opensource.org/dosp). Karl Fogel
and coauthors [defined the term in a
whitepaper](https://opensource.org/delayed-open-source-publication) for OSI
(underwritten by Sentry):

> Delayed Open Source Publication (DOSP) is the practice of distributing or
> publicly deploying software under a proprietary license at first, then
> subsequently and in a planned fashion publishing that software’s source code
> under an Open Source license.

Also called "[eventual Open
Source](https://github.com/ftrotter/OSE/blob/a360875170b4a9818e3a4691beced81d7d5f13a8/OSELicense.asciidoc),"
the approach is gaining popularity through the
[BUSL](https://spdx.org/licenses/BUSL-1.1) and Sentry's
[FSL](https://fsl.software/). Some, such as Thierry, have been
[dismissive](https://opensource.net/why-single-vendor-is-the-new-proprietary/):

> Imagine a world where you have to run a buggy two-year-old version with known
> vulnerabilities because that’s the Open Source one.

This is a strawman argument. The expectation is that you run today's version
today. As mentioned above, [10,000+ self-hosted Sentry
users](https://openpath.chadwhitacre.com/2024/widespread-use-of-a-fair-source-product/)
do just that. Then what's the point of the eventual conversion? Eric Raymond [recognized the
value](https://x.com/esrtweet/status/1790870518456861153) of DOSP when he said:

> It's the guarantee of a timed flip to full open source that puts a bound on
> the business and legal risk. That's very clever.

In other words, delayed Open Source mitigates against vendor lock-in and
platform decay. If push comes to shove, another party—community or
commercial—can fork an older version of the software and take it in a different
direction. Fair Source offers real benefits, and meaningfully
protects both users and producers against worst-case scenarios.

### Eventual Open Source Was There All Along

The DOSP paper authors credit GhostScript as the first to go this route, "around
1998" (p. 6). The idea is on record even earlier, from Richard Stallman
himself, in of all things his March, 1998 [response to the release of the
Netscape Navigator source
code](https://www.gnu.org/philosophy/netscape-npl.html)(!). After observing the
asymmetry in Netscape's license that effectively made Mozilla a single-vendor
commercial project, he offered this (emphasis mine):

> One proposed solution for this asymmetry is to **put a time limit on
> it—perhaps three or five years**. <b>That would be a big improvement</b>,
> because the time limit would deny the problematical deeper message.

What's more, if I'm reading the [NPL](https://spdx.org/licenses/NPL-1.0.html)
right, they _do_ have a time-box built in: "during the two (2) years following
the release date of the Original Code[.]" Coincidentally, two years is what we
settled on for [FSL](https://fsl.software/), tightening from the four-year
default in [BUSL](https://spdx.org/licenses/BUSL-1.1).

### Early Feedback Is Guardedly Positive

Others in the community are seeing the potential for Fair Source to resolve the
tension between community and commercial interests that has characterized Open
Source since the beginning.

- I mentioned [<b>Matt
  Wilson</b>'s](https://x.com/_msw_/status/1792710296957841408) and [<b>Eric
  Raymond</b>'s](https://x.com/esrtweet/status/1790870518456861153) feedback
  above.
- <b>Adam Jacob</b>, co-founder of Chef and founder of System Initiative,
  gave the [call to adventure](https://x.com/adamhjk/status/1687113805237714944)
  a year ago that began this story arc, and he recently
  [agreed](https://x.com/adamhjk/status/1790105587533099438), "I think 'Fair
  Source' is a good enough name."
- <b>Dan Brown</b>, maintainer of [Open Source Confusion
  Cases](https://github.com/ssddanbrown/Open-Source-Confusion-Cases/), has
  started [recommending Fair
  Source](https://x.com/ssddanbrown/status/1799801803871322607) as an alternative
  term.
- <b>Dirk Riehle</b> himself recently
  [noticed](https://dirkriehle.com/2024/02/07/what-about-skipping-the-open-source-part-in-commercial-open-source/)
  FSL adopter GitButler:
  > It will be interesting to see whether GitButler can build a [Fair Source]
  > community like commercial open source firms were able to build an open source
  > community around their software."

My hope is that over time even strident voices such as <b>Thierry Carrez</b>
can accept Fair Source as a good-faith attempt to resolve the tension in which
Open Source was born, "[to go beyond the rant & provide an
alternative](https://x.com/tcarrez/status/1764220293319393559)."

## Help Shape Fair Source

Dirk asked in 2021, "[What’s next after
'source-available'?](https://dirkriehle.com/2021/10/05/whats-next-after-source-available/)"
Our answer is [Fair Source](https://fair.io/). In this post I've presented the
historical case for the creation of Fair Source and for its key feature,
eventual Open Source. There's much more to define and design. [Join us on
GitHub](https://github.com/fairsource/fair.io/issues/14) to participate. You
can also [subscribe there](https://github.com/fairsource/fair.io/issues/14) or
[on X](https://x.com/fairsrc) for updates.

The net effect of Fair Source can be more closed-source code released to the
world, and less pressure to change the Open Source Definition in one direction
or another. Our tenuous alliance of commercial and community interests has
gotten us where we are today—which is really far. Let's see it as a sign of
maturity and success that we're now ready for community projects and
single-vendor projects to go even further in parallel: [Open
Source](https://opensource.org/) _and_ [Fair Source](https://fair.io/).
