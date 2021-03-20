---
title: byBoolean sortable
date: 2028-03-20 18:36:34
slug: by-boolean
---

## Description

The **byBoolean** sortable, as the name explain, is the sortable to sort the
[**boolean type**](https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean)

## Example

Standard example

```javascript
//js or ts file
import {byBoolean} from 'sort-es'

const unsorted = [false, true, false];
const sorted = unsorted.sort(byBoolean());

console.log(sorted); //(5) [true, false, false]
```

Sort descending

```javascript
//js or ts file
import {byBoolean} from 'sort-es'

const unsorted = [false, true, false];
const sorted = unsorted.sort(byBoolean({desc: true}));

console.log(sorted); //(5) [false, false, true]
```

