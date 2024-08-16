function loadScript(url, isDefer = false) {
    var script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    script.async = false;
    script.defer = isDefer;
    document.head.appendChild(script);
}

function loadAllScripts() {
    // Constant
    loadScript("constants.js");

    // Repositories
    loadScript("repository/games-data.js");
    loadScript("repository/characters.repository.js");
    loadScript("repository/teams.repository.js");
    loadScript("repository/weapons.repository.js");
    loadScript("repository/sets.repository.js");
    loadScript("repository/roles.repository.js");
    loadScript("repository/elements.repository.js");
    loadScript("repository/buttons.repository.js");

    // Utilities
    loadScript("utils.js");

    // Modals
    loadScript("modals/build.modal.js", true);

    // Components
    loadScript("components/loader.component.js", true);

    loadScript("components/nav.component.js", true);
    loadScript("components/header.component.js", true);
    loadScript("components/roles.component.js", true);
    loadScript("components/variations.component.js", true);
    loadScript("components/replacements.component.js", true);
    loadScript("components/rotations.component.js", true);
    loadScript("components/gagu-team-details.component.js", true);
    loadScript("components/gagu-team-list.component.js", true);
    loadScript("components/gagu-fight.component.js", true);

    loadScript("components/game-guides.component.js", true); 
}
