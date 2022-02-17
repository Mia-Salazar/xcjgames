import { actionList } from "../data/commandsList";
import { redirectTo }  from "./redirectTo";

export const actionChecker = (data, navigate) => {
    const hasHyphen = data.includes(" ");
    if (data !== "") {
        const externalFound = actionList.indexOf(data);
        if (externalFound !== -1) {
            redirectTo(data);
        } else {
            if (!hasHyphen) {
                navigate(`/${data}`);
            } else {
                const regex = /\s/ig;
                const cleanUrl = data.replaceAll(regex, "-");
                navigate(`/${cleanUrl}`);
            }
        }
    }
}