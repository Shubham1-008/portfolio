const submitAnswerBtn = document.querySelector("#check-answer-btn");
const quizForm = document.querySelector(".quiz-form");
const outputEl = document.querySelector("#output");
const correctAnswer = ["90", "right-angle","isosceles-triangle","3","180"];
function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswer[index]) {
      score = score + 1;
    }
    index++;
  }
  outputEl.innerText = "Out of 5 your score is " + score;
}
submitAnswerBtn.addEventListener("click", calculateScore);