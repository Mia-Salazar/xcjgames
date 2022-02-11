import { comandsList } from "./comandsList";

export const predictInput = (input) => {
    if (input !== "") {
        const list = comandsList;
        var regex = new RegExp("^" + input, "ig");
        const found = list.find(element => regex.test(element));
        const inputLength = input.length;
        const tipRestOfText = found.substring(inputLength);
        return found ? tipRestOfText : "";
    } else {
        return "";
    }
}