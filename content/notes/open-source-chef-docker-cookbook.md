---
title: "Update chef docker cookbook so multiple mirrors can be configured for the docker service"
date: 2020-12-02
tags: ['open-source', 'docker', 'chef']
link: https://github.com/sous-chefs/docker/pull/1145
---

## Chef docker cookbook

The official [docker chef cookbook](https://github.com/sous-chefs/docker) allows engineers to manage docker services and docker resources using Chef.

For example, you can install specific docker versions, configure the docker service or manage resources such as containers, networks and volumes.

## Contribution

The `registry_mirror` option of the `docker_service` resource allows you to configure the docker daemon with a registry mirror. It essentially adds the `--registry-mirror` option to the docker daemon arguments.

While it is possible to configure multiple mirrors by providing the `--registry-mirror` argument multiple times, this chef resource only allowed a single mirror to be configured.

I [submitted a PR](https://github.com/sous-chefs/docker/pull/1145) that updated the option so users can provide either a string or an array for the `registry_mirror` option.
