---
title: The Case for an Institution
excerpt: Software Commons is a great name. But for what? It should be an institution.
---

Over [on GitHub][0] we've (mostly) converged on "[Software Commons][19]" as our
answer to [Adam Jacob's call][1] to find a brand name other than "Open Source"
to represent the values behind such efforts as [FSL][2]. What we're less clear
on is what exactly it is we are naming. [What are our goals][13]?

There's a "thin" version in which our goal is to produce an educational
website, and a "thick" version in which we are founding (or joining with?) an
institution. The thick version would obviously be a much more serious
commitment, so it needs justifying. That's what I aim to do in this post.

- I start by discussing what it means to think about [software as a
  commons](#software-as-a-commons); then
- I talk about the [ways a software commons can
  fail](#enclosure-and-tragedy-in-software); then
- I present a case for why [an
  institution is necessary](#software-commons-an-institution) to protect
  against these risks.
- I conclude with [a brief sketch](#sketching-an-institution) of what this
  institution might look like.

## Software as a Commons

Economists [classify goods][4] based on excludability (is it widely accessible
or no?) and rivalry (is it lost in consumption or no?):

- <b>public goods</b>—non-excludable, non-rivalrous
- <b>common-pool resources</b>—non-excludable, rivalrous
- <b>club goods</b>—excludable, non-rivalrous
- <b>private goods</b>—excludable, rivalrous

In which class is society's shared software?

Software itself is an [information good][7], so its excludability depends on
whether it is public. To quote [Thomas Jefferson][15]:

> If nature has made any one thing less susceptible than all others of
> exclusive property, it is the action of the thinking power called an idea,
> which an individual may exclusively possess as long as he keeps it to
> himself; but the moment it is divulged, it forces itself into the possession
> of every one, and the receiver cannot dispossess himself of it.

The excludability of information in general and software in particular is
implemented not at the natural level, but at the technological and cultural
levels, through information security practices and intellectual property law.
The law makes possible a wide range of degrees of excludability. By nature,
though, published software is non-excludable.

Information goods are also, by their nature, non-rivalrous. "You can't download
a fish a billion times," I've heard [Andrew Nesbitt][11] say, to make the point
that you _can_ download a software package a billion times. Jefferson proceeds
from the above quotation to make a similar point. This is his famous candle
analogy:

> [An idea's] peculiar character, too, is that no one possesses the less,
> because every other possesses the whole of it. He who receives an idea from
> me, receives instruction himself without lessening mine; as he who lights
> his taper at mine, receives light without darkening me. That ideas should
> freely spread from one to another over the globe, for the moral and mutual
> instruction of man, and improvement of his condition, seems to have been
> peculiarly and benevolently designed by nature[.]

Information as such, then, and software as an instance, is a public good:
non-excludable and non-rivalrous. But this misses something crucial, which
[Nadia Asparouhova][14] has described as two "states" of software ([_Working in
Public_][8], p. 121).

- <b>static</b>—bits on GitHub waiting to be downloaded at negligible marginal
  cost; and

- <b>active</b>—demands piling up in GitHub Issues waiting for the maintainer
  to find time for them.

The rivalrous resource in software as a commons is _maintainer attention_ (p.
161). "**Open Source is _consumed_ like a public good, [but] _produced_ like a
commons**" (p. 212). This distinction is essential to thinking clearly about
software as a commons.

## Enclosure and Tragedy in Software

Because a commons is non-excludable yet rivalrous, its caretakers must in
general balance against two risks:

- <b>[enclosure][5]</b>—failure through exclusion, too many restrictions; and
- <b>[tragedy of the commons][6]</b>—failure through overuse, too few
  restrictions.

What do enclosure and tragedy of software as a commons look like? Keep in mind
the distinction between software as a non-rivalrous information good and
maintainer attention as a rivalrous resource. Both matter.

### Enclosure of Information

Considered as an information good, software enclosure means dialing up
exclusivity via licensing restrictions past some threshold. I say "some
threshold" because, as mentioned above, intellectual property law makes
possible a wide range of rights sharing, and there's an art and a negotiation
to deciding at what point in the range we've passed from acceptable to
unacceptable restriction on user freedom.

Open Source itself allows for some restrictions, for example:

- on non-attributed use;
- on non-shared-alike use; and
- on patent litigation.

Open Source draws the line where it does because of its value system: the
freedom of users overrides the needs of maintainers. Attempts by companies to
change an Open Source project's license to a more restrictive license generally
demonstrate the power of Open Source. If there is a real third-party community
around the project, a viable fork emerges.

Since we value maintainer needs on par with user rights, we are open to
drawing the line of acceptable restriction differently. In the spirit of Jacob
Kaplan-Moss's "[Paying people to work on open source is good actually][9]" (but
declining to muddy the term Open Source), we want to celebrate sustainable
software sharing wherever we see it.

The hard line of information enclosure in software is closed source, which
today accounts for nearly all of the consumer-grade software that defines our
digital lives. By staking out an all-or-nothing position, Open Source has lost
the possibility of encouraging companies to share more of their code than they
do today. There's a wide range of sharing models available, we should explore
them all. We should celebrate whenever companies share their code, rather than
scolding them for not doing it right.

### Enclosure of Attention

While software itself is a non-rivalrous information good, maintenance
attention to society's publicly shared software is a common-pool resource. What
constitutes enclosure of this resource? It would have to be the hiring of
maintainers by organizations that then influence, whether subtly or overtly, the
maintainer's priorities for the project.

This is delicate, because surely companies paying staff to produce Open Source
is a primary way that maintainers are paid today. In general it's a wonderful
arrangement to be celebrated, and it would be inappropriate to single out any
individual case for scrutiny. On a macro view, I think we can say that software
as a commons is stronger if the balance of incentives includes a meaningful
contingent of independent developers.

### Tragedy of the Software Commons

Because software as an information good is non-rivalrous, it is by definition
not susceptible to overuse. However, because it is rivalrous, maintainer
attention _is_ prone to the tragedy of the commons. In fact, [we're living
through an Open Source sustainability crisis right now][18].

{% include img.html src="./burnout.webp"
url="https://blog.tidelift.com/maintainer-burnout-is-real" caption="A chart from Tidelift's annual survey." %}

What does the tragedy of the commons look like in software? [Maintainer
burnout][10]. The time and attention of maintainers is the rivalrous resource
in software, and overworked people burn out. Time is money, so the way to
address the tragedy of the commons in software is to pay maintainers. Software
Commons celebrates all software sharing, including Open Source. Preserve the
Open Source Definition if we must, but let's please also figure out how to pay
maintainers fairly without making them jump through hoops. Let's stop burning
people out.

## Software Commons: An Institution

Whereas the Free and Open Source Software (FOSS) movement only upholds user
freedom, [we value][3] user freedom _and maintainer sustainability_. We want to
balance the rights of users with the needs of maintainers. Software Commons is
a great name for us, because it so precisely points to the somewhat complex
reality of our situation and the problems we need to solve. But what are we
going to do with this name?

There's a "thin" version in which we produce an educational website that
discusses software sharing in term of different business models, distribution
models, and contribution models, with a decision tree to guide people to a good
fit for their situation. This might be roughly parallel to GitHub's
[choosealicense.com][12].

Then there's a "thick" version in which what we are doing is founding (or
joining with?) an institution. The reason we would do this is because it is the
only way to solve the three big problems that our analysis of software as a
commons has uncovered:

1. the **closed-source information enclosure** of the bulk of society's software;
1. the **enclosure of maintainer attention**, eroding overall community independence; and
1. the **tragedy of the commons**, burning out maintainers.

If the only problem we are trying to solve is the first, then yes, we can put
up an informational website that educates companies on options for sharing
their source code in ways that fit their business and gives us something to
link to next time we announce an FSL product, and be done with it.

However, I don't think we can justify using the name Software Commons while
ignoring the second and third problems. Maintainer burnout is a real problem
that has been with us for too long. If we're going to live up to the promise of
the Software Commons name, then we need to directly tackle the task of [funding
maintainers][30], and to do that properly requires an institution.

### A Commons Is an Institution

Why do we need an institution in order to walk back the tragedy of the Open
Source commons? Because that is what we find in actual practice for common-pool
resources (CPRs) that successfully protect against overuse. Here is [Elinor
Ostrom][21] in her definitive work, [_Governing the Commons_][20] (pp. 88-89),
emphasis mine:

> Despite all of the differences among the CPR settings described in this
> chapter—and substantial differences exist—all share fundamental similarities.
> [...] The most notable similarity of all, of course, is the sheer
> perseverance manifested in these resource systems **and institutions**.

Ostrom's answer to how to govern the commons is a set of eight, "Design
principles illustrated by long-enduring CPR institutions" (p. 90):

> 1. <b>Clearly defined boundaries</b><br>Individuals or households who have
>    rights to withdraw resource units from the CPR must be clearly defined, as
>    must the boundaries of the CPR itself.
> 1. <b>Congruence between appropriation and provision rules and local
>    conditions</b><br>Appropriation rules restricting time, place, technology,
>    and/or quantity of resource units are related to local conditions and to
>    provision rules requiring labor, material, and/or money.
> 1. <b>Collective-choice arrangements</b><br>Most individuals affected by the
>    operational rules can participate in modifying the operational rules.
> 1. <b>Monitoring</b><br>Monitors, who actively audit CPR conditions and
>    appropriator behavior, are accountable to the appropriators or are the
>    appropriators.
> 1. <b>Graduated sanctions</b><br>Appropriators who violate operational rules
>    are likely to be assessed graduated sanctions (depending on the
>    seriousness and context of the offense) by other appropriators, by
>    officials accountable to these appropriators, or by both.
> 1. <b>Conflict-resolution mechanisms</b><br>Appropriators and their officials
>    have rapid access to low-cost local arenas to resolve conflicts among
>    appropriators or between appropriators and officials.
> 1. <b>Minimal recognition of rights to organize</b><br>The rights of
>    appropriators to devise their own institutions are not challenged by
>    external government authorities.
> 1. <i>For CPRs that are parts of larger systems:</i><br><b>Nested enterprises</b><br>Appropriation, provision, monitoring,
>    enforcement, conflict resolution, and governance activities are organized
>    in mulitple latyers of nested enterprises.

## Sketching an Institution

The sort of institution I have in mind for Software Commons, after Ostrom's
principles:

1. brings together producers and consumers of FOSS under one roof, alongside
   platform partners, to negotiate an enduring solution to [the Open Source
   sustainability crisis][23] (is it a multi-stakeholder platform
   cooperative?); and
1. ~~fleshes out and educates the industry on software sharing practices
   between closed and Open Source.~~ [_<b>Update:</b> [dropping this from
   scope](/2024/fair-source-does-not-equal-software-commons/)._]

Perhaps there is an institution that exists today that could be made to fit
this description. It's worth talking about, but I'm skeptical.

- It's not the [Open Source Initiative][22], which can only promote user
  freedom, not maintainer sustainability.
- It's not the [Linux Foundation][25], because it's [a company-centric trade
  association][24].
- It's not [Post-Open][27]; I talked with Bruce yesterday, and if I understand
  it right, it really only represents producers.
- An Ostrom-ian institution needs to provide accountability for money flow, but
  I'm not sure any of the existing platforms ([GitHub Sponsors][28],
  [Thanks.dev][29]) on their own is the right solution.
- [OS Collective][26] probably comes closest; it's worth a conversation. My
  hunch is FOSS consumer representation is too weak.

It may fall to us—if we want it—to found Software Commons as a new institution
that fulfills Ostrom's principles. If we don't want it, that's okay. We can
still publish an educational website to encourage a range of sharing between
closed and Open Source. But if we don't also tackle the enclosure of maintainer
attention and particularly the tragedy of the Open Source commons, it would
be beneath us to use the Software Commons name.

_Something to add? [Discuss on GitHub][13]._

[0]: https://github.com/getsentry/fsl.software/issues/2
[1]: https://twitter.com/adamhjk/status/1687113805237714944
[2]: https://fsl.software/
[3]: https://blog.sentry.io/sentrys-open-source-values/
[4]: https://en.wikipedia.org/wiki/Goods#Goods_classified_by_exclusivity_and_competitiveness
[5]: https://en.wikipedia.org/wiki/Enclosure
[6]: https://en.wikipedia.org/wiki/Tragedy_of_the_commons
[7]: https://en.wikipedia.org/wiki/Information_good
[8]: https://www.amazon.com/dp/0578675862
[9]: https://jacobian.org/2024/feb/16/paying-maintainers-is-good/
[10]: https://blog.tidelift.com/maintainer-burnout-is-real
[11]: https://nesbitt.io/
[12]: https://choosealicense.com/
[13]: https://github.com/softwarecommons/softwarecommons.com/issues/2
[14]: https://nadia.xyz/
[15]: https://press-pubs.uchicago.edu/founders/documents/a1_8_8s12.html
[16]: https://openpath.quest/2024/the-open-source-sustainability-crisis/#what-is-open-source-sustainability
[17]: https://gratipay.news/open-products-25824a325fea
[18]: https://openpath.quest/2024/the-open-source-sustainability-crisis/#what-is-the-sustainability-crisis
[19]: https://openpath.quest/2024/towards-software-commons/
[20]: https://www.amazon.com/dp/1107569788
[21]: https://en.wikipedia.org/wiki/Elinor_Ostrom
[22]: https://opensource.org/
[23]: https://openpath.quest/2024/the-open-source-sustainability-crisis/
[24]: https://mjg59.dreamwidth.org/39546.html
[25]: https://www.linuxfoundation.org/
[26]: https://www.oscollective.org/
[27]: https://openpath.quest/2024/towards-software-commons/#post-open
[28]: https://github.com/sponsors
[29]: https://thanks.dev/home
[30]: https://openpath.quest/2024/funding-the-five-thousand/
