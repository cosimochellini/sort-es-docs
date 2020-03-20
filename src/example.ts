import {byNumber, byValue} from 'sort-es'

const objsArray = [{intProp: 2, stringProp: 'aaa'}, {intProp: 23, stringProp: 'foo'}];

const sortedArray = objsArray.sort(byValue(i => i.intProp, byNumber()));

//ts file
import {byValue, byNumber, byString} from 'sort-es'

const objsArray = [{intProp: 2, stringProp: 'a'}, {intProp: 3, stringProp: 'f'}];

//Incorrect sort property
const incorrectSortedArray = objsArray.sort(byValue(i => i.intProp, byString()));


const sortedArray = objsArray.sort(byValue(i => i.intProp, byNumber()));
const sortedArray = objsArray.sort(byValue(i => i.intProp, byString()));