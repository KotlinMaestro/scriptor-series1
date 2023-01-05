let sales: number = 454_534_334/*using underscore to huge numbers for readability */
let course: string  = 'TypeScript'
let is_published: boolean = true
/* variables with the type not defined
TypeScript will infer from the assigned value */
let level
/*Variables without initializations and no type defined will be 
infered to be of type 'any' */

/* the ANY type*/
/* As aforementioned, can be used to avoid
defining the data type of a variable, or it is the 
default for variables that are not initialized */
//example.
level = 9
level = 'Jay'
//This makes it possible to change the type of values of data we assign to values. A bad practice.
/*Arrays*/
let numbers = [1,4,6, "string"] //dynamic javascript array

let numbers2 :number[] = [23,45,21,56]//TS arrays that are confined to the type
let names:string[] = ["Vince", "John", "Jennifer", "Michelangelo"]

/*TS also offers autocompletion of all the possible actions you can perform on data*/
console.log(names.forEach( n =>n.endsWith("e")))
