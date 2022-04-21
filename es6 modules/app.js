// //Named imports

// import { frontend,backend,databse } from "./mernstack.js";

// let x = frontend('HTML','CSS', 'Javascript', 'React', 'Bootstrap', 'Tailwind', 'Material UI')
// console.log(`Frontend Tech: ${x}`);
// let y = backend('node js','Express JS', 'Java')
// console.log(`Backend Tech: ${y}`);
// let z = databse('SQL','Mongo DB', 'MySQL')
// console.log(`Frontend Tech: ${z}`);


// default import
// import frontend, {backend, database} from "./mernstack.js";

// console.log(`Frontend Tech : ${frontend}`);
// console.log(`Backend tech : ${backend}`);
// console.log(`Databse Tech : ${database}`);



// Named imports with alias
// import {fullstack as x} from './mernstack.js'

// let javafullstack = x('java', 'Spring', 'Hibernate', 'JS')
// for(let j of javafullstack)
// {
//     console.log(j);
// }
// let mern = x('html', 'css', 'js', 'react js', 'node js', 'express js', 'mongo db')

// mern.forEach(x=>console.log(x))


// Importing exports with alias


// import {JspUser, JspCourses} from "./mernstack.js";

// console.log(JspUser.name);

import * as jsp from './mernstack.js';

console.log(jsp);

console.log(jsp.users.name);
console.log(jsp.courses.courseNAme);

let course = jsp.default('html','css')
console.log(course);