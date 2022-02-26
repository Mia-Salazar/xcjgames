import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import "./i18n";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const Loader = () => (
	<div>loading...</div>
);

ReactDOM.render(
	<HashRouter basename="/">
		<Suspense fallback={<Loader />}>
			<App />
		</Suspense>
	</HashRouter>,
	document.getElementById("root")
);
reportWebVitals();
