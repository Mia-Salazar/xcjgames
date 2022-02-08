import React from "react";
import PropTypes from "prop-types";

import ConsoleText from "../../components/atoms/ConsoleText/ConsoleText";

export const About = ({completeState}) => {
	
	return (
		<>
			<section className="about">
				<ConsoleText text="about.title" complete={completeState}/>
                <ConsoleText text="about.subtitle" complete={completeState}/>
			</section>
		</>
	);
};

About.propTypes = {
    complete: PropTypes.bool,
};

About.displayName = "About";

export default About;