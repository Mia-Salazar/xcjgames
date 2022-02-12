import { comandsList } from "./comandsList";

export const predictInput = (input) => {
    if (input !== "") {
        const list = comandsList;
        var regex = new RegExp("^" + input, "ig");
        const found = list.find(element => regex.test(element));
        if (found) {
            const inputLength = input.length;
            const tipRestOfText = found.substring(inputLength);
            //console.log(input.includes(" ") && input[inputLength - 1] === " ", 'final')
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