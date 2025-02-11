//Questions
const questions = [{
        "question": "What is your ideal type of holiday?",
        "answer1": "Relaxing on the beach with a cocktail",
        "answer1Total": "1",
        "answer2": "Exploring a busy city and experiencing the culture",
        "answer2Total": "2",
        "answer3": "Adventure and a unique experience",
        "answer3Total": "3",
    },
    {
        "question": "Where do you find yourself on a day off?",
        "answer1": "Swimming",
        "answer1Total": "1",
        "answer2": "A spot of shopping",
        "answer2Total": "2",
        "answer3": "At the zoo",
        "answer3Total": "3",
    } {
        "question": "You're at the restaurant, what are you ordering?",
        "answer1": "Jerk Chicken",
        "answer1Total": "1",
        "answer2": "Sushi",
        "answer2Total": "2",
        "answer3": "Bbq Ribs",
        "answer3Total": "3",
    } {
        "question": "Where do you like to stay when you are traveling?",
        "answer1": "A luxurious resort",
        "answer1Total": "1",
        "answer2": "A traditional home/airbnb",
        "answer2Total": "2",
        "answer3": "A tent in the wilderness",
        "answer3Total": "3",
    } {
        "question": "What is your go-to item to pack in your suitcase?",
        "answer1": "Sunscreen and a swimsuit",
        "answer1Total": "1",
        "answer2": "Good walking shoes",
        "answer2Total": "2",
        "answer3": "A camera and bug spray",
        "answer3Total": "3",
    } {
        "question": "What sounds ideal to you?",
        "answer1": "Remote tranquility",
        "answer1Total": "1",
        "answer2": "Surrounded by lots of people",
        "answer2Total": "2",
        "answer3": "Surround by animals in nature",
        "answer3Total": "3",
    } {
        "question": "If you close your eyes, what would you like to heal on your ideal holiday?",
        "answer1": "Waves crashing on the beach",
        "answer1Total": "1",
        "answer2": "The hustle and bustle of a city",
        "answer2Total": "2",
        "answer3": "The sounds of wildlife",
        "answer3Total": "3",
    } {
        "question": "What is your ideal mode of transportation?",
        "answer1": "A boat or catamaran",
        "answer1Total": "1",
        "answer2": "A fast train or subway",
        "answer2Total": "2",
        "answer3": "A 4x4 jeep",
        "answer3Total": "3",
    }
]

let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector('.quiz-container');
const questionElement = document.querySelector('.question');
const opt1 = document.querySelector('.option1');
const opt2 = document.querySelector('.option2');
const opt3 = document.querySelector('.option3');
const next = document.querySelector('.next-button');
const previous = document.querySelector('.previous-button');
const restart = document.querySelector('.restart');
