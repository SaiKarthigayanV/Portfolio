const questions = [  // questions enbadhu oru array adhukulla question and answers object create panrom access pandradhu kaaga.
    {
        question: "What is written on the Poneglyph found in the Sea Forest near Fish-Man Island...?",
        answers: [
            {text: "The location of the Uranus", correct: false},
            {text: "Joy Boy's apology to Poseidon", correct: true},
            {text: "Instructions to activate Pluton", correct: false},
            {text: "The true history of the Void Century", correct: false},
        ]
    },
        {
        question: "Which family originally ruled the kingdom that later became Dressrosa...?",
        answers: [
            {text: "Riku Family ", correct: false},
            {text: "Donquixote Family", correct: true},
            {text: "Nefertari Family", correct: false},
            {text: "Figarland Family", correct: false},
        ]
    },
        {
        question: "What was the original name of the Ancient Kingdom erased during the Void Century...?",
        answers: [
            {text: "It is still unknown", correct: true},
            {text: "The Great Kingdom", correct: false},
            {text: "Laugh Tale", correct: false},
            {text: "Dawn Kingdom", correct: false},
        ]
    },
        {
        question: "Which Devil Fruit power did Trafalgar D. Water Law first use publicly at Sabaody Archipelago...?",
        answers: [
            {text: "Personality Transplant", correct: false},
            {text: "Radio Knife", correct: false},
            {text: "Gamma Knife", correct: false},
            {text: "Shambles", correct: true},
        ]
    },
        {
        question: "What is the name of the sword that killed Kozuki Oden...?",
        answers: [
            {text: "Thunder Bagua", correct: false},
            {text: "Murakumogiri", correct: false},
            {text: "He was not killed by a sword", correct: true},
            {text: "Ame no Habakiri", correct: false},
        ]
    },
        {
        question: "Which race is King (Kaido’s right-hand man) revealed to belong to...?",
        answers: [
            {text: "Sky People", correct: false},
            {text: "Oni", correct: false},
            {text: "Lunarian", correct: true},
            {text: "Ancient People", correct: false},
        ]
    },
        {
        question: "What was the original purpose of the Noah ship...?",
        answers: [
            {text: "To carry Fish-Men to the surface", correct: true},
            {text: "A weapon against the World Government", correct: false},
            {text: "A vessel for Joy Boy’s return", correct: false},
            {text: "A transport for Ancient Weapons", correct: false},
        ]
    },
        {
        question: "Which statement about Imu is confirmed in the manga...?",
        answers: [
            {text: "Imu possesses a Devil Fruit", correct: false},
            {text: "Imu commands the Gorosei", correct: true},
            {text: "Imu is immortal due to the Ope Ope no Mi", correct: false},
            {text: "Imu is from the Ancient Kingdom", correct: false},
        ]
    },
        {
        question: "What ability allows Kozuki clan members to carve Poneglyphs...?",
        answers: [
            {text: "Armament Hak", correct: false},
            {text: "Voice of All Things", correct: false},
            {text: "Advanced Ryuo", correct: false},
            {text: "A lost ancient technique", correct: true},
        ]
    },
        {
        question: "What is the significance of the giant straw hat seen in Mariejois...?",
        answers: [
            {text: "Its owner is still unknown", correct: true},
            {text: "It belonged to Joy Boy", correct: false},
            {text: "It is an Ancient Weapon ke", correct: false},
            {text: "It belonged to Imu", correct: false},
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
        commentElement.innerHTML = "Congratulations you have cleared the hard level...Stay Updated for Games and Quiz Like this...THANKS FOR PLAYING THE QUIZ I CREATED..."
    }
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
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