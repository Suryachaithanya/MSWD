import React, {useState} from "react";
import ReactDOM from "react-dom";

const App = () => {
	const [index, setIndex] = useState(0)
	const [vote, setVote] = useState({
		0: 0,
		1: 0,
		2: 0,
		3: 5,
		4: 0,
		5: 0
	})
	
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
	
	const voteChange = () => {
		setVote({
			...vote,
			[index]: vote[index]+1
		})
	}
	
	const findMax = () => {
		let max = -1, maxKey = -1
		
		for(let key in vote) {
			if (vote[key] > max) {
				maxKey = key
				max = vote[key]
			}
		}
		return maxKey
	}
	
	return (
		<div>
			<h1>Anecdote of the Day</h1>
			<button onClick = {handleChange}>Next Anecdotes!!!</button><br/>
			<button onClick = {voteChange}>Vote</button>
			<h2>{anecdotes[index]}</h2>
			<h3>Has {vote[index]} Votes</h3><br/>
			<h1>Anecdote with most Votes</h1>
			<h3>{anecdotes[findMax()]}</h3>
		</div>
	)
}

export default App;