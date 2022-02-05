import React from "react";
import PropTypes from "prop-types";

import "./TerminalOptions.scss";

export const TerminalOptions = ({completeText}) => {
	return (
        <footer className="terminal-options">
            <form className="terminal-options__form">
                <label className="terminal-options__label" htmlFor="action"> visitor<span className="terminal-options__greater">{'>'}</span> </label>
                <input className="terminal-options__input" type="text" id="action" name="action" onKeyDown={completeText} autoFocus/>
            </form>
        </footer>

	);
};

TerminalOptions.propTypes = {
	completeText: PropTypes.func.isRequired,
};

TerminalOptions.displayName = "TerminalOptions";

export default TerminalOptions;