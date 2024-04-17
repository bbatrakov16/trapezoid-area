// Calculating
var outputResult = document.getElementById("out-calc"); // outputResult was created

var btnCalc = document.getElementById("btn-calc"); // btnCalc was created
btnCalc.addEventListener("click", showResult);

function showResult() {
  let b1 = +document.getElementById("top").value;
  let b2 = +document.getElementById("bottom").value;
  let h = +document.getElementById("height").value;
  let round = +document.getElementById("round").value;

  A = h * ((b1 + b2) / 2);
  A = A.toFixed(round);
  outputResult.innerHTML = "The area of the trapezoid is: " + A;
}

// Refreshing of each input
// Fresh 1st input
btnCalc.addEventListener("click", cleanInp1);
var b1 = document.getElementById("top"); // b1 was created
var b2 = document.getElementById("bottom"); // b2 was created
var h = document.getElementById("height"); // h was created
var round = document.getElementById("round"); // round was created

function cleanInp1() {
  b1.value = "";
  b2.value = "";
  h.value = "";
  round.value = "";
}
