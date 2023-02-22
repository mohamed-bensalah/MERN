import './App.css';
import Main from './view/Main';
import {Route, Routes} from "react-router-dom";
import Details from './components/Details';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products/:id/" element={<Details />} />


      </Routes>
    </div>
  );
}

export default App;
