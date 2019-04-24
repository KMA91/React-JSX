import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return "Click on me";
}

const App = () => {
  return (
    <div>
      <label htmlFor="name" className="label">Enter Name</label>
      <input type="text" id="name"/>
      <button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonText()}</button>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
