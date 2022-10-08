const ADD = 'ADD';
const DEL = 'DEL';

const initialState = {
	todos: [{
		word: 'Hello',
		wordTranslate: 'Привет',
		id: Date.now()
	}]
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD: {
			return {
				...state,
				todos: [...state.todos, {
					word: action.word,
					wordTranslate: action.wordTranslate,
					id: Date.now()
				}]
			}
		}
		case DEL: {
			return {
				...state,
				todos: state.todos.filter((item) => item.id !== action.id),
			}
		}
		default: return state;
	}
}
export const addTask = (word, wordTranslate) => {
	return (dispatch) => {
		return dispatch({ type: ADD, word, wordTranslate })
	}
}

export const deleteTask = (id) => {
	return (dispatch) => {
		return dispatch({ type: DEL, id })
	}
}