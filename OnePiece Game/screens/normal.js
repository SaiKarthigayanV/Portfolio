const questions = [  // questions enbadhu oru array adhukulla question and answers object create panrom access pandradhu kaaga.
    {
        question: "What is the true name of the Devil Fruit formerly known as the Gomu Gomu no Mi?",
        answers: [
            {text: "Hito Hito no Mi, Model: Nika", correct: true},
            {text: "Gomu Gomu no Mi, Model: Rubber", correct: false},
            {text: "Hito Hito no Mi, Model: Joy Boy", correct: false},
            {text: "Mythical Zoan: Sun God Fruit", correct: false},
        ]
    },
        {
        question: "Which Warlord of the Sea was defeated by Luffy in Alabasta?",
        answers: [
            {text: "Gecko Moria", correct: false},
            {text: "Donquixote Doflamingo", correct: false},
            {text: "Sir Crocodile", correct: true},
            {text: "Bartholomew Kuma", correct: false},
        ]
    },
        {
        question: "What is the name of the ancient weapon associated with Alabasta?",
        answers: [
            {text: "Poseidon", correct: false},
            {text: "Uranus", correct: false},
            {text: "Pluton", correct: true},
            {text: "Leviathan", correct: false},
        ]
    },
        {
        question: "Who was the former captain of the Sun Pirates before Jinbe...?",
        answers: [
            {text: "Fisher Tiger", correct: true},
            {text: "Arlong", correct: false},
            {text: "Neptune", correct: false},
            {text: "Otohime", correct: false},
        ]
    },
        {
        question: "What does the 'D.' in the names of the pirates like Monkey D. Luffy's name symbolize according to common belief...?",
        answers: [
            {text: "Demon", correct: false},
            {text: "Davy", correct: true},
            {text: "Dragon", correct: false},
            {text: "Destiny", correct: false},
        ]
    },
        {
        question: "What is the name of the giant elephant that carries Zou on its back...?",
        answers: [
            {text: "Laboon", correct: false},
            {text: "Surume", correct: false},
            {text: "Gan Fall", correct: false},
            {text: "Zunesha", correct: true},
        ]
    },
        {
        question: "Which Yonko did Luffy officially challenge at Whole Cake Island...?",
        answers: [
            {text: "Kaidp", correct: false},
            {text: "Shanks", correct: false},
            {text: "Big Mom", correct: true},
            {text: "Whitebeard", correct: false},
        ]
    },
        {
        question: "Who was the CP9 leader that Luffy fought at Enies Lobby...?",
        answers: [
            {text: "Blueno", correct: false},
            {text: "Rob Lucci", correct: true},
            {text: "Spandam", correct: false},
            {text: "Kaku", correct: false},
        ]
    },
        {
        question: "What is the name of Gol D. Roger's sword...?",
        answers: [
            {text: "Ace", correct: true},
            {text: "Gryphon", correct: false},
            {text: "Murakumogiri", correct: false},
            {text: "Shusui", correct: false},
        ]
    },
        {
        question: "Which island is known as the 'Island of Women' ruled by Boa Hancock...?",
        answers: [
            {text: "Skypia", correct: false},
            {text: "Baltigo", correct: false},
            {text: "Mariejois", correct: false},
            {text: "Amazon Lily", correct: true},
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
const nxtLevelBtn = document.getElementById("nxtLvlBtn");
 
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
        nxtLevelBtn.style.display = "block"
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