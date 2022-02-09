export const middleCheck = (route) => {
    const external = ["portfolio", "professional", "profesional", "personal"];
    const externalFound = external.indexOf(route);
    if (externalFound !== -1) {
        return true;
    } else {
        return false;
    }
}