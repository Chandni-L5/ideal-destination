const startButton = document.querySelector('#start'); 
// continueBtn 
const quizSection = document.querySelector('#quiz-section');
const submitButton = document.querySelector('#submit-button');
// next button

// Start button 
startButton.onclick = () => {
    quizSection.classList.add('active');
}