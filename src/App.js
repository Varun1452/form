import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

   <form>
        <label>
            name:
            <input type="name" placeholder='enter your name' /> 
            </label>
            <label>
            <input type="submit" />
        </label>
    </form>
    
  
      {/* <h1>heading1</h1>
      <h2>heading2</h2>
      <h3>heading3</h3>
      <h4>heading4</h4>
      <h5>heading5</h5>
      <h6>heading6</h6> */}
    </div>
  );
}

export default App;
