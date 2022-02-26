import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import "./TerminalOptions.scss";
import i18n from "../../../../i18n";
import { predictInput } from "../../../utils/functionalities/predictCommand";
import { actionChecker } from "../../../utils/functionalities/actionChecker";
import InputContent from "../../molecules/InputContent/InputContent";

export const TerminalOptions = ({completeText, resetTextStatus, setLanguage, name = "visitor", setName}) => {
    const [data, setData] = useState("");
    const [predict, setPredict] = useState("");
    const [hasSpace, setHasSpace] = useState(false);
    const inputRef = useRef(null);
    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const regex = new RegExp("^(?!.*<[^>]+>).*", "ig");
        if (regex.test(data)) {
            resetTextStatus();
            if (data === "english" || data === "spanish") {
                const newLanguage = data === "spanish" ? "es" : "en";
                setLanguage(newLanguage);
            } else if (data.includes("name") && data.includes(" ")) {
                const space = data.indexOf(" ");
                const name = data.substring(space + 1)
                if (name.length > 10) {
                    navigate(`/error`);
                } else {
                    changeName(name.trim());
                }
            } else {
                actionChecker(data, navigate);
            }
            setData("");
        } else {
            navigate(`/error`);
        }

    }
    const handleInputChange = (event) => {
        const value = event.target.value.trimStart().toLowerCase();
        if (value.length >= 120) {
            setData("");
        } else {
            setData(value);
        }
    }
    const changeName = (name) => {
        setName(name);
    }
    const handleKeyDown = (event) => {
        if (event.keyCode === 13 && data === "") {
            completeText();
        }
        if (event.keyCode === 13) {
            setData(data.trim());
        }
        if (event.keyCode === 9 && predict !== "") {
            setData(data + predict);
            setPredict("");
        }
    }
    useEffect(() => {
        const predicted = predictInput(data);
        if (Array.isArray(predicted)){
            setHasSpace(true);
            setPredict(predicted[0]);
        } else {
            setHasSpace(false);
            setPredict(predicted);
        } 
    }, [data]);
    useEffect(() => {         
        inputRef.current.focus();
    }, [predict]);

	return (
        <form className="terminal-options" onSubmit={handleSubmit}>
            <div className="terminal-options__input-container">
                <label className="terminal-options__label" htmlFor="action">{name}<span className="terminal-options__greater">{">"}</span> </label>
                <InputContent input={data} predict={predict} hasSpace={hasSpace}/>
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
    name: PropTypes.string,
    setName: PropTypes.func
};

TerminalOptions.displayName = "TerminalOptions";

export default TerminalOptions;