import React from "react";
import PropTypes from "prop-types";

import ConsoleText from "../../components/atoms/ConsoleText/ConsoleText";

export const Help = ({completeState, language}) => {
	
	return (
		<>
			<section className="help">
				<ConsoleText text="help.title" complete={completeState} language={language}/>
			</section>
		</>
	);
};

Help.propTypes = {
    complete: PropTypes.bool,
	language: PropTypes.string,
};

Help.displayName = "Help";

export default Help;