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

## installation

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
<script src='https://cdn.jsdelivr.net/npm/sort-es/dist/index.umd.js'></script>
<script>
    const unsorted = ["xxx", "bbbb", "zzz", "cccc", "aaa"];
    const sorted = unsorted.sort(sort.byString());

    console.log(sorted); //(5) ["aaa", "bbbb", "cccc", "xxx", "zzz"]
</script>

//or via browser modules

<script type='module'>
    import { byString } from 'https://cdn.jsdelivr.net/npm/sort-es/dist/index.mjs'
    
    const unsorted = ["xxx", "bbbb", "zzz", "cccc", "aaa"];
    const sorted = unsorted.sort(byString());

    console.log(sorted); //(5) ["aaa", "bbbb", "cccc", "xxx", "zzz"]
</script>
```

## Some mind blowing example
**sort by a single property**
```javascript
//js or ts file
import { byValue, byNumber, byString } from 'sort-es'

const arrayUnsorted = [
  { prop: "xxx", foo : 34 },
  { prop: "aaa", foo : 325 },
  { prop: "zzz", foo : 15},
  { prop: "ccc", foo : 340 },
  { prop: "bbb", foo : 0 }
];

//this sort by the foo property ascending
const sortedByFoo = arrayUnsorted.sort(byValue(i => i.foo, byNumber()));
console.log(sortedByFoo); //(5) [{prop: "bbb", foo : 0}, {prop: "zzz", foo: 15}, .....];

//this sort by the prop property descending
const sortedByProp = arrayUnsorted.sort(byValue(i => i.prop, byString({desc : true})));
console.log(sortedByProp); //(5) [{prop: "zzz", foo : 15}, {prop: "xxx", foo: 34}, .....];
```

**sort by a multiple property**
```javascript
//js or ts file
import {byNumber, byString, byValues} from "sort-es";

const objsToSort = [
    {id: 2, name: 'teresa'},
    {id: 3, name: 'roberto'},
    {id: 2, name: 'roberto'}
];

//i sort by THEIR NAMES and THEN by their ids
const sortedObject = objsToSort.sort(byValues({
    name: byString(),
    id: byNumber()
}));
console.log(sortedObject); //[{roberto, 2}, {roberto, 3}, {teresa, 2}];

//i sort by THEIR IDS and THEN by their names
const sortedObject2 = objsToSort.sort(byValues({
    id: byNumber(),
    name: byString(),
}));
console.log(sortedObject2); //[{roberto, 2}, {teresa, 2}, {roberto, 3}];

//i sort by THEIR IDS and THEN by their names DESCENDING
const sortedObject3 = objsToSort.sort(byValues({
    id: byNumber(),
    name: byString({desc: true}),
}));
console.log(sortedObject3); //[{teresa, 2}, {roberto, 2}, {roberto, 3}];

```

**typescript types check**
```typescript
//ts file
import {byValue, byNumber, byString} from 'sort-es'

const objsArray = [{numbProp: 2, stringProp: 'a'}, {numbProp: 3, stringProp: 'f'}];

//Incorrect sort property 
const incorrectSortedArray = objsArray.sort(byValue(i => i.numbProp, byString()));
//ts check error : Type 'number' is not assignable to type 'string'.

//Correct sort type
const sortedArray = objsArray.sort(byValue(i => i.numbProp, byNumber()))
//ts check ok

```
