const questions =[
    {
        question:"What number comes next in the series : 2, 6, 12, 20, 30, ?",
        answers:[
            {text:"40",correct:false},
            {text:"42",correct:true},
            {text:"46",correct:false},
            {text:"52",correct:false},
        ]
    },
    {
        question:"If all roses are flowers and some flowers fade quickly, which of the following is true?",
        answers:[
            {text:"Some roses fade quickly.",correct:true},
            {text:"All flowers fade quickly.",correct:false},
            {text:" No flowers fade quickly.",correct:false},
            {text:"Some roses do not fade quickly.",correct:false},
        ]
    },
    {
        question:"Which shape completes the sequence?Sequence: Square, Triangle, Circle, Square, Triangle, ?",
        answers:[
            {text:"Square",correct:false},
            {text:" Triangle",correct:false},
            {text:"Circle",correct:true},
            {text:" Hexagon",correct:false},
        ]
    },
    {
        question:"What is the missing number in the sequence? 4, 9, 19, 39, ?",
        answers:[
            {text:"59",correct:false},
            {text:"69",correct:false},
            {text:"79",correct:true},
            {text:"89",correct:false},
        ]
    },
    {
        question:"Which word does not belong in the list?",
        answers:[
            {text:"Apple",correct:false},
            {text:"Banana",correct:false},
            {text:"Orange",correct:false},
            {text:"Carrot",correct:true},
        ]
    }
];
const questionElement =document.getElementById("question");
const answerButtons =document.getElementById("answer-buttons");
const nextButton =document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML= "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +"."+ currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;  
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        });
    Array.from(answerButtons.children).forEach(button => {

        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    
    }
    
function handleNextButton() {
currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
    showQuestion();
} else {
    showScore();
}

}


nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();

