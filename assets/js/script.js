// Question and number object and nested options object
let quizQAndO = [
    {
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
        x: "Bbq Ribs"
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

startButton.onclick = () => {
    quizSection.classList.add('active');
    quizBox.classList.add('active')
}

// function to cycle questions from object
let questionCount = 0; 
const nextButton = document.querySelector('#next');


function loadQuestions(index) {
// showQuestions 
    const questionText = document.querySelector('.question-text')
    questionText.textContent = `${quizQAndO[index].number}.${quizQAndO[index].question}`;
}

nextButton.onclick = () => {
    quizSection.classList.add('active');
    quizBox.classList.add('active'); 
    questionCount++;

    loadQuestions(questionCount);
}