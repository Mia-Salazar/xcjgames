import React from "react";

import Logo from "../../../assets/images/logo.png"
import ConsoleText from "../../components/atoms/ConsoleText/ConsoleText";
import "./Help.scss";

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

export default Help;