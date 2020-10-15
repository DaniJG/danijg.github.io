---
title: It is always DNS. A kubectl story
date: 2020-10-15
description: Why kubectl stopped being able to interact with private clusters located behind a VPN
tags: ['post', 'kubernetes']
---

I frequently interact with several Kubernetes clusters which sit behind a corporate VPN. The fact that I had to be connected to the VPN never seemed. I installed months ago `kubectl` in my laptop using Homebrew (see [instructions here](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-with-homebrew-on-macos)) and `kubectl` had been happily connecting to those clusters as long as I was also connected to the VPN.

One day, I started noticing the following error message:
```
$ kubectl get pod
Unable to connect to the server: dial tcp: lookup my-cluster.contoso.io on 192.168.0.1:53: no such host
```

## Troubleshooting and fixing the issue

This was very puzzling. I had been using `kubectl` with no problem until very recently. Even more confusing was the result of my immediate troubleshooting:
- I was definitely connected to the VPN
- I could resolve `my-cluster.contoso.io` when using other tools like `curl`, `ping`, or `dig +trace`

What was going on? I checked with my colleagues in case they were experiencing the same issue. Of course, they weren't! The next immediate action was to compare the versions of kubectl we were using.

When we compared versions, I was several versions behind theirs. With nothing better to try out, I decided to upgrade kubectl as in
```
brew upgrade kubernetes-cli
```

And this is where I grabbed the thread to find out what was going on! When Homebrew upgraded `kubectl`, it finished by complaining that `/usr/bin/local/kubectl` had been symlinked to a different location than the previous Homebrew installation. Even more interesting was the fact that the current binary pointed to my Docker for Mac installation!

I tried the suggested fix to repoint the binary:
```
brew link --overwrite  kubernetes-cli
```

And just like that, `kubectl` started working again 🚀

## The root cause

I wasn't happy though. Since I didnt know why this happened, I was concerned it could happen again. Googling on the basis Docker for mac is doing something funny to my kubectl. Shortly after I found that indeed Docker for mac will repoint your `kubelet` when installed **or upgraded**.
- Note the issue was closed due to _inactivity_: https://github.com/docker/for-mac/issues/2368

That explained why the binary installed by Homebrew was repointed by Docker. However, why was the Docker version unable to reach out to clusters behind the VPN? What's so different between the 2 versions?

As it turns out, `kubectl` inherits an issue fro Go, whereby DNS resolution would only pick whatever is found in `/etc/resolv.conf` rather than using the MacOS stack for DNS resolution.
The way to prevent the issue is by compiling your Go application with the `CGO_ENABLED=1` environment variable.
- See the open issue: https://github.com/kubernetes/kubernetes/issues/23130#issuecomment-572292652

As you can read in that issue's thread, the Homebrew distribution of `kubectl` does indeed compile it with `CGO_ENABLED=1` while the _official_ google release doesn't.

That solves the mistery. Upgrading docker caused the `kubectl` binary to be repointed to a version of `kubectl` redistributed by Docker. While the Homebrew version is compiled to correctly resolve DNS in MacOS, Docker is redistributing the _official_ google release which isnt compiled this way!

## TL;DR

If you are a Mac user:
1. Always install kubectl in Mac using Homebrew
2. If you notice DNS resolution errors connecting to clusters behind a VPN, its likely Docker for Mac repointed the `kubelet` binary to its own version. Restore to the Homebrew version with:
    ```
    brew link --overwrite  kubernetes-cli
    ```

For everyone else, remember **it's always DNS!**
