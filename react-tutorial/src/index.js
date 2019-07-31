//end at 24:35 before Functional Component Practice
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// functional components
function MyApp() {
  return <div>
            <h1>
            Finance
            </h1>
            <ul>
              <li>ETF</li>
              <li>Dividend</li>
              <li>Mutual Funds</li>
            </ul>
          </div>
}

function MyInfo() {
  return <div>
          <h1>
            Name: Brian
          </h1>
          <p>
            I'm a new software engineer. Working for a year now in the industry.
          </p>
          <ul>
            <li>Korea</li>
            <li>China</li>
            <li>Japan</li>
          </ul>
         </div>
}

//JSX
ReactDOM.render(<MyInfo />, document.getElementById('root'));

var myNewP = document.createElement('p');
myNewP.innerHTML = "This is a paragraph."