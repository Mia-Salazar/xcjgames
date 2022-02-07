import React from "react";

import ConsoleText from "../../components/atoms/ConsoleText/ConsoleText";
import "./Help.scss";

export const Help = ({completeState, reset}) => {
	
	return (
		<>
			<section className="help">
				<ConsoleText text="help.title" complete={completeState} reset={reset}/>
                <ConsoleText text="help.subtitle" complete={completeState} reset={reset}/>
			</section>
		</>
	);
};

export default Help;