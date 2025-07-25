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
    loadScript("src/utils/game-utils.js")
    loadScript("src/utils/route-utils.js");
    loadScript("src/utils/rotations-utils.js");

    // Repositories
    loadScript("src/repository/games.repository.js");
    loadScript("src/repository/characters.repository.js");
    loadScript("src/repository/builds.repository.js");
    loadScript("src/repository/teams.repository.js");
    loadScript("src/repository/rotations.repository.js");
    loadScript("src/repository/weapons.repository.js");
    loadScript("src/repository/sets.repository.js");
    loadScript("src/repository/types.repository.js");
    loadScript("src/repository/elements.repository.js");
    loadScript("src/repository/buttons.repository.js");
    loadScript("src/repository/rarity.repository.js");
    loadScript("src/repository/pets.repository.js");
    loadScript("src/repository/notes.repository.js");
    loadScript("src/repository/combos.repository.js");
    loadScript("src/repository/roles.repository.js");

    // Core
    loadScript("src/components/core/core.component.js", true);
    loadScript("src/components/core/game-guides.component.js", true);
    loadScript("src/components/core/home.component.js", true);
    loadScript("src/components/core/game-header.component.js", true);
    loadScript("src/components/core/game-nav.component.js", true);
    // Shared
    loadScript("src/components/shared/search.component.js", true);
    loadScript("src/components/shared/character-image.component.js", true);
    loadScript("src/components/shared/character-profile.component.js", true);
    loadScript("src/components/shared/notes-popover.component.js", true);
    loadScript("src/components/shared/button-group.component.js", true);
    // Layout
    loadScript("src/components/layout/nav.component.js", true);
    loadScript("src/components/layout/header.component.js", true);
    // Team
    loadScript("src/components/team/team-container.component.js", true);
    loadScript("src/components/team/teams/team-list.component.js", true);
    loadScript("src/components/team/teams/team-details.component.js", true);
    loadScript("src/components/team/teams/team-roles.component.js", true);
    loadScript("src/components/team/teams/team-variations.component.js", true);
    loadScript("src/components/team/teams/team-replacements.component.js", true);
    loadScript("src/components/team/teams/team-rotations.component.js", true);
    loadScript("src/components/team/characters/character-list.component.js", true);
    loadScript("src/components/team/weapons/weapon-details.component.js", true);
    loadScript("src/components/team/weapons/weapon-list.component.js", true);
    loadScript("src/components/team/sets/set-details.component.js", true);
    loadScript("src/components/team/sets/set-list.component.js", true);
    loadScript("src/components/team/team-search.component.js", true);
    loadScript("src/components/team/character-build.component.js", true);
    loadScript("src/components/team/character-teams.component.js", true);
    // Fight
    loadScript("src/components/fight/fight-list.component.js", true);
    loadScript("src/components/fight/fight-combos.component.js", true);
}
