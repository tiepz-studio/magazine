---
title: Managing Typography on Large Apps
date: 2016-03-09 09:09:00 -06:00
categories:
- Code
link_url: http://csswizardry.com/2016/02/managing-typography-on-large-apps
---

Harry Roberts:

> I’ve [written before](http://csswizardry.com/2012/02/pragmatic-practical-font-sizing-in-css) about managing typographical styles across larger projects, but an issue that I still see clients continually coming up against is that of specifically managing their headings across larger and more complex apps.
>
> The problem stems from the styling of the default `h1` through `h6` elements, and how this hierarchy seldom carries through the actual design and build of app-like UIs. The `h1`–`h6` pattern pretty nicely mirrors traditional print documents—where we are much more likely to have more newspaper-style heading structures both semantically and visually—however, where more app-like UIs definitely do have the semantic need for `h1`–`h6`, they rarely need quite the same visual hierarchy.

This is one of those things that makes so much sense after reading. Why didn’t I think of this sooner? Of course we shouldn’t style headings in apps the same way we do on blogs!
