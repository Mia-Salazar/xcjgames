/* eslint-disable */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import {getByRole, findByText, getByPlaceholderText} from '@testing-library/dom'

import i18n from "../../../../i18n";
import { ConsoleText } from "./ConsoleText";

describe('It renders the text passed', () => {
    i18n.changeLanguage("cimode");
    let component;
    beforeEach(() => {
        component = render(
            <ConsoleText text="something" complete={false} lang="es" />
        );
    })

    test("'>' at the begining", () => {
        component.getByText(">");
    });
    
    test("click works", async() => {
        expect(await component.findByText("something")).toBeVisible()
    });
});