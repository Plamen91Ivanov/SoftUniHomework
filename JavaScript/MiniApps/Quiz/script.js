const quizData = [
    {
        question:'na kolko godini e irina',
        a:'1',
        b:'b',
        c:'c',
        d:'d',
        correct:'1'
    },
    {
        question:'question1',
        a:'a1',
        b:'b',
        c:'c',
        d:'d',
        correct:'a'
    },
    {
        question:'question2',
        a:'a2',
        b:'b',
        c:'c',
        d:'d',
        correct:'a'
    }
];

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBut = document.getElementById('submit');

const answerEls = document.querySelectorAll(".answer"); 
let currentQuiz = 0;
let score = 0; 

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() { 
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {  
            answer = answerEl.id
        } 
    });
    return answer;
}
function deselectAnswer(){

    answerEls.forEach(answerEl => {
          answerEl.checked = false;
        });
}

submitBut.addEventListener('click', () => { 
    
    const answer = getSelected();   
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (answer) {
            if (currentQuiz < quizData.length) {
            
                loadQuiz();
                
                }else{ 
                    quiz.innerHTML = `<h2>You answered correct at ${score}/${quizData.length}</h2>
                    <button onclick="location.reload()">Reload</button>`
                } 
        } 
    } 
});