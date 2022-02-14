export const redirectTo = (command) => {
    switch (command) {
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
        case "mia":
            window.open("https://miasalazar.netlify.app/", "_blank");
            break;
        case "boreal apax":
            window.open("https://apaxthegame.com/", "_blank");
            break;
        case "padaone web":
            window.open("http://www.padaonegames.com/", "_blank");
            break;
        case "metal web":
            window.open("https://alejru08.github.io/Metal-Slug/", "_blank");
            break;
        case "planet web":
            window.open("https://xcjgames.itch.io/planet-born", "_blank");
            break;
        case "treeventure web":
            window.open("https://xcjgames.itch.io/treeventure", "_blank");
            break;
        case "damng web":
            window.open("https://xcjgames.itch.io/damng-la-balada-del-capitan", "_blank");
            break;
        case "dielucard web":
            window.open("https://xcjgames.itch.io/the-grand-escape-of-dielucard", "_blank");
            break;
        case "fire web":
            window.open("https://xcjgames.itch.io/line-of-fire", "_blank");
            break;
        case "fire play":
            window.open("https://play.google.com/store/apps/details?id=com.XCJGames.LineofFire&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1", "_blank");
            break;
        case "oriadris play":
            window.open("https://play.google.com/store/apps/details?id=com.XCJGames.DragonAttack&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1", "_blank");
            break; 
        default:
            window.location = "mailto:carlosjimenez@xcjgames.com";
    }
}