---
title: "Ensured trivy scans are correctly imported and deduplicated in DefectDojo"
date: 2020-09-01
tags: ['open-source', 'defect-dojo', 'security-scans', 'trivy']
link: https://github.com/DefectDojo/django-DefectDojo/pull/2825
---

## DefectDojo

[DefectDojo](https://www.defectdojo.org/) is an open source vulnerability aggregation tool.

It greatly simplifies the task of teams running multiple types of vulnerability scans like SCA (dependencies scan), SAST (static code analysis) or DAST (dynamic applicaiton scans) by providing a central aggregation and correlation point.

## Contribution

As part of the DevSecOps efforts I was leading, we were considering DefectDojo in combination with tools like [Trivy](https://github.com/aquasecurity/trivy) (for SCA), [Sonarqube](https://www.sonarqube.org/) (for SAST) and [ZAProxy](https://www.zaproxy.org/) (for DAST).

I wanted to integrate these tools into our CI/CD pipeline and aggrgate all their results in DefectDojo to get a global consolidated view per project and across the board.

One of DefectDojo's features is its ability to automatically detect a duplicate across scans. For example an unmitigated issue will keep showing in your CI/CD scans until is solved. The _deduplication_ feature allows DefectDojo to keep a single vulnerability open and close the rest as duplicates, greatly reducing the noise in your project.

However when Trivy scans were imported, some fields were missing which caused the deduplication to not work as expected. I [submitted a PR](https://github.com/DefectDojo/django-DefectDojo/pull/2825) which fixed how Trivy scans where imported.
