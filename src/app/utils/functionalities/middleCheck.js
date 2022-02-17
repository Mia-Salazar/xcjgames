import { middleCheckList } from "../data/commandsList";

export const middleCheck = (route) => {
    const externalFound = middleCheckList.indexOf(route);
    if (externalFound !== -1) {
        return true;
    } else {
        return false;
    }
}