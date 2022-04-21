let empDetails={
    ename:"ubaid",
    eid:3005,
    sal:25000,
    empadd:{
        area:"BTM",
        city:"Bengaluru"
    }
}


console.log(empDetails.ename);
console.log(empDetails.empadd.area);

empDetails.empadd.area="mico layout";

console.log(empDetails.empadd.area);
console.log(empDetails);

empDetails.designation="Developer";
console.log(empDetails.designation);

// delete empDetails.sal;
console.log(empDetails);

// var key=Object.keys(empDetails);
// console.log(key);

// var value=Object.values(empDetails);
// console.log(value);

// var entry=Object.entries(empDetails);
// console.log(entry);

// console.log(entry[1]);

// let x =Object.values(empDetails);
// console.log(x);

// x=x.splice(2,1,50000);
// console.log(x);

empDetails.empadd.area="J.C Nagar";

let ucity=Object.values(empDetails.empadd);
console.log(ucity);
ucity=ucity[1];
console.log(ucity);