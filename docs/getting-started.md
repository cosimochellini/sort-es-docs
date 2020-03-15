---
title: Getting started
date: 2020-03-15 11:49:34
slug: getting-started
---

## What is sort-es

sort-es is a minimal library useful for sorting any type of array, **super typescript friendly**.

This library exposes a series of small functions like **byNumber** which, inserted inside the native method 
[**Array.prototype.sort()**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
, helps to sort the array without having to go crazy to find the best way on stackoverflow


```javascript
const objs = [ 
    { first_nom: 'Lazslo', last_nom: 'Jamf'     },
    { first_nom: 'Pig',    last_nom: 'Bodine'   },
    { first_nom: 'Pirate', last_nom: 'Prentice' }
];

//without sort-es
function compare(a,b) {
  if ( a.last_nom < b.last_nom ){
    return -1;
  }
  if ( a.last_nom > b.last_nom ){
    return 1;
  }
  return 0;
}

const result = objs.sort(compare);

//with sort-es
import { byValue, byString } from 'sort-es' 

const result = obj.sort(byValue('last_nom', byString()))

```
## Local installation

Even though Jamdocs is so simple, you dont really need to set it up localy (you could just fork it on github to edit styles and md-files) - if you want to change it up a bit I recommend setting up localy for a better developer experience.

To set up a new instance of Jamdocs, and start developing just clone the project from Github like, go to the directory and run gridsome:

```bash
npm i sort-es
#or if you prefer yarn
yarn add sort-es
```
