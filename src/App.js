import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
import routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'
const route=routes()

function App() {
  return (
      <div className="news">
          <Router>
          <Header/>
              {route}
          <Footer/>
          </Router>
      </div>
  );
}

export default App;
