import React from "react";
import PropTypes from "prop-types";

import "./PredictText.scss";

export const PredictText = ({text}) => {
	return (
        <p className="predict-text">
            {text}
        </p>
	);
};

PredictText.propTypes = {
	text: PropTypes.string
};

PredictText.displayName = "PredictText";

export default PredictText;