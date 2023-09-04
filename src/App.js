import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";
import Contacts from "./nofile/Contacts";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
       <div className="App">
           <Router>
           <Header/>
               <Routes>
                   <Route exact path="/" element={<Home/>}></Route>
                   <Route path="/catalog" element={<Catalog/>}></Route>
               </Routes>
           <Footer/>
          </Router>
       </div>
);
}

export default App;
