function solve() {
  let quizzie = document.getElementById('quizzie')
  let section = document.getElementsByTagName('section')

  let correctAnswers = ['onclick','JSON.stringify()','HTML'];
  let userAnswers = 0;

  let currentStep = 0;

    quizzie.addEventListener('click', (e) =>{

    if(e.target.className === 'answer-text'){
      console.log(e.target.innerHTML);

      section[currentStep].style.display = 'block';

      if(correctAnswers.some(answer => answer === e.target.innerHTML)){
        userAnswers++;
      }
      
      currentStep++;
    }

  });
  
}
