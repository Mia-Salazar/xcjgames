import { redirectTo }  from "./redirectTo";

export const actionChecker = (data, navigate) => {
    const external = ["email", "linkedin", "twitter", "github", "mia"];
    const hasHyphen = data.includes(" ");
    if (data !== "") {
        const externalFound = external.indexOf(data);
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