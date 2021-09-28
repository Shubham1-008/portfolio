const sides = document.querySelectorAll(".side-input");
const calculateHypotenuseBtn = document.querySelector("#btn-hypotenuse");
const outputEL = document.querySelector("#output");
function calculateSumOfSquare(side1, side2) {
  sumOfSquare = side1 * side1 + side2 * side2;
  console.log(sumOfSquare);
  return sumOfSquare;
}
function calculateHypotenuse() {
  const sumOfSquare = calculateSumOfSquare(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
  console.log(lengthOfHypotenuse);
  outputEL.innerText = "the length of hypogenuse is " + lengthOfHypotenuse;
}
calculateHypotenuseBtn.addEventListener("click", calculateHypotenuse);