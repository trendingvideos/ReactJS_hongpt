import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { Footer } from './Footer';
// state, data trong app

const student = {
  name: 'Tung',
  age: 30,
};
const counter = 10;
// function App() {

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
// }
  function App() {
    // const [counter, setCounter] = useState(100);
    var counter = 0;

  return (
    <div className='App'>
      <h1 className='change-text'>Hello ae</h1>
      <h3>age: {student.age}</h3>
      <h6>Tinh tong: 10 + 20 = {10 + 20}</h6>
      <h3>counter = {counter}</h3>
      <button 
        onClick={() => {
          // setCounter(counter + 2);
          
          counter +=1;
          console.log('counter:', counter);

        }}
        >Button</button>
        <Footer/>
    </div>
  );
}

export default App;
