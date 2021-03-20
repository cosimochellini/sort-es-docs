---
title: byString sortable
date: 2022-03-20 11:36:34
slug: by-string
---
## Description
The **byString** sortable, as the name explain, is the sortable to sort the 
[**string type**](https://www.typescriptlang.org/docs/handbook/basic-types.html#string)

## Example

Standard example
```javascript
//js or ts file
import { byString } from 'sort-es'

const unsorted = ["xxx", "bbbb", "zzz", "cccc", "aaa"];
const sorted = unsorted.sort(byString());

console.log(sorted); //(5) ["aaa", "bbbb", "cccc", "xxx", "zzz"]
```

Sort descending
```javascript
//js or ts file
import { byString } from 'sort-es'

const unsorted = ["xxx", "bbbb", "zzz", "cccc", "aaa"];
const sorted = unsorted.sort(byString({desc : true}));

console.log(sorted); //(5) ["zzz", "xxx", "cccc", "bbbb","aaa"]
```



Sort as lowerCase
```javascript
//js or ts file
import { byString } from 'sort-es'

const unsorted =  ["AAA", "aaB", "ccA", "cccc", "aAc"];
const sorted = unsorted.sort(byString({ lowercase: true }));

console.log(sorted); //(5) ["AAA", "aaB", "aAc", "ccA", "cccc"];
```

