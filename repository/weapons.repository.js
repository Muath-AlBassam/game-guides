
function getWeaponMetadata(gameCode, weaponName) {
    let data;
    switch (gameCode) {
        case Constants.games.GI:
            data = WeaponsRepository.GIWeapons.get(weaponName);
            break;
        case Constants.games.HSR:
            data = WeaponsRepository.HSRLightCones.get(weaponName);
            break;
        case Constants.games.ZZZ:
            data = WeaponsRepository.ZZZWEngines.get(weaponName);
            break;
    }
    return data ?? { name: weaponName }
}

// ----------------------------------------------------------------------------

const WeaponsRepository = {
    GIWeapons: new Map([
        ['Absolution', {
            name: 'Absolution',
            imageUrl: 'assets/gi/weapon/GI_Weapon_Absolution.png',
            rarity: '5'
        }],
        ['A Thousand Floating Dreams', {
            name: 'A Thousand Floating Dreams',
            imageUrl: 'assets/gi/weapon/GI_Weapon_AThousandFloatingDreams.png',
            rarity: '5'
        }],
        ['Amos\' Bow', {
            name: 'Amos\' Bow',
            imageUrl: 'assets/gi/weapon/GI_Weapon_AmosBow.png',
            rarity: '5'
        }],
        ['Cashflow Supervision', {
            name: 'Cashflow Supervision',
            imageUrl: 'assets/gi/weapon/GI_Weapon_CashflowSupervision.png',
            rarity: '5'
        }],
        ['Crimson Moon\'s Semblance', {
            name: 'Crimson Moon\'s Semblance',
            imageUrl: 'assets/gi/weapon/GI_Weapon_CrimsonMoonsSemblance.png',
            rarity: '5'
        }],
        ['Engulfing Lightning', {
            name: 'Engulfing Lightning',
            imageUrl: 'assets/gi/weapon/GI_Weapon_EngulfingLightning.png',
            rarity: '5'
        }],
        ['Jadefall\'s Splendor', {
            name: 'Jadefall\'s Splendor',
            imageUrl: 'assets/gi/weapon/GI_Weapon_JadefallsSplendor.png',
            rarity: '5'
        }],
        ['Kagura\'s Verity', {
            name: 'Kagura\'s Verity',
            imageUrl: 'assets/gi/weapon/GI_Weapon_KagurasVerity.png',
            rarity: '5'
        }],
        ['Key of Khaj-Nisut', {
            name: 'Key of Khaj-Nisut',
            imageUrl: 'assets/gi/weapon/GI_Weapon_KeyOfKhajNisut.png',
            rarity: '5'
        }],
        ['Mistsplitter Reforged', {
            name: 'Mistsplitter Reforged',
            imageUrl: 'assets/gi/weapon/GI_Weapon_MistsplitterReforged.png',
            rarity: '5'
        }],
        ['Primordial Jade Winged-Spear', {
            name: 'Primordial Jade Winged-Spear',
            imageUrl: 'assets/gi/weapon/GI_Weapon_PrimordialJadeWingedSpear.png',
            rarity: '5'
        }],
        ['Skyward Blade', {
            name: 'Skyward Blade',
            imageUrl: 'assets/gi/weapon/GI_Weapon_SkywardBlade.png',
            rarity: '5'
        }],
        ['Song of Broken Pines', {
            name: 'Song of Broken Pines',
            imageUrl: 'assets/gi/weapon/GI_Weapon_SongOfBrokenPines.png',
            rarity: '5'
        }],
        ['Splendor of Tranquil Waters', {
            name: 'Splendor of Tranquil Waters',
            imageUrl: 'assets/gi/weapon/GI_Weapon_SplendorOfTranquilWaters.png',
            rarity: '5'
        }],
        ['Staff of Homa', {
            name: 'Staff of Homa',
            imageUrl: 'assets/gi/weapon/GI_Weapon_StaffOfHoma.png',
            rarity: '5'
        }],
        ['Tome of the Eternal Flow', {
            name: 'Tome of the Eternal Flow',
            imageUrl: 'assets/gi/weapon/GI_Weapon_TomeOfTheEternalFlow.png',
            rarity: '5'
        }],
        ['Uraku Misugiri', {
            name: 'Uraku Misugiri',
            imageUrl: 'assets/gi/weapon/GI_Weapon_UrakuMisugiri.png',
            rarity: '5'
        }],
        ['Verdict', {
            name: 'Verdict',
            imageUrl: 'assets/gi/weapon/GI_Weapon_Verdict.png',
            rarity: '5'
        }],
        ['Wolf\'s Gravestone', {
            name: 'Wolf\'s Gravestone',
            imageUrl: 'assets/gi/weapon/GI_Weapon_WolfsGravestone.png',
            rarity: '5'
        }],
        ['Favonius Lance', {
            name: 'Favonius Lance',
            imageUrl: 'assets/gi/weapon/GI_Weapon_FavoniusLance.png',
            rarity: '4'
        }],
        ['Favonius Warbow', {
            name: 'Favonius Warbow',
            imageUrl: 'assets/gi/weapon/GI_Weapon_FavoniusWarbow.png',
            rarity: '4'
        }],
        ['Iron Sting', {
            name: 'Iron Sting',
            imageUrl: 'assets/gi/weapon/GI_Weapon_IronSting.png',
            rarity: '4'
        }],
        ['Mitternachts Waltz', {
            name: 'Mitternachts Waltz',
            imageUrl: 'assets/gi/weapon/GI_Weapon_MitternachtsWaltz.png',
            rarity: '4'
        }],
        ['Oathsworn Eye', {
            name: 'Oathsworn Eye',
            imageUrl: 'assets/gi/weapon/GI_Weapon_OathswornEye.png',
            rarity: '4'
        }],
        ['Sacrificial Sword', {
            name: 'Sacrificial Sword',
            imageUrl: 'assets/gi/weapon/GI_Weapon_SacrificialSword.png',
            rarity: '4'
        }],
        ['The Black Sword', {
            name: 'The Black Sword',
            imageUrl: 'assets/gi/weapon/GI_Weapon_TheBlackSword.png',
            rarity: '4'
        }],
        ['The Catch', {
            name: 'The Catch',
            imageUrl: 'assets/gi/weapon/GI_Weapon_TheCatch.png',
            rarity: '4'
        }],
        ['Xiphos\' Moonlight', {
            name: 'Xiphos\' Moonlight',
            imageUrl: 'assets/gi/weapon/GI_Weapon_XiphosMoonlight.png',
            rarity: '4'
        }],
        ['Dialogues of the Desert Sages', {
            name: 'Dialogues of the Desert Sages',
            imageUrl: 'assets/gi/weapon/GI_Weapon_DialoguesOfTheDesertSages.png',
            rarity: '4'
        }],
        ['Black Tassel', {
            name: 'Black Tassel',
            imageUrl: 'assets/gi/weapon/GI_Weapon_BlackTassel.png',
            rarity: '3'
        }],
        ['Deathmatch', {
            name: 'Deathmatch',
            imageUrl: 'assets/gi/weapon/GI_W_Deathmatch.png',
            rarity: '4'
        }]
    ]),

    HSRLightCones: new Map([
        ['Along the Passing Shore', {
            name: 'Along the Passing Shore',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_AlongThePassingShore.jpg',
            rarity: '5'
        }],
        ['Baptism of Pure Thought', {
            name: 'Baptism of Pure Thought',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_BaptismOfPureThought.jpg',
            rarity: '5'
        }],
        ['Brighter Than the Sun', {
            name: 'Brighter Than the Sun',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_BrighterThanTheSun.jpg',
            rarity: '5'
        }],
        ['But the Battle Isn\'t Over', {
            name: 'But the Battle Isn\'t Over',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_ButTheBattleIsntOver.jpg',
            rarity: '5'
        }],
        ['Earthly Escapade', {
            name: 'Earthly Escapade',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_EarthlyEscapade.jpg',
            rarity: '5'
        }],
        ['Flowing Nightglow', {
            name: 'Flowing Nightglow',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_FlowingNightglow.jpg',
            rarity: '5'
        }],
        ['I Shall Be My Own Sword', {
            name: 'I Shall Be My Own Sword',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_IShallBeMyOwnSword.jpg',
            rarity: '5'
        }],
        ['In the Name of the World', {
            name: 'In the Name of the World',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_InTheNameOfTheWorld.jpg',
            rarity: '5'
        }],
        ['In the Night', {
            name: 'In the Night',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_InTheNight.jpg',
            rarity: '5'
        }],
        ['Moment of Victory', {
            name: 'Moment of Victory',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_MomentOfVictory.jpg',
            rarity: '5'
        }],
        ['Night on the Milky Way', {
            name: 'Night on the Milky Way',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_NightOnTheMilkyWay.jpg',
            rarity: '5'
        }],
        ['Past Self in Mirror', {
            name: 'Past Self in Mirror',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_PastSelfInMirror.jpg',
            rarity: '5'
        }],
        ['Patience Is All You Need', {
            name: 'Patience Is All You Need',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_PatienceIsAllYouNeed.jpg',
            rarity: '5'
        }],
        ['Reforged Remembrance', {
            name: 'Reforged Remembrance',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_ReforgedRemembrance.jpg',
            rarity: '5'
        }],
        ['Sailing Towards A Second Life', {
            name: 'Sailing Towards A Second Life',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_SailingTowardsASecondLife.jpg',
            rarity: '5'
        }],
        ['She Already Shut Her Eyes', {
            name: 'She Already Shut Her Eyes',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_SheAlreadyShutHerEyes.jpg',
            rarity: '5'
        }],
        ['Something Irreplaceable', {
            name: 'Something Irreplaceable',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_SomethingIrreplaceable.jpg',
            rarity: '5'
        }],
        ['The Unreachable Side', {
            name: 'The Unreachable Side',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_TheUnreachableSide.jpg',
            rarity: '5'
        }],
        ['Whereabouts Should Dreams Rest', {
            name: 'Whereabouts Should Dreams Rest',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_WhereaboutsShouldDreamsRest.jpg',
            rarity: '5'
        }],
        ['Yet Hope Is Priceless', {
            name: 'Yet Hope Is Priceless',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_YetHopeIsPriceless.jpg',
            rarity: '5'
        }],
        ['Before the Tutorial Mission Starts', {
            name: 'Before the Tutorial Mission Starts',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_BeforeTheTutorialMissionStarts.jpg',
            rarity: '4'
        }],
        ['Carve the Moon, Weave the Clouds', {
            name: 'Carve the Moon, Weave the Clouds',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_CarveTheMoonWeaveTheClouds.jpg',
            rarity: '4'
        }],
        ['Hey, Over Here', {
            name: 'Hey, Over Here',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_HeyOverHere.jpg',
            rarity: '4'
        }],
        ['Memories of the Past', {
            name: 'Memories of the Past',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_MemoriesOfThePast.jpg',
            rarity: '4'
        }],
        ['Perfect Timing', {
            name: 'Perfect Timing',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_PerfectTiming.jpg',
            rarity: '4'
        }],
        ['Resolution Shines As Pearls of Sweat', {
            name: 'Resolution Shines As Pearls of Sweat',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_ResolutionShinesAsPearlsOfSweat.jpg',
            rarity: '4'
        }],
        ['Warmth Shortens Cold Nights', {
            name: 'Warmth Shortens Cold Nights',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_WarmthShortensColdNights.jpg',
            rarity: '4'
        }],
        ['What Is Real?', {
            name: 'What Is Real?',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_WhatIsReal.jpg',
            rarity: '4'
        }],
        ['Dance! Dance! Dance!', {
            name: 'Dance! Dance! Dance!',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_DanceDanceDance.jpg',
            rarity: '4'
        }],
        ['Dance at Sunset', {
            name: 'Dance at Sunset',
            imageUrl: 'assets/hsr/light-cone/HSR_LC_DanceAtSunset.jpg',
            rarity: '5'
        }]
    ]),

    ZZZWEngines: new Map([
        ['Fusion Compiler', {
            name: 'Fusion Compiler',
            imageUrl: 'assets/zzz/w-engine/ZZZ_WE_FusionCompiler.jpg',
            rarity: 'S'
        }],
        ['Deep Sea Visitor', {
            name: 'Deep Sea Visitor',
            imageUrl: 'assets/zzz/w-engine/ZZZ_WE_DeepSeaVisitor.jpg',
            rarity: 'S'
        }],
        ['Hellfire Gears', {
            name: 'Hellfire Gears',
            imageUrl: 'assets/zzz/w-engine/ZZZ_WE_HellfireGears.jpg',
            rarity: 'S'
        }],
        ['The Restrained', {
            name: 'The Restrained',
            imageUrl: 'assets/zzz/w-engine/ZZZ_WE_TheRestrained.jpg',
            rarity: 'S'
        }],
        ['Starlight Engine', {
            name: 'Starlight Engine',
            imageUrl: 'assets/zzz/w-engine/ZZZ_WE_StarlightEngine.jpg',
            rarity: 'A'
        }],
        ['Demara Battery Mark II', {
            name: 'Demara Battery Mark II',
            imageUrl: 'assets/zzz/w-engine/ZZZ_WE_DemaraBatteryMarkII.jpg',
            rarity: 'A'
        }],
        ['Bashful Demon', {
            name: 'Bashful Demon',
            imageUrl: 'assets/zzz/w-engine/ZZZ_WE_BashfulDemon.jpg',
            rarity: 'A'
        }],
        ['Kaboom the Cannon', {
            name: 'Kaboom the Cannon',
            imageUrl: 'assets/zzz/w-engine/ZZZ_WE_KaboomTheCannon.jpg',
            rarity: 'A'
        }],
        ['Riot Suppressor Mark VI', {
            name: 'Riot Suppressor Mark VI',
            imageUrl: 'assets/zzz/w-engine/ZZZ_WE_RiotSuppressorMarkVI.jpg',
            rarity: 'S'
        }],
        ['The Vault', {
            name: 'The Vault',
            imageUrl: 'assets/zzz/w-engine/ZZZ_WE_TheVault.jpg',
            rarity: 'A'
        }],
    ]),
}