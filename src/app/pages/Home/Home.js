import React from "react";

import i18n from "../../../i18n";
import ConsoleText from "../../components/atoms/ConsoleText/ConsoleText";
import "./Home.scss";

export const Home = () => {
	return (
        <section className="home">
			<ConsoleText text="home"/>
		</section>
	);
};

export default Home;