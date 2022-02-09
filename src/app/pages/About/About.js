import React from "react";
import PropTypes from "prop-types";

import ConsoleText from "../../components/atoms/ConsoleText/ConsoleText";

export const About = ({completeState, language}) => {
	
	return (
		<>
			<section className="about">
				<ConsoleText text="about.title" complete={completeState} language={language}/>
                <ConsoleText text="about.subtitle" complete={completeState} language={language}/>
			</section>
		</>
	);
};

About.propTypes = {
    complete: PropTypes.bool,
    language: PropTypes.string,
};

About.displayName = "About";

export default About;