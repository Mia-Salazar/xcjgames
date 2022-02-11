import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import "./TerminalOptions.scss";
import i18n from "../../../../i18n";
import { predictInput } from "../../../utils/predictComand";
import { actionChecker } from "../../../utils/actionChecker";
import InputContent from "../../molecules/InputContent/InputContent";

export const TerminalOptions = ({completeText, resetTextStatus, setLanguage}) => {
    const [data, setData] = useState("");
    const [predict, setPredict] = useState("");
    const inputRef = useRef(null);
    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        resetTextStatus();
        if (data === "english" || data === "spanish") {
            const newLanguage = data === "spanish" ? "es" : "en";
            setLanguage(newLanguage);
        } else {
            actionChecker(data, navigate);
        }
        setData("");
    }
    const handleInputChange = (event) => {
        const value = event.target.value.trim().toLowerCase();
        setData(value);
    }
    const handleKeyDown = (event) => {
        if (event.keyCode === 13 && data === "") {
            completeText();
        }
        if (event.keyCode === 9 && predict !== "") {
            setData(data + predict);
            setPredict("");
        }
    }
    useEffect(() => { 
        setPredict(predictInput(data));
    }, [data]);
    useEffect(() => {         
        inputRef.current.focus();
    }, [predict]);

	return (
        <form className="terminal-options" onSubmit={handleSubmit}>
            <div className="terminal-options__input-container">
                <label className="terminal-options__label" htmlFor="action"> visitor<span className="terminal-options__greater">{">"}</span> </label>
                <InputContent input={data} predict={predict}/>
            </div>
            <input className="terminal-options__input" type="text" id="action" ref={inputRef} value={data}
                    name="action" autoFocus onChange={handleInputChange} onKeyDown={handleKeyDown}/>
            <button className="terminal-options__button" type="submit" onClick={handleSubmit}>{i18n.t("send")}</button>
        </form>
	);
};

TerminalOptions.propTypes = {
	completeText: PropTypes.func.isRequired,
    setLanguage: PropTypes.func.isRequired,
    resetTextStatus: PropTypes.func.isRequired,
};

TerminalOptions.displayName = "TerminalOptions";

export default TerminalOptions;