---
title: Interfaces
date: 2022-03-20 11:36:34
slug: interfaces
---

## SortOption

The standard option for all the sortable fn

```typescript
interface SortOption {
  desc?: boolean; //default: false, define is the sort must be ASC or DESC
  nullable?: boolean; // default: false, define is could be some null prop
}
```

## SortByDateOption

This option is used for the [**byDate**](by-date).

Inherits all the option of the [**SortOption**](#sortoption) and have the **customParser** to
explicit how to parse a [**datable**](#datable) to a **Date**

```typescript
import { datable, SortOption } from "sort-es";

interface SortByDateOption extends SortOption {
  customParser?: (item: datable) => Date;
}
```

## Datable

This type defines all the possible types
that a variable can take in order to be compatible with the conversion to **_Date_**

```typescript
type datable = Date | number | string;
```

## SortableObject

This type defines an **object** that _could_ have all the properties of the type that you want to sort,
and as value, has a [**sortable**](sortable-introduction) of the **type** of the original value

```typescript
import { sortable } from "sort-es";

type SortableObject<T> = {
    [key in keyof T]?: sortable<T[key]>
};
```

### Example

```typescript
import {byDate, byNumber, byString, SortableObject} from "sort-es";

let byValueSorter: SortableObject<{ name: string, id: number,  birthDay: Date }>;

//you create an object with a set of sortables of the type of the initial object
//the order of how the properties are entered is very important,
// the earlier it is written, the more important it is.
byValueSorter = {
    id: byNumber(), //sortable<number>
    name: byString(), //sortable<string>
    birthDay: byDate() //sortable<Date>
};
```
**The order of how the properties are entered is very important, 
the earlier it is written, the more important it is.**

In this case, the first comparison that is made is between **the ids of the 2 objects**,
 if it is the same, check the **name** and finally the **birthDay**