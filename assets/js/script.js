// Question and number object and nested options object
let quizQAndO = [
  {
    number: 1,
    question: "What is your ideal type of holiday?",
    option: {
      a: "Relaxing on the beach with a cocktail",
      b: "Exploring a busy city and experiencing the culture",
      c: "Adventure and a unique experience",
    },
  },
  {
    number: 2,
    question: "Where do you find yourself on a day off?",
    option: {
      a: "Swimming",
      b: "A spot of shopping",
      c: "At the zoo",
    },
  },
  {
    number: 3,
    question: "You're at the restaurant, what are you ordering?",
    option: {
      a: "Jerk Chicken",
      b: "Sushi",
      c: "Bbq Ribs",
    },
  },
  {
    number: 4,
    question: "Where do you like to stay when you are traveling?",
    option: {
      a: "A luxurious resort",
      b: "A traditional home/airbnb",
      c: "A tent in the wilderness",
    },
  },
  {
    number: 5,
    question: "What is your go-to item to pack in your suitcase?",
    option: {
      a: "Sunscreen and a swimsuit",
      b: "Good walking shoes",
      c: "A camera and bug spray",
    },
  },
  {
    number: 6,
    question: "What sounds ideal to you?",
    option: {
      a: "Remote tranquility",
      b: "Surrounded by lots of people",
      c: "Surrounded by animals in nature",
    },
  },
  {
    number: 7,
    question:
      "If you close your eyes, what would you like to hear on your ideal holiday?",
    option: {
      a: "Waves crashing on the beach",
      b: "The hustle and bustle of a city",
      c: "The sounds of nature",
    },
  },
  {
    number: 8,
    question: "What is your ideal mode of transportation?",
    option: {
      a: "A boat or catamaran",
      b: "A fast train or subway",
      c: "A 4x4 jeep",
    },
  },
];

const startButton = document.querySelector("#start");
const quizSection = document.querySelector("#quiz-section");
const quizBox = document.querySelector("#quiz-box");
const introSection = document.querySelector("#intro-section");
const restartButton = document.querySelector(".quiz-restart");

document.addEventListener("DOMContentLoaded", function () {
  // hide intro section and display quiz section
  introSection.classList.remove("hide");
  quizSection.classList.add("hide");
  restartButton.classList.add("hide");
});

// Start button
startButton.onclick = () => {
  introSection.classList.add("hide");
  quizSection.classList.remove("hide");
  quizSection.classList.add("active");
  quizBox.classList.add("active");
  restartButton.classList.remove("hide");
  introSection.style.display = "none";
};

// function to cycle questions and options from object
let questionCount = 0;
const nextButton = document.querySelector("#next");
const options = document.querySelector("#options");

function loadQuestions(index) {
  if (index < 0 || index >= quizQAndO.length) return; //stops the function when you reach the last question

  const questionText = document.querySelector("#question-text");
  questionText.textContent = `${quizQAndO[index].number}.${quizQAndO[index].question}`;

  let optionText = `
        <div id="options">
            <div data-option="option-a" class="option-style"><span>${quizQAndO[index].option.a}</span></div>
            <div data-option="option-b" class="option-style"><span>${quizQAndO[index].option.b}</span></div>
            <div data-option="option-c" class="option-style"><span>${quizQAndO[index].option.c}</span></div>
        </div>
    `;

  const options = document.querySelector("#options");
  options.innerHTML = optionText;
}

// disables the next button until a selection is made
let selectedOption = null;
nextButton.disabled = true;

// Listens for the event of an option being selected
options.addEventListener("click", function (event) {
  const selected = event.target.closest("[data-option]");
  if (!selected) return;
});

// functionality to next button
nextButton.onclick = () => {
  if (selectedOption) {
    questionCount++;

    // Changing next button to 'Finish' after the last question
    if (questionCount === quizQAndO.length - 1) {
      const buttonContainer = document.getElementById("button-container");
      buttonContainer.innerHTML = ""; //removes the next button html

      // replace the next button with the finish button
      let finishButton = document.createElement("button");
      finishButton.innerHTML = `Finish <span class="alert">Please choose an option first</span>`;
      finishButton.id = "finish";
      finishButton.disabled = true; //disables finish button immediately when it loads

      //add new finish button
      buttonContainer.appendChild(finishButton);

      // add functionality to the finish button to redirect to the result.
      finishButton.onclick = () => {
        // calculate the option with highest count
        let highestCount = Math.max(
          optionSelections.a,
          optionSelections.b,
          optionSelections.c
        );
        let winners = [];

        if (optionSelections.a === highestCount) winners.push("a");
        if (optionSelections.b === highestCount) winners.push("b");
        if (optionSelections.c === highestCount) winners.push("c");

        let tieWinner = winners[Math.floor(Math.random() * winners.length)];

        // redirect to the result page
        if (tieWinner === "a") {
          window.location.href = "barbados.html"; //option a
        } else if (tieWinner === "b") {
          window.location.href = "japan.html"; //option b
        } else if (tieWinner === "c") {
          window.location.href = "kenya.html"; //option c
        }
      };
    } else {
      nextButton.innerHTML = `Next Question <span class="alert">Please choose an option first</span>`;
    }

    // load the next q+a set
    loadQuestions(questionCount);

    // disable next button until an option is selected
    selectedOption = null;
    nextButton.disabled = true;

  //   // hide the tooltip .alert when the next button is enabled
  //   const alert = document.querySelector(".alert");
  //   if (alert) {
  //     document.style.visibility = "hidden";
  //   }
  }
};

// starting point for option count
let optionSelections = {
  a: 0,
  b: 0,
  c: 0,
};

// update the optionSelections when a specific option is selected
options.addEventListener("click", function (event) {
  const selected = event.target.closest("[data-option");
  if (!selected) return;

  if (selected.dataset.option === "option-a") {
    optionSelections.a++;
  } else if (selected.dataset.option === "option-b") {
    optionSelections.b++;
  } else if (selected.dataset.option === "option-c") {
    optionSelections.c++;
  }

  // mark the option selected and enable the next button
  document.querySelectorAll("[data-option]").forEach((option) => {
    option.classList.remove("selected");
  });
  selected.classList.add("selected");
  selectedOption = selected.dataset.option;
  nextButton.disabled = false;

  // enable the finish button when an option is selected
  if (questionCount === quizQAndO.length - 1) {
    let finishButton = document.querySelector("#finish");
    if (finishButton) {
      finishButton.disabled = false;
    }
  }

  // Hide the alert when an option is selected
  const alert = document.querySelector(".alert");
  if (alert) {
    alert.style.visibility = "hidden"; // Hide the tooltip when an option is selected
  }
});