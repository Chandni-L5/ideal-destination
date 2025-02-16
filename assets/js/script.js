const startButton = document.querySelector('#start'); 
// continueBtn 
const quizSection = document.querySelector('#quiz-section');

// Start button 
startButton.onclick = () => {
    quizSection.classList.add('active');
}