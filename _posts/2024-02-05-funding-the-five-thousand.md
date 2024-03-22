---
title: Funding the Five Thousand
excerpt: We can solve the OSS sustainability crisis for less than $1 billion, priced to cost.
series: funding
---

A number of years ago, I did some napkin math on [the value created by Open
Source](https://gratipay.news/open-source-captures-almost-none-of-the-value-it-creates-9015eb7e293e),
in order to come up with a "[fair
share](https://gratipay.news/your-company-should-probably-pay-2000-per-person-for-open-source-9205443e209d)"
amount that companies should be paying projects. Last month, researchers from Harvard
Business School (HBS) published [a working paper with a similar
scope](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4693148). I have
[serious questions about their
work](http://localhost:4000/2024/questioning-the-value-of-open-source-software/),
but, to be honest, my attempt was also really hand-wavy.

Some of the details of the HBS paper got me thinking, though. They claim,
credibly enough, that there are only a few thousand developers that produce all
of Open Source (forgive me for rounding up to 5,000 for the purpose of a
catchy title 😌). This might feel low, even shockingly low, but hear me out.

Who are the direct consumers of Open Source software? Largely it is other devs,
of whom there are about [28.7
million](https://www.statista.com/statistics/627312/worldwide-developer-population/)
in the world. Therefore, the ratio of consumers to producers of OSS is approximately
5,740 to 1. Now, buried in Meta's [most recent
10-Q](https://d18rn0p25nwr6d.cloudfront.net/CIK-0001326801/00c8dc47-8ba5-46e0-ba88-ed2e959dfd6e.pdf),
I find that they have 71,469 employees (p. 33) serving 3.03 billion monthly
active users (p. 34), which is about 42,400 consumers per producer. This makes
the ratio for OSS seem not unreasonable.

{% include img.html src="./a-few-thousand-people.webp" url="https://twitter.com/FeyNudibranch/status/1754142226270048572" caption="Based on a slide from Kara Sowles Deloss' talk at FOSDEM." %}

If there are only a few thousand maintainers, then solving the sustainability
crisis should be quite a tractable problem to approach from the bottom up (who
are they and what do they need?) rather than the top down (how much do we
estimate Open Source is worth?).

In other words, let's see if we can **price to cost** instead of to value. In
general, that leaves value on the table, but we're not trying to maximize
profit for Open Source as if it were a business. We're trying to make it
[sustainable](/2024/the-open-source-sustainability-crisis/#what-is-open-source-sustainability):

> Open Source sustainability is when any smart, motivated person can produce
> widely adopted Open Source software and get paid fairly without jumping
> through hoops.

At a rough sketch, 5,000 devs times a global average salary for a full-stack
developer of
[US$71,100](https://www.statista.com/statistics/793602/worldwide-developer-survey-average-salaries/)
comes out to $355 million per year. We should do some [more work to pin down
the numbers](https://github.com/chadwhitacre/openpath/issues/20), as there may
be more than 5,000 maintainers, and most likely live in higher-cost locales.
For this post let's say it seems likely we can fund all Open Source maintainers
for **under $1 billion**. That's way less than the trillions that HBS and my
old napkin math would have us anchor on.

## Narrowing Our Focus

Let's focus on developing a system for fairly paying _the actual maintainers we
have today_ without making them jump through hoops. If we develop the system
right, then additional individuals will be able to join in on their own terms
in the future, and we will have achieved sustainability as I've defined it.
Accomplishing this will accelerate adjacent efforts such as improving security
and diversity.

We already have hundreds of millions of dollars flowing into Open Source. The
Linux Foundation alone had projected revenue for 2022 of $243.57M (that's in
their [most recent annual
report](https://project.linuxfoundation.org/hubfs/LF%20Research/2022%20Linux%20Foundation%20Annual%20Report.pdf?hsLang=en),
in a footnote on page 138). However, they are somewhat infamous for [not paying
actual
developers](https://lunduke.substack.com/p/linux-foundation-spends-just-34-of).
Sourcing the funds is a challenge but seems achievable. The other challenge is
directing it to the right people, with transparency and accountability.

{% include img.html src="./fair-pay-no-hoops.webp" url="https://twitter.com/FeyNudibranch/status/1754142226270048572" caption="Based on a slide from Kara Sowles Deloss' talk at FOSDEM." %}

The main source of funds will continue to be companies, with governments and
philanthropies as secondary sources. Whether via foundations or funding
platforms, the main target of funding from a company's point of view should be
projects rather than people. That's what companies depend on and care about.
If a maintainer moves on from a project then the funds should be available to
[incentivize someone else to step up and take over
maintenance](https://www.youtube.com/watch?v=e5FV-AnKPlo).

The problem of getting funds from projects to people is a problem of
governance. This is quite important but should largely be hidden from
companies.

## Next Steps

Here's a GitHub issue for [pinning down the fair share
amount](https://github.com/chadwhitacre/openpath/issues/20) in a robust and
repeatable way. [Andrew Nesbitt](https://nesbitt.io/) from
[Ecosyste.ms](https://ecosyste.ms/) is [in
there](https://github.com/chadwhitacre/openpath/issues/20#issuecomment-1919926941)
so you know it's [going to be
good](https://github.com/chadwhitacre/openpath/issues/20#issuecomment-1921286147).
😁

Here's a GitHub issue for [talking about
governance](https://github.com/chadwhitacre/openpath/issues/14) and whether we
need a new institution or what.

Jump in! 🙂
