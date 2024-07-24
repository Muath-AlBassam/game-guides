
function getAllRoles(gameCode) {
    switch (gameCode) {
        case Constants.games.HSR:
            return RolesRepository.HSRRoles;
        case Constants.games.ZZZ:
            return RolesRepository.ZZZRoles;
        default:
            return new Map([]);
    }
}

function getRole(gameCode, roleName) {
    let role = getAllRoles(gameCode).get(roleName);
    return role ?? { name: roleName }
}

// ----------------------------------------------------------------------------

const RolesRepository = {
    HSRRoles: new Map([
        ['Abundance', { 
            name: 'Abundance', 
            imageUrl: 'assets/hsr/HSR_Path_Abundance.jpg' 
        }],
        ['Destruction',{ 
            name: 'Destruction', 
            imageUrl: 'assets/hsr/HSR_Path_Destruction.jpg' 
        }],
        ['Erudition',{ 
            name: 'Erudition', 
            imageUrl: 'assets/hsr/HSR_Path_Erudition.jpg' 
        }],
        ['Harmony',{ 
            name: 'Harmony', 
            imageUrl: 'assets/hsr/HSR_Path_Harmony.jpg' 
        }],
        ['Hunt',{ 
            name: 'Hunt', 
            imageUrl: 'assets/hsr/HSR_Path_Hunt.jpg' 
        }],
        ['Nihility',{ 
            name: 'Nihility', 
            imageUrl: 'assets/hsr/HSR_Path_Nihility.jpg' 
        }],
        ['Preservation',{ 
            name: 'Preservation', 
            imageUrl: 'assets/hsr/HSR_Path_Preservation.jpg' 
        }],
    ]),

    ZZZRoles: new Map([
        ['Anomaly', { 
            name: 'Anomaly', 
            imageUrl: 'assets/zzz/ZZZ_Style_Anomaly.jpg' 
        }],
        ['Attack', {
            name: 'Attack', 
            imageUrl: 'assets/zzz/ZZZ_Style_Attack.jpg'
        }],
        ['Defence', {
            name: 'Defence', 
            imageUrl: 'assets/zzz/ZZZ_Style_Defence.jpg'
        }],
        ['Stun', {
            name: 'Stun', 
            imageUrl: 'assets/zzz/ZZZ_Style_Stun.jpg'
        }],
        ['Support', {
            name: 'Support', 
            imageUrl: 'assets/zzz/ZZZ_Style_Support.jpg'
        }],
    ]),
}