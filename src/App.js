import React, { useState, useEffect } from "react";
import { withTranslation } from "react-i18next";
import { Routes,Route } from "react-router-dom";

import './App.scss';
import i18n from "./i18n";
import TerminalOptions from "./app/components/molecules/TerminalOptions/TerminalOptions";
import Help from "./app/pages/Help/Help";
import Home from "./app/pages/Home/Home";
import About from "./app/pages/About/About";

const App = () => {
  const [completeState, setCompleteState] = useState(false);
  const [language, setLanguage] = useState("en");
  const completeText = () => {
    setCompleteState(!completeState);
  }
  const resetTextStatus = () => {
    setCompleteState(false);
  }
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  return (
		<>
      <main className="terminal__main">         
        <Routes>
          <Route exact path='/' element={<Home completeState={completeState}/>}></Route>
          <Route exact path='/home' element={<Home completeState={completeState}/>}></Route>
          <Route exact path='/help' element={<Help completeState={completeState}/>}></Route>
          <Route exact path='/about' element={<About completeState={completeState}/>}></Route>
        </Routes>
      </main>
      <footer className="terminal__footer">
        <TerminalOptions completeText={completeText} resetTextStatus={resetTextStatus} setLanguage={setLanguage}/>
      </footer>

		</>
  );
}

export default withTranslation()(App);
