import React from 'react';
import './App.css';
import {NavBar} from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
          
          <NavBar/>
          <Banner/>
          <Skills/>
          <Contact/>
          <Footer/>
    </div>
  );
}

export default App;
