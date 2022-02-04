import React from "react";

import Logo from "../../../assets/images/logo.png"
import ConsoleText from "../../components/atoms/ConsoleText/ConsoleText";
import Container from "../../components/atoms/Container/Container";
import "./Home.scss";

export const Home = () => {
	const fullText = () => {
		console.log('wichi')
	  }
	return (
		<Container>
			<section className="home" onClick={fullText}>
				<ConsoleText text="home.title"/>
				<figure className="home__figure">
					<img className="home__image" alt="" src={Logo}/>
				</figure>
			</section>
		</Container>


	);
};

export default Home;