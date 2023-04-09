import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navigation from "./Navigation";
import Products from "./Products";
import Signin from "./Signin";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Navigation />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Producs" element={<Products />} />
        </Routes>
      </header>
      <footer></footer>
    </div>
  );
}

export default App;
