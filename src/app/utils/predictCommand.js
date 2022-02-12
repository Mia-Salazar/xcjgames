import { commandsList } from "./commandsList";

export const predictInput = (input) => {
    if (input !== "") {
        const list = commandsList;
        const regex = new RegExp("^" + input, "ig");
        const found = list.find(element => regex.test(element));
        if (found) {
            const inputLength = input.length;
            const tipRestOfText = found.substring(inputLength);
            if (input.includes(" ") && input[inputLength - 1] === " ") {
                const final = [tipRestOfText];
                return final;
            } else {
                return tipRestOfText;
            }
        } else {
            return "";
        }
    } else {
        return "";
    }
}