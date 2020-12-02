---
title: "Allowed kured drain/reboot notifications to be customised"
date: 2020-11-26
tags: ['open-source', 'kured', 'kubernetes']
link: https://github.com/weaveworks/kured/pull/212
---

## Kured

[Kured](https://github.com/weaveworks/kured) is an open source tool that allows Kubernetes administrators to control when their Nodes can reboot.

This way, automatic upgrades like unattended-upgrades can be configured in the cluster nodes so the OS dependencies are automatically patched.

When a reboot is necessary, unattended-upgrades will create a file `/var/run/reboot-required` instead of automatically rebooting the node. Kured runs as a daemon in your Kubernetes cluster and monitors the existing of that file. Once it detects a node needs to be rebooted, kured ensures a single node reboots at a time, and it cordongs & drains the node before rebooting.

In addition, kured lets you define the day of the week and time of the day that your nodes can reboot, as well as delay a reboot based on prometheus alerts and/or pod selectors.

## Contribution

Kured can be configured to send a slack notification when draining and rebooting a Node. However the notification message was hardcoded as in `Rebooting node %s`.

This was limiting for myself, since I was going to use kured in many clusters across different clouds and regions. It would be great if I could send a message like `Rebooting node %s, from cluster %s, region %s`

I [submitted a PR](https://github.com/weaveworks/kured/pull/212) that introduced 2 new options with drain/reboot message formats. I also stayed for [the conversation](https://github.com/weaveworks/kured/pull/228) on refactoring the notifications using [shouterrr](https://github.com/containrrr/shoutrrr) so destinations other than slack are supported.
