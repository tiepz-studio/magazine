---
title: You're Doing the Mac Dock Wrong
date: 2016-10-03 12:51:00 -05:00
categories:
- Apple
link_url: https://www.youtube.com/watch?v=ZaxkqlRE-NI
---

I found this great YouTube video to change the animation speed of the dock on macOS. Hiding the dock is great for screen real estate, but the animation is slow. Thankfully you can easily fix this with two commands in the terminal. I figured I'd write it out here so it's easier for you to copy paste.

Open your terminal and paste the following command:

```sh
$ defaults write com.apple.dock autohide-time-modifier -int 0
```

This command allows you to enter an integer altering the speed of the animation. It can be any number. Experiment with it until you find the speed you like.

To restart the dock and see the new animation speed, enter this:

```sh
$ killall Dock
```

That's it! Hope you find this useful!

## Update from TJ Draper

Apparently `1` is the default, and `0` gives you no animation whatsoever. So [TJ](/authors/tjdraper/) recommends using `-float` so that you can use a decimal value. `-int` only accepts whole numbers. Here's what the command would look like now:

```sh
$ defaults write com.apple.dock autohide-time-modifier -float 0.2
```

Much better! The dock is much faster, but there's still a subtle animation.
