const button = document.querySelector('[data-js="question-card__button"]');
const answer = document.querySelector('[data-js="question-card__answer"]');

button.addEventListener("click", () => {
  if (answer.hasAttribute("hidden")) {
    answer.removeAttribute("hidden");
  } else {
    answer.setAttribute("hidden", "");
  }
});

const bookmarkIcon = document.querySelector('[data-js="question-card__icon"]');

bookmarkIcon.addEventListener("click", () => {});
