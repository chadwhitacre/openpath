---
title: Questioning “The Value of Open Source Software”
excerpt: The new HBS working paper seems fundamentally flawed to me, though it has some helpful parts.
---

<div class="update"><span>update</span> I posted some <a
href="https://discourse.sustainoss.org/t/sustain-together-summary-january-26th/1465/5">further
thoughts on the Sustain forum</a>, including an email I sent to the
authors.</div>

Harvard Business School (HBS) recently published a working paper titled, "[The
Value of Open Source
Software](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4693148),"
authored by postdoc [Manuel
Hoffmann](https://www.linkedin.com/in/manuel-hoffmann-b4798773/), assistant
professor [Frank Nagle](https://www.linkedin.com/in/frank-nagle/), and grad
student [Yanuo Zhou](https://www.linkedin.com/in/yanuo-zhou/). The Linux
Foundation sponsored the research, which builds on the [Census
II](https://www.linuxfoundation.org/research/census-ii-of-free-and-open-source-software-application-libraries)
project.

{% include img.html src="./paper.webp" url="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4693148" orientation="portrait" %}

Here is [Frank's
tl;dr](https://www.linkedin.com/feed/update/urn:li:activity:7153860222812372993/):

> If OSS didn't exist, companies would spend 3.5 times more on software than
> they currently do. More precisely, our results show a cost of $4.15 billion
> if society had to replace these packages once (e.g., OSS still exists, but
> all of the most widely used packages were deleted and had to be rewritten),
> but a cost of $8.8 trillion if each company that uses these packages had to
> rewrite every package it uses (e.g., if OSS didn't exist at all).

Okay, so that's three headline results:

1. If OSS didn't exist, companies would spend 3.5 times more on software than
   they currently do.

2. It would cost $4.15 billion to rebuild all the OSS that currently existed
   at the end of 2020 (when the snapshot behind Census II was taken, if I have
   it right).

3. It would cost $8.8 trillion if each company separately rebuilt all
   the OSS it was using at the end of 2020.

The first result is derived from the third. The working paper estimates that actual
software spending was $3.4 trillion in 2020, and 3.4 + 8.8 = 12.2 trillion,
which is 3.5x the 3.4 actual (page 18). The third result is derived from the
second, multiplying an estimate of the cost to rebuild each piece of OSS
software by an estimate of the number of companies using each piece (p. 13). So
the flow of the argument is, given an end-of-2020 snapshot:

1. It would cost $4.15 billion to rebuild all OSS.

2. It would cost $8.8 trillion in aggregate for each company to rebuild all of
   the OSS they use.

3. Companies spent $3.4 trillion for all software they use, besides what they
   got for free from OSS.

4. Therefore, if OSS didn't exist, companies would have to have spent 3.5 times
   more on software than they in fact did.

Now, I did find some interesting things in this working paper. The first step
in the argument (i.e., the second headline result) seems fine as far as it
goes, as it is based on [COCOMO II](https://en.wikipedia.org/wiki/COCOMO),
which seems pretty well-established (though I'm sure it is messy under the
hood). I learned some basic economics language ([stock and
flow](https://en.wikipedia.org/wiki/Stock_and_flow) variables). I learned about
[GHTorrent](https://gousios.org/bibliography/G13.html) and
[BuiltWith](https://builtwith.com/). The appendix on the goods market analysis
of the value of Open Source seems helpful. The data on the number of
programmers responsible for producing the bulk of OSS (p. 20) is quite
intriguing. I'm going to have to revisit my assumption in [my previous
post](https://openpath.chadwhitacre.com/2024/the-open-source-sustainability-crisis/)
that "[t]he sustainable Open Source community taken as a whole will be roughly
the same size" as a big tech company, i.e., 10,000 to 100,000 engineers. It
seems likely to be off by an order of magnitude. I aim to do that in [a future
post](https://github.com/chadwhitacre/openpath/issues/20).

That said, **I do not accept headline result 1 ("companies would spend 3.5 times
more")**, because I think result 3 ("it would cost $8.8 trillion") is irrelevant.

## A Critical Flaw?

Step 2 in the argument seems critically flawed to me. If so, result 3 is
misleading, and result 1 is false. The options for acquiring software are buy,
borrow, or build. Borrow means OSS. If we take that off the table, companies
still have two options: buy or build. The build option is what the $8.8
trillion estimates. The working paper calls this the "labor market valuation
approach."

> The thought experiment is that we live in a world where OSS does not exist
> and has to be _recreated at each firm_ that uses a given piece of OSS. (p. 12, emphasis added)

This is the main methodology in the working paper, and the source of the
"3.5x" headline result.

But what about the buy option? Surely if OSS ceased to exist, companies would
step in to fill the gap. The authors do explore this option. They call it the
"goods market valuation approach."

> With the goods market approach, the thought experiment is still that we live
> in a world where OSS does not exist, but it has to be _recreated via one firm_
> that then charges a price for a good that is currently free. (p. 38, emphasis added)

This seems to me a much more fruitful comparison than the labor market
approach, because it is much closer to what we would expect to actually happen
in an alternate timeline without OSS.

Compared to the result of the labor market approach, $8.8 trillion, the result
of the goods market approach is **four orders of magnitude lower, at $177
million** (p. 37). If I'm reading it right, using this for step 2 (result 3)
weakens the argument to the point of failure, and result 1 essentially
disappears: 3.4 + 0.000177 = $3.400177 trillion. If so, **companies would spend
1.00005 times more** on software than they currently do, if OSS didn't exist.

The working paper includes the goods market approach in an appendix, and does
not report the result in its abstract. I propose either making a better case
for using the labor market approach, or revising the working paper to make the
goods market approach primary (either drop the labor market approach or move it
to an appendix). As it stands, the use of the labor market approach over the
goods market approach as the primary methodology of this research seems to me
to render results 1 and 3 valueless.

## Also, What's Up with Golang?

Something else that jumped out at me in the working paper is the decision to
include Go:

> Finally, for some analyses we dig deeper and show the top 5 programming
> languages (as classified by GitHub, 2022 for the year 2020; the year our data
> is from). The top 5 programming languages contain C (including C# and C++),
> Java, JavaScript, Python, and Typescript. We also add Go to this list of top
> languages since it is an increasingly widely used language in OSS. (pp.
> 11-12)

Looking at [the GitHub data
referenced](https://octoverse.github.com/2022/top-programming-languages),
Golang is not even in the top 10.

{% include img.html src="./languages.webp" url="https://octoverse.github.com/2022/top-programming-languages" %}

Why was Go included when other languages weren't? The reason given, "it is an
increasingly widely used language in OSS," is not satisfying. There are other
questions to consider, such as why C# and C++ are folded into C, but Typescript
is not folded into JavaScript. The Go discrepancy jumps out in particular
because including it has a dramatically outsized impact in the demand-side
analysis.

{% include img.html src="./figure-1.webp" %}

I don't find in the working paper that there is a direct connection between the
headline results and the choice of languages to include for the deeper analyses
as in Figure 1. Neither do I find any links to open data behind the working
paper so I can investigate for myself.

## Conclusion

Years ago, I likewise attempted to estimate the [value of Open Source
software](https://gratipay.news/open-source-captures-almost-none-of-the-value-it-creates-9015eb7e293e),
which I've since used to
[inform](https://gratipay.news/your-company-should-probably-pay-2000-per-person-for-open-source-9205443e209d)
my
[attempts](https://blog.sentry.io/we-just-gave-500-000-dollars-to-open-source-maintainers/)
to [tackle](https://fossfunders.com/) the [Open Source sustainability
crisis](https://openpath.chadwhitacre.com/2024/the-open-source-sustainability-crisis/).
Estimates like this are always a messy business, involving lots of assumptions
and hand-waving. Still, they are vital to understanding the nature and scope of
the crisis. We need good work in this area.

I do not accept the primary result of the "[Value of Open Source
Software](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4693148)" working
paper, that companies would spend 3.5 times more on software if OSS didn't
exist. Based on my reading, companies would spend almost nothing more if OSS
didn't exist. This challenges my own estimates as well. I look forward to
wrestling with the implications in [a future
post](https://github.com/chadwhitacre/openpath/issues/20).
