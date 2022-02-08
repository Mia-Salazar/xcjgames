import React from "react";
import PropTypes from "prop-types";
import { useLocation } from 'react-router-dom';

import ConsoleText from "../../components/atoms/ConsoleText/ConsoleText";

export const MiddlePage = ({completeState}) => {
    const location = useLocation();
    const route = location.pathname.replace("/");
	
	return (
		<>
			<section className="middle">
            {route ? (
                ""
            ) : (
                <ConsoleText text="404" complete={completeState}/>
            )}
				
			</section>
		</>
	);
};

MiddlePage.propTypes = {
    complete: PropTypes.bool,
};

MiddlePage.displayName = "MiddlePage";

export default MiddlePage;