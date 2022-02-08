import React from "react";
import PropTypes from "prop-types";

import ConsoleText from "../../components/atoms/ConsoleText/ConsoleText";
import "./Education.scss";

export const Education = ({completeState}) => {
	
	return (
		<>
			<section className="education">
				<ConsoleText text="education.title" complete={completeState}/>
                <ConsoleText text="education.titleOne" complete={completeState}/>
                <ConsoleText text="education.course" complete={completeState}/>
                <ConsoleText text="education.courseOne" complete={completeState}/>
			</section>
		</>
	);
};

Education.propTypes = {
    complete: PropTypes.bool,
};

Education.displayName = "Education";

export default Education;