import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'Rocky',
    number: 6300797990
  },
  {
    id: 2,
    name: 'Surya',
    number: 996365700
  },
  {
    id: 3,
    name: 'Chaithanya',
    number: 9491650118
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)