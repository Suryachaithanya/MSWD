import './App.css';
import React from 'react'

const App = () => {
  const course = 'Full Stack application development'
  const part1 = 'Introduction to React'
  const exercises1 = 13
  const part2 = 'Usage of props'
  const exercises2 = 6
  const part3 = 'Component state'
  const exercises3 = 18

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App;