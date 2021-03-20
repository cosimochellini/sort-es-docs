---
title: byNumber sortable
date: 2022-03-20 11:36:34
slug: by-number
---

## Description
The **byNumber** sortable, as the name explain, is the sortable to sort the 
[**number type**](https://www.typescriptlang.org/docs/handbook/basic-types.html#number)

## Example

Standard example
```javascript
//js or ts file
import { byNumber } from 'sort-es'

const unsorted = [44, 12, 34, 124, 21.5];
const sorted = unsorted.sort(byNumber());

console.log(sorted); //(5) [12, 21.5, 34, 44, 124]
```

Sort descending
```javascript
//js or ts file
import { byNumber } from 'sort-es'

const unsorted = [44, 12, 34, 124, 21.5];
const sorted = unsorted.sort(byNumber({desc: true}));

console.log(sorted); //(5) [124, 44, 34, 21.5, 12]
```

