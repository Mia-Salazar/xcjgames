import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./i18n";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const Loader = () => (
	<div>loading...</div>
);

ReactDOM.render(
	<BrowserRouter basename="/">
		<Suspense fallback={<Loader />}>
			<App />
		</Suspense>
	</BrowserRouter>,
	document.getElementById("root")
);
reportWebVitals();
