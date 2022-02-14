import padaone from "../../../assets/images/padaone.PNG";
import boreal from "../../../assets/images/apax.PNG";
import damng from "../../../assets/images/damng.PNG";
import dielucard from "../../../assets/images/dielucard.PNG";
import oriadris from "../../../assets/images/dragon.PNG";
import fire from "../../../assets/images/fire.PNG";
import metal from "../../../assets/images/metal.PNG";
import planet from "../../../assets/images/planet.PNG";
import treeventure from "../../../assets/images/treeventure.PNG";

export const imageForProject = (page) => {
    let result;
    switch (page) {
        case "padaone":
            result = padaone;
            break;
        case "boreal":
           result = boreal;
            break;
        case "damng":
            result = damng;
            break;
        case "dielucard":
            result = dielucard;
            break;
        case "oriadris":
            result = oriadris;
            break;
        case "fire":
            result = fire;
            break; 
        case "metal":
            result = metal;
            break;
        case "planet":
            result = planet;
            break;
        case "treeventure":
            result = treeventure;
            break;
        default:
           result = boreal;
    }
    return result;
}