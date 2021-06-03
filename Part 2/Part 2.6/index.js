import ReactDOM from 'react-dom'
import App from './App.js'

const persons = [
  {
    id: 1,
    name: 'Rocky'
  },
  {
    id: 2,
    name: 'Surya'
  },
  {
    id: 3,
    name: 'Chaithanya'
  }
]

ReactDOM.render(
  <App persons={persons} />,
  document.getElementById('root')
)