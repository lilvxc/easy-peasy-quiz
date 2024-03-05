const quizData = [
    {
        question:"1. what is the default chart type in Microsoft excel??",
        a:"pie chart",
        b:"line chart",
        c:"surface chart",
        d:"column chart",
        correct:"d",
    },
    {
        question:"2. Which computer virus records every movement you make on the computer?",
        a:"Malware Android",
        b:"DoS",
        c:"Key Logger",
        d:"Trapper",
        correct:"c",
    },
    {
        question: "3.Which keys are used to switch between programs in windows?",
        a: "Ctrl+TAB",
        b: "Alt+TAB",
        c: "Shift+TAB",
        d: "Shift+Enter",
        correct: "b",
    },
    {
        question: "4. What is the mascot of the Linux operating system?",
        a: "Bear",
        b: "Penguin",
        c: "Lion",
        d: "whale",
        correct: "b",
    },
    {
        question:"5. The instruction about booting your system is stored in?",
        a:"RAM",
        b:"CPU",
        c:"BIOS",
        d:"Register",
        correct:"c",
    },
    {
        question:"6. Which symbol is used to separate the username of an email address from that of an ISP?",
        a:"@",
        b:"&",
        c:"$",
        d:"#",
        correct:"a",
    },
    {
        question:"7. Which files are used during the operation of DBMS?",
        a:"Query language and utilities",
        b:"Data manipulation language and query language",
        c:"Data dictionary and transaction log",
        d:"Data dictionary and query language",
        correct: "c",
    },
    {
        question:"8. Which device is designed to send packets using package addresses?",
        a:"Specialty Hub",
        b:"switching hub",
        c:"Port Hub",
        d:"filtering hub",
        correct:"b",
    },
    {
        question:"9. Which symbol is used to separate the username of an email address from that of an ISP?",
        a:"business",
        b:"Drawing",
        c:"Science",
        d:"Commerce",
        correct:"c",
    },
        
   {
        question:"10. What is Oracle?",
        a:"an operating system",
        b:"word processor software",
        c:"Database software",
        d:"none of these",
        correct:"c",
     },
               
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
    f_text.innerText = currentQuizData.f
    g_text.innerText = currentQuizData.g
    h_text.innerText = currentQuizData.h
    i_text.innerText = currentQuizData.i
    j_text.innerText = currentQuizData.j
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
   
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
