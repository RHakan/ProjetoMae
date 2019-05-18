import React from 'react';
import logo from './logo.svg';
import './App.css';
import logo2 from './_imagens/App-logo2.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img  src={logo} className="App-logo" alt="logo" />
        <img  src={logo2} className="App-logo2" alt="logo2" />
      </header>
      
      <div className="corpo">
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <div className="menu">
          <ul>
            <li> Home </li>
            <li> Quem somos </li>
            <li> Contato </li>
          </ul>
        </div>
      </div>
      <div className="footer">
          <p>Copyright 2013 - by Rafael Henrique<br/>
            <a href="https://www.linkedin.com/in/rafael-henrique-7b87738b/" target="_blank"> Linkedin </a> |    
            <a href="http://twitter.com/cursoemvideo" target="_blank"> instagram </a>
          </p>
      </div>
        
    </div>
  );
}

export default App;
