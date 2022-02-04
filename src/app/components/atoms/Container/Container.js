import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import "./Container.scss";
import TerminalOptions from "../../molecules/TerminalOptions/TerminalOptions";

export const Container = ({children}) => {

	return (
        <>
            <div class="terminal">
                <main className="terminal__main">
                    {children}
                </main>
                <footer className="terminal__footer">
                    <TerminalOptions />
                </footer>
            </div>
        </>

	);
};

Container.propTypes = {
	children: PropTypes.any.isRequired,
};

Container.displayName = "Container";

export default Container;