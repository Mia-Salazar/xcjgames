import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import "./MiddlePage.scss";
import ConsoleText from "../../components/atoms/ConsoleText/ConsoleText";
import { middleCheck } from "../../utils/middleCheck";
import { projectsCheck } from "../../utils/projectsCheck";
import { imageForProject } from "../../utils/imageForProject";

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
                    <figure className="middle__img-container">
                        <img className="middle__img" alt="" src={imageForProject(route)} />
                    </figure>
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