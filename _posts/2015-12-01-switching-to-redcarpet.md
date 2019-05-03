---
title: Switching to Redcarpet
date: 2015-12-01 00:28:46 -06:00
categories:
- Code
custom_type: post
series: jekyll
---

I've always hated the way Jekyll uses liquid tags to highlight code snippets. I found a way to do this, which until today, I never knew existed.

Redcarpet is the answer here. Here's what I wanted to do:

<pre class="highlight">
```scss
.element {
  color: $red;
}
```
</pre>


Basically like the way you do code snippets on Github. Now, you might be thinking, "Kramdown has Github-Flavored-Markdown support!" But, after trying to get it to work for an hour or so, I was left frustrated. The fenced code block was _technically_ working, but no syntax highlighting.

So I changed a few lines of code:

```yaml
# _config.yml
markdown: redcarpet
markdown_ext:  markdown,mkdown,mkdn,mkd,md

redcarpet:
  extensions: ["tables", "autolink", "strikethrough", "space_after_headers", "with_toc_data", "fenced_code_blocks", "no_intra_emphasis", "footnotes", "smart"]
```

Voilá! The `fenced_code_blocks` extension is the important one here, but personally, `footnotes`, and `smart` are crucial extensions for me too.[^1]

[^1]: The `footnotes` extension lets me write these. And the `smart` extension frees me up from having to manually type the right quotes. If you don't know what I mean by this, [Jason Santa Maria wrote about it](http://smartquotesforsmartpeople.com/).

That's it! With a few lines of code, I improved my whole writing experience ten fold.

---

**Update on November 15, 2016**: [I've switched back to Kramdown](/2016/11/switching-back-to-kramdown/) because it was way easier and removed a dependency.
