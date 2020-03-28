---
title: Sortable introduction
date: 2028-03-20 11:36:34
slug: sortable-introduction
---

A **sortable** is a small function, often concatenable with other more **complex sortable**,
 that allows to **generate a function** to allow the native 
 [**Array.prototype.sort()**](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  method to order the array **correctly** and **quickly**
  
These are the main usable sortable that cover most cases of use of a developer:

* [byString](byString) (and [byStringLowerCase](byStringLowerCase))
* [byNumber](byNumber)
* [byDate](byDate)
* [byValue](byValue)
* [byValues](byValues)

But there are many others for every type of event.