/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { PredictText } from "./PredictText";

describe('It renders the text passed', () => {
    let component;
    beforeEach(() => {
        component = render(
            <PredictText text="something" />
        );
    })

    test("renders the correct text", () => {
        component.getByText("something");
    });    
});