import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <ul>
          <li>
            <Link to="/" className="text-blue-500">Home</Link>
          </li>
        </ul>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
