import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'Rocky',
    number: 7075077124
  },
  {
    id: 2,
    name: 'Surya',
    number: 9032602071
  },
  {
    id: 3,
    name: 'Chaithanya',
    number: 9866340874
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)