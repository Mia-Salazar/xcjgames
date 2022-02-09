import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from 'react-router-dom';

import ConsoleText from "../../components/atoms/ConsoleText/ConsoleText";

export const MiddlePage = ({completeState, language}) => {
    const location = useLocation();
    const route = location.pathname.replace("/", "");
    useEffect(() => {
    }, [route]);
	return (
		<>
			<section className="middle">
            {route === "portfolio"  ? (
                <>
                    <ConsoleText text="portfolio.title" complete={completeState} language={language}/>
                    <ConsoleText text="portfolio.subtitle" complete={completeState} language={language}/>
                </>
            ) : route === "professional" ?
             ( 
                <>
                <ConsoleText text="professional.title" complete={completeState} language={language}/>
                <ConsoleText text="professional.subtitle" complete={completeState} language={language}/>
             </>
             ):
                <ConsoleText text="404" complete={completeState} language={language}/>
            }
				
			</section>
		</>
	);
};

MiddlePage.propTypes = {
    complete: PropTypes.bool,
    language: PropTypes.string,
};

MiddlePage.displayName = "MiddlePage";

export default MiddlePage;