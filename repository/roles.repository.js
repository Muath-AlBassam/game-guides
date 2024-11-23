
class RolesRepository {
    static getAllRoles(gameCode) {
        switch (gameCode) {
            case Constants.games.GI:
                return this.data.GIRoles;
            case Constants.games.HSR:
                return this.data.HSRRoles;
            case Constants.games.ZZZ:
                return this.data.ZZZRoles;
            default:
                return new Map([]);
        }
    }
    
    static getRole(gameCode, roleName) {
        let role = this.getAllRoles(gameCode).get(roleName);
        return role ?? { name: roleName }
    }

    static data = {
        GIRoles: new Map([
            ['DPS', { 
                name: 'DPS', 
                imageUrl: 'assets/images/gi/icons/GI_Role_DPS.png' 
            }],
            ['Sub DPS', { 
                name: 'Sub DPS', 
                imageUrl: 'assets/images/gi/icons/GI_Role_SubDPS.png' 
            }],
            ['Support', { 
                name: 'Support', 
                imageUrl: 'assets/images/gi/icons/GI_Role_Support.png' 
            }],
            ['Healer', { 
                name: 'Healer', 
                imageUrl: 'assets/images/gi/icons/GI_Role_Healer.png' 
            }],
        ]),

        HSRRoles: new Map([
            ['Abundance', { 
                name: 'Abundance', 
                imageUrl: 'assets/images/hsr/icons/HSR_Path_Abundance.png' 
            }],
            ['Destruction',{ 
                name: 'Destruction', 
                imageUrl: 'assets/images/hsr/icons/HSR_Path_Destruction.png' 
            }],
            ['Erudition',{ 
                name: 'Erudition', 
                imageUrl: 'assets/images/hsr/icons/HSR_Path_Erudition.png' 
            }],
            ['Harmony',{ 
                name: 'Harmony', 
                imageUrl: 'assets/images/hsr/icons/HSR_Path_Harmony.png' 
            }],
            ['Hunt',{ 
                name: 'Hunt', 
                imageUrl: 'assets/images/hsr/icons/HSR_Path_Hunt.png' 
            }],
            ['Nihility',{ 
                name: 'Nihility', 
                imageUrl: 'assets/images/hsr/icons/HSR_Path_Nihility.png' 
            }],
            ['Preservation',{ 
                name: 'Preservation', 
                imageUrl: 'assets/images/hsr/icons/HSR_Path_Preservation.png' 
            }],
        ]),
    
        ZZZRoles: new Map([
            ['Anomaly', { 
                name: 'Anomaly', 
                imageUrl: 'assets/images/zzz/icons/ZZZ_Style_Anomaly.png' 
            }],
            ['Attack', {
                name: 'Attack', 
                imageUrl: 'assets/images/zzz/icons/ZZZ_Style_Attack.png'
            }],
            ['Defence', {
                name: 'Defence', 
                imageUrl: 'assets/images/zzz/icons/ZZZ_Style_Defence.png'
            }],
            ['Stun', {
                name: 'Stun', 
                imageUrl: 'assets/images/zzz/icons/ZZZ_Style_Stun.png'
            }],
            ['Support', {
                name: 'Support', 
                imageUrl: 'assets/images/zzz/icons/ZZZ_Style_Support.png'
            }],
        ]),
    }
}