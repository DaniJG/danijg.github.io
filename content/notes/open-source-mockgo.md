---
title: "Refactored mockgo to its v2 version using promises"
date: 2018-12-05
tags: ['open-source', 'node', 'mongo', 'mockgo', 'testing']
link: https://github.com/seriousManual/mockgo/pull/33
---

## Mockgo

[mockgo](https://github.com/seriousManual/mockgo) is a Node.js library which simplifies the task to create integration tests using a real MongoDB server.

When integrating mockgo with your tests, it will take care of downloading the right mongo binaries, initialize a real in-memory mongo database and clean it at the end of the test.

## Contribution

I was using mockgo in various Node.js projects for writing integration tests that used a real mongo database but still run fast and in memory.

However some of its dependencies were outdated, which was limiting the MongoDB versions that could be used in our tests.

I [submitted a PR](https://github.com/seriousManual/mockgo/pull/33) that ended up refactoring mockgo not just to update its dependencies, but also to use promises and ended up released as the v2 of the library.
