import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function sum(a, b){
  return a + b
}

function primeiroJSX() {
  return (
    <div className='teste'>
      Guilherme Balthar - Introdução ao ReactJS
      <h3>Soma: {sum(10, 18)}</h3>
    </div>
  )
}

const App = () => {
  return (
    <div className='App'>
      {primeiroJSX()}
    </div>
  );
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)