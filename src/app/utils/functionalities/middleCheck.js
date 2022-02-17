import { middleCheckList } from "../data/commandsListPriority";

export const middleCheck = (route) => {
    const externalFound = middleCheckList.indexOf(route);
    if (externalFound !== -1) {
        return true;
    } else {
        return false;
    }
}