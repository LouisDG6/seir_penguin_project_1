//****************** */
// APP STATE
//****************** */

const state = {
    player1: 0,
    player2: 0,
    currentQuestion: {},
    which: true
}

let questions = []

//****************** */
// MAIN DOM ELEMENTS
//****************** */

const $question = $("#question")
const $a = $("#a")
const $b = $("#b")
const $c = $("#c")
const $d = $("#d")
const $p1score = $("#player1 h4")
const $p2score = $("#player2 h4")



//****************** */
// FUNCTIONS
//****************** */

const chooseAnswer = (event, question) => {
    console.log(event)
    if(event.target.innerText === question.answer){
        if (state.which){
            alert("Nice Job!")
            state.player1++
            state.which = !state.which
        }else{
            state.player2++
            alert("Nice Job!")
            state.which = !state.which
        }
        setBoard(questions)
    } else {
        alert("Hmmm That's Not It!")
        setBoard(questions)
        state.which = !state.which
    }
}

const setBoard = (q) => {
    const randomIndex = Math.floor(Math.random() * q.length)
    const randomQuestion = q[randomIndex]

    $question.text(randomQuestion.question)
    $a.text(randomQuestion.a)
    $b.text(randomQuestion.b)
    $c.text(randomQuestion.c)
    $d.text(randomQuestion.d)

    $p1score.text(state.player1)
    $p2score.text(state.player2)

    $("li").off()
    $("li").on("click", (event) => { 
        chooseAnswer(event, randomQuestion)
    })
}


//****************** */
// MAIN APP LOGIC
//****************** */


$.ajax("https://cdn.contentful.com/spaces/vhrctnuickb8/environments/master/entries?access_token=vHNsrM2rZpsP94XIxXLYrBDqqbbtVECuU-bTJcBUqOQ&content_type=triviaq")
.then((data) => {
    questions = data.items.map((q) => q.fields)
    console.log(data)
    console.log(questions)

    setBoard(questions)
    
})