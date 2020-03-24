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
import {datable,SortOption} from "sort-es";

interface SortByDateOption extends SortOption {
  customParser?: (item: datable) => Date;
}
```

## Datable
This type defines all the possible types
 that a variable can take in order to be compatible with the conversion to ***Date***
```typescript
type datable = Date | number | string;
```