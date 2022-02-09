export const detailCheck = (route) => {
    const external = ["boreal", "padaone"];
    const externalFound = external.indexOf(route);
    if (externalFound !== -1) {
        return true;
    } else {
        return false;
    }
}