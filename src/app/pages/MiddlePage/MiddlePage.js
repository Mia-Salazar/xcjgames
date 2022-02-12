import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import ConsoleText from "../../components/atoms/ConsoleText/ConsoleText";
import { middleCheck } from "../../utils/middleCheck";
import { projectsCheck } from "../../utils/projectsCheck";

export const MiddlePage = ({completeState, language}) => {
    const location = useLocation();
    const route = location.pathname.replace("/", "");
    useEffect(() => {
    }, [route]);
	return (
		<>
			<section className="middle">
            {middleCheck(route) ? (
                <>
                    <ConsoleText text={`${route}.title`} complete={completeState} language={language}/>
                </>
            ) : projectsCheck(route) ? (
                <>
                    <ConsoleText text={`${route}.title`} complete={completeState} language={language}/>
                </>
            ) :
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