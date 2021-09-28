const sides = document.querySelectorAll(".side-input");
const calculateAreaBtn = document.querySelector("#btn-area");
const outputEL = document.querySelector("#output");
function calculateProduct(a, b) {
  const productOfNumbers = a * b;
  console.log(productOfNumbers);
  return productOfNumbers;
}
function calculateArea() {
  const product = calculateProduct(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const area = product / 2;
  console.log(area);
  outputEL.innerText = "the Area of the triangle is " + area + " cm^2";
}
calculateAreaBtn.addEventListener("click", calculateArea);