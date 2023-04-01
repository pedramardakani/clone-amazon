import "./App.css";
import Products from "./Products";
import Navigation from "./Navigation";
import Signin from "./Signin";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navigation />
        <Signin />
        <Products />
      </header>
      <footer></footer>
    </div>
  );
}

export default App;
