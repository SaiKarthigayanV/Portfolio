const questions = [  // questions enbadhu oru array adhukulla question and answers object create panrom access pandradhu kaaga.
    {
        question: "Who is Mangaka of One Piece...?",
        answers: [
            {text: "Akira Toriyama", correct: false},
            {text: "Masashi Kishimoto", correct: false},
            {text: "Eichiro Oda", correct: true},
            {text: "Tite Kubo", correct: false},
        ]
    },
        {
        question: "What is the name of the main character...?",
        answers: [
            {text: "Kurosaki Ichigo", correct: false},
            {text: "Monkey D Luffy", correct: true},
            {text: "Asta", correct: false},
            {text: "Tanjiro Kamado", correct: false},
        ]
    },
        {
        question: "Who is the first crewmate of luffy...?",
        answers: [
            {text: "Nami", correct: false},
            {text: "Ussopp", correct: false},
            {text: "Vinsmoke Sanji", correct: false},
            {text: "Roronoa Zoro", correct: true},
        ]
    },
        {
        question: "In Which Sea luffy started his journey from...?",
        answers: [
            {text: "East Blue", correct: true},
            {text: "South Blue", correct: false},
            {text: "North Blue", correct: false},
            {text: "West Blue", correct: false},
        ]
    },
        {
        question: "Who is the first enemy luffy faced in his journey...?",
        answers: [
            {text: "Alvida", correct: false},
            {text: "Buggy", correct: false},
            {text: "Captain Morgan", correct: true},
            {text: "Arlong", correct: false},
        ]
    },
        {
        question: "What is the name of the Strawhat's First ship...?",
        answers: [
            {text: "The Saber of Xebec", correct: false},
            {text: "Thousand Sunny", correct: false},
            {text: "Going Merry", correct: true},
            {text: "Polar Tang", correct: false},
        ]
    },
        {
        question: "Which pirate crew did luffy met first in the series...?",
        answers: [
            {text: "Alvida Pirates", correct: true},
            {text: "Buggy Pirates", correct: false},
            {text: "Arlong Park", correct: false},
            {text: "Cross Guild", correct: false},
        ]
    },
        {
        question: "Who is the person who died from falling of from the stairs...?",
        answers: [
            {text: "Ace", correct: false},
            {text: "Kuina", correct: true},
            {text: "Vegapunk", correct: false},
            {text: "Pedro", correct: false},
        ]
    },
        {
        question: "Who is the King Of the Pirates...?",
        answers: [
            {text: "Edward Newgate", correct: false},
            {text: "Silvers Rayleigh", correct: false},
            {text: "Gold Lion Shiki", correct: false},
            {text: "Gol D Roger", correct: true},
        ]
    },
        {
        question: "What is the aim of luffy to become...?",
        answers: [
            {text: "The King Of The Pirates", correct: true},
            {text: "World Strongest Man / Pirate", correct: false},
            {text: "Revolutionary Leader", correct: false},
            {text: "World Strongest Swordsman", correct: false},
        ]
    },
];

const questionElement = document.getElementById("questions"); 
   // Id questions irukura HTML element-a JavaScript la pidikkrom.
   // Idhu question text display panna use aagum.
const answerButtons = document.getElementById("ans-btns");  
   // Id ans-btns irukura div-a select panrom.
   // Indha div kulla answer buttons dynamically add panna porom.
const nextButton = document.getElementById("nextBtn");
   // Next button-a JS control panna select panrom.
   // Question change aagum podhu idhu use aagum.
const commentElement = document.getElementById("comment");
const nxtLevelBtn = document.getElementById("nxtLvlBtn")
 
let currentQuestionIndex = 0; // First Questionla irundhu start panna.
let score = 0; // Score 0 la vechi start panna.

function startQuiz(){   // Indha function quiz start / restart panna use aagum.
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"; // Next button text correct-aa irukka set pannrom.
    showQuestion(); // Indha function dhaa starting laye questions ah show panna help pannum.
}

function showQuestion(){
    reserState(); // Previous question irundha old buttons clear panna.
                  // New question clean-aa load aaganum.
    let currentQuestion = questions[currentQuestionIndex]; // Questions array-la irundhu
                                                           // Current index-ku thevaiyana question object eduthukkrom.
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Screen-la question text display pannrom.
                                   // answer is a temporary variable that stores the answers objects content.
    currentQuestion.answers.forEach( answer => {  // Current question-oda ellaa answers-um loop pannrom. 
    // currentQuestion.answers.forEach na
    //“Indha question-oda ellaa answer options-um onnu onnaa eduthu button create pannunga”
        const button = document.createElement("button");
        button.innerHTML = answer.text;   // Oru new button element create panni andha button mela answer oda text display panna vekirom. Andha questionla evlo answers irukoo avlo buttoon with its answer text um create aagidum.
        button.classList.add("btns"); // For styling purposes
        answerButtons.appendChild(button);  // Indha buttons ahh answerButtons div kulla push panrom.

        if(answer.correct){ // Select panna answer correct ahh irundha indha condition work aagum.
            button.dataset.correct = answer.correct; // dataset na enna?
                // dataset na HTML data- attribute*, JavaScript-la data store panna use pannrom.
        }
        button.addEventListener("click", selectAnswer);
    })
}

function reserState(){  // Indha function old question cleanup panna use aagum.
    nextButton.style.display = "none"; // Next button-a temporary-aa hide pannrom. Answer select panna apram thaan show panna.
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }   // Answer buttons container-la irukura Ellaa old buttons-um remove pannrom. Illatti new buttons old buttons-oda mix aagidum.
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => { // Answer buttons container-kulla irukura ellaa buttons-um array-aa convert panni loop pannrom.
        if(button.dataset.correct === "true"){
            button.classList.add("correct"); //Correct answer irukura button-ah
                          // User click pannalum pannalatti-yum
                   // green color-la highlight pannrom.
            // Idhu user-ku correct answer theriya help pannum
        }
        button.disabled = true; // Ellaa buttons-um disable pannrom.
                // User marubadi click panna mudiyadhu.
    });
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

function showScore(){
    reserState();
    questionElement.innerHTML = `You Have Scored ${score} out of ${questions.length}`;
    commentElement.style.display = "block";
    if(score<5){
        commentElement.innerHTML = "Do you really a fan of One Piece..."
    }
    else if(score == 5){
        commentElement.innerHTML = "Moderate fan ehh...."
    }
    else{
        commentElement.innerHTML = "Good You are ready for the next levels..."
    }
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    if(score>8){
        nxtLevelBtn.style.display= "block";
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz(); // Page load aagum podhu, Quiz automatically start aagum.