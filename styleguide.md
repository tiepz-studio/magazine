---
title: Style Guide
permalink: "/styleguide/"
layout: page
exclude_from_search: true
excerpt: Style guide for Tiepz Magazine.
---

<figure class="small__right">
  {% include_cached img.html src="/2013/09/tim_680x510.jpg" alt="Tim Smith" %}
  <figcaption>Use the <code>.small__right</code> class for this particular styling</figcaption>
</figure>

This page exists to show the different components and pieces of _Tiepz Magazine_. More than anything, I maintain it because I think style guides are interesting. There's also a [writing style guide](/styleguide/writing/) if you enjoy that type of stuff.

This website is currently set in Whitney for primary and secondary text, and Whitney Condensed for headings.

## Heading Two

Secondary headings are used to separate portions of text. I don't ever use links in headings unless it's a link post. Primary headings are only used once in the page title or post title. Links in regular text look like [this](/styleguide).

<figure class="extendout">
  {% include_cached img.html src="/2014/01/sonos-top_view.jpg" alt="Sonos top view" %}
  <figcaption>This image style can be used with the <code>.extendout</code> class</figcaption>
</figure>

As normal, you've got styles for `inline code`, _italics_, and **bold text**. Inline code is used when the code isn't multi-line. Italics are used for emphasis, and bold is hardly used but when it is, it's used for the necessary visual contrast. <mark>This is highlighted text.</mark>

- This is an unordered list.
- Second list item
  - Here's a second-level list item
  - Here's another second-level list item

---

- I sometimes use lists in articles, but quite rare. Every once in a while, I use a list item that has a paragraph in it which has a little more information.

- These are pretty cool sometimes, but like I said, don't really use them all that often.

<figure class="alignright">
  {% include_cached img.html src="/2013/10/1p4-mac-create-new-vault.png" alt="Create new vault in 1Password 4" %}
  <figcaption>Use the <code>.alignright</code> class for this image styling. Use of images is encouraged</figcaption>
</figure>

##### Heading Five

Level five headings are not used often, but are used to list articles of further reading. When that's the case, we [display the link](/styleguide) — then give a bit of context to the article separated by an em dash.

I use horizontal rules for separating ideas in an article.

---

1. **Goal title one**  
   Some text that explains the goal
2. **Goal title two**  
   More text that explains the goal and gives context. Tells you why I'm setting this as a goal.

^

1. This is a numbered list
2. It's got a few list items
   1. This is a numbered list inside of a numbered list
   2. And it's got two items people
3. And this is the last item

<figure class="alignleft">
  {% include_cached img.html src="/2013/10/1p4-mac-1p-mini-item-details.png" alt="1Password Mini details" %}
  <figcaption>For this image styling, use the <code>.alignleft</code> class. I like to use captions for the most part, not required though</figcaption>
</figure>

### Here's a level three heading

Here's a `blockquote` for you. These are mostly used in link posts to quote writing from elsewhere. They're usually preceded by the person who said or wrote the quote.

Ben Brooks on _The Brooks Review_:

> There’s a lot of good looking options out there, but I wanted to be able to test something affordable for a change. So I reached out to Tom Bihn and asked if I could stop by to test out a few different bags, and possibly swipe one for a while to test out.

<figure class="photo-grid photo-grid--one">
  {% include_cached img.html src="/2016/01/eiffel-tower.jpg" %}
  {% include_cached img.html src="/2016/01/deannda-posing.jpg" %}
  {% include_cached img.html src="/2016/01/paris-pastry.jpg" %}
  {% include_cached img.html src="/2016/01/kelly-punching.jpg" %}
  {% include_cached img.html src="/2016/01/europe-group-on-the-bus.jpg" %}
  <figcaption>Use a <code>figure</code> with the class of <code>.photo-grid .photo-grid--one</code></figcaption>
</figure>

I use Github Flavored Markdown for code blocks. In other words, I use three back ticks. I always declare the language that's being used in the code block.

```yaml
# _config.yml
markdown: redcarpet
markdown_ext: markdown,mkdown,mkdn,mkd,md

redcarpet:
  extensions:
    [
      'tables',
      'autolink',
      'strikethrough',
      'space_after_headers',
      'with_toc_data',
      'fenced_code_blocks',
      'no_intra_emphasis',
      'footnotes',
      'smart',
    ]
```

<figure class="photo-grid photo-grid--three">
  {% include_cached img.html src="/2016/01/eiffel-tower.jpg" alt="" %}
  {% include_cached img.html src="/2016/01/deannda-posing.jpg" alt="" %}
  {% include_cached img.html src="/2016/01/paris-pastry.jpg" alt="" %}
  <figcaption>Use a <code>figure</code> with the class of <code>.photo-grid .photo-grid--three</code></figcaption>
</figure>

## What about a table?

Let's look at some data!

|---
| Page | Internet Speed | DOMContentLoaded | Load |
|-|-|-|-|
| Home (Before) | 110mb/s | 1.10s | 1.10s |
| Home (After) | 110mb/s | 331ms | 1.03s |
| Home (Before) | 3G Slow | 9.35s | 9.35s |
| Home (After) | 3G Slow | 2.50s | 5.29s |
| Article (Before) | 3G Slow | 9.01s | 9.01s |
| Article (After) | 3G Slow | 2.30s | 4.92s |

```scss
//--------------------------------
// _footer.scss
// -------------------------------

.site__footer {
  background-color: $slate;
  color: rgba(white, 0.6);
  margin-top: 4rem;
  padding: 2rem 0;
  small {
    color: rgba(white, 0.4);
    display: block;
    font-size: 0.9rem;
    margin-top: 2rem;
    width: 100%;
    @media #{$medium-up} {
      font-size: 0.75rem;
    }
  }
  p {
    font-size: 1rem;
    line-height: 1.5;
  }
  a {
    text-decoration: none;
  }
  .container {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    @media #{$large-up} {
      width: 100%;
    }
  }
}
```

## Let's Test That Fluid Type

Lorem ipsum dolor sit amet, consectetur adip*isicing elit, sed do eiusmod *tempor incididunt ut labore et dolore magna aliqua.

<figure class="photo-grid photo-grid--two">
  {% include_cached img.html src="/2016/01/kelly-punching.jpg" %}
  {% include_cached img.html src="/2016/01/europe-group-on-the-bus.jpg" %}
  <figcaption>Use a <code>figure</code> with the class of <code>.photo-grid .photo-grid--two</code></figcaption>
</figure>

And that's it. Oh wait… I forgot something.[^1]

[^1]: Yep. These are footnotes, and this is what they look like. Not a huge deal, but sometimes very necessary.
