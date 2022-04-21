let frontend = (...rest) => rest;
let backend = (...rest) => rest;
let database = (...rest) => rest;

// common js mmodule


module.exports = {
    frontend,
    backend,
    database
}

// let Jspiders = {
//     trainers : ['Shashi', 'Gowtham', 'Shishira Bhat', 'Dixith', 'Priynaka'],
//     courses : ['Java Fullstack', 'Mern Stack', 'Testing', 'Python Fullstack']
// }

// module.exports = Jspiders


exports.Jspiders = {
    trainers : ['Shashi', 'Gowtham', 'Shishira Bhat', 'Dixith', 'Priynaka'],
    courses : ['Java Fullstack', 'Mern Stack', 'Testing', 'Python Fullstack']
}