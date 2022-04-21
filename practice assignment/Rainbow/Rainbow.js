let div = document.getElementsByClassName("rainbow");

for (let i = 0; i < div.length; i++) {
  console.log(div[i]);
  div[i].addEventListener("mouseover", () => {
    for (let j = 0; j < div.length; j++) {
      div[i].style.backgroundColor = div[i].innerText;
    }
  });
}

for (let i = 0; i < div.length; i++) {
  console.log(div[i]);
  div[i].addEventListener("mouseout", () => {
    for (let j = 0; j < div.length; j++) {
      div[i].style.backgroundColor = "";
    }
  });
}
