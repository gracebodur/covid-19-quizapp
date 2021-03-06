'use strict'

function updateScore(score) {
	$('#score').text(score)
}

function generateStartHTML() {
	return `
  <div class="intro-container">
  <p class='intro-text'>Think you know eveything there is to know about the Coronavirus-19?
  Test your knowledge with this quiz!</p> 
  <button id="startQuizButton">Start Quiz</button>
  </div>
  `
}

function generateAnswerHTML(answer, index) {
	return `<li><input type="radio" id="answer${index}" name="answer" value="${index}" required><label for="answer${index}" class='answer-list'>${answer.text}</label></li>`
}

function generateQuestionHTML(question, questionNumber) {
	return `
    <div class='question-container'>
      <h2 class='question-title'>Question ${questionNumber + 1}</h2>    
      <form role="form" class="quiz">
        <fieldset>
          <legend>
            ${question.text}
           </legend>
              <ol type="A" class='ql-container'>
                ${question.answers.map(generateAnswerHTML).join('\n')}
              </ol>
              <button id="submitAnswer">Submit</button>
        </fieldset> 
      </form>
    </div>
  `
}

function generateFeedBackHTML(selectedAnswer, correctAnswer) {
	const message = selectedAnswer.isCorrect
		? 'Well done, that is correct!'
		: "Sorry, thats incorrect... but don't give up!"
	const correctAnswerMessage = selectedAnswer.isCorrect
		? ''
		: `<p class='correct-answer'>The correct answer is: ${correctAnswer.text}.</p>`
	const buttonText = isLastQuestion(1) ? 'Quiz Score' : 'Next Question'
	return `
      <div class='feedback-container'>
      <h2>${message}</h2>
      ${correctAnswerMessage}
      <button id="nextQuestionButton">${buttonText}</button>
      </div>
      `
}

function generateFinalMessage(score) {
	let message = ''
	switch (score) {
		case 0:
			message =
				'Protect yourself from the coronavirus practice good hygiene, respiratory etiquette and social distancing.'
			break
		case 1:
			message =
				'Protect yourself from the coronavirus practice good hygiene, respiratory etiquette and social distancing.'
			break
		case 2:
			message =
				'Protect yourself from the coronavirus practice good hygiene, respiratory etiquette and social distancing.'
			break
		case 3:
			message =
				'Protect yourself from the coronavirus practice good hygiene, respiratory etiquette and social distancing.'
			break
		default:
			message =
				'Protect yourself from the coronavirus practice good hygiene, respiratory etiquette and social distancing.'
			break
	}
	return message
}

function generateFinalHTML(score, maxScore) {
	return `
    <div class='final-container'>
      <h2>You've reached the end of this quiz!</h2>
      <p class='final-text'>You scored ${score} out of ${maxScore} questions correctly!</p>
      <p class='final-text'>${generateFinalMessage(score)}<p>
      <button id="restartQuizButton">Restart Quiz</button>
    </div>
      `
}

function renderStartPage() {
	$('section').html(generateStartHTML())
}

function renderFinalPage(score, maxScore) {
	$('section').html(generateFinalHTML(score, maxScore))
}

function renderFeedBackPage(selectedAnswer, correctAnswer) {
	$('section').html(generateFeedBackHTML(selectedAnswer, correctAnswer))
}

function getCurrentQuestion() {
	return QUIZ.questions[QUIZ.answers.length]
}

function renderCurrentQuestion() {
	renderQuestionPage(getCurrentQuestion(), QUIZ.answers.length)
}

function renderQuestionPage(question, questionNumber) {
	$('section').html(generateQuestionHTML(question, questionNumber))
}

function handleStartQuiz() {
	$('section').on('click', '#startQuizButton', function (event) {
		renderCurrentQuestion()
		$('#title').hide()
		$('.bg').css('background-image', 'url(./img/bg2.png)')
	})
}

function findCorrectAnswer(question) {
	return question.answers.find(function (answer) {
		return answer.isCorrect
	})
}

function handleQuestionFormSubmit() {
	$('section').on('submit', 'form', function (event) {
		event.preventDefault()
		const selectedAnswerIndex = parseInt($("input[name='answer']:checked").val())
		const selectedAnswer = getCurrentQuestion().answers[selectedAnswerIndex]
		renderFeedBackPage(selectedAnswer, findCorrectAnswer(getCurrentQuestion()))
		QUIZ.answers.push(selectedAnswer)
		showCurrentScore()
	})
}

function calculateScore() {
	return QUIZ.answers.filter(function (answer) {
		return answer.isCorrect
	}).length
}

function isLastQuestion(offset = 0) {
	return !(QUIZ.answers.length + offset < QUIZ.questions.length)
}

function handleNextQuestion() {
	$('section').on('click', '#nextQuestionButton', function (event) {
		if (!isLastQuestion()) {
			renderCurrentQuestion()
		} else {
			renderFinalPage(calculateScore(), QUIZ.questions.length)
		}
	})
}

function showCurrentScore() {
	updateScore(calculateScore())
}

function restartQuiz() {
	QUIZ.answers = []
	showCurrentScore()
	renderStartPage()
}

function handleRestartQuiz() {
	$('section').on('click', '#restartQuizButton', function (event) {
		restartQuiz()
		$('#title').show()
		$('.bg').css('background-image', 'url(./img/bg.png)')
	})
}

function setUpEventHandlers() {
	handleStartQuiz()
	handleQuestionFormSubmit()
	handleNextQuestion()
	handleRestartQuiz()
}

function initializeQuiz() {
	setUpEventHandlers()
	renderStartPage()
}

$(initializeQuiz)
