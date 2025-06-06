const { text } = require("framer-motion/client");

const questions=[
    {
        question:"Which is the largest animal in the world?",
        answers:[

        ]
    }, {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Artic",correct:false},
            {text:"Africa",correct:false},
            
        ]
    }
]
const questionElement= document.getElementById("question");
const  answerButton= document.getElementById("answer-buttons");
const  nextButton= document.getElementById("next-btn");