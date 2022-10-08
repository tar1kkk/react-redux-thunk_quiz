import React, { useState } from 'react';
import NavBar from './UI/NavBar';
import '../App.css';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/reducers/tasks';


function CreateWord(props) {
	const dispatch = useDispatch();
	const todos = useSelector((store) => store.tasks.todos);
	const [word, setWord] = useState('');
	const [wordTranslate, setWordTranslate] = useState('');

	return (
		<div>
			<NavBar />
			<div className='wrap'>
				<h6>Слово</h6>
				<input value={word} onChange={(e) => setWord(e.target.value)} type='text' className='inp-stl' />
				<h6>Перевод</h6>
				<input value={wordTranslate} onChange={(e) => setWordTranslate(e.target.value)} type='text' className='inp-stl' />
				<Button style={{ marginTop: '10px' }} onClick={() => {
					dispatch(addTask(word, wordTranslate));
					setWord('');
					setWordTranslate('');
				}} variant="success">Save</Button>
			</div>
		</div >
	);
}

export default CreateWord;