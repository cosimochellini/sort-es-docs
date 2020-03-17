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

const result = objs.sort(byValue(x => x.last_nom, byString()))

```
## Installation

The library is available as an [npm package](https://www.npmjs.com/package/sort-es).
To install the package, run:

```
npm install sort-es
# or
yarn add sort-es
```

Start using:

```javascript

//node or es6 
import { byString } from 'sort-es'

const unsorted = ["xxx", "bbbb", "zzz", "cccc", "aaa"];
const sorted = unsorted.sort(byString());

console.log(sorted); //(5) ["aaa", "bbbb", "cccc", "xxx", "zzz"]
```

Use directly in the browser

```html
<script src='https://cdn.jsdelivr.net/npm/sort-es/dist/index.umd.min.js'></script>
<script>
    const unsorted = ["xxx", "bbbb", "zzz", "cccc", "aaa"];
    const sorted = unsorted.sort(sort.byString());

    console.log(sorted); //(5) ["aaa", "bbbb", "cccc", "xxx", "zzz"]
</script>

//or via browser modules

<script type='module'>
    import { byString } from 'https://cdn.jsdelivr.net/npm/sort-es/dist/index.min.mjs'
    
    const unsorted = ["xxx", "bbbb", "zzz", "cccc", "aaa"];
    const sorted = unsorted.sort(byString());

    console.log(sorted); //(5) ["aaa", "bbbb", "cccc", "xxx", "zzz"]
</script>
```
