import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="root">
        <h1>First React page rendering...</h1>
      </div>
        <script crossorigin="" src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <script crossorigin="" src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
        <script>
          const App = React.createElement("h1", {}, "Our First React page has rendered");
          ReactDOM.render(App, document.getElementById("root"));
        </script>
    </div>
  );
}

export default App;
