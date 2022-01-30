import { withTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";


import i18n from "./i18n";
import logo from './logo.svg';
import './App.css';

function App() {
  const [language, setLanguage] = useState("en");
	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
		setLanguage(language);
	};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {i18n.t("hi")}
        <div className="language-buttons" aria-label={i18n.t("navbar.lang")}>
			<button  onClick={() => changeLanguage("en")}>en</button>
			<button  onClick={() => changeLanguage("es")}>es</button>
		</div>
      </header>
    </div>
  );
}

export default withTranslation()(App);
