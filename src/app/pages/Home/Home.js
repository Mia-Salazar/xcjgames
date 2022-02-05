import React from "react";

import Logo from "../../../assets/images/logo.png"
import ConsoleText from "../../components/atoms/ConsoleText/ConsoleText";
import "./Home.scss";

export const Home = ({completeState}) => {
	
	return (
		<>
			<section className="home">
				<ConsoleText text="home.title" complete={completeState}/>
				<figure className="home__figure">
					<img className="home__image" alt="" src={Logo}/>
				</figure>
			</section>
		</>
	);
};

export default Home;