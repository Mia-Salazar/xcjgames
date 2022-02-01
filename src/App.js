import React from "react";
import { withTranslation } from "react-i18next";
import { Routes,Route } from "react-router-dom";

import './App.scss';
import Home from "./app/pages/Home/Home";

const App = () => {
  return (
		<>
      <div className="terminal">
        <main className="terminal__main">
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
          </Routes>
        </main>
        <footer>
        </footer>
      </div>
		</>
  );
}

export default withTranslation()(App);
