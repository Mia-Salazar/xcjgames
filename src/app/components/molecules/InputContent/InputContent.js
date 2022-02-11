import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./InputContent.scss";
import { predictInput } from "../../../utils/predictComand";
import PredictText from "../../atoms/PredictText/PredictText";

export const InputContent = ({input}) => {
    const [data, setData] = useState("");
    
    useEffect(() => {
        setData(predictInput(input));
    }, [input]);
	return (
        <div className="input-content">
            <p className="input-content__text">{input}</p>
            <PredictText text={data}/>
        </div>
	);
};

InputContent.propTypes = {
	input: PropTypes.string.isRequired,
};

InputContent.displayName = "InputContent";

export default InputContent;