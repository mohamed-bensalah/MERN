import './App.css';
import Four from './compound/Four';
import Home from './compound/Home';
import Hellored from './compound/Hellored';
import Hello from './compound/Hello';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Hellored />
      <fieldset>
    <Routes>
        <Route path="/Home" element={ <Home />}/>
        {/* <Four />
        <Hellored />
        <Hello /> */}
        </Routes>
    </fieldset>

    </div>
  );
}

export default App;
