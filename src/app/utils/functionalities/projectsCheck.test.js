import { projectsCheck } from "./projectsCheck";

describe("Check that the url", () => {
    it("is a project", () => {
        const project = projectsCheck("boreal");
        expect(project).toBe(true);
    });
    it("is not a project", () => {
        const project = projectsCheck("test");
        expect(project).toBe(false);
    });
});