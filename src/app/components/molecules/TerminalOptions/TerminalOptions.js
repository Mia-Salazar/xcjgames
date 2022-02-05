import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

import "./TerminalOptions.scss";

export const TerminalOptions = ({completeText, reset}) => {
    const [data, setData] = useState("");
    let navigate = useNavigate()

    const handleSubmit = (event) => {
        reset();
        event.preventDefault();
        navigate(`/${data}`);
    }
    const handleInputChange = (event) => {
        setData(event.target.value)
    }
	return (
        <footer className="terminal-options">
            <form className="terminal-options__form" onSubmit={handleSubmit}>
                <label className="terminal-options__label" htmlFor="action"> visitor<span className="terminal-options__greater">{'>'}</span> </label>
                <input className="terminal-options__input" type="text" id="action"
                        name="action" onKeyDown={completeText} autoFocus
                        onChange={handleInputChange}/>
            </form>
        </footer>
	);
};

TerminalOptions.propTypes = {
	completeText: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
};

TerminalOptions.displayName = "TerminalOptions";

export default TerminalOptions;