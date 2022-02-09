import React from "react";
import PropTypes from "prop-types";

import ConsoleText from "../../components/atoms/ConsoleText/ConsoleText";

export const Education = ({completeState, language}) => {
	return (
		<>
			<section className="education">
				<ConsoleText text="education.title" complete={completeState} language={language}/>
                <ConsoleText text="education.titleOne" complete={completeState} language={language}/>
                <ConsoleText text="education.course" complete={completeState} language={language}/>
                <ConsoleText text="education.courseOne" complete={completeState} language={language}/>
			</section>
		</>
	);
};

Education.propTypes = {
    complete: PropTypes.bool,
	language: PropTypes.string,
};

Education.displayName = "Education";

export default Education;