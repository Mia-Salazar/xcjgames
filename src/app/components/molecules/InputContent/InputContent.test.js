/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { InputContent } from "./InputContent";

describe('The input renders', () => {
    let component;
    beforeEach(() => {
        component = render(
            <InputContent input="something" predict="other" />
        );
    })

    test("renders the correct text", () => {
        component.getByText("something");
    });   
    
    test("renders the correct prediction", () => {
        component.getByText("other");
    }); 

    test("renders the correct styles", () => {
        const input = component.getByText("something");
        expect(input.classList.contains("input-content__text--has-space")).toBe(false);
    }); 
});

describe('The input renders', () => {
    let component;
    beforeEach(() => {
        component = render(
            <InputContent input="something" predict="other" hasSpace={true}/>
        );
    })

    test("renders the correct styles", () => {
        const input = component.getByText("something");
        expect(input.classList.contains("input-content__text--has-space")).toBe(true);
    }); 
});

