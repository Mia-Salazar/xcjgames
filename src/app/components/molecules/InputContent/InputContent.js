import React from "react";
import PropTypes from "prop-types";

import "./InputContent.scss";
import PredictText from "../../atoms/PredictText/PredictText";

export const InputContent = ({input, predict}) => {
	return (
        <div className="input-content">
            <p className="input-content__text">{input}</p>
            <PredictText text={predict}/>
        </div>
	);
};

InputContent.propTypes = {
	input: PropTypes.string.isRequired,
    predict: PropTypes.string
};

InputContent.displayName = "InputContent";

export default InputContent;