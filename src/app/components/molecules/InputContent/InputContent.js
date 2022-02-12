import React from "react";
import PropTypes from "prop-types";

import "./InputContent.scss";
import PredictText from "../../atoms/PredictText/PredictText";

export const InputContent = ({input, predict, hasSpace = false}) => {
	return (
        <div className="input-content">
            <p className={hasSpace ? "input-content__text input-content__text--has-space" : "input-content__text"}>{input}</p>
            <PredictText text={predict}/>
        </div>
	);
};

InputContent.propTypes = {
	input: PropTypes.string.isRequired,
    predict: PropTypes.string,
    hasSpace: PropTypes.bool
};

InputContent.displayName = "InputContent";

export default InputContent;