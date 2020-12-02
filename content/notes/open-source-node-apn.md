---
title: "Added HTTP proxy functionality to node-apn"
date: 2017-11-16
tags: ['open-source', 'node', 'node-apn', 'apple-push-notifications']
link: https://github.com/node-apn/node-apn/pull/602
---

## Node-apn

[node-apn](https://github.com/node-apn/node-apn) is a library to simplify the task of sending apple push notifications from Node.js applications.

## Contribution

In the corporate environment I was working on, request to the Internet had to go through an HTTP proxy or else they would be blocked.

We were building an iOS application with a Node.js backend from where we wanted to send push notifications. For that we wanted to use the `node-apn` library but we could only do so if it supported connecting to apple's servers through a proxy.

Since that wasn't a feature currently available, I submitted a PR for it: https://github.com/node-apn/node-apn/pull/602