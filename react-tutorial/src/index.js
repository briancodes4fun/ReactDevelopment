//end at 24:35 before Functional Component Practice
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


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

//JSX
ReactDOM.render(<MyApp />, document.getElementById('root'));

var myNewP = document.createElement('p');
myNewP.innerHTML = "This is a paragraph."