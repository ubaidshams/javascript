// // Named exports

// export let frontend = (...lang) => lang;
// export let backend = (...lang) => lang;
// export let databse = (...lang) => lang;

// Defalut array

// let frontend = ['HTML', 'CSS', 'Javascript', 'React JS', 'Bootstrap']
// export let backend = ['node js', 'socket', 'Express JS', 'Pug']
// export let database = ['SQL', 'MySQL', 'MOngoDB']

// export default frontend

// Imports with alias
// export let fullstack = (...rest)=> rest;


// Exports with alias

export let users = {
    name : 'manu',
    company : 'Qspiders',
    salary : 2000
}

export let courses = {
    courseNAme : 'mernstack',
    duration : '4 months',
    trainer : 'Shashi'
}

let App=(...rest)=>rest;

export default App;