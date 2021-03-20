---
title: byValue sortable 
date: 2024-03-20 17:36:34 
slug: by-value
---

## Description

The **byValue** sortable, is used to sort a **specific property** (or function that return a value)
of a complex object or class.

To use the sortable byValue it is necessary to pass 2 parameters:

- [Discriminator](#discriminator)
- [SortFn](#sortFn)

### Discriminator

The discriminator is a **function** that explicitly get the value of a property of every object and uses it to sort the
entire object.

### SortFn

The sortFn is the **sortable** that will then be applied to the result calculated with the
[discriminator](#discriminator), it is important that the **type of sortable** chosen, and the
**type calculated with the discriminator** match

These are the recommended sortable:

* [byString](byValue.md)
* [byNumber](byNumber.md)
* [byDate](byDate.md)
* [byBoolean](byBoolean.md)

But it is still possible to use **all the other sortables** offered by the library

## Example

Standard example

```javascript
//js or ts file
import {byValue, byNumber, byString} from 'sort-es'

const arrayUnsorted = [
    {prop: "xxx", foo: 34},
    {prop: "aaa", foo: 325},
    {prop: "zzz", foo: 15},
    {prop: "ccc", foo: 340},
    {prop: "bbb", foo: 0}
];

//this sort by the foo property ascending
const sortedByFoo = arrayUnsorted.sort(byValue(i => i.foo, byNumber()));
console.log(sortedByFoo); //(5) [{prop: "bbb", foo : 0}, {prop: "zzz", foo: 15}, .....];

//this sort by the prop property descending
const sortedByProp = arrayUnsorted.sort(byValue(i => i.prop, byString({desc: true})));
console.log(sortedByProp); //(5) [{prop: "zzz", foo : 15}, {prop: "xxx", foo: 34}, .....];
``` 

