---
title: byAsync sortable
date: 2028-03-20 16:36:34
slug: by-async
---

## Description
The 
[**Array.prototype.sort()**](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
do not support **async sorting**, but expects a numeric value
 as the return value, not a promise for one; and it does return an array not a promise.
For this reason, this book offers 2 alternatives to choose from: 

* [sortAsync](#sortasync)
* [AsyncHandler](#asyncHandler)

## sortAsync
The **sortAsync** is a small function that accept an **array of promises** and a **sortable**
, specific for that function.

```typescript
//js or ts file
import {sortAsync, byValue, byNumber} from 'sort-es'

(async () => {
    // the unsorted array,  this type is for demonstration purposes only
    const asyncArray: Promise<{ id: number }>[] = []; //[promise, promise, promise];

    const sortedArray = await sortAsync(asyncArray, byValue(x => x.id, byNumber()));
    console.log(sortedArray) // [{id: 0}, {id: 3}, ...]
})();
```

## AsyncHandler
The **AsyncHandler** is a class that extends the **standard array class** and add a method **sortAsync**
 
 ```typescript
 //js or ts file
 import {AsyncHandler, byValue, byNumber} from 'sort-es'
 
 (async () => {
     // the unsorted array,  this type is for demonstration purposes only
     const asyncArray: Promise<{ id: number }>[] = []; //[promise, promise, promise];
 
     const asyncHandler = new AsyncHandler(asyncArray);
     const sortedArray = await asyncHandler.sortAsync(byValue(x => x.id, byNumber()));
     
     console.log(sortedArray) // [{id: 0}, {id: 3}, ...]
 })();
 ```