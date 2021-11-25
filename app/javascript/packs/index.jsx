import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../components/App'
import { BrowserRouter as Router} from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>
    ,
    document.body.appendChild(document.createElement('div')),
  )
})
