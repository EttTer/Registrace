import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Registration from "./components/Registration/Registration";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>REGISTRATION</h1>
        <div className="logo" />
      </header>
      <main>
        <Registration />
      </main>
      <footer>
        <p>Tereza Ettlerová - Czechitas React 2023 </p>
      </footer>
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
