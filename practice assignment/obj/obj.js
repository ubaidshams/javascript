let obj = {
  emp: [
    { name: "ubaid", age: 25, sal: 20000, company: "Test yantra" },
    { name: "wahid", age: 24, sal: 40000, company: "Byjus" },
  ],
};
let root = document.getElementById("root");

obj.emp.forEach(x => {
  let { name, age, sal, company } = x;
  return (root.innerHTML += `
      <h1>${name}</h1>
        `);
});
