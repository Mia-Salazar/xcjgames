import React from "react";
import PropTypes from "prop-types";

import ConsoleText from "../../components/atoms/ConsoleText/ConsoleText";

export const Help = ({completeState}) => {
	
	return (
		<>
			<section className="help">
				<ConsoleText text="help.title" complete={completeState}/>
                <ConsoleText text="help.subtitle" complete={completeState}/>
			</section>
		</>
	);
};

Help.propTypes = {
    complete: PropTypes.bool,
};

Help.displayName = "Help";

export default Help;