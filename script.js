//get elemnts;
let addBtn = document.getElementById("addBtn");
let subBtn = document.getElementById("subBtn");
let divBtn = document.getElementById("divBtn");
let multiBtn = document.getElementById("multiBtn");
let eqBtn = document.getElementById("eqBtn");
let oneBtn = document.getElementById("oneBtn");
let twoBtn = document.getElementById("twoBtn");
let threeBtn = document.getElementById("threeBtn");
let fourBtn = document.getElementById("fourBtn");
let fiveBtn = document.getElementById("fiveBtn");
let sixBtn = document.getElementById("sixBtn");
let sevenBtn = document.getElementById("sevenBtn");
let eightBtn = document.getElementById("eightBtn");
let nineBtn = document.getElementById("nineBtn");
let zeroBtn = document.getElementById("zeroBtn");
let ansBtn = document.getElementById("ansBtn");
let clearBtn = document.getElementById("clearBtn");
let decimalBtn = document.getElementById("decimalBtn");
let textOne = document.getElementById("textOne");
let textTwo = document.getElementById("textTwo");
let ansTxt = document.getElementById("answer");
let signTxt = document.getElementById("sign");
let backspaceBtn = document.getElementById("backspaceBtn");

//set listeners
addBtn.addEventListener("click", plus);
subBtn.addEventListener("click", subtractSign);
divBtn.addEventListener("click", divideSign);
multiBtn.addEventListener("click", multiSign);
oneBtn.addEventListener("click", one);
twoBtn.addEventListener("click", two);
threeBtn.addEventListener("click", three);
fourBtn.addEventListener("click", four);
fiveBtn.addEventListener("click", five);
sixBtn.addEventListener("click", six);
sevenBtn.addEventListener("click", seven);
eightBtn.addEventListener("click", eight);
nineBtn.addEventListener("click", nine);
zeroBtn.addEventListener("click", zero);
ansBtn.addEventListener("click", ans);
eqBtn.addEventListener("click", equals);
clearBtn.addEventListener("click", clear);
decimalBtn.addEventListener("click", decimal);
backspaceBtn.addEventListener("click", backspace);
//bools
let isAdd;
let isDiv;
let isSub;
let isMulti;
let sec1 = true;
let hasAns = false;

//vars
let newVal;
let num1 = 6;
let num2 = 2;


//functions

function add(valueOne, valueTwo) {
  newVal = valueOne + valueTwo;
  console.log(newVal);
}

function sub(valueOne, valueTwo) {
  newVal = valueOne - valueTwo;
  console.log(newVal);

}

function div(valueOne, valueTwo) {
  newVal = valueOne / valutextOne
  textOne.innerText = "";
  textTwo.innerText = "";
  signTxt.innerText = "";
  ansTxt.innerText = "";

  console.log(newVal);

}

function multi(valueOne, valueTwo) {
  newVal = valueOne * valueTwo;
  console.log(newVal);
}

function equals() {

  num1 = parseFloat(textOne.innerText);
  num2 = parseFloat(textTwo.innerText);

  if (textTwo.innerText != "") {

    if (isAdd == true) {
      add(num1, num2);
    }
    if (isDiv == true) {
      div(num1, num2);
    }
    if (isSub == true) {
      sub(num1, num2);
    }
    if (isMulti == true) {
      multi(num1, num2);
    }
    ansTxt.innerText = "= " + newVal.toString();
    sec1 = true;
    textOne.innerText = "";
    textTwo.innerText = "";
    signTxt.innerText = "";
  }

}

function plus() {

  if (textOne.innerText != "") {
    signTxt.innerText = "+";
    isAdd = true;
    isDiv = false;
    isSub = false;
    isMulti = false;
    if (sec1) {
      sec1 = false;
    }
  }
}

function divideSign() {
  if (textOne.innerText != "") {
    signTxt.innerText = "/";
    isAdd = false;
    isDiv = true;
    isSub = false;
    isMulti = false;
    if (sec1) {
      sec1 = false;
    }
  }
}

function subtractSign() {
  if (textOne.innerText != "") {
    signTxt.innerText = "-";
    isAdd = false;
    isDiv = false;
    isSub = true;
    isMulti = false;
    if (sec1) {
      sec1 = false;
    }
  }
}

function multiSign() {
  if (textOne.innerText != "") {
    signTxt.innerText = "x";
    isAdd = false;
    isDiv = false;
    isSub = false;
    isMulti = true;
    if (sec1) {
      sec1 = false;
    }
  }
}

function one() {

  ansTxt.innerText = "";
  if (sec1 == true) {
    textOne.innerText = textOne.innerText + "1";
  } else {
    textTwo.innerText = textTwo.innerText + "1";
  }

}

function two() {
  ansTxt.innerText = "";

  if (sec1 == true) {
    textOne.innerText = textOne.innerText + "2";
  } else {
    textTwo.innerText = textTwo.innerText + "2";
  }

}

function three() {
  ansTxt.innerText = "";

  if (sec1 == true) {
    textOne.innerText = textOne.innerText + "3";
  } else {
    textTwo.innerText = textTwo.innerText + "3";
  }

}

function four() {
  ansTxt.innerText = "";

  if (sec1 == true) {
    textOne.innerText = textOne.innerText + "4";
  } else {
    textTwo.innerText = textTwo.innerText + "4";
  }

}

function five() {
  ansTxt.innerText = "";

  if (sec1 == true) {
    textOne.innerText = textOne.innerText + "5";
  } else {
    textTwo.innerText = textTwo.innerText + "5";
  }

}

function six() {
  ansTxt.innerText = "";

  if (sec1 == true) {
    textOne.innerText = textOne.innerText + "6";
  } else {
    textTwo.innerText = textTwo.innerText + "6";
  }

}

function seven() {
  ansTxt.innerText = "";

  if (sec1 == true) {
    textOne.innerText = textOne.innerText + "7";
  } else {
    textTwo.innerText = textTwo.innerText + "7";
  }

}

function eight() {
  ansTxt.innerText = "";

  if (sec1 == true) {
    textOne.innerText = textOne.innerText + "8";
  } else {
    textTwo.innerText = textTwo.innerText + "8";
  }

}

function nine() {
  ansTxt.innerText = "";

  if (sec1 == true) {
    textOne.innerText = textOne.innerText + "9";
  } else {
    textTwo.innerText = textTwo.innerText + "9";
  }

}

function zero() {
  ansTxt.innerText = "";

  if (sec1 == true) {
    textOne.innerText = textOne.innerText + "0";
  } else {
    textTwo.innerText = textTwo.innerText + "0";
  }

}

function ans() {

  if (newVal != undefined) {
    textOne.innerText = "";
    textTwo.innerText = "";
    signTxt.innerText = "";
    ansTxt.innerText = "";
    textOne.innerText = textOne.innerText + newVal.toString();
    hasAns = false;
  }

}

function clear() {

  sec1 = true;
  textOne.innerText = "";
  textTwo.innerText = "";
  signTxt.innerText = "";
  ansTxt.innerText = "";
  num1 = 0;
  num2 = 0;

}

function decimal() {

  if (sec1 == true) {
    if (textOne.innerText == "") {
      textOne.innerText = textOne.innerText + "0.";
    } else {
      textOne.innerText = textOne.innerText + ".";
    }
  } else {
    if (textTwo.innerText == "") {
      textTwo.innerText = textTwo.innerText + "0.";
    } else {
      textOne.innerText = textTwo.innerText + ".";
    }
  }

}

function backspace() {

  if (sec1 == true) {

    textOne.innerText = textOne.innerText.slice(0, -1);

  } else {
    if (textTwo.innerText != "") {
      textTwo.innerText = textTwo.innerText.slice(0, -1);
    } else {
      sec1 = true;
      signTxt.innerText = "";
      isAdd = false;
      isDiv = false;
      isSub = false;
      isMulti = false;
    }
  }

}
