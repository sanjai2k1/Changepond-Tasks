//rupees calculator
let rupees = document.getElementById("rupees");
var dollor = document.getElementById("Dollar");
var pound = document.getElementById("Pound");
var dinar = document.getElementById("Dinar");

const currency = () => {
  dollor.innerHTML = (parseInt(rupees.value) * 0.012).toFixed(3);
  pound.innerHTML = (parseInt(rupees.value) * 0.0095).toFixed(3);
  dinar.innerHTML = (parseInt(rupees.value) * 0.00367).toFixed(3);
};

//calculator

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let ans = document.getElementById("result");
let addition = () =>
  (ans.innerHTML = parseInt(num1.value) + parseInt(num2.value));
let subraction = () =>
  (ans.innerHTML = parseInt(num1.value) - parseInt(num2.value));
let multiplication = () =>
  (ans.innerHTML = parseInt(num1.value) * parseInt(num2.value));
let division = () =>
  (ans.innerHTML = parseInt(num1.value) / parseInt(num2.value));

//temperature calculator

let temperature = document.getElementById("temperature");
let faranheit = document.getElementById("Farenheit");

const faranheitCalculator = () =>
  (faranheit.innerHTML = (parseInt(temperature.value) * 9) / 5 + 32);

//weight convertor

let weight = document.getElementById("weight");
var kg = document.getElementById("KG");
var pounds = document.getElementById("Pounds");
var lbs = document.getElementById("LBS");
var ton = document.getElementById("Ton");

const weightCalculator = () => {
  kg.innerHTML = (parseInt(weight.value) / 1000).toFixed(3);
  pounds.innerHTML = (parseInt(weight.value) * 0.0022).toFixed(3);
  lbs.innerHTML = (parseInt(weight.value) * 0.0022).toFixed(3);
  ton.innerHTML = (parseInt(weight.value) / 1000000).toFixed(10);
};

//percentage calculator

let percentage = document.getElementById("percentage");
let obtained = document.getElementById("obtained");
let total = document.getElementById("total");

const percentageCalculator = () =>
  (percentage.innerHTML =
    (parseInt(obtained.value) * 100) / parseInt(total.value));

//age calculator

let agenum = document.getElementById("agenum");
let date = new Date();
let age = document.getElementById("age");

const ageCalculator = () => {
  let datearr = agenum.value.split("-").map((age) => parseInt(age));
  let ans =
    date.getFullYear() -
    datearr[0] +
    (date.getMonth() + 1 - datearr[1]) / 12 +
    (date.getDate() - datearr[2]) / (30 * 12);

  let calyear = parseInt(ans);
  let calmonth = Math.abs((ans - calyear) * 12).toFixed(3);
  let caldays = Math.round((calmonth - parseInt(calmonth)) * 30);

  age.innerHTML = `${calyear} years ,${parseInt(
    calmonth
  )} months, ${caldays} days old`;
};

//buttonClick
let hides = document.querySelectorAll(".hide");

let buttons = document.querySelectorAll(".button");
for (let button of buttons) {
  button.addEventListener("click", () => {
    for (let div of hides) {
      if (div.classList.contains("show")) {
        div.classList.toggle("show");
      }
    }
    for (let div of hides) {
      if (div.classList.contains(button.value)) {
        div.classList.toggle("show");
      }
    }
  });
}
