import React, { useState, useEffect } from "react";
import { withTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import i18n from "./i18n";
import TerminalOptions from "./app/components/organisms/TerminalOptions/TerminalOptions";
import Help from "./app/pages/Help/Help";
import Home from "./app/pages/Home/Home";
import About from "./app/pages/About/About";
import Education from "./app/pages/Education/Education";
import MiddlePage from "./app/pages/MiddlePage/MiddlePage";

const App = () => {
  const [completeState, setCompleteState] = useState(false);
  const [language, setLanguage] = useState("en");
  const [name, setName] = useState("visitor");
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
          <Route exact path="/" element={<Home completeState={completeState} language={language}/>}></Route>
          <Route path="/home" element={<Home completeState={completeState} language={language}/>}></Route>
          <Route path="/help" element={<Help completeState={completeState} language={language}/>}></Route>
          <Route path="/about" element={<About completeState={completeState} language={language}/>}></Route>
          <Route path="/education" element={<Education completeState={completeState} language={language}/>}></Route>
          <Route path="*" element={<MiddlePage completeState={completeState} language={language}/>}></Route>
          <Route element={<MiddlePage completeState={completeState} language={language}/>}></Route>
        </Routes>
      </main>
      <footer className="terminal__footer">
        <TerminalOptions completeText={completeText} resetTextStatus={resetTextStatus} setLanguage={setLanguage} name={name} setName={setName}/>
      </footer>
		</>
  );
}

export default withTranslation()(App);
