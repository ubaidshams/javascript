// // let str="Hello World";

// // console.log(str.toLowerCase());

// // console.log(str.toLocaleLowerCase());

// // console.log(str.toUpperCase());

// // console.log(str.toLocaleUpperCase());

// var company="Testyantra software solutions ";
// console.log(company);
// console.log(company.toUpperCase());

// var cname=company.replace("solutions","company");
// console.log(cname);

// var first=company.substring(0,10);
// console.log(first);

// var add="India Ltd";

// var company=company+add;
// console.log(company);



//read a sentence  by using prompt retrieve 2nd word using split method and reverse the sentence after converting it to uppercase join the words with #


let str=prompt("Enter a sentence");
console.log(str);
let x=str.split(" ");
let second=x[1];
console.log(second);

str=str.toUpperCase();
console.log(str);
str=str.split(" ").reverse().join("*");
console.log(str);