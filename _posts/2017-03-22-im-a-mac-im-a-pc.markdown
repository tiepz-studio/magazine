---
title: Hello, I'm a Mac. And I'm a PC
date: 2017-03-22 15:30:00 -05:00
categories:
- Tech
subtitle: I don't know who I am any more
author: tjdraper
custom_type: post
---

*Or, an alternate sub-title: A long time Mac user and web developer's perspective on the current state of Windows vs. macOS*

---

Once upon a time when I was about seventeen, when I thought I was going to write music, play a guitar, and record it all, I needed a way to record sounds from my voice and guitar. My friend worked at Microsoft (Hi Dave), and he also used to record music before he become a developer. He recommended I get a cheap(ish) PC and dabble with the recording to see if it went anywhere (spoiler alert: It didn't). I got a HP Pavillion with 512 MB of RAM[^ram] and a 2.4 GHz Celeron processor[^iknow].

[^ram]: A fair amount at the time actually.
[^iknow]: I know, I know…

This was my first real induction into the world of computers. There was a Windows 95 computer around for a year or so when I was like twelve. But other than that, I was around pretty much no other computing devices until I got that HP. It had the newly minted Windows XP on it, which crashed and froze constantly. But I was hooked on computing of some sort. It's funny the threads that follow through in life. It was a hobby at the time and I didn't think much of it. But I'm confident in saying I would not be a software developer today if not for all that.

## I'm a Mac

In 2004 I "became a Mac" when I bought my Aluminum Powerbook G4[^alumbook] and until very recently, I was confident I had made the right decision.

[^alumbook]: I _think_ that one was the first generation following the Titanium. If not the first, then it was the second. It was early on.

While in theory[^theory] I am not as unhappy with the new generation of thin MacBook Pros as many are, I understand the frustration. And it's clear to me that Apple's priorities are pretty far away from the Mac and macOS. Their entire line of Mac computers right now feels lackluster and all but dead. At the same time, Microsoft is doing some pretty rad looking stuff with their Surface line.

[^theory]: Theory because I still have a previous generation computer.

But as a web developer who spends a lot of time in the [*nix](https://en.wikipedia.org/wiki/Unix-like) stack, I just was not sure how Windows would fit me these days. I've not really kept up with Windows too much except to note that Windows 10 looked like someone at Microsoft actually acquired _some_ taste—something that has been badly lacking in Windows and other Microsoft design in general until now.

## A Week in Hell

I decided to force myself to spend an entire week on Windows, doing my regular work and not booting into macOS at all. I already had a BootCamp partition running Windows 10 for testing, but I needed to get it up to speed for being a development environment. I didn't even know what that looked like so I spent all day Saturday before my week of hell just figuring out how to get my Windows environment into a state where I could develop with it.

As you can imagine that spilled into Monday as I figured out how to get stuff done. I'm not going to outline all of my development tools and things in this article—this is just going to be general observations about Windows vs. macOS. Since I am a developer though, there will be some development stuff interspersed as part of my observations.

### Window Management

When I first switched to the Mac in 2004, Window management on Mac felt weird for about 15 minutes. Then, after that, going back to Windows was awful. `Alt + Tab` was a joke and hard to use compared to macOS's `Cmd + Tab`. Exposé on macOS was amazing. Plus, as a power user, I quickly found `Cmd + ~`. You see, in macOS there are essentially two virtual layers to window management (which you can easily ignore but I don't for multi-windowed apps): The app layer where all an app's windows are, and then the second layer of any particular app's windows. So `Cmd + Tab` allows you to switch at the app layer and `Cmd + ~` allows you to switch at the app's window layer. It's extremely powerful and over the years it has become so ingrained that I found Windows extremely limiting at first.

After a couple days I found Windows' `Alt + Tab` manageable but not great. Windows 10 now shows a mini-preview of the window with the application's icon small above the preview. I still find it a little difficult to tell what app I want when using `Alt + Tab`. The icon is small and my eyes do not gravitate to it, and the preview is small and does not tell me much. But because Windows only has the one layer (all windows) they can't just show the application icon because multiple windows for any given app show up in the `Alt + Tab` switcher.

I found that, more often than not, I preferred to use the mouse to hover over the icon in the task bar and let an app's windows appear so I could choose the right one. So, in a way, Microsoft has solved this layering problem at the task bar level. This requires me to interrupt my flow and mouse around. In addition, I manage my windows geographically on multiple displays. Using the task bar takes the geography away from my management of windows because it's all down at the task bar. Sure hovering long enough produces a translucent preview of the Window where it lives on the screen, but it all requires me to reach over to my mouse, mouse to the task bar, look down to find what I think is the window, hover over it, wait for it to appear, look up to the location to verify, then click it. Now I can get back to what I was trying to do.

On macOS, the steps for me to find the right window are much easier and don't involve the mouse. `Cmd + Tab` to the correct application (which is much easier to identify because of the large application icons in the switcher preview), then if necessary, `Cmd + ~` to the correct window in that application.

### Where Windows Window Management Is Better

I did find however, that I _far_ prefer Windows full screen and split screen apps. The Maximize button in Windows **always** makes the window take up the full amount of the current display, but **does not** take it out of the windowing layer and environment. The green button on macOS has had a long history of not really working well (for me at least) but it got way worse with the macOS implementation of full screen. Nowadays, when you click that green button on a Mac, the window does fill the screen, but it slides over into it's own environment and is taken out of the windowing layer and environment. You can't use the show desktop function of Mission Control, it's hard to access the dock, other applications are no longer within the windowing layer. macOS just makes all this frustrating. I found Windows' maximize extremely refreshing. As a bonus, if you drag a window up and touch the top of the screen with your mouse and let go, the window will maximize[^maximizekeyboard].

[^maximizekeyboard]: There are also keyboard shortcuts to maximize windows.

In addition, split screen is really much nicer on Windows as well—again because it doesn't break the windowing model. Drag a window to any screen edge and a visual cue will tell you that the window will take up half the screen. When you let go, all the other windows will tile next to the new half-sized window. Select one and it will take up the other half—or you can just drag a window to the other side like you did the first window. Then—like split screened windows on macOS, if you drag the middle between the windows, they'll both change size. But with Windows you can _still_ have other windows layer in there, underneath, on top, partially covered, on top of one half screen window and behind the other, etc. It's much more freeing than what macOS does with full screen. To be honest, I avoid macOS full screen altogether. I'll occasionally try it again just to be sure—and even force myself to live with it for a few days, but it just doesn't work well for me.

### Where Windows Completely *Sucks* on Window Management

I remember from ye olden days of Windows XP that windows could get stuck off screen for any number of reasons. Did you know that Microsoft still hasn't fixed that? They haven't. Ask me how I know.[^noplease]

[^noplease]: No, actually, please don't. It's a sore subject.

## Mousing, Scrolling, and the Trackpad

When I first booted into and started using Windows that fateful Saturday, the first thing I discovered is how unusable my beloved Magic Mouse was[^drivers]. The lightest touch would send windows scrolling. So you would think then that it would be easy to work up some scrolling speed. See, the funny thing about that is, scrolling is just awful in all ways on Windows. There is no smooth scrolling and no momentum. You can only scroll "by line". Maybe I haven't found the right driver or the right "mod" but macOS does all this natively. I didn't realize how much I relied on precise scrolling in macOS. Something as simple as scrolling an element into view in a web browser console. Normally that console is already pretty small at the bottom of the screen. When you have Windows line scrolling set to something like 4 so that scrolling is not murderously slow, you're just as likely to scroll too far in small spaces as you are to find the thing you're looking for. Conversely, when you set scrolling to 1 line at a time, you want to kill yourself because scrolling is so slow. macOS has solved scrolling and Windows still has no idea how to do it.

[^drivers]: Yes, I installed all the BootCamp drivers and everything.

Then there is mouse preciseness. The momentum curve of moving a mouse or a trackpad with macOS makes it so much more precise and feel so easy. And yet, if you give that mouse a flick, it will be over on the other side of all three of my displays in a jiffy. There is no setting in Windows that makes the mouse feel as precise. And there is no setting that allows me to flick the mouse where I want it.

And again, like scrolling, the trackpad in Windows is a dumpster fire (.jpg). That is mostly because mouse precision is much more important on trackpads.

## Performance

Here is where I was surprised. When I first switched to the Mac, that Powerbook G4 blew any PC I had ever had or used before away. Then, when BootCamp on Intel Macs became a thing, I've always had Windows sitting around in some form or other. And up until Windows 7, macOS performance always felt better than Windows on the same hardware. I can't say that's the case anymore with Windows 10.  Windows consistently _feels_ more peformant and less "laggy". Just in terms of pure perception everything in Windows 10 feels like it happens instantly. Things sometimes feel like they're hanging on macOS.

My perception is somewhat backed up too by the fact that the fans on my laptop run more when booted with macOS than they do when I'm booted in Windows doing all the same things. This makes me sad because macOS used to be the king in terms of general performance[^games].

[^games]: Excluding games because game makers have always spent their time optimizing for Windows environments.

## Retina

Here again Windows 10 does better than I thought it would, and certainly better than any of its predecessors. Windows itself handles Retina just fine with one minor complaint—I have one display that is not Retina and it treats mousing from the retina screen to the non-retina a little weirdly and shows a huge size differential that macOS does not. But that's not really a problem in practice.

Third party app support for retina on the other hand is all over the map. Chrome mostly does okay—meaning that it looks great on my two retina displays, and does sort of okay on the non-retina one with the exception that the window controls are a little wonky. The window controls are sort of blown up and think they're still on a retina screen.

Some apps just don't support retina at all and look fuzzy and pixelated.

It's been some time since I can remember seeing any app or anything at all aside from a web page here or there that did not fully support retina on macOS. So score another one for the folks from Cupertino.

## Design Aesthetic

I admit that the aesthetics of something can be a little subjective—even so I think that most of us can give macOS the edge here. That said, I don't give macOS the edge by as much as I thought I would. Like I said earlier, Microsoft seems to have acquired some taste—or at least has been listening to people with taste. _Most_ of the garishness from the XP and Vista days—and to a lesser extent the Windows 7 days—is completely gone. It has been replaced with a much flatter and more pleasing aesthetic that I am not averse to at all. I haven't gone to the dark side, but I'm okay with the look of Windows these days.

## Finder vs. Windows Explorer

File management is one area where the Windows people have always said Windows whips macOS hands down. I have always disagreed with these people and I still do. The lack of tabs on Windows Explorer is downright puzzling and an outright pain in the beep. Who knew?

Tabs aside, I find the lack of the triangular expanders right in the main view which I love in macOS Finder to be really hard to live without.

And let's talk about QuickLook. This is, again, something I didn't know I used so much on macOS. But I have suddenly become keenly aware of its absence on Windows.

## Dev Stack

I have not found anything I can't do on Windows. But the lack of native *nix tools does give macOS the advantage. Sure there's Git Bash and the subsystem and all that, but it's not the same. I find that, on Windows, I generally prefer PowerShell as it's faster and more reliable. And almost all of my tools work in PowerShell just fine. The exception is SSH—which I understand you can set up to work in PowerShell but I just haven't taken the time. Git Bash does SSH just fine all by itself so I use that.

Where the dev stack is actually better for me on Windows is my IDE: PHPStorm. PHPStorm is cross platform and written in Java. Java on Windows has far better performance and support. And there just aren't any other good IDEs for PHP out there. And there are a few other Java tools I use[^dbeaver] that certainly do have better support and performance on Windows.

[^dbeaver]: Such as [DBeaver](http://dbeaver.jkiss.org/)

There's also [WinSCP](https://winscp.net/eng/index.php)—which, honestly, while being very "Windows-y" is a shining example of great dev apps on Windows. The closest I have come to an (S)FTP client as good as WinSCP on macOS is [ForkLift](http://www.binarynights.com/forklift/). I like ForkLift just fine and use it all the time. But WinSCP has the edge here.

As far as working with tools considered more as part of the LAMP stack like PHP and Composer from the command line in PowerShell, I found initial set up to be a little more difficult. But once running, they work just fine in Windows.

## In Conclusion

So as I wind this gargantuan amount of words about operating system choice down, I'm ready to admit that I do know who I am for now. I'm still a Mac. But I find the gap between the two warring worlds to be lessening. Particularly in light of Apple's clear abandoning of the Mac as a platform they are invested in and care about[^caringaboutmac], I feel this has been a fruitful exercise. I learned that, while I still give the edge to the Mac and will probably still be buying and sticking with Macs for the foreseeable future, things in Windows land aren't as bad as they used to be. And in some areas, things on the other side of the fence are actually better than on the Mac—a phrase I thought a few years ago I would never utter (or write).

[^caringaboutmac]: Please, please, please, ***please*** prove me wrong Apple. I want you to prove me wrong. And a lot more than just reassuring platitudes from Tim Cook, I need to see some money where the mouth is at.

I also found the exercise useful to hone and sharpen my toolset to be platform independent. As Apple continues to make me more and more uncomfortable with their direction and (lack of) support for me as a developer and power user, I have become increasingly desirous to decouple my life and toolset(s) from any one specific platform. As part of this exercise I have abandoned some tools and/or replaced them in favor of more platform independence.

Going forward, I plan to spend every other week working in Windows. For the past several weeks that is exactly what I've been doing. I'll work in Windows for one week, then I'll work in macOS for a week. Back and forth it goes. I think it's been really good for me.

I'll still make fun of people who bring thirty-pound laptops running Windows to Starbucks. But I'll have to stop making (so much) fun of Windows itself.
