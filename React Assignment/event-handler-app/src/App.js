import logo from './logo.svg';
import './App.css';
import Counter from './compontents/Counter';
import TextInput from './compontents/TextInput';
import Toggle from './compontents/Toggle';


function App() {
  return (
    <div className="App">
      <h1>Assignment 2: State & Events Handling</h1>
      <Counter />
      <TextInput />
      <Toggle />
    </div>
  );
}

export default App;
