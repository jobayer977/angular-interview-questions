---
title: What is @NgModule actually in Angular?
source: https://angular.io
---

`@NgModule` takes a metadata object that describes how to compile a component's template and how to create an injector at runtime. It identifies the module's own components, directives, and pipes, making some of them public, through the exports property, so that external components can use them.
