import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Mearn Stack Web Development'
  const part1 = {
    name: 'MongoDB',
    exercises: 9
  }
  const part2 = {
    name: 'Express.js',
    exercises: 10
  }
  const part3 = {
    name: 'Angular CLI',
    exercises: 13
  }
  const part4 = {
    name: 'React.js',
    exercises: 12
  }
  const part5 = {
    name: 'Node.js',
    exercises: 15
  }

  return (
    <div>
      <h1>{course}</h1>
	  <p>{part1.name}: {part1.exercises}</p>
	  <p>{part2.name}: {part2.exercises}</p>
	  <p>{part3.name}: {part3.exercises}</p>
    <p>{part4.name}: {part4.exercises}</p>
    <p>{part5.name}: {part5.exercises}</p>
	  <p>Total Number of exercises: {part1.exercises + part2.exercises + part3.exercises + part4.exercises + part5.exercises}</p>
    </div>
  )
}

export default App;