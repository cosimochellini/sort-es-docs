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
