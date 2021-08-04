import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
import routes from "./routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const route=routes()

function App() {
  return (
      <div>
          <Header/>
          <Router>
              {route}
          </Router>
          <Footer/>
      </div>
  );
}

export default App;
