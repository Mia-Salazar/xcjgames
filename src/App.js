import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import { Routes,Route } from "react-router-dom";

import './App.scss';
import TerminalOptions from "./app/components/molecules/TerminalOptions/TerminalOptions";
import Help from "./app/pages/Help/Help";
import Home from "./app/pages/Home/Home";

const App = () => {
  const [completeState, setCompleteState] = useState(false);
  const completeText = () => {
    setCompleteState(!completeState)
  }
  return (
		<>
      <main className="terminal__main">         
        <Routes>
          <Route exact path='/' element={<Home completeState={completeState}/>}></Route>
          <Route exact path='/help' element={<Help completeState={completeState}/>}></Route>
        </Routes>
      </main>
      <footer className="terminal__footer">
        <TerminalOptions completeText={completeText}/>
      </footer>

		</>
  );
}

export default withTranslation()(App);
