import { redirectTo }  from "./redirectTo";

export const ActionChecker = (data, navigate) => {
    const external = ["email", "linkedin", "twitter", "github", "mia"];
    if (data !== "") {
        const externalFound = external.indexOf(data);
        if (externalFound !== -1) {
            redirectTo(data);
        } else {
            navigate(`/${data}`);
        }
    }
}