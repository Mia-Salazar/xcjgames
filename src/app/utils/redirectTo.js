export const redirectTo = (comand) => {
    switch (comand) {
        case "email":
            window.location = "mailto:carlosjimenez@xcjgames.com";
            break;
        case "linkedin":
            window.open("https://www.linkedin.com/in/carlos-jim%C3%A9nez-%C3%A1lvarez-7b50671a4", "_blank");
            break;
        case "twitter":
            window.open("https://twitter.com/xcjgames", "_blank");
            break;
        case "github":
            window.open("https://github.com/XCJGames", "_blank");
            break;
        default:
            window.location = "mailto:carlosjimenez@xcjgames.com";
    }
}