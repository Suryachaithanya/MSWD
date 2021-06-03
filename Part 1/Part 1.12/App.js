import React, {useState} from "react";
import ReactDOM from "react-dom";

const App = () => {
	const [index, setIndex] = useState(0)
	
	const anecdotes = [
		'I do not fear computers. I fear lack of them',
		'The computer was born to solve problems that did not exist before',
		'Software is a gas; it expands to fill its container',
		'The more you know, the more you realize you know nothing',
		'Standards are always out of date.  That’s what makes them standards',
		'If you think your users are idiots, only idiots will use it'
	]
	
	const handleChange = () => {
		setIndex(Math.floor(Math.random()*anecdotes.length))
	}
	
	return (
		<div>
			<button onClick = {handleChange}>Click Me!!!</button>
			<h1>{anecdotes[index]}</h1>
		</div>
	)
}

export default App;