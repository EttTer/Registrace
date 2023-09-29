import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Registration from './components/Registration/Registration';

const App = () => {
  return (
    <div className="container">
      <header> 
        <h1>Registrace</h1>
        <div className="logo" />
       
      </header>
      <main>
      <Registration/>
        
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
