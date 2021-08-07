---
title: "Fix the sonarqube helm chart hook that updates admin password"
date: 2021-04-26
tags: ['open-source', 'sonarqube', 'helm', 'kubernetes']
link: https://github.com/Oteemo/charts/pull/278
---

## Sonarqube helm chart

The official Sonarqube helm chart started as a community maintained effort as part of the [Oteemo helm charts](https://github.com/Oteemo/charts/tree/master/charts/sonarqube). It was later adopted as the official helm chart of Sonarqube and forked to a [SonarSource repo](https://github.com/SonarSource/helm-chart-sonarqube/tree/master/charts/sonarqube).

This helm chart is the official way of installing Sonarqube in Kubernetes, even though it still has some limitations as per the official [Sonarqube docs](https://docs.sonarqube.org/latest/setup/sonarqube-on-kubernetes/).

## Contribution

The chart allows you to change the default admin password when installing Sonarqube. This is implemented as a `post-install` helm hook that sends a POST request to the Sonarqube admin API using a  container with curl installed.

The problem was that the current/new admin password were sent as part of the query string, but were not URL-encoded. This meant trying to change the admin password to a new password with special characters would fail.

I opened [a bug](https://github.com/Oteemo/charts/issues/277) and submitted a PR to fix the issue and URL-encode them it: https://github.com/Oteemo/charts/pull/278