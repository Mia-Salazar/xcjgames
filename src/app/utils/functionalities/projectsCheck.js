export const projectsCheck = (route) => {
    const external = ["boreal", "padaone", "metal", "planet", "treeventure", "damng", "dielucard", "fire", "oriadris",];
    const externalFound = external.indexOf(route);
    if (externalFound !== -1) {
        return true;
    } else {
        return false;
    }
}