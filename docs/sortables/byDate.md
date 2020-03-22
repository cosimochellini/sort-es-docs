---
title: byDate sortable
date: 2022-03-20 11:36:34
slug: by-date
---

## Description
The **byDate** sortble, as the name explain, is the sortable to sort the 
[**date type**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date).

API side it is very likely that there is no standard method to return dates in ***JSON*** format,
therefore the ***byDate*** function does not accept only the Data type, 
but accepts a [**datable**](interfaces#datable), that is a set of types that can (more or less easily) to be traceable
to a Date.
If this were not enough, it is still possible to specify a
[**customParser**](#using-a-custom-parser) in the options of the byDate function

## Example

Standard example
```typescript
//js or ts file
import { byDate } from 'sort-es'

const unsorted: Date[] = []; //[today, tomorrow, yesterday]; 
const sorted = unsorted.sort(byDate());

console.log(sorted); //(3) [yesterday, today, tomorrow];
```

Sort descending
```typescript
//js or ts file
import { byDate } from 'sort-es'

const unsorted: Date[] = []; //[today, tomorrow, yesterday]; 
const sorted = unsorted.sort(byDate({desc : true}));

console.log(sorted); //(3) [tomorrow, today, yesterday];
```


## Using a custom parser
You can use a custom function to convert your ***datable*** item to a **date**
```typescript
//js or ts file
import { byDate } from 'sort-es'
import { parseISO } from "date-fns";

const unsorted = [
    "Sun Mar 22 2020 16:10:02 GMT+0100 (Central European Standard Time)", //today
    "Sun Mar 23 2020 16:10:02 GMT+0100 (Central European Standard Time)", //tomorrow
    "Sun Mar 21 2020 16:10:02 GMT+0100 (Central European Standard Time)" //yesterday
];

const sorted = unsorted.sort(byDate({
    customParser: item => parseISO(item)
}));

console.log(sorted); //(3) [tomorrow, today, yesterday];
```

