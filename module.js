function loadScript(url, isDefer = false) {
    var script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    script.async = false;
    script.defer = isDefer;
    document.head.appendChild(script);
}

function loadAllScripts() {
    // Utilities
    loadScript("utils/constants.js");
    loadScript("utils/utils.js");

    // Repositories
    loadScript("repository/games.repository.js");
    loadScript("repository/characters.repository.js");
    loadScript("repository/builds.repository.js");
    loadScript("repository/teams.repository.js");
    loadScript("repository/rotations.repository.js");
    loadScript("repository/weapons.repository.js");
    loadScript("repository/sets.repository.js");
    loadScript("repository/roles.repository.js");
    loadScript("repository/elements.repository.js");
    loadScript("repository/buttons.repository.js");

    // Modals
    loadScript("modals/build.modal.js", true);

    // Components
    loadScript("components/searh.component.js", true); 
    loadScript("components/game-guides.component.js", true); 
    // Layout
    loadScript("components/layout/nav.component.js", true);
    loadScript("components/layout/header.component.js", true);
    loadScript("components/layout/loader.component.js", true);
    // Team
    loadScript("components/team/team-list.component.js", true);
    loadScript("components/team/team-details.component.js", true);
    loadScript("components/team/team-roles.component.js", true);
    loadScript("components/team/team-variations.component.js", true);
    loadScript("components/team/team-replacements.component.js", true);
    loadScript("components/team/team-rotations.component.js", true);
    // Fight
    loadScript("components/fight/fight-list.component.js", true);
}
