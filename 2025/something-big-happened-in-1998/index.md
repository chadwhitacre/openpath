---
title: Something Big Happened in 1998
excerpt: Open Source needs improvement, but there's no shame accepting it started when OSI defined it.
noindex: true
---

37signals recently launched [Fizzy](https://www.fizzy.do/), a source-available
kanban product that they choose to call open source, in
[open defiance](https://x.com/dhh/status/1996627792008827342) of the [Open Source
Initiative](https://opensource.org/)'s [Open Source
Definition](https://opensource.org/osd) (OSI's OSD). Paul Sawers has [a good
roundup](https://www.forkable.io/p/openai-anthropic-and-big-tech-unite?open=false#%C2%A7open-source-world-gets-in-a-fizz)
of responses (here's [my
contribution](https://openpath.quest/2025/fizzy-should-be-fair-source/)).

Moving a conversation from X to GitHub is almost always a good idea, so I
opened [a PR inviting 37signals](https://github.com/basecamp/fizzy/pull/2039)
to join [Fair Source](https://fair.io/), the initiative we launched a year ago to
carve out a niche for the best of non-compete, source-available, eventually
Open Source licensing. DHH graciously hosted some healthy back and forth (most
of it after closing the PR). Fair Source collaborator Zeke Gabrielse since
[furthered the case](https://keygen.sh/blog/reconsider/) on his blog. I want to
zoom in on one particular claim that came up.


## The Etymological Ploy

Detractors of OSI and the Open Source Definition sometimes attempt to
undermine them by contesting the history of the term "open source." David,
[for
example](https://github.com/basecamp/fizzy/pull/2039#issuecomment-3637693952)
(emphasis mine):

> OSI failed to gain the open source trademark for a reason. It was already in
> **wide circulation** by the time they sought to institutionalize a specific
> definition that was different from the one derived from the words.

Yes, OSI [abandoned its
application](https://opensource.org/pressreleases/certified-open-source.php) to
trademark "open source." Yes, this is an inconvenient truth for an organization
that understands itself to be the "[steward of the Open Source
Definition](https://opensource.org/about)." Yes, representatives of OSI have at
times been clumsy (to put it mildly) in handling this truth, and that has eroded
trust.

Yes, Christine Peterson's
[statement](https://opensource.com/article/18/2/coining-term-open-source-software),
"I am the originator of the term 'open source software'," needs some
qualification to fully square with anecdotal evidence such as Dieter
Plaetinck has collected of [the term's appearance prior to OSI's
founding](https://dieter.plaetinck.be/posts/open-source-undefined-part-1-the-alternative-origin-story/).
That said, while there were a handful of outlier references to "open source"
prior to OSI, "wide circulation" there was not.


## A Clearer Picture

Let's look at four charts that paint a more complete picture of the history of
the term "open source," and its prevalence before and after the founding of OSI
in February of 1998.


### Google Books Ngram Viewer

Google provides a [tool to search and compare
terms](https://books.google.com/ngrams/info) across essentially all English
books. Comparing the [frequency of "free software" and "open
source"](https://books.google.com/ngrams/graph?content=Open+Source%2CFree+Software&year_start=1970&year_end=2022&corpus=en&smoothing=0)
shows a clear explosion in usage of the latter, coincident with the founding of
the Open Source Initiative. Prior to that, "open source" does not appear to
have been "in wide circulation."

{% include img.html src="ngram.webp" caption="" url="https://books.google.com/ngrams/graph?content=Open+Source%2CFree+Software&year_start=1970&year_end=2022&corpus=en&smoothing=0" %}

(Both "open source" and "free software" have additional meanings unrelated to
our subject, such as open source intelligence, and freeware. I take it that the
noise for both is roughly equal, so their relative frequency is still
indicative.)

### Usenet

[Usenet](https://en.wikipedia.org/wiki/Usenet) was an online forum that lasted
from 1979 [into the
'20s](https://support.google.com/groups/answer/11036538?visit_id=639016878958901763-3230887257&p=usenet&rd=1).
It was an important venue of early Internet activity, including collaborative
software development. Internet Archive maintains
[archives](https://archive.org/details/usenethistorical?tab=collection).

I analyzed the ~53 million posts to the `comp.*` newsgroups from 1986 to 2013,
and found an even clearer explosion (vs. Ngrams Viewer) in usage of the term
"open source" at the founding of OSI. 0.004% of posts mentioned the term
pre-OSI, compared with 0.686% post-OSI, or a 19,282% increase.

{% include img.html src="comp.webp" caption="Based on Internet Archive's comp.* corpus" url="https://archive.org/details/usenet-comp" %}

"Wide circulation" does describe the situation after OSI's founding. Prior to
that, usage of the term "open source" seems to have been sporadic, at best.
This is significant, because the audience here would have been much more
technical than that of the widest-possible Google Books corpus, or of the next
dataset, computing magazines.


### Print Magazines 

In the 1980s and 1990s, print magazines were another important venue of
communication. Search/chat points to _PC Magazine_, _PC World_, and _Byte_ as
three of the most important. Internet Archive has a partial archive for the
[first](https://archive.org/details/PCMAG). [Vintage
Apple](https://vintageapple.org/) has full archives for the
[other](https://vintageapple.org/pcworld/)
[two](https://vintageapple.org/byte/).


### The Hecker Memo

Perhaps the starkest illustration of the watershed in the etymology of "open source" 
that occurred at OSI's founding is [Frank Hecker's
memo](https://openpath.quest/2024/the-historical-case-for-fair-source/#the-divide-was-there-all-along),
which we have in two versions:

1. "[Netscape Source Code as Netscape
   Product](https://frankhecker.com/writings/netscape-source-code/)," published
   internally at Netscape on **November 11, 1997**
1. "[Setting Up Shop: The Business of Open-Source
   Software](https://frankhecker.com/writings/setting-up-shop/)," reworked for
   an external audience in **May, 1998**

What happened in between? The founding of OSI. In fact, it was precisely
Frank's memo that led Netscape to publish their source code. Frank was a sales
engineer, offering up a (failed) hail mary against the 800 lb. gorilla,
Microsoft. Free software advocates seized the moment to accelerate their own
agenda, and the Open Source movement was born.

(Incidentally, Frank decided to publish the original memo for the first time
just last year, during an email exchange he and I had while I was writing "[The
Historical Case for Fair
Source](https://openpath.quest/2024/the-historical-case-for-fair-source/)."
Kinda fun. :)

In the post-OSI version of Frank's memo, I count 305 usages of the term "open
source," where of course its meaning is bound to the then-freshly minted Open Source
Definition. In the pre-OSI original? Exactly one.

{% include img.html src="hecker.webp" %}

---

Yes, there's a couple trees back there. Let's not lose sight of the forest.
Something big happened in 1998. Whatever your opinion of what's happened since,
it's perfectly justified to accept that the [Open Source
Initiative](https://opensource.org/) founded the [Open
Source](https://en.wikipedia.org/wiki/Open_source) movement with the [Open
Source Definition](https://opensource.org/osd).


{% include img.html src="trees.webp" %}


## What Now?

I for one happily acknowledge a debt of awe and gratitude to the (imperfect)
founders of OSI and the Open Source movement. The best way I know to pay this
debt is forward: to contribute constructively to the future of both.

I appreciate Dieter
[brainstorming](https://dieter.plaetinck.be/posts/open-source-undefined-part-1-the-alternative-origin-story/)
better "ways the OSI could introduce itself and its mission." Wikipedia's
[framing](https://en.wikipedia.org/wiki/Open_Source_Initiative#The_Open_Source_Definition)
seems balanced: "_The Open Source Definition_ (OSD) is the most widely accepted
standard for open-source software."

I also appreciate Kyle Mitchell's
[conclusion](https://writing.kemitchell.com/2020/05/11/Open-Source-Property)
(emphasis mine):

> [N]o person and no organization owns the phrase “open source” as we know it.
[...] Our right to speak the term freely, and to argue for our own meanings,
understandings, and aspirations, isn’t impinged by anyone’s private property.
>
> That right extends to debate about how we ought or ought not use the term, for
OSI partisans as well as those annoyed, bemused, and abused by them. But that
debate must be **won by reason and suasion**, not harassment and naked claims to
authority.

There's a real beauty in the (unintended) placement of the term "open source"
outside the realm of legal recourse, consonant with the broader [political
economy of Open Source](https://www.youtube.com/watch?v=lEEP0A1lEU0). In the
comfortable words of [RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119),
we are rather in the realm of SHOULD—neither MUST nor MAY. There are deep
conversations to be had here about Open Source, society at large, and the role
of OSI. Let's do more of that, and less bad etymology.

- update populate to find matches, not pages
- make social image
- update thumbnail
- publish video
