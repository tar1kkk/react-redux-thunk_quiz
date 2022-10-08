import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NavBar from './UI/NavBar';

function Mainpage(props) {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const arrWord = useSelector((store) => store.tasks.todos);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	}
	function createQuestion(currentWord) {
		return {
			questionText: currentWord.word,
			answerOpstions: createAnswerOption(currentWord)
		}
	}
	function createAnswerOption(currentWord) {
		if (arrWord.length < 3) {
			return [
				{ answerText: currentWord.wordTranslate, isCorrect: true },
				{ answerText: 'dsasadsad', isCorrect: false },
				{ answerText: 'asdsadsadsaddsf', isCorrect: false },
				{ answerText: 'sdfdfgfjhgj', isCorrect: false }
			];
		} else {
			const arrAnswers = createNotCorrectAnswers(currentWord);
			return arrAnswers.map((item) => {
				return { answerText: item.wordTranslate, isCorrect: currentWord.word === item.word }
			})
		}
	}
	function createNotCorrectAnswers(currentWord) {
		const range = arrWord.length - 1;
		const count = 3;

		let m = {};
		let randomNumArr = [];
		for (let i = 0; i < count; ++i) {
			let randomNum = Math.floor(Math.random() * (range - i));
			randomNumArr.push(((randomNum in m) ? m[randomNum] : randomNum));
			let length = range - i - 1;
			m[randomNum] = (length in m) ? m[length] : length;
		}
		const arrAnswers = randomNumArr.map((i) => {
			if (arrWord[i].id !== currentWord.id) {
				return arrWord[i];
			} else {
				return arrWord[arrWord.length - 1];
			}
		})
		console.log(arrAnswers);
		arrAnswers.push(currentWord);
		return arrAnswers;
	}
	// function createArrNumberUniq() {
	// 	const prevArr = arrWord.length;
	// 	console.log(prevArr);
	// }
	// console.log(createArrNumberUniq())

	const questions = arrWord.map(el => {
		return createQuestion(el);
	});
	return (
		<div>
			<NavBar />
			<div className='app'>

				{
					showScore
						? <div className='section_score'>
							<div>Правильных ответов {score} из {questions.length}</div>
						</div>
						: <div className='quizz'>
							<div className='question_section'>
								<div className='question_count'>
									<span>Вопрос {currentQuestion + 1} </span> / {questions.length}
								</div>
								<div className='question_text'>{questions[currentQuestion].questionText}</div>
							</div>
							<div className='answer_section'>
								{questions[currentQuestion].answerOpstions.map((i) => {
									return <button onClick={() => handleAnswerOptionClick(i.isCorrect)}>{i.answerText}</button>
								})}
							</div>
						</div>
				}
			</div>
		</div>
	);
}

export default Mainpage;