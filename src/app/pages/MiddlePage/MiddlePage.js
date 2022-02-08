import React from "react";
import PropTypes from "prop-types";
import { useLocation } from 'react-router-dom';

import ConsoleText from "../../components/atoms/ConsoleText/ConsoleText";

export const MiddlePage = ({completeState}) => {
    const location = useLocation();
    const route = location.pathname.replace("/", "");
    console.log(location.pathname)
	
	return (
		<>
			<section className="middle">
            {route === "portfolio" ? (
                <>
                    <ConsoleText text="portfolio.title" complete={completeState}/>
                    <ConsoleText text="portfolio.subtitle" complete={completeState}/>
                </>
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