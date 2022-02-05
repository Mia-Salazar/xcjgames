import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import i18n from "../../../../i18n";
import "./ConsoleText.scss";

export const ConsoleText = ({text, complete = false}) => {
    const translatedText = i18n.t(text);
    const index = useRef(0);
    const [currentText, setCurrentText] = useState("");

    useEffect(() => {
        if (!complete && currentText.length !== translatedText.length) {
            const timeOut = setTimeout(() => {
                setCurrentText((value) => value + translatedText.charAt(index.current));
                index.current++;
            }, 20);
            return () => {
                clearTimeout(timeOut);
            }
        } else {
            setCurrentText(translatedText);
        }

    }, [translatedText, currentText, complete]);

	return (
        <p className="console-text">
            <span className="console-text__more"> {'>'} </span>
            {currentText}
        </p>
	);
};

ConsoleText.propTypes = {
	text: PropTypes.string.isRequired,
};

ConsoleText.displayName = "ConsoleText";

export default ConsoleText;