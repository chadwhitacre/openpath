---
title: Fizzy Should Be Fair Source
excerpt: The new product from 37signals is source-available, but there's no reason it couldn't be Fair Source.
homepage_rank: 2
---
37signals released a new product last week, a kanban implementation called
[Fizzy](https://www.fizzy.do/). They also [made the code
source-available](https://github.com/basecamp/fizzy) under a new license
they're calling the [O'Saasy License](https://www.fizzy.do/license). In this
post I want to make the case and extend the invitation to 37signals to join
the [Fair Source](https://fair.io/) movement with Fizzy.

## What is Fair Source?

Fair Source is a movement parallel to Open Source that we
[started](https://blog.sentry.io/sentry-is-now-fair-source/) last year. Our
intent is to resolve the conflict between community and corporate interests
that has [plagued Open Source since the
beginning](/2024/the-historical-case-for-fair-source/). We currently have [a
dozen companies on board](https://fair.io/companies/).

As with Open Source, the structure of Fair Source is:

1. **Definition**
1. **Licenses** approved as fitting the definition
1. **Projects** published under an approved license

Here's a chart of parallels:

|  | Open Source | Fair Source |
|:-------|:-------|:-------|
| Dates From | [February 8, 1998](https://en.wikipedia.org/wiki/Open_Source_Initiative) | [August 6, 2024](https://blog.sentry.io/sentry-is-now-fair-source/) |
| Definition | [OSD](https://opensource.org/osd) | [FSD](https://fair.io/about/) |
| Licenses, e.g. | [BSD](https://opensource.org/license/bsd-3-clause), [MIT](https://opensource.org/license/mit), [GPL](https://opensource.org/license/gpl-3-0) | [FSL](https://fsl.software/), [FCL](https://fcl.dev/), [BSL](https://mariadb.com/bsl-faq-mariadb/) |
| Projects, e.g. | [Linux](https://github.com/torvalds/linux), [PostgreSQL](https://github.com/postgres/postgres), [Firefox](https://github.com/mozilla-firefox/firefox) | [Sentry](http://github.com/getsentry/sentry), [Pythagora](https://github.com/Pythagora-io/gpt-pilot), [Typebot](https://github.com/baptisteArno/typebot.io) |

According to the [Fair Source Definition](https://fair.io/about/):

> Fair Source Software (FSS):
>
> 1. is publicly available to read;
> 1. allows use, modification, and redistribution with minimal restrictions to protect the producer’s business model; and
> 1. undergoes delayed Open Source publication (DOSP).

## Fizzy Is Very Close

In his [announcement
post](https://world.hey.com/dhh/fizzy-is-our-fun-modern-take-on-kanban-and-we-made-it-open-source-54ac41b6),
DHH describes their new license as "basically the
do-whatever-you-want-just-don't-sue MIT License, but with a carve-out that
reserves the commercialization rights to run Fizzy as SaaS for us as the
creators." That clearly fits the second point of the FSD.

Later in the post he says, "I'm also just a huge fan of being able to [View
Source](https://signalvnoise.com/svn3/paying-tribute-to-the-web-with-view-source/)."
So clearly we're philosophically aligned on point 1, as well.

The only missing piece for the O'Saasy License to qualify as Fair Source is point 3,
[delayed Open Source
publication](https://opensource.org/delayed-open-source-publication):

> Delayed Open Source Publication (DOSP) is the practice of distributing or
> publicly deploying software under a proprietary license at first, then
> subsequently and in a planned fashion publishing that software’s source code
> under an Open Source license.

I've [proposed a small change to the O'Saasy
License](https://github.com/basecamp/fizzy/compare) that would make it fit the
Fair Source Definition.

## Why DOSP Matters

Why does DOSP matter enough to include in the definition of Fair Source?
Because it offers two key protections to the community:

1. **Protection against enshittification**. If a company loses its way with a
   product, the community or another company can pick up with a version prior
   to when the decay set in, and carry it forward in a different direction.
1. **Protection against vendor disappearance**. If the original product owner
   goes fully out of business, it's guaranteed that others can carry it forward
   unencumbered.

David himself identifies the problems that DOSP solves:

> Even products that start out with great promise and simplicity tend to
> accumulate cruft and complexity over time. A healthy ecosystem needs a
> recurring cycle of renewal.
>
> [...]
>
> In an age where SaaS companies come and go, pivot one way or the other, I
> think it's a great reassurance that the source code is freely available[.]

Having source available provides only limited reassurance, however. As the
O'Saasy License stands today, every company would be responsible for hosting
its own deployment of the software, in the event an O’Saasy-licensed product is
abandoned or degraded. Especially for a product like Fizzy that is marketed
toward non-technical users, the current license provides no realistic path
forward if upstream maintenance stops. Non-technical customers cannot be
expected to self-host, and under the current license, nobody can do it for
them.

With DOSP, there is the truly "great" reassurance that another organization
(whether a commercial company or a non-profit foundation) could step in to
carry the product forward for the sustainable benefit of all users.


## An Invitation

Open Source is about community—companies and individuals giving up some measure
of control in exchange for participation in greater value created by all. Fair
Source is an opportunity for company founders that wish to share their core
software products without jeopardizing their core business models, to create a
new movement together based on shared values. We have a dozen folks
on board already. We would welcome 37signals to join us and [make Fizzy Fair
Source](https://github.com/basecamp/fizzy/pull/2039).
