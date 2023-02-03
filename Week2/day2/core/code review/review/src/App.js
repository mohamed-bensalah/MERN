import './App.css';
import Error from './componnets/Error';
import Form from './componnets/Form';
import Other from './componnets/Other';
import Main from './componnets/Main';
import { Link, Route, Routes } from 'react-router-dom';
import Hero from './componnets/Hero';

function App() {
  return (
    <div className="App">
      <h1>routing</h1>
      <Link to={"/form"}>Link To Form</Link>
      <Link to={"/hero"}>Link To Hero</Link>
      <Link to={"/main"}>Link To main</Link>
      <Link to={"/other"}>Link To Other</Link>
    <hr/>
      <Form />
    <fieldset>
    <Routes>
    <Route path="/hero/:heroId" element={ <Hero />}/>
    <Route path="/main"  element={ <Main />}/>
    <Route path="/other" element={ <Other/> }/>
    <Route path="/error" element={ <Error/> }/>
    </Routes>
    </fieldset>

    </div>
  );
}

export default App;
