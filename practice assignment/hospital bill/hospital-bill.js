// let testName = document.getElementById("testName");
// let priceInp = document.getElementById("priceInp");
// let billTable = document.getElementById("bill-table");

// let testArr = [];
// let testPriceArr = [];
// var tr, td1, td2;
// let trArr = [];

// let addBill = () => {
//   testName = document.getElementById("testName").value;
//   priceInp = document.getElementById("priceInp").value;
//   testArr.push(testName);
//   testPriceArr.push(Number(priceInp));
//   tr = document.createElement("tr");
//   td1 = document.createElement("td");
//   td2 = document.createElement("td");
//   for (let i = 0; i < testArr.length; i++) {
//     for (let j = i; j < testPriceArr.length; j++) {
//       td1.innerHTML = testArr[i];
//       td2.innerHTML = testPriceArr[j];
//       tr.appendChild(td1);
//       tr.appendChild(td2);
//       trArr.push(tr);
//     }
//   }
//   console.log(tr);
//   for (trd of trArr) {
//     console.log(trd);
//   }
// };

// let printBill = () => {
//   for (trd of trArr) {
//     billTable.appendChild(trd);
//   }
// };

let testName = document.getElementById("testName");
let priceInp = document.getElementById("priceInp");
let totalHead = document.getElementById("total-head");
let y = document.getElementById("bill-table");
let tr1 = document.createElement("tr");
let th1 = document.createElement("th");
let th2 = document.createElement("th");
tr1.appendChild(th1);
tr1.appendChild(th2);
y.appendChild(tr1);


let priceArr = [];
let addBill = () => {
  let x = document.getElementById("bill-table");
  th1.innerHTML = `Tests`;
  th2.innerHTML = `Price`;
  x.innerHTML += `<tr>
  <td>${testName.value}</td>
  <td>${priceInp.value}</td>
  </tr>`;
  priceArr.push(parseInt(priceInp.value));
  for (let price of priceArr) {
    console.log(price);
  }
};
let printBill = () => {
  totalHead.innerHTML = `Your total bill is `;

  let x = document.getElementById("bill-table");
  let total = priceArr.reduce((acc, value) => {
    return acc + value;
  });
  x.innerHTML += `<tr>
    <th>Total</th>
    <th>₹ ${total}/-</th>
    </tr>`;
};
