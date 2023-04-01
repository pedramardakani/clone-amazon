import "./App.css";
import Products from "./Products";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navigation />
        <Products />
      </header>
      <footer></footer>
    </div>
  );
}

export default App;
