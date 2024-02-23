---
title: Towards Software Commons
excerpt: The world is ready for something beyond Open Source. Is it Software Commons?
---

A number of us have been [working for the past six
months](https://github.com/getsentry/fsl.software/issues/2) to find a term,
adjacent to but distinct from Free and Open Source Software (FOSS), to [elevate
developer sustainability to a value on par with user
freedom](https://blog.sentry.io/sentrys-open-source-values/). This is 
in response to Chef co-founder [Adam Jacob's proposal](https://twitter.com/adamhjk/status/1687113805237714944):

<blockquote class="twitter-tweet" data-dnt="true"><p lang="en" dir="ltr">I think the way forward here is to make what I suspect is a loose confederation of folks using non-compete licenses to actually get together and draft their own set of values. To then brand that. And stand behind it proudly.</p>&mdash; Adam Jacob (@adamhjk) <a href="https://twitter.com/adamhjk/status/1687113805237714944?ref_src=twsrc%5Etfw">August 3, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

FOSS ensures user freedom, which is wonderful. Developer sustainability is also
wonderful, and we've reached a point in the evolution of the tech industry and
our society where it is time to converge on how we're going to balance these
two values.

## A Widely Recognized Need

A number of prominent voices are recognizing the need to resolve this tension
between the limitations inherent in Open Source and the challenge of developer
sustainability, [starting with](https://opensource.org/blog/a-historic-view-of-the-practice-to-delay-releasing-open-source-software-osis-report) the __Open Source Initiative__ (OSI) itself:

> Since the early days of the Open Source movement, companies have experimented
> with finding a balance between granting their users the basic freedoms
> guaranteed by Open Source licenses while also capitalizing on their investments
> in software development.

Yes, some CEOs are perhaps best described as bad actors conniving malicious
rug pulls. Others are acting in good faith, genuinely intent on sharing their
source code as permissively as possible without exposing their companies to the
existential risk of harmful free-riding. Some even [voluntarily share their
financial success](https://fossfunders.com/) with the non-commercial
maintainers in the ecosystem.

Regarding different models of sustainability, __Jacob Kaplan-Moss__, co-founder
of Django, recently let loose [a full-throated
rant](https://jacobian.org/2024/feb/16/paying-maintainers-is-good/):

> My fundamental position is that <b>paying people to work on open source is good</b>,
> full stop, no exceptions. <b>We need to stop criticizing maintainers getting
> paid, and start celebrating.</b>

Jacob and I are working with similar definitions of sustainability (and similar
background colors lol). He
[writes](https://jacobian.org/2024/feb/16/paying-maintainers-is-good/#sustainability):

> When I talk about “sustainability”, though, I mean something very specific:
> “can maintainers live a decent-to-comfortable lifestyle writing free
> software?”

I recently [wrote](https://openpath.chadwhitacre.com/2024/the-open-source-sustainability-crisis/#what-is-open-source-sustainability):

> Open Source sustainability is when any smart, motivated person can produce
> widely adopted Open Source software and get paid fairly without jumping
> through hoops.

The main difference is in the qualifier, "without jumping through hoops." My
definition is narrower, and much of what Jacob wants to celebrate as "Open
Source sustainability," I would celebrate as "Open Source subsidization." We've
known how to _subsidize_ FOSS since the beginning. The new and interesting
thing will be when we _sustain_ it: fair pay, without hoops. Jacob himself
dreams "that society and governments will recognize free software as the public
good that it most certainly is and fund it appropriately." He doubts "it’ll
happen in our lifetimes if at all." I am optimistic! :-)

A second difference is that, whereas at Sentry we've [stepped
back](https://blog.sentry.io/lets-talk-about-open-source/), Jacob [takes a strong
stance](https://jacobian.org/2024/feb/16/paying-maintainers-is-good/#open-source--free-software)
on broadening the term "open source":

> Note the deliberate use of lower case. I’m _not_ referring to Open Source™ as
> defined by OSI, nor to Free Software™ as defined by the FSF. I mean these
> terms in the broadest, most inclusive sense: “software with source code that
> I can read and modify and release variants of, perhaps under some
> conditions.” So I’m including OSI and FSF licenses, but also the [Polyform
> licenses](https://polyformproject.org/licenses/)
> and the [JSON license](https://www.json.org/license.html) and, yes
> [BSL](https://mariadb.com/bsl-faq-mariadb/) in my version of “open source”.

The [Codecov
kerfuffle](https://about.codecov.io/blog/codecov-is-now-open-source/) taught us
to [look for another
term](https://blog.sentry.io/lets-talk-about-open-source/). As part of
developing [FSL](https://fsl.software/) (our BSL upgrade), we [worked with the
community](https://github.com/getsentry/fsl.software/issues/10) specifically to
make sure we do not confuse people about the OSI definition of Open Source. On
a recent call, [Stef](https://www.linkedin.com/in/maffulli/) and
[Nick](https://www.linkedin.com/in/nickvidal/) made the point that with more
and more legislation written with reference to Open Source, the Open Source
Definition is becoming less and less changeable. Building further abstractions
solidifies lower levels.

### Post-Open

The very author of the Open Source Definition, __Bruce Perens__, is now
also looking for what comes next. At a recent State of Open keynote, he snarked, "[We
have a great corporate welfare
program](https://www.youtube.com/watch?v=suUfS0-p5Yg#t=1m54s)," and talked
about the limitations of the support model for sustaining Open Source.

{% include img.html src="./corporate-welfare-program.webp"
url="https://www.youtube.com/watch?v=suUfS0-p5Yg#t=1m54s" caption="A slide from Bruce's talk." %}

Bruce goes so far as to say that we need to "[consider a radical departure](https://www.theregister.com/2023/12/27/bruce_perens_post_open/)":

> Open Source will continue to exist and provide the same rules and paradigm,
> and the thing that comes after Open Source should be called something else
> and should never try to pass itself off as Open Source. So far, I call it
> Post-Open.

The [second pillar](https://www.youtube.com/watch?v=suUfS0-p5Yg#t=3m14s) of
Bruce's vision for Post-Open is an expansion beyond low-level systems software
to end-user applications. He wants to "reach the ordinary person" and to "make
software for common people." Yes, please! I've talked about this in the past in
terms of "[open products](https://gratipay.news/open-products-25824a325fea)":

> I define an _open product_ as "a technology product that happens to be
> open-source." [...] The open products I’m most interested in, however, are
> top-level, consumer-facing web and mobile products that stand on their own _as
> consumer products_ first, and—almost as an afterthought—happen to be almost
> fully open-source to boot.

{% include img.html src="./please-trespass.webp"
url="https://gratipay.news/open-products-25824a325fea" caption="I wrote 
&ldquo;Open Products&rdquo; way back in 2013." %}

I'm excited to find Bruce talking about this. It seems to be a case of
independent discovery: Bruce's work on Post-Open, and the response to Adam's
call to action, to develop a new brand around a new articulation of values.

## Introducing Software Commons

Last week, I hit upon "Software Commons" as a candidate term for this new
movement. The [Wikipedia
definition](https://en.wikipedia.org/w/index.php?title=Information_commons&oldid=1186082015#Software_commons)
resonates, because it indicates a superset of FOSS:

> The _software commons_ consists of all computer software which is available
> at little or no cost and which can be reused with few restrictions. It
> includes open source software which can be modified with few restrictions.
> However the commons also includes software outside of these categories – for
> instance, software which is in the public domain.

Amazingly, the [domain](https://softwarecommons.com/) was available. I bought
it forthwith. It seems like [a strong
candidate](https://github.com/getsentry/fsl.software/issues/2#issuecomment-1939868845),
and it is [gaining
momentum](https://github.com/getsentry/fsl.software/issues/2#issuecomment-1941048758)
both with those who, like Jacob, would be just as content to broaden "open
source", as well as some [who would
not](https://github.com/getsentry/fsl.software/issues/2#issuecomment-1939177937).
The parallel with Creative Commons is particularly [suggestive](https://github.com/getsentry/fsl.software/issues/2#issuecomment-1939177937):

> [Creative Commons] is very popular, and you have licenses like [CC
> BY-NC](https://creativecommons.org/licenses/by-nc/4.0/) there so I feel the
> license categories listed fit perfectly well within what you've defined.

There is much work to do to hammer out the specifics of the software
sharing models that should qualify for inclusion in Software Commons, but this feels
to me like the right place to locate the conversation, because the two failure
modes of a commons are [enclosure](https://en.wikipedia.org/wiki/Enclosure) and
the [tragedy of the
commons](https://en.wikipedia.org/wiki/Tragedy_of_the_commons).  In the former,
a small group gains control and excludes others, imposing _too many
restrictions_. In the latter, a large group overuses the common resource to the
point of destruction, due to _too few restrictions_. That is, the tension
inherent in commons management seems to be exactly the tension we find in the
software ecosystem today: [between user freedom and developer
sustainability](https://blog.sentry.io/sentrys-open-source-values/).

If you think the [Software Commons](https://softwarecommons.com/) movement
might have legs, and you want to help find a balance of user freedom and
developer sustainability that honors Open Source while evolving beyond
its limitations, you can [dive in on this GitHub
issue](https://github.com/getsentry/fsl.software/issues/2). 🙏
