import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

import "./TerminalOptions.scss";

export const TerminalOptions = ({completeText, resetTextStatus, setLanguage}) => {
    const [data, setData] = useState("");
    
    let navigate = useNavigate();
    const handleSubmit = (event) => {
        resetTextStatus();
        event.preventDefault();
        if (data === "english" || data === "spanish") {
            const newLanguage = data === 'spanish' ? 'es' : 'en';
            setLanguage(newLanguage);
        } else {
            navigate(`/${data}`);
        }
    }
    const handleInputChange = (event) => {
        const value = event.target.value.trim();
        if (value.length === 1) {
            completeText();
        }
        setData(value);
    }

    useEffect(() => {
    }, [data]);

	return (
        <footer className="terminal-options">
            <form className="terminal-options__form" onSubmit={handleSubmit}>
                <label className="terminal-options__label" htmlFor="action"> visitor<span className="terminal-options__greater">{'>'}</span> </label>
                <input className="terminal-options__input" type="text" id="action"
                         name="action" autoFocus onChange={handleInputChange}/>
            </form>
        </footer>
	);
};

TerminalOptions.propTypes = {
	completeText: PropTypes.func.isRequired,
    setLanguage: PropTypes.func.isRequired,
    resetTextStatus: PropTypes.func.isRequired,
};

TerminalOptions.displayName = "TerminalOptions";

export default TerminalOptions;