import { withTranslation } from "react-i18next";
import React from "react";
import { Switch,Route } from "react-router-dom";

import './App.css';
import Home from "./app/pages/Home/Home";

const App = () => {
  return (
		<>
      <main>
        <Switch>
          <Route exact path="/about" component={Home} />
        </Switch>
      </main>
			<footer>
			</footer>
		</>
  );
}

export default withTranslation()(App);
