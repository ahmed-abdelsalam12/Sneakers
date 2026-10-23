import Navbar from "./comp/Navbar";
import './App.css';
import Main from "./comp/Main";
import Portal from "./comp/Portal";

function App() {
  return (
    <div className="App">
      <div class="container">
        <Navbar />
        <hr id="hr"></hr>
        <Main />
        <Portal />
      </div>
    </div>
  );
}

export default App;
