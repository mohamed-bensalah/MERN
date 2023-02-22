import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Compound/Home';
import ParamsComponent from './Compound/ParamsComponent';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home/>} />
      <Route path="/:word" element={<ParamsComponent />}/>
      <Route path="/:word/:color/:bgCol" element={<ParamsComponent />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
