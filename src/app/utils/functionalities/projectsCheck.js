import { projectsList } from "../data/commandsList";

export const projectsCheck = (route) => {
    const externalFound = projectsList.indexOf(route);
    if (externalFound !== -1) {
        return true;
    } else {
        return false;
    }
}