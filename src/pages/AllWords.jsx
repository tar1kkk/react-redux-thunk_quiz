import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './UI/NavBar';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { deleteTask } from '../redux/reducers/tasks';


function AllWords(props) {
	const dispatch = useDispatch();
	const todos = useSelector((store) => store.tasks.todos);
	return (
		<div>
			<NavBar />
			{todos.map((item) => {
				return (
					<Card bg='primary'
						text='white'
						style={{ width: '20rem', margin: '0 auto' }}
						className="mb-2">
						<Card.Body>
							<Card.Title></Card.Title>
							<Card.Text>
								{item.word} - {item.wordTranslate}
							</Card.Text>
							<Button onClick={() => dispatch(deleteTask(item.id))} variant="danger">Delete</Button>
						</Card.Body>
					</Card>
				)
			})}
		</div >
	);
}

export default AllWords;