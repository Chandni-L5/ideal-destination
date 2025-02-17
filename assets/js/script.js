// Question and number object and nested options object
let quizQAndO = [{
        number: 1,
        question: "What is your ideal type of holiday?",
        option: {
            a: "Relaxing on the beach with a cocktail",
            b: "Exploring a busy city and experiencing the culture",
            c: "Adventure and a unique experience"
        }
    },
    {
        number: 2,
        question: "Where do you find yourself on a day off?",
        option: {
            a: "Swimming",
            b: "A spot of shopping",
            c: "At the zoo"
        }
    },
    {
        number: 3,
        question: "You're at the restaurant, what are you ordering?",
        option: {
            a: "Jerk Chicken",
            b: "Sushi",
            c: "Bbq Ribs"
        }
    },
    {
        number: 4,
        question: "Where do you like to stay when you are traveling?",
        option: {
            a: "A luxurious resort",
            b: "A traditional home/airbnb",
            c: "A tent in the wilderness"
        }
    },
    {
        number: 5,
        question: "What is your go-to item to pack in your suitcase?",
        option: {
            a: "Sunscreen and a swimsuit",
            b: "Good walking shoes",
            c: "A camera and bug spray"
        }
    },
    {
        number: 6,
        question: "What sounds ideal to you?",
        option: {
            a: "Remote tranquility",
            b: "Surrounded by lots of people",
            c: "Surrounded by animals in nature"
        }
    },
    {
        number: 7,
        question: "If you close your eyes, what would you like to hear on your ideal holiday?",
        option: {
            a: "Waves crashing on the beach",
            b: "The hustle and bustle of a city",
            c: "The sounds of nature"
        }
    },
    {
        number: 8,
        question: "What is your ideal mode of transportation?",
        option: {
            a: "A boat or catamaran",
            b: "A fast train or subway",
            c: "A 4x4 jeep"
        }
    }
]

// Start button 
const startButton = document.querySelector('#start');
const quizSection = document.querySelector('#quiz-section');
const quizBox = document.querySelector('.quiz-box')
const introSection = document.querySelector('#intro-section')

startButton.onclick = () => {
    quizSection.classList.add('active');
    quizBox.classList.add('active');
    introSection.style.display = "none";
}

// function to cycle questions and options from object
let questionCount = 0;
const nextButton = document.querySelector('#next');
const options = document.querySelector('#options')

function loadQuestions(index) {
    const questionText = document.querySelector('.question-text')
    questionText.textContent = `${quizQAndO[index].number}.${quizQAndO[index].question}`;

    let optionText = `
        <div id="options">
            <div data-option="option-a" class="option-style"><span>${quizQAndO[index].option.a}</span></div>
            <div data-option="option-b" class="option-style"><span>${quizQAndO[index].option.b}</span></div>
            <div data-option="option-c" class="option-style"><span>${quizQAndO[index].option.c}</span></div>
        </div>
    `;

    const options = document.querySelector('#options')
    options.innerHTML = optionText;
}

let selectedOption = null;
nextButton.disabled = true;
options.addEventListener('click', function (event) {
    const selected = event.target.closest('[data-option]');
    if (!selected) return;
    document.querySelectorAll('[data-option]').forEach(option => {
        option.classList.remove('selected');
    });
    selected.classList.add('selected');
    selectedOption = selected.dataset.option;
    nextButton.disabled = false;
});

// functionality to next button
nextButton.onclick = () => {
    if (selectedOption) {
        questionCount++;

    // Changing next button to 'Finish' after the last question 
    if (questionCount === quizQAndO.length - 1) {
        nextButton.textContent = "Finish";
        document.getElementById("next").setAttribute("id","finish")
    } else {
        nextButton.textContent = "Next Question";
    }

    // load the next q+a set
    loadQuestions(questionCount);

    // disable next button until an option is selected
    selectedOption = null;
    nextButton.disabled = true;
    }
};

