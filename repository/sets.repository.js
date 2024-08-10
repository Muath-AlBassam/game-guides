
function getSetMetadata(gameCode, setName) {
    let data;
    switch (gameCode) {
        case Constants.games.GI:
            data = SetsRepository.GISets.get(setName);
            break;
        case Constants.games.HSR:
            data = SetsRepository.HSRSets.get(setName);
            break;
        case Constants.games.ZZZ:
            data = SetsRepository.ZZZSets.get(setName);
            break;
    }
    return data ?? { name: setName }
}

// ----------------------------------------------------------------------------

const SetsRepository = {
    GISets: new Map([
        ['Blizzard Strayer', {
            name: 'Blizzard Strayer',
            imageUrl: 'assets/gi/set/GI_Set_BlizzardStrayer.png'
        }],
        ['Bloodstained Chivalry', {
            name: 'Bloodstained Chivalry',
            imageUrl: 'assets/gi/set/GI_Set_BloodstainedChivalry.png'
        }],
        ['Crimson Witch of Flames', {
            name: 'Crimson Witch of Flames',
            imageUrl: 'assets/gi/set/GI_Set_CrimsonWitchOfFlames.png'
        }],
        ['Deepwood Memories', {
            name: 'Deepwood Memories',
            imageUrl: 'assets/gi/set/GI_Set_DeepwoodMemories.png'
        }],
        ['Emblem of Severed Fate', {
            name: 'Emblem of Severed Fate',
            imageUrl: 'assets/gi/set/GI_Set_EmblemOfSeveredFate.png'
        }],
        ['Flower of Paradise Lost', {
            name: 'Flower of Paradise Lost',
            imageUrl: 'assets/gi/set/GI_Set_FlowerOfParadiseLost.png'
        }],
        ['Fragment of Harmonic Whimsy', {
            name: 'Fragment of Harmonic Whimsy',
            imageUrl: 'assets/gi/set/GI_Set_FragmentOfHarmonicWhimsy.png'
        }],
        ['Gladiator\'s Finale', {
            name: 'Gladiator\'s Finale',
            imageUrl: 'assets/gi/set/GI_Set_GladiatorsFinale.png'
        }],
        ['Golden Troupe', {
            name: 'Golden Troupe',
            imageUrl: 'assets/gi/set/GI_Set_GoldenTroupe.png'
        }],
        ['Heart of Depth', {
            name: 'Heart of Depth',
            imageUrl: 'assets/gi/set/GI_Set_HeartOfDepth.png'
        }],
        ['Husk of Opulent Dreams', {
            name: 'Husk of Opulent Dreams',
            imageUrl: 'assets/gi/set/GI_Set_HuskOfOpulentDreams.png'
        }],
        ['Marechaussee Hunter', {
            name: 'Marechaussee Hunter',
            imageUrl: 'assets/gi/set/GI_Set_MarechausseeHunter.png'
        }],
        ['Nighttime Whispers in the Echoing Woods', {
            name: 'Nighttime Whispers in the Echoing Woods',
            imageUrl: 'assets/gi/set/GI_Set_NighttimeWhispersInTheEchoingWoods.png'
        }],
        ['Noblesse Oblige', {
            name: 'Noblesse Oblige',
            imageUrl: 'assets/gi/set/GI_Set_NoblesseOblige.png'
        }],
        ['Ocean-Hued Clam', {
            name: 'Ocean-Hued Clam',
            imageUrl: 'assets/gi/set/GI_Set_OceanHuedClam.png'
        }],
        ['Pale Flame', {
            name: 'Pale Flame',
            imageUrl: 'assets/gi/set/GI_Set_PaleFlame.png'
        }],
        ['Shimenawa\'s Reminiscence', {
            name: 'Shimenawa\'s Reminiscence',
            imageUrl: 'assets/gi/set/GI_Set_ShimenawasReminiscence.png'
        }],
        ['Tenacity of the Millelith', {
            name: 'Tenacity of the Millelith',
            imageUrl: 'assets/gi/set/GI_Set_TenacityOfTheMillelith.png'
        }],
        ['Viridescent Venerer', {
            name: 'Viridescent Venerer',
            imageUrl: 'assets/gi/set/GI_Set_ViridescentVenerer.png'
        }],
        ['Vourukasha\'s Glow', {
            name: 'Vourukasha\'s Glow',
            imageUrl: 'assets/gi/set/GI_Set_VourukashasGlow.png'
        }],
        ['Echoes of an Offering', {
            name: 'Echoes of an Offering',
            imageUrl: 'assets/gi/set/GI_Set_EchoesOfAnOffering.png'
        }],
        ['Unfinished Reverie', {
            name: 'Unfinished Reverie',
            imageUrl: 'assets/gi/set/GI_Set_UnfinishedReverie.png'
        }]
    ]),

    HSRSets: new Map([
        ['Champion of Streetwise Boxing', {
            name: 'Champion of Streetwise Boxing',
            imageUrl: 'assets/hsr/set/HSR_Set_ChampionOfStreetwiseBoxing.jpg'
        }],
        ['Genius of Brilliant Stars', {
            name: 'Genius of Brilliant Stars',
            imageUrl: 'assets/hsr/set/HSR_Set_GeniusOfBrilliantStars.jpg'
        }],
        ['Guard of Wuthering Snow', {
            name: 'Guard of Wuthering Snow',
            imageUrl: 'assets/hsr/set/HSR_Set_GuardOfWutheringSnow.jpg'
        }],
        ['Hunter of Glacial Forest', {
            name: 'Hunter of Glacial Forest',
            imageUrl: 'assets/hsr/set/HSR_Set_HunterOfGlacialForest.jpg'
        }],
        ['Iron Cavalry Against the Scourge', {
            name: 'Iron Cavalry Against the Scourge',
            imageUrl: 'assets/hsr/set/HSR_Set_IronCavalryAgainstTheScourge.jpg'
        }],
        ['Knight of Purity Palace', {
            name: 'Knight of Purity Palace',
            imageUrl: 'assets/hsr/set/HSR_Set_KnightOfPurityPalace.jpg'
        }],
        ['Longevous Disciple', {
            name: 'Longevous Disciple',
            imageUrl: 'assets/hsr/set/HSR_Set_LongevousDisciple.jpg'
        }],
        ['Messenger Traversing Hackerspace', {
            name: 'Messenger Traversing Hackerspace',
            imageUrl: 'assets/hsr/set/HSR_Set_MessengerTraversingHackerspace.jpg'
        }],
        ['Musketeer of Wild Wheat', {
            name: 'Musketeer of Wild Wheat',
            imageUrl: 'assets/hsr/set/HSR_Set_MusketeerOfWildWheat.jpg'
        }],
        ['Passerby of Wandering Cloud', {
            name: 'Passerby of Wandering Cloud',
            imageUrl: 'assets/hsr/set/HSR_Set_PasserbyOfWanderingCloud.jpg'
        }],
        ['Pioneer Diver of Dead Waters', {
            name: 'Pioneer Diver of Dead Waters',
            imageUrl: 'assets/hsr/set/HSR_Set_PioneerDiverOfDeadWaters.jpg'
        }],
        ['Prisoner in Deep Confinement', {
            name: 'Prisoner in Deep Confinement',
            imageUrl: 'assets/hsr/set/HSR_Set_PrisonerInDeepConfinement.jpg'
        }],
        ['The Ashblazing Grand Duke', {
            name: 'The Ashblazing Grand Duke',
            imageUrl: 'assets/hsr/set/HSR_Set_TheAshblazingGrandDuke.jpg'
        }],
        ['The Wind-Soaring Valorous', {
            name: 'The Wind-Soaring Valorous',
            imageUrl: 'assets/hsr/set/HSR_Set_TheWindSoaringValorous.jpg'
        }],
        ['Thief of Shooting Meteor', {
            name: 'Thief of Shooting Meteor',
            imageUrl: 'assets/hsr/set/HSR_Set_ThiefOfShootingMeteor.jpg'
        }],
        ['Wastelander of Banditry Desert', {
            name: 'Wastelander of Banditry Desert',
            imageUrl: 'assets/hsr/set/HSR_Set_WastelanderOfBanditryDesert.jpg'
        }],
        ['Watchmaker, Master of Dream Machinations', {
            name: 'Watchmaker, Master of Dream Machinations',
            imageUrl: 'assets/hsr/set/HSR_Set_WatchmakerMasterOfDreamMachinations.jpg'
        }],
        ['Belobog of the Architects', {
            name: 'Belobog of the Architects',
            imageUrl: 'assets/hsr/set/HSR_Set_BelobogOfTheArchitects.jpg'
        }],
        ['Broken Keel', {
            name: 'Broken Keel',
            imageUrl: 'assets/hsr/set/HSR_Set_BrokenKeel.jpg'
        }],
        ['Celestial Differentiator', {
            name: 'Celestial Differentiator',
            imageUrl: 'assets/hsr/set/HSR_Set_CelestialDifferentiator.jpg'
        }],
        ['Duran, Dynasty of Running Wolves', {
            name: 'Duran, Dynasty of Running Wolves',
            imageUrl: 'assets/hsr/set/HSR_Set_DuranDynastyOfRunningWolves.jpg'
        }],
        ['Firmament Frontline: Glamoth', {
            name: 'Firmament Frontline: Glamoth',
            imageUrl: 'assets/hsr/set/HSR_Set_FirmamentFrontlineGlamoth.jpg'
        }],
        ['Fleet of the Ageless', {
            name: 'Fleet of the Ageless',
            imageUrl: 'assets/hsr/set/HSR_Set_FleetOfTheAgeless.jpg'
        }],
        ['Forge of the Kalpagni Lantern', {
            name: 'Forge of the Kalpagni Lantern',
            imageUrl: 'assets/hsr/set/HSR_Set_ForgeOfTheKalpagniLantern.jpg'
        }],
        ['Inert Salsotto', {
            name: 'Inert Salsotto',
            imageUrl: 'assets/hsr/set/HSR_Set_InertSalsotto.jpg'
        }],
        ['Izumo Gensei and Takama Divine Realm', {
            name: 'Izumo Gensei and Takama Divine Realm',
            imageUrl: 'assets/hsr/set/HSR_Set_IzumoGenseiAndTakamaDivineRealm.jpg'
        }],
        ['Pan-Cosmic Commercial Enterprise', {
            name: 'Pan-Cosmic Commercial Enterprise',
            imageUrl: 'assets/hsr/set/HSR_Set_PanCosmicCommercialEnterprise.jpg'
        }],
        ['Penacony, Land of the Dreams', {
            name: 'Penacony, Land of the Dreams',
            imageUrl: 'assets/hsr/set/HSR_Set_PenaconyLandOfTheDreams.jpg'
        }],
        ['Rutilant Arena', {
            name: 'Rutilant Arena',
            imageUrl: 'assets/hsr/set/HSR_Set_RutilantArena.jpg'
        }],
        ['Space Sealing Station', {
            name: 'Space Sealing Station',
            imageUrl: 'assets/hsr/set/HSR_Set_SpaceSealingStation.jpg'
        }],
        ['Talia: Kingdom of Banditry', {
            name: 'Talia: Kingdom of Banditry',
            imageUrl: 'assets/hsr/set/HSR_Set_TaliaKingdomOfBanditry.jpg'
        }],
    ]),

    ZZZSets: new Map([
        ['Chaotic Metal', {
            name: 'Chaotic Metal',
            imageUrl: 'assets/zzz/drive-disk/ZZZ_DD_ChaoticMetal.jpg'
        }],
        ['Hormone Punk', {
            name: 'Hormone Punk',
            imageUrl: 'assets/zzz/drive-disk/ZZZ_DD_HormonePunk.jpg'
        }],
        ['Polar Metal', {
            name: 'Polar Metal',
            imageUrl: 'assets/zzz/drive-disk/ZZZ_DD_PolarMetal.jpg'
        }],
        ['Shockstar Disco', {
            name: 'Shockstar Disco',
            imageUrl: 'assets/zzz/drive-disk/ZZZ_DD_ShockstarDisco.jpg'
        }],
        ['Swing Jazz', {
            name: 'Swing Jazz',
            imageUrl: 'assets/zzz/drive-disk/ZZZ_DD_SwingJazz.jpg'
        }],
        ['Woodpecker Electro', {
            name: 'Woodpecker Electro',
            imageUrl: 'assets/zzz/drive-disk/ZZZ_DD_WoodpeckerElectro.jpg'
        }],
        ['Freedom Blues', {
            name: 'Freedom Blues',
            imageUrl: 'assets/zzz/drive-disk/ZZZ_DD_FreedomBlues.jpg'
        }],
        ['Thunder Metal', {
            name: 'Thunder Metal',
            imageUrl: 'assets/zzz/drive-disk/ZZZ_DD_ThunderMetal.jpg'
        }]
    ])
}