import React from 'react'

const Part = () => {
  const course = 'Full Stack application development'
  const part1 = 'Introduction to React'
  const exercises1 = 32

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <Part />
      <Part />
      <Part />
    </div>
  )
}

export default Content;