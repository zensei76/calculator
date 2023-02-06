var container = document.createElement("div");
container.className = "container ";
var h1 = document.createElement("h1")
h1.setAttribute("id","title")
h1.innerHTML="Calculator"
var para = document.createElement("p")
para.setAttribute("id","description")
para.innerHTML="Enter or press first number then operator followed bt number 2 and press enter for result"

var out = document.createElement("span");

//creating input
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("class", "input");
input.setAttribute("id", "result");
input.setAttribute("value", "0");

container.append(input, out);

var cBody = document.createElement("div");
cBody.className = "cBody";

//calling button function
var seven = createButton(
  "button",
  "btn",
  "type",
  "button",
  "id",
  "7",
  "value",
  "7",
  "7"
);
var eight = createButton(
  "button",
  "btn",
  "type",
  "button",
  "id",
  "8",
  "value",
  "8",
  "8"
);
var nine = createButton(
  "button",
  "btn",
  "type",
  "button",
  "id",
  "9",
  "value",
  "9",
  "9"
);
var add = createButton(
  "button",
  "btn",
  "type",
  "button",
  "id",
  "add",
  "value",
  "+",
  "+"
);
var four = createButton(
  "button",
  "btn",
  "type",
  "button",
  "id",
  "4",
  "value",
  "4",
  "4"
);
var five = createButton(
  "button",
  "btn",
  "type",
  "button",
  "id",
  "5",
  "value",
  "5",
  "5"
);
var six = createButton(
  "button",
  "btn",
  "type",
  "button",
  "id",
  "6",
  "value",
  "6",
  "6"
);
var sub = createButton(
  "button",
  "btn",
  "type",
  "button",
  "id",
  "subtract",
  "value",
  "-",
  "-"
);
var one = createButton(
  "button",
  "btn",
  "type",
  "button",
  "id",
  "1",
  "value",
  "1",
  "1"
);
var two = createButton(
  "button",
  "btn",
  "type",
  "button",
  "id",
  "2",
  "value",
  "2",
  "2"
);
var three = createButton(
  "button",
  "btn",
  "type",
  "button",
  "id",
  "3",
  "value",
  "3",
  "3"
);
var mul = createButton(
  "button",
  "btn",
  "type",
  "button",
  "id",
  "multiplication",
  "value",
  "*",
  "*"
);
var clr = createButton(
  "button",
  "btn",
  "type",
  "button",
  "id",
  "clear",
  "value",
  "C",
  "C"
);
var zero = createButton(
  "button",
  "btn",
  "type",
  "button",
  "id",
  "zero",
  "value",
  "0",
  "0"
);
var equal = createButton(
  "button",
  "btn",
  "type",
  "button",
  "id",
  "equal",
  "value",
  "=",
  "="
);
var div = createButton(
  "button",
  "btn",
  "type",
  "button",
  "id",
  "division",
  "value",
  "/",
  "/"
);
cBody.append(
  seven,
  eight,
  nine,
  add,
  four,
  five,
  six,
  sub,
  one,
  two,
  three,
  mul,
  clr,
  zero,
  equal,
  div
);

//Function for Buttons
function createButton(tag, cName, aN1, aV1, aN2, aV2, aN3, aV3, val) {
  var ele = document.createElement(tag);
  ele.setAttribute(aN1, aV1);
  ele.setAttribute(aN2, aV2);
  ele.setAttribute(aN3, aV3);
  ele.className = cName;
  ele.innerHTML = val;

  return ele;
}
container.append(cBody);
document.body.append(h1,para,container);

//Adding respective event

//function for input
// cBody.addEventListener("click",inp)
one.addEventListener("click", inp);
two.addEventListener("click", inp);
three.addEventListener("click", inp);
four.addEventListener("click", inp);
five.addEventListener("click", inp);
six.addEventListener("click", inp);
seven.addEventListener("click", inp);
eight.addEventListener("click", inp);
nine.addEventListener("click", inp);
zero.addEventListener("click", inp);
add.addEventListener("click", inp);
sub.addEventListener("click", inp);
mul.addEventListener("click", inp);
div.addEventListener("click", inp);
clr.addEventListener("click", clear);
equal.addEventListener("click", calculation);

//event for keyboard keys
document.body.addEventListener("keyup", keyup);

//function to take ipnut
function inp(event) {
  //console.log(event.target)
  input.value == "0"
    ? (input.value = event.target.value)
    : (input.value += event.target.value);
}

//calculation
function calculation() {
  var num1 = input.value
    .split(" ")
    .join()
    .split(/[+ / * -]/)
    .join(" ")
    .split(" ")[0];
  var num2 = input.value
    .split(" ")
    .join()
    .split(/[+ / * -]/)
    .join(" ")
    .split(" ")[1];
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  var opp = input.value
    .split(" ")
    .join()
    .split(/[1 2 3 4 5 6 7 8 9 0]/)
    .join("");
  var res;
  // console.log(opp.length)
  if (opp == "+") {
    res = num1 + num2;
  } else if (opp === "-") {
    res = num1 - num2;
  } else if (opp == "*") {
    res = num1 * num2;
  } else if (opp === "/") {
    res = num1 / num2;
  }

  out.innerHTML = res;
}

function clear() {
  out.innerHTML = "";
  input.value = 0;
}

function keyup(event) {
  if (
    (event.key >= 0 && event.key < 0) ||
    event.key == "*" ||
    event.key == "-" ||
    event.key == "+" ||
    event.key == "/"
  ) {
    input.value == "0" ? (input.value = event.key) : (input.value += event.key);
  } else if (event.key == "Enter") {
    calculation();
  }
  //console.log(event.key);
}
