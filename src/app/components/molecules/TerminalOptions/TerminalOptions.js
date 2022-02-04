import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import "./TerminalOptions.scss";

export const TerminalOptions = () => {
	return (
        <form className="terminal-options">
            <label className="terminal-options__label" for="action"> visitor<span className="terminal-options__greater">{'>'}</span> </label>
            <input className="terminal-options__input" type="text" id="action" name="action"></input>
        </form>
	);
};

TerminalOptions.propTypes = {
	text: PropTypes.string.isRequired,
};

TerminalOptions.displayName = "TerminalOptions";

export default TerminalOptions;