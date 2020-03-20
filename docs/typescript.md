---
title: Typescript support
date: 2020-03-20 11:36:34
slug: typescript
---

## TLDR
sort-es is **super** typescript friendly, because is written entirely in typescript.

## Type checks
Using sort-es could be very useful to avoid using an **incorrect sorting method**,
which could cause **slow** and **incorrect** sorting.

Thanks to typescript, it is possible to have at **ide** level a suggestion if the [sortable]() 
you are using is correct, or it is necessary to use a better one 

### Examples

*simple ts check example* 
```typescript
//ts file
import { byString, byNumber } from 'sort-es'

const numberArray = [9,8,7,6,5,4,3,2,1];

const incorrectSortedArray = numberArray.sort(byString());
//ts error :  Type 'number' is not assignable to type 'string'.

const correctSortedArray = numberArray.sort(byNumber());
//ts check ok
```

*more complex ts check example*

```javascript
//ts file
import {byValue, byNumber, byString} from 'sort-es'

const objsArray = [{numbProp: 2, stringProp: 'a'}, {numbProp: 3, stringProp: 'f'}];

//Incorrect sort property 
const incorrectSortedArray = objsArray.sort(byValue(i => i.numbProp, byString()));
//ts check error : Type 'number' is not assignable to type 'string'.

//Correct sort type
const sortedArray = objsArray.sort(byValue(i => i.numbProp, byNumber()))

```

