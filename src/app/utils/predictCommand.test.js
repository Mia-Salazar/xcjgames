import { predictInput } from "./predictCommand";

describe("Check that the function predicts", () => {
    it("boreal correctly", () => {
        const predict = predictInput("b");
        expect(predict).toBe("oreal");
    });
    it("boreal apax correctly when there is a space", () => {
        const predict = predictInput("boreal ");
        expect(predict[0]).toBe("apax");
    });
    it("nothing that starts with a ñ", () => {
        const predict = predictInput("ñ");
        expect(predict).toBe("");
    });
});