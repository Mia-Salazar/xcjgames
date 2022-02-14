import { imageForProject } from "./imageForProject";

describe("Check that the function returns", () => {
    it("the correct image", () => {
        const image = imageForProject("padaone");
        expect(image).toBe("padaone.PNG");
    });
    it("the default image", () => {
        const image = imageForProject("algo");
        expect(image).toBe("apax.PNG");
    });
});