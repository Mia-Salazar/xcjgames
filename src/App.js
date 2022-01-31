import React from "react";
import { withTranslation } from "react-i18next";
import { Routes,Route } from "react-router-dom";

import './App.scss';
import Home from "./app/pages/Home/Home";

const App = () => {
  return (
		<>
      <div className="terminal">
        <main>
          <Routes>
            <Route exact path="/about" component={Home} />
          </Routes>
        </main>
        <footer>
        </footer>
      </div>
		</>
  );
}

export default withTranslation()(App);
