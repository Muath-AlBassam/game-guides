
class WeaponsRepository {
    static getWeaponMetadata(gameCode, weaponName) {
        let data;
        switch (gameCode) {
            case Constants.games.GI:
                data = this.data.GIWeapons.get(weaponName);
                break;
            case Constants.games.HSR:
                data = this.data.HSRLightCones.get(weaponName);
                break;
            case Constants.games.ZZZ:
                data = this.data.ZZZWEngines.get(weaponName);
                break;
        }
        return data ?? { name: weaponName }
    }

    static data = {
        GIWeapons: new Map([
            ['Absolution', {
                name: 'Absolution',
                imageUrl: 'assets/images/gi/weapon/GI_W_Absolution.png',
                rarity: '5'
            }],
            ['A Thousand Floating Dreams', {
                name: 'A Thousand Floating Dreams',
                imageUrl: 'assets/images/gi/weapon/GI_W_AThousandFloatingDreams.png',
                rarity: '5'
            }],
            ['Amos\' Bow', {
                name: 'Amos\' Bow',
                imageUrl: 'assets/images/gi/weapon/GI_W_AmosBow.png',
                rarity: '5'
            }],
            ['Cashflow Supervision', {
                name: 'Cashflow Supervision',
                imageUrl: 'assets/images/gi/weapon/GI_W_CashflowSupervision.png',
                rarity: '5'
            }],
            ['Crimson Moon\'s Semblance', {
                name: 'Crimson Moon\'s Semblance',
                imageUrl: 'assets/images/gi/weapon/GI_W_CrimsonMoonsSemblance.png',
                rarity: '5'
            }],
            ['Engulfing Lightning', {
                name: 'Engulfing Lightning',
                imageUrl: 'assets/images/gi/weapon/GI_W_EngulfingLightning.png',
                rarity: '5'
            }],
            ['Jadefall\'s Splendor', {
                name: 'Jadefall\'s Splendor',
                imageUrl: 'assets/images/gi/weapon/GI_W_JadefallsSplendor.png',
                rarity: '5'
            }],
            ['Kagura\'s Verity', {
                name: 'Kagura\'s Verity',
                imageUrl: 'assets/images/gi/weapon/GI_W_KagurasVerity.png',
                rarity: '5'
            }],
            ['Key of Khaj-Nisut', {
                name: 'Key of Khaj-Nisut',
                imageUrl: 'assets/images/gi/weapon/GI_W_KeyOfKhajNisut.png',
                rarity: '5'
            }],
            ['Mistsplitter Reforged', {
                name: 'Mistsplitter Reforged',
                imageUrl: 'assets/images/gi/weapon/GI_W_MistsplitterReforged.png',
                rarity: '5'
            }],
            ['Primordial Jade Winged-Spear', {
                name: 'Primordial Jade Winged-Spear',
                imageUrl: 'assets/images/gi/weapon/GI_W_PrimordialJadeWingedSpear.png',
                rarity: '5'
            }],
            ['Skyward Blade', {
                name: 'Skyward Blade',
                imageUrl: 'assets/images/gi/weapon/GI_W_SkywardBlade.png',
                rarity: '5'
            }],
            ['Song of Broken Pines', {
                name: 'Song of Broken Pines',
                imageUrl: 'assets/images/gi/weapon/GI_W_SongOfBrokenPines.png',
                rarity: '5'
            }],
            ['Splendor of Tranquil Waters', {
                name: 'Splendor of Tranquil Waters',
                imageUrl: 'assets/images/gi/weapon/GI_W_SplendorOfTranquilWaters.png',
                rarity: '5'
            }],
            ['Staff of Homa', {
                name: 'Staff of Homa',
                imageUrl: 'assets/images/gi/weapon/GI_W_StaffOfHoma.png',
                rarity: '5'
            }],
            ['Tome of the Eternal Flow', {
                name: 'Tome of the Eternal Flow',
                imageUrl: 'assets/images/gi/weapon/GI_W_TomeOfTheEternalFlow.png',
                rarity: '5'
            }],
            ['Uraku Misugiri', {
                name: 'Uraku Misugiri',
                imageUrl: 'assets/images/gi/weapon/GI_W_UrakuMisugiri.png',
                rarity: '5'
            }],
            ['Verdict', {
                name: 'Verdict',
                imageUrl: 'assets/images/gi/weapon/GI_W_Verdict.png',
                rarity: '5'
            }],
            ['Wolf\'s Gravestone', {
                name: 'Wolf\'s Gravestone',
                imageUrl: 'assets/images/gi/weapon/GI_W_WolfsGravestone.png',
                rarity: '5'
            }],
            ['Favonius Lance', {
                name: 'Favonius Lance',
                imageUrl: 'assets/images/gi/weapon/GI_W_FavoniusLance.png',
                rarity: '4'
            }],
            ['Favonius Warbow', {
                name: 'Favonius Warbow',
                imageUrl: 'assets/images/gi/weapon/GI_W_FavoniusWarbow.png',
                rarity: '4'
            }],
            ['Iron Sting', {
                name: 'Iron Sting',
                imageUrl: 'assets/images/gi/weapon/GI_W_IronSting.png',
                rarity: '4'
            }],
            ['Mitternachts Waltz', {
                name: 'Mitternachts Waltz',
                imageUrl: 'assets/images/gi/weapon/GI_W_MitternachtsWaltz.png',
                rarity: '4'
            }],
            ['Oathsworn Eye', {
                name: 'Oathsworn Eye',
                imageUrl: 'assets/images/gi/weapon/GI_W_OathswornEye.png',
                rarity: '4'
            }],
            ['Sacrificial Sword', {
                name: 'Sacrificial Sword',
                imageUrl: 'assets/images/gi/weapon/GI_W_SacrificialSword.png',
                rarity: '4'
            }],
            ['The Black Sword', {
                name: 'The Black Sword',
                imageUrl: 'assets/images/gi/weapon/GI_W_TheBlackSword.png',
                rarity: '4'
            }],
            ['The Catch', {
                name: 'The Catch',
                imageUrl: 'assets/images/gi/weapon/GI_W_TheCatch.png',
                rarity: '4'
            }],
            ['Xiphos\' Moonlight', {
                name: 'Xiphos\' Moonlight',
                imageUrl: 'assets/images/gi/weapon/GI_W_XiphosMoonlight.png',
                rarity: '4'
            }],
            ['Dialogues of the Desert Sages', {
                name: 'Dialogues of the Desert Sages',
                imageUrl: 'assets/images/gi/weapon/GI_W_DialoguesOfTheDesertSages.png',
                rarity: '4'
            }],
            ['Black Tassel', {
                name: 'Black Tassel',
                imageUrl: 'assets/images/gi/weapon/GI_W_BlackTassel.png',
                rarity: '3'
            }],
            ['Deathmatch', {
                name: 'Deathmatch',
                imageUrl: 'assets/images/gi/weapon/GI_W_Deathmatch.png',
                rarity: '4'
            }],
            ['Lumidouce Elegy', {
                name: 'Lumidouce Elegy',
                imageUrl: 'assets/images/gi/weapon/GI_W_LumidouceElegy.png',
                rarity: '5'
            }],
            ['Beacon of the Reed Sea', {
                name: 'Beacon of the Reed Sea',
                imageUrl: 'assets/images/gi/weapon/GI_W_BeaconOfTheReedSea.png',
                rarity: '5'
            }],
            ['Surf\'s Up', {
                name: 'Surf\'s Up',
                imageUrl: 'assets/images/gi/weapon/GI_W_SurfsUp.png',
                rarity: '5'
            }],
            ['Fang of the Mountain King', {
                name: 'Fang of the Mountain King',
                imageUrl: 'assets/images/gi/weapon/GI_W_FangOfTheMountainKing.png',
                rarity: '5'
            }],
            ['Flute of Ezpitzal', {
                name: 'Flute of Ezpitzal',
                imageUrl: 'assets/images/gi/weapon/GI_W_FluteOfEzpitzal.png',
                rarity: '4'
            }],
            ['Astral Vulture\'s Crimson Plumage', {
                name: 'Astral Vulture\'s Crimson Plumage',
                imageUrl: 'assets/images/gi/weapon/GI_W_AstralVulturesCrimsonPlumage.png',
                rarity: '5'
            }],
            ['A Thousand Blazing Suns', {
                name: 'A Thousand Blazing Suns',
                imageUrl: 'assets/images/gi/weapon/GI_W_AThousandBlazingSuns.png',
                rarity: '5'
            }],
            ['Sacrificial Fragments', {
                name: 'Sacrificial Fragments',
                imageUrl: 'assets/images/gi/weapon/GI_W_SacrificialFragments.png',
                rarity: '4'
            }],
            ['The First Great Magic', {
                name: 'The First Great Magic',
                imageUrl: 'assets/images/gi/weapon/GI_W_TheFirstGreatMagic.png',
                rarity: '5'
            }],
            ['Wavebreaker\'s Fin', {
                name: 'Wavebreaker\'s Fin',
                imageUrl: 'assets/images/gi/weapon/GI_W_WavebreakersFin.png',
                rarity: '4'
            }],
            ['The Flute', {
                name: 'The Flute',
                imageUrl: 'assets/images/gi/weapon/GI_W_TheFlute.png',
                rarity: '4'
            }],
        ]),
    
        HSRLightCones: new Map([
            ['Along the Passing Shore', {
                name: 'Along the Passing Shore',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_AlongThePassingShore.png',
                rarity: '5'
            }],
            ['Baptism of Pure Thought', {
                name: 'Baptism of Pure Thought',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_BaptismOfPureThought.png',
                rarity: '5'
            }],
            ['Brighter Than the Sun', {
                name: 'Brighter Than the Sun',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_BrighterThanTheSun.png',
                rarity: '5'
            }],
            ['But the Battle Isn\'t Over', {
                name: 'But the Battle Isn\'t Over',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_ButTheBattleIsntOver.png',
                rarity: '5'
            }],
            ['Earthly Escapade', {
                name: 'Earthly Escapade',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_EarthlyEscapade.png',
                rarity: '5'
            }],
            ['Flowing Nightglow', {
                name: 'Flowing Nightglow',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_FlowingNightglow.png',
                rarity: '5'
            }],
            ['I Shall Be My Own Sword', {
                name: 'I Shall Be My Own Sword',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_IShallBeMyOwnSword.png',
                rarity: '5'
            }],
            ['In the Name of the World', {
                name: 'In the Name of the World',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_InTheNameOfTheWorld.png',
                rarity: '5'
            }],
            ['In the Night', {
                name: 'In the Night',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_InTheNight.png',
                rarity: '5'
            }],
            ['Moment of Victory', {
                name: 'Moment of Victory',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_MomentOfVictory.png',
                rarity: '5'
            }],
            ['Night on the Milky Way', {
                name: 'Night on the Milky Way',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_NightOnTheMilkyWay.png',
                rarity: '5'
            }],
            ['Past Self in Mirror', {
                name: 'Past Self in Mirror',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_PastSelfInMirror.png',
                rarity: '5'
            }],
            ['Patience Is All You Need', {
                name: 'Patience Is All You Need',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_PatienceIsAllYouNeed.png',
                rarity: '5'
            }],
            ['Reforged Remembrance', {
                name: 'Reforged Remembrance',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_ReforgedRemembrance.png',
                rarity: '5'
            }],
            ['Sailing Towards A Second Life', {
                name: 'Sailing Towards A Second Life',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_SailingTowardsASecondLife.png',
                rarity: '5'
            }],
            ['She Already Shut Her Eyes', {
                name: 'She Already Shut Her Eyes',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_SheAlreadyShutHerEyes.png',
                rarity: '5'
            }],
            ['Something Irreplaceable', {
                name: 'Something Irreplaceable',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_SomethingIrreplaceable.png',
                rarity: '5'
            }],
            ['The Unreachable Side', {
                name: 'The Unreachable Side',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_TheUnreachableSide.png',
                rarity: '5'
            }],
            ['Whereabouts Should Dreams Rest', {
                name: 'Whereabouts Should Dreams Rest',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_WhereaboutsShouldDreamsRest.png',
                rarity: '5'
            }],
            ['Yet Hope Is Priceless', {
                name: 'Yet Hope Is Priceless',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_YetHopeIsPriceless.png',
                rarity: '5'
            }],
            ['Before the Tutorial Mission Starts', {
                name: 'Before the Tutorial Mission Starts',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_BeforeTheTutorialMissionStarts.png',
                rarity: '4'
            }],
            ['Carve the Moon, Weave the Clouds', {
                name: 'Carve the Moon, Weave the Clouds',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_CarveTheMoonWeaveTheClouds.png',
                rarity: '4'
            }],
            ['Hey, Over Here', {
                name: 'Hey, Over Here',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_HeyOverHere.png',
                rarity: '4'
            }],
            ['Memories of the Past', {
                name: 'Memories of the Past',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_MemoriesOfThePast.png',
                rarity: '4'
            }],
            ['Perfect Timing', {
                name: 'Perfect Timing',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_PerfectTiming.png',
                rarity: '4'
            }],
            ['Resolution Shines As Pearls of Sweat', {
                name: 'Resolution Shines As Pearls of Sweat',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_ResolutionShinesAsPearlsOfSweat.png',
                rarity: '4'
            }],
            ['Warmth Shortens Cold Nights', {
                name: 'Warmth Shortens Cold Nights',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_WarmthShortensColdNights.png',
                rarity: '4'
            }],
            ['What Is Real?', {
                name: 'What Is Real?',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_WhatIsReal.png',
                rarity: '4'
            }],
            ['Dance! Dance! Dance!', {
                name: 'Dance! Dance! Dance!',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_DanceDanceDance.png',
                rarity: '4'
            }],
            ['Dance at Sunset', {
                name: 'Dance at Sunset',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_DanceAtSunset.png',
                rarity: '5'
            }],
            ['Worrisome, Blissful', {
                name: 'Worrisome, Blissful',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_WorrisomeBlissful.png',
                rarity: '5'
            }],
            ['I Venture Forth to Hunt', {
                name: 'I Venture Forth to Hunt',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_IVentureForthToHunt.png',
                rarity: '5'
            }],
            ['Ninjutsu Inscription: Dazzling Evilbreaker', {
                name: 'Ninjutsu Inscription: Dazzling Evilbreaker',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_NinjutsuInscriptionDazzlingEvilbreaker.png',
                rarity: '5'
            }],
            ['Long Road Leads Home', {
                name: 'Long Road Leads Home',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_LongRoadLeadsHome.png',
                rarity: '5'
            }],
            ['Into the Unreachable Veil', {
                name: 'Into the Unreachable Veil',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_IntoTheUnreachableVeil.png',
                rarity: '5'
            }],
            ['Victory In a Blink', {
                name: 'Victory In a Blink',
                imageUrl: 'assets/images/hsr/light-cone/HSR_LC_VictoryInABlink.png',
                rarity: '4'
            }],
        ]),
    
        ZZZWEngines: new Map([
            ['Fusion Compiler', {
                name: 'Fusion Compiler',
                imageUrl: 'assets/images/zzz/w-engine/ZZZ_WE_FusionCompiler.png',
                rarity: 'S'
            }],
            ['Deep Sea Visitor', {
                name: 'Deep Sea Visitor',
                imageUrl: 'assets/images/zzz/w-engine/ZZZ_WE_DeepSeaVisitor.png',
                rarity: 'S'
            }],
            ['Hellfire Gears', {
                name: 'Hellfire Gears',
                imageUrl: 'assets/images/zzz/w-engine/ZZZ_WE_HellfireGears.png',
                rarity: 'S'
            }],
            ['The Restrained', {
                name: 'The Restrained',
                imageUrl: 'assets/images/zzz/w-engine/ZZZ_WE_TheRestrained.png',
                rarity: 'S'
            }],
            ['Demara Battery Mark II', {
                name: 'Demara Battery Mark II',
                imageUrl: 'assets/images/zzz/w-engine/ZZZ_WE_DemaraBatteryMarkII.png',
                rarity: 'A'
            }],
            ['Bashful Demon', {
                name: 'Bashful Demon',
                imageUrl: 'assets/images/zzz/w-engine/ZZZ_WE_BashfulDemon.png',
                rarity: 'A'
            }],
            ['Kaboom the Cannon', {
                name: 'Kaboom the Cannon',
                imageUrl: 'assets/images/zzz/w-engine/ZZZ_WE_KaboomTheCannon.png',
                rarity: 'A'
            }],
            ['Riot Suppressor Mark VI', {
                name: 'Riot Suppressor Mark VI',
                imageUrl: 'assets/images/zzz/w-engine/ZZZ_WE_RiotSuppressorMarkVI.png',
                rarity: 'S'
            }],
            ['The Vault', {
                name: 'The Vault',
                imageUrl: 'assets/images/zzz/w-engine/ZZZ_WE_TheVault.png',
                rarity: 'A'
            }],
            ['The Brimstone', {
                name: 'The Brimstone',
                imageUrl: 'assets/images/zzz/w-engine/ZZZ_WE_TheBrimstone.png',
                rarity: 'S'
            }],
            ['Sharpened Stinger', {
                name: 'Sharpened Stinger',
                imageUrl: 'assets/images/zzz/w-engine/ZZZ_WE_SharpenedStinger.png',
                rarity: 'S'
            }],
            ['Peacekeeper - Specialized', {
                name: 'Peacekeeper - Specialized',
                imageUrl: 'assets/images/zzz/w-engine/ZZZ_WE_PeacekeeperSpecialized.png',
                rarity: 'A'
            }],
            ['Tusks of Fury', {
                name: 'Tusks of Fury',
                imageUrl: 'assets/images/zzz/w-engine/ZZZ_WE_TusksOfFury.png',
                rarity: 'S'
            }],
            ['Flamemaker Shaker', {
                name: 'Flamemaker Shaker',
                imageUrl: 'assets/images/zzz/w-engine/ZZZ_WE_FlamemakerShaker.png',
                rarity: 'S'
            }],
            ['Timeweaver', {
                name: 'Timeweaver',
                imageUrl: 'assets/images/zzz/w-engine/ZZZ_WE_Timeweaver.png',
                rarity: 'S'
            }],
            ['Hailstorm Shrine', {
                name: 'Hailstorm Shrine',
                imageUrl: 'assets/images/zzz/w-engine/ZZZ_WE_HailstormShrine.png',
                rarity: 'S'
            }],
            ['Heartstring Nocturne', {
                name: 'Heartstring Nocturne',
                imageUrl: 'assets/images/zzz/w-engine/ZZZ_WE_HeartstringNocturne.png',
                rarity: 'S'
            }],
        ]),
    }
}