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

/*Typescript Tuples*/
//Tuples are typed arrays with a predefined length and types for each index
let myTuple: [number, boolean, string]
myTuple = [5, true, 'Johny']
//tuple with a number and string on index 0 and 1 respectively
let user: [number, string] = [3, 'Vince']
//the order of initialization matters when initializing a tuple.

/*Read Only Tuple*/
//Tuples should be read only to prevent type insecurity for the n+ indices during a push

const readOnlyTuple: readonly[number, boolean, string] = [56, true, "I am Vincent"]
//the above tuple is safe from mutation and the push function.

/* React.js used a tuple for state handling ie const [firstName, setFirstName] = useState(firstName)
=> From the above structure, we know that our list will have a string at the first index and
a function as the second value*/
