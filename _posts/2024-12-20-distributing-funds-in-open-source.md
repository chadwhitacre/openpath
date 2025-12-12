---
title: Distributing Funds in Open Source
excerpt: More experiments please.
canonical_name: the Open Source Pledge blog
canonical_url: https://opensourcepledge.com/blog/distributing-funds-in-open-source/
---

Solving the [Open Source sustainability crisis](https://openpath.quest/2024/the-open-source-sustainability-crisis/) has two parts:

1. unlocking funds from corporations, and
2. distributing funds to individuals.

Both are hard. I’ve [talked elsewhere](https://openpath.quest/2024/a-vision-for-software-commons/#three-funding-levers) about the [three basic approaches](https://spectrum.ieee.org/open-source-crisis) to solving the first problem. The [Open Source Pledge](https://opensourcepledge.com/) is one implementation of one of the approaches.

The primary audience for the Pledge is budget holders at companies. In this post I want to address those on the receiving end of the equation: assuming funds are flowing, how do we distribute the right amounts to the right people? This is important, because, if done poorly, we stand to waste a lot of money and effort without ever fixing the problem of [fairly paying maintainers without making them jump through hoops](https://openpath.quest/2024/the-open-source-sustainability-crisis/#what-is-open-source-sustainability).

The basic model I’m working with is that funds originate with companies, and flow through a series of intermediary entities—whether platforms, foundations, fiscal sponsors, or projects—to individuals.

{% include img.html src="three-entities.webp" alt="a diagram of a basic funding flow from companies, to intermediaries, to maintainers" %}

In fact, there is a complex web of intermediaries, each one an abstraction over potentially dozens or hundreds of component projects, and hundreds or even thousands of individual contributors.

I have two broad suggestions:

1. We need solid first-level abstractions in order for large companies to efficiently originate funding flows of any meaningful volume.
2. We need transparent, participatory algorithms and governance models throughout the flow in order for individuals to easily, fairly access project funds.

I’ll unpack both suggestions, but let’s start by discussing the shape of the system in some detail, defining some more terms along the way.

## Understanding the Flow of Funds

In Open Source we have producers and consumers. Money is an important gift from the consumers of Open Source to its producers, reciprocating for the initial gift of software. Our [desired outcome](https://openpath.quest/2024/the-open-source-sustainability-crisis/#what-is-open-source-sustainability) is that the individuals who ultimately produce Open Source software get paid fairly without having to jump through hoops.

(In my view, Open Source is a gift economy, and market-economic approaches to funding Open Source are [*subsidization*, not sustainability](https://openpath.quest/2024/the-open-source-sustainability-crisis/#whats-wrong-with-hoops). For other perspectives, see, e.g., Kara Sowles’ talk “[The State of Funding Free & Open Source Software](https://archive.fosdem.org/2024/schedule/event/fosdem-2024-2751-the-state-of-funding-free-open-source-software/),” and Sam Boysel, et al., “[2024 Open Source Software Funding Report](https://opensourcefundingsurvey2024.com/).”)

Sustainable funding originates from Open Source consumers. Some comes from what we might call “direct” consumers, referring primarily to for-profit companies, but also other types of organizations that directly consume Open Source (educational institutions, governments, non-profits) as well as individual users. This is what the [Open Source Pledge](https://opensourcepledge.com/) is about.

Other funding originates from what I’ll call a “consumer proxy,” that is, organizations with a mission to fund Open Source as a public good. These philanthropies and government agencies fund Open Source *in general*—not because they directly consume and benefit, but because society as a whole benefits from so-called critical digital infrastructure. [Sovereign Tech Agency](https://www.sovereign.tech/) is our best example. The nascent [Open Source Endowment](https://kvinogradov.com/oss-universities/) is another.

{% include img.html src="three-entities-detail.webp" alt="a visual summary of terms introduced in this blog post" %}

Some funds flow directly to individual producers of solo projects. Other funds flow to individuals through intermediaries, whether multi-contributor project governance structures, or distribution algorithms.

Projects come in all shapes and sizes. At the tiny end is a solo project that just brought on its first additional contributor. At the other end is the [Linux Foundation](https://www.linuxfoundation.org/), a meta-foundation encompassing dozens of sub-foundations and over 1,000 total projects. Most foundations are not set up to pay contributors. Newer ones like [PHP](https://thephp.foundation/foundation/#foundation-activities) are, but older projects like [Apache](https://medium.com/@shanecurcuru/how-apache-really-works-995a091a72d3#d8ec) and [Postgres](https://www.postgresql.org/about/policies/funds-group/#requests) simply do not have paying maintainers as part of their culture. They focus instead on marketing, events, fiscal hosting, legal and other non-engineering services. [Ruby Central](https://rubycentral.org/), [Python](https://www.python.org/psf-landing/), and [Django](https://www.djangoproject.com/foundation/) are somewhere in the middle.

Platforms like [GitHub Sponsors](https://github.com/sponsors), [Open Collective](https://opencollective.com/), [Liberapay](https://liberapay.com/), and [LFX Crowdfunding](https://crowdfunding.lfx.linuxfoundation.org/) help with the logistics of paying projects and contributors. Newer platforms—[thanks.dev](https://thanks.dev/home), [ecosyste.ms funds](https://funds.ecosyste.ms/), [StackAid](https://stackaid.us/)—also incorporate their own distribution algorithms based on measures of value and need in Open Source projects. They build on ad-hoc experiments from companies ([Microsoft](https://opensource.microsoft.com/blog/2024/06/27/5-things-we-learned-from-sponsoring-a-sampling-of-our-open-source-dependencies/), [Sentry](https://blog.sentry.io/we-just-gave-154-999-dollars-and-89-cents-to-open-source-maintainers/#allocating-our-budget)) and from generous individuals ([Serkan Holat](https://www.linkedin.com/in/serkanholat/), [Konstantin Vinogradov](https://kvinogradov.com/algo-sponsors/)).

What’s more, intermediaries can be nested. So, for example, a company could pay a foundation through a platform according to an algorithm, and the foundation could pay a subsidiary project, which could pay a third-party dependency project, which could pay one of *its* dependencies, which could pay an individual contributor.

Amidst the complexity, I see two guidelines that can help us collectively iterate towards a workable system. Towards the originating end of the flow of funds, we need solid abstractions in order to scale up funding flows from consumers to projects. Towards the other end, we need forward-thinking project leadership in order to fairly distribute money from projects to individual people. Let’s look at each in turn.

## Don’t Expect My Attention

When I buy a cup of coffee, I am not burdened with deciding how much of my five dollars to distribute to the farmer who grew the beans, and the shipping company that transported them, and the roaster that roasted them, and the barista that brewed them, and the suppliers of the cup, the paper sleeve, the lid, the milk, and the sugar. When I buy software from Microsoft, I don’t decide how much of the fee goes to each employee. I pay for a product. We need the same with Open Source. We need abstractions.

{% include img.html src="mug.webp" alt="a coffee mug with the Debian logo on it" caption="Subsidize Open Source: buy this mug." url="https://www.redbubble.com/i/mug/Debian-Linux-Logo-No-Text-Version-by-mleflore/30290449.9Q0AD" %}

At Sentry [we sponsor upwards of 1,000 projects](https://blog.sentry.io/we-just-gave-750-000-dollars-to-open-source-maintainers). Classic sponsorship models such as the original [FOSS Contributor Fund](https://www.oreilly.com/library/view/investing-in-open/9781098111915/) require way too much attention to each individual project to work at this scale. This is also the limitation I see with attempts such as [Drips](https://www.drips.network/), where “anyone can create a Drip List to flexibly send funds to a list of up to 200 open-source GitHub repositories and Ethereum addresses at a time.” Who has time for that? Same with issue bounties. It requires way too much attention at a fine-grained issue level.

I also see this mismatched expectation from individual projects. I hear from maintainers trying to sell me ad space on their README. Sentry does a handful of sponsorships for Open Source projects out of our digital marketing budget, where we’re closely tracking ROI of paid logo placement based on click-through and conversion rates. Our [main funding program](https://blog.sentry.io/we-just-gave-750-000-dollars-to-open-source-maintainers/) (the original pattern for the [Open Source Pledge](https://opensourcepledge.com/)) operates at a much higher level of abstraction. It’s a brand marketing investment. I wish I had the time to think about thousands of individual READMEs, but alas.

I need an easy button:

1. Meter my company’s consumption of Open Source.
2. Give me an invoice once a year, itemized by high-level ecosystem.
   1. Maybe let me fiddle a bit with the high-level percentages.
   2. Maybe let my company’s employees influence the result.
3. Take my money, distribute it, and give me a detailed, public receipt.
4. Sure, put my logo on a bunch of READMEs, but don’t make me think about it.

How exactly should the money be distributed throughout the network of intermediaries to individual contributors? As a corporate beneficiary of the gift of Open Source looking to reciprocate with money, I want that to be someone else’s problem—someone credible, ideally. I do want there to be a measure of transparency in order to build trust that my money is making it to the right people.

Whether we’re talking about a platform algorithm or a foundation’s governance model, I want the details of how funds flow to be easily *available*, but not *required* for me to comprehend in order to pay in. This is like Open Source software itself: how many of us read the source code for the projects we depend on? But we *could*.

The two leading platform products solving this problem today are [thanks.dev](https://thanks.dev/home) and [ecosyste.ms funds](https://funds.ecosyste.ms/). I look forward to continued innovation in this product category.

## Share Control, Remove Hoops

Consumers paying for Open Source should be shielded from having to comprehend all of the under-the-hood details of distribution. On the other hand, the producers who benefit from funds distribution should be empowered to participate in the decision-making process. Personal autonomy and intrinsic motivation are hallmarks of Open Source participation. Our goal should be to maintain these attributes while optimizing fairness for all contributors. Let’s look at three approaches to this challenge.

### Old-Fashioned Hiring at FOSS Foundations

At its most straightforward, engaging in distribution decisions can look like traditional salary or contract negotiations. [FOSS foundations have not historically hired maintainers](https://openpath.quest/2024/the-future-of-foss-foundations/#rounding-out-the-roles), but this is changing. [Geomys](https://geomys.org/) hires Associate Maintainers to work on a portfolio of critical Go projects. We’ve seen security engineers hired at [Ruby Central](https://rubycentral.org/news/ruby-central-welcomes-new-software-engineer-in-residence-sponsored-by-aws/) and [Python Software Foundation](https://pyfound.blogspot.com/2023/06/announcing-our-new-security-developer.html). The Linux Foundation employs [a few Fellows](https://www.linuxfoundation.org/about/leadership), including Linus Torvalds himself. The Django Software Foundation dedicates most of its budget to the two members of their [Django Fellowship Program](https://www.djangoproject.com/fundraising/#fellowship-program). The PHP Foundation [explicitly states](https://thephp.foundation/foundation/#foundation-activities): “The primary task of the PHP Foundation is to fund developers to work on PHP.” They support [ten full- and part-time contractors](https://thephp.foundation/structure/#core_developers).

{% include img.html src="php-core-developers.png" alt="a screenshot of the PHP core developers listing" %}

I hope to see [more foundations paying maintainers](https://openpath.quest/2024/the-future-of-foss-foundations/#rounding-out-the-roles). That said, entering an employee or contractor relationship is a high bar to clear in order for an individual to access project funds, requiring significant interview or vetting processes along with legal and administrative overhead. Not only does PHP fund developers to work on PHP, its contractors [submit their expenses transparently on Open Collective](https://opencollective.com/phpfoundation/transactions?kind=EXPENSE). This points toward ways of granting individuals greater autonomy to access funding.

### typescript-eslint’s Contributor Tiers

Consider the typescript-eslint project’s [Contributor Tiers system](https://typescript-eslint.io/maintenance/contributor-tiers/). Not only do they [publicly pay contributors](https://opencollective.com/typescript-eslint/expenses) through Open Collective as the PHP Foundation does, they also [document the process](https://typescript-eslint.io/maintenance/contributor-tiers/#pointing) by which anyone can [incrementally onboard themselves](https://typescript-eslint.io/maintenance/contributor-tiers/#advancement) to the project and [participate in distribution of funds](https://typescript-eslint.io/maintenance/contributor-tiers/#reimbursement). Rather than undergoing a cumbersome interview and hiring process, any sufficiently motivated, capable, Internet-connected individual can simply start contributing to the project, with a reasonable expectation of financial return.

{% include img.html src="typescript-eslint-contributor-tiers.png" alt="a screenshot of Gratipay's take-what-you-want interface" %}

The [point-based contribution accounting](https://typescript-eslint.io/maintenance/contributor-tiers/#pointing) in typescript-eslint’s Contributor Tiers system—1 point for a tiny bugfix, 2 points for a straightforward change, etc.—is reminiscent of the [Drupal Certified Partner Program](https://www.drupal.org/association/become-a-drupal-certified-partner)’s contribution credits. The big difference is that the former comes with a direct financial benefit for individuals, whereas the latter confers non-monetary marketing benefits on organizations. What’s more, typescript-eslint is clear about their size: “We treat everything here as approximate numbers. We’re a small enough team to informally discuss changes ad hoc and allow off-by-one-or-two months.” In other words, they operate at a human scale, able to pay attention to the complexities of human relationships.

Cryptocurrency enthusiasts will quickly reach for a [decentralized autonomous organization](https://www.investopedia.com/tech/what-dao/) (DAO) to scale up contribution accounting with financial implications beyond the [Dunbar number](https://en.wikipedia.org/wiki/Dunbar%27s_number). The concrete example I’m aware of is [tea](https://docs.tea.xyz/tea-white-paper/white-paper), which got off to [a really bad start](https://connortumbleson.com/2024/02/26/the-disappointing-tea-xyz/) that reinforces my own skepticism that DAOs are the solution we need. Personally, I don’t think the smart contract exists that could adequately account for all the complexity of human motivation when it comes to Open Source and money. *Maybe* a DAO *might* be a useful tool for a project that has already evolved a mature social contract and is ready to scale it further. Until then DAOs are a hammer looking for a nail. Today’s projects should work with simpler systems.

### Gratipay’s Team Takes

Ten years ago I conducted my own experiment with money and Open Source, in the context of a startup called Gittip at first, and later Gratipay. It was an early crowdfunding platform for Open Source projects. Our model for distributing funds within a project was called [take-what-you-want](https://gratipay.news/sharing-our-take-what-you-want-story-911dad62ac32) (twyw).

Whereas typescript-eslint distributes funds based on a detailed, point-based accounting of contributions, members of teams on Gittip had direct access to a weekly budget. Only the individual could set their own take, but everyone could see what everyone else was taking. Individuals had full, immediate control over both sides of the equation: the effort they contributed to the project, and the money they withdrew. I concluded that, properly managed, twyw can be [a fantastic way to optimize fairness in a high-trust environment without ruining intrinsic motivation](https://opensource.com/open-organization/16/7/compensating-employees-letting-them-take-what-they-want). Liberapay, a fork of Gratipay, continues to offer [a modified “team takes” implementation](https://en.liberapay.com/about/teams).

{% include img.html src="twyw.png" alt="a screenshot of typescript-eslint's Contributor Tiers documentation" %}

Assuming we are able to get funds flowing from Open Source consumers in the first place, the lowest-friction way to get paid fairly as an individual contributor will be to create valuable solo projects and sign up for platforms with weighted distribution algorithms. This might suffice to pay the rent for the most productive developers among us, but we need a richer ecosystem than that. We need multi-contributor projects involving many people with different skills, personalities, ambitions, and circumstances. Larger projects should continue to explore distribution methods including traditional hiring or contracting, [contribution accounting](https://typescript-eslint.io/maintenance/contributor-tiers/), and [take-what-you-want](https://gratipay.news/sharing-our-take-what-you-want-story-911dad62ac32).

## We Have Time to Get This Right

Unlocking corporate reciprocity for the gift of Open Source is hard. So is distributing funds to the right people, to fairly reward past contributions and best incentivize future value creation.

Corporate consumers connect to individual producers through a complex web of intermediaries involved in the flow of funds. As efforts such as the Open Source Pledge, Sovereign Tech Agency, and Open Source Endowment increase the volume of funds through this system, we need to iterate on the producer side to keep pace. We need to develop solid, trustworthy abstractions to streamline the process for companies paying in, and we need to build transparent, participatory algorithms and governance models for individuals to access funds in line with their contributions and with minimal friction.

The good news is that we have time. Unlocking orders of magnitude more funding is the work of years, and will develop together with forward-thinking leaders building platforms and projects capable of handling the responsibility of a significant budget increase. Together we have a generational opportunity to put Open Source on a firm gift-economic footing, in harmony with its essential nature while gracefully interfacing with the global market economy.
