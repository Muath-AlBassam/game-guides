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
    loadScript("src/utils/constants.js");
    loadScript("src/utils/utils.js");

    // Repositories
    loadScript("src/repository/games.repository.js");
    loadScript("src/repository/characters.repository.js");
    loadScript("src/repository/builds.repository.js");
    loadScript("src/repository/teams.repository.js");
    loadScript("src/repository/rotations.repository.js");
    loadScript("src/repository/weapons.repository.js");
    loadScript("src/repository/sets.repository.js");
    loadScript("src/repository/roles.repository.js");
    loadScript("src/repository/elements.repository.js");
    loadScript("src/repository/buttons.repository.js");
    loadScript("src/repository/rarity.repository.js");
    loadScript("src/repository/pets.repository.js");
    loadScript("src/repository/notes.repository.js");

    // Core
    loadScript("src/components/core/game-guides.component.js", true);
    // Shared
    loadScript("src/components/shared/searh.component.js", true);
    loadScript("src/components/shared/loader.component.js", true);
    loadScript("src/components/shared/character-image.component.js", true);
    // Layout
    loadScript("src/components/layout/nav.component.js", true);
    loadScript("src/components/layout/header.component.js", true);
    // Team
    loadScript("src/components/team/team-container.component.js", true);
    loadScript("src/components/team/team-list.component.js", true);
    loadScript("src/components/team/team-details.component.js", true);
    loadScript("src/components/team/team-roles.component.js", true);
    loadScript("src/components/team/team-variations.component.js", true);
    loadScript("src/components/team/team-replacements.component.js", true);
    loadScript("src/components/team/team-rotations.component.js", true);
    loadScript("src/components/team/team-character-details.component.js", true);
    loadScript("src/components/team/team-characters.component.js", true);
    // Fight
    loadScript("src/components/fight/fight-list.component.js", true);
}
