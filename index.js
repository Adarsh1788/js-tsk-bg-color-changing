const clrChnge = (value) => {
  let newColors = (document.body.style.backgroundColor = value);

  newColors = JSON.stringify(newColors);
  sessionStorage.setItem("colorSelected", newColors);
};

let outPut = sessionStorage.getItem("colorSelected");
outPut = JSON.parse(outPut);
document.body.style.backgroundColor = outPut;
