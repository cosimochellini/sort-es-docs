---
title: byValues sortable
date: 2028-03-20 18:36:34 
slug: by-values
---

## Description

The **byValues** sortable, is the sortable that allow you to sort an array of **complex object**
by multiple properties. To use the sortable byValues it is necessary to pass 1 parameter:

- [Sorter](interfaces#sortabletuple)

## Example

```javascript
//js or ts file
import {byNumber, byString, byValues} from "sort-es";

const objsToSort = [
    {id: 2, name: 'teresa'},
    {id: 3, name: 'roberto'},
    {id: 2, name: 'roberto'}
];

//i sort by THEIR NAMES and THEN by their ids
const sortedObject = objsToSort.sort(byValues([
    ["name", byString()],
    ["id", byNumber()]
]));

console.log(sortedObject); //[{roberto, 2}, {roberto, 3}, {teresa, 2}];

//i sort by THEIR IDS and THEN by their names
const sortedObject2 = objsToSort.sort(byValues([
    ["id", byNumber()],
    ["name", byString()]
]));
console.log(sortedObject2); //[{roberto, 2}, {teresa, 2}, {roberto, 3}];

//i sort by THEIR IDS and THEN by their names DESCENDING
const sortedObject3 = objsToSort.sort(byValues([
    ["id", byNumber()],
    ["name", byString({desc: true})]
]));
console.log(sortedObject3); //[{teresa, 2}, {roberto, 2}, {roberto, 3}];

```

## Example (Deprecated option)

```javascript
/**
 * The sorter allows you to declare which properties are needed to sort the array,
 * in what order, and with what sortable
 */


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
