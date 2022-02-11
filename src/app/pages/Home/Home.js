import React from "react";
import PropTypes from "prop-types";

import Logo from "../../../assets/images/logo.png"
import ConsoleText from "../../components/atoms/ConsoleText/ConsoleText";
import "./Home.scss";

export const Home = ({completeState, language}) => {
	
	return (
		<>
			<section className="home">
				<ConsoleText text="home.title" complete={completeState} language={language} />
				<ConsoleText text="home.title" complete={completeState} language={language} />
				<ConsoleText text="home.title" complete={completeState} language={language} />
				<ConsoleText text="home.title" complete={completeState} language={language} />
				<ConsoleText text="home.title" complete={completeState} language={language} />
				<ConsoleText text="home.title" complete={completeState} language={language} />
				<ConsoleText text="home.title" complete={completeState} language={language} />
				<ConsoleText text="home.title" complete={completeState} language={language} />
				<figure className="home__figure">
					<img className="home__image" alt="" src={Logo}/>
				</figure>
			</section>
		</>
	);
};

Home.propTypes = {
    complete: PropTypes.bool,
	language: PropTypes.string,
};

Home.displayName = "Home";

export default Home;