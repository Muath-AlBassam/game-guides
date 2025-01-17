
class SetsRepository {
    static getSetMetadata(gameCode, setName) {
        let data;
        switch (gameCode) {
            case Constants.games.GI:
                data = this.data.GISets.get(setName);
                break;
            case Constants.games.HSR:
                data = this.data.HSRSets.get(setName);
                break;
            case Constants.games.ZZZ:
                data = this.data.ZZZSets.get(setName);
                break;
        }
        return data ?? { name: setName }
    }

    static data = {
        GISets: new Map([
            ['Blizzard Strayer', {
                name: 'Blizzard Strayer',
                imageUrl: 'assets/images/gi/set/GI_Set_BlizzardStrayer.png'
            }],
            ['Bloodstained Chivalry', {
                name: 'Bloodstained Chivalry',
                imageUrl: 'assets/images/gi/set/GI_Set_BloodstainedChivalry.png'
            }],
            ['Crimson Witch of Flames', {
                name: 'Crimson Witch of Flames',
                imageUrl: 'assets/images/gi/set/GI_Set_CrimsonWitchOfFlames.png'
            }],
            ['Deepwood Memories', {
                name: 'Deepwood Memories',
                imageUrl: 'assets/images/gi/set/GI_Set_DeepwoodMemories.png'
            }],
            ['Emblem of Severed Fate', {
                name: 'Emblem of Severed Fate',
                imageUrl: 'assets/images/gi/set/GI_Set_EmblemOfSeveredFate.png'
            }],
            ['Flower of Paradise Lost', {
                name: 'Flower of Paradise Lost',
                imageUrl: 'assets/images/gi/set/GI_Set_FlowerOfParadiseLost.png'
            }],
            ['Fragment of Harmonic Whimsy', {
                name: 'Fragment of Harmonic Whimsy',
                imageUrl: 'assets/images/gi/set/GI_Set_FragmentOfHarmonicWhimsy.png'
            }],
            ['Gladiator\'s Finale', {
                name: 'Gladiator\'s Finale',
                imageUrl: 'assets/images/gi/set/GI_Set_GladiatorsFinale.png'
            }],
            ['Golden Troupe', {
                name: 'Golden Troupe',
                imageUrl: 'assets/images/gi/set/GI_Set_GoldenTroupe.png'
            }],
            ['Heart of Depth', {
                name: 'Heart of Depth',
                imageUrl: 'assets/images/gi/set/GI_Set_HeartOfDepth.png'
            }],
            ['Husk of Opulent Dreams', {
                name: 'Husk of Opulent Dreams',
                imageUrl: 'assets/images/gi/set/GI_Set_HuskOfOpulentDreams.png'
            }],
            ['Marechaussee Hunter', {
                name: 'Marechaussee Hunter',
                imageUrl: 'assets/images/gi/set/GI_Set_MarechausseeHunter.png'
            }],
            ['Nighttime Whispers in the Echoing Woods', {
                name: 'Nighttime Whispers in the Echoing Woods',
                imageUrl: 'assets/images/gi/set/GI_Set_NighttimeWhispersInTheEchoingWoods.png'
            }],
            ['Noblesse Oblige', {
                name: 'Noblesse Oblige',
                imageUrl: 'assets/images/gi/set/GI_Set_NoblesseOblige.png'
            }],
            ['Ocean-Hued Clam', {
                name: 'Ocean-Hued Clam',
                imageUrl: 'assets/images/gi/set/GI_Set_OceanHuedClam.png'
            }],
            ['Pale Flame', {
                name: 'Pale Flame',
                imageUrl: 'assets/images/gi/set/GI_Set_PaleFlame.png'
            }],
            ['Shimenawa\'s Reminiscence', {
                name: 'Shimenawa\'s Reminiscence',
                imageUrl: 'assets/images/gi/set/GI_Set_ShimenawasReminiscence.png'
            }],
            ['Tenacity of the Millelith', {
                name: 'Tenacity of the Millelith',
                imageUrl: 'assets/images/gi/set/GI_Set_TenacityOfTheMillelith.png'
            }],
            ['Viridescent Venerer', {
                name: 'Viridescent Venerer',
                imageUrl: 'assets/images/gi/set/GI_Set_ViridescentVenerer.png'
            }],
            ['Vourukasha\'s Glow', {
                name: 'Vourukasha\'s Glow',
                imageUrl: 'assets/images/gi/set/GI_Set_VourukashasGlow.png'
            }],
            ['Echoes of an Offering', {
                name: 'Echoes of an Offering',
                imageUrl: 'assets/images/gi/set/GI_Set_EchoesOfAnOffering.png'
            }],
            ['Unfinished Reverie', {
                name: 'Unfinished Reverie',
                imageUrl: 'assets/images/gi/set/GI_Set_UnfinishedReverie.png'
            }],
            ['Obsidian Codex', {
                name: 'Obsidian Codex',
                imageUrl: 'assets/images/gi/set/GI_Set_ObsidianCodex.png'
            }],
            ['Scroll of the Hero of Cinder City', {
                name: 'Scroll of the Hero of Cinder City',
                imageUrl: 'assets/images/gi/set/GI_Set_ScrollOfTheHeroOfCinderCity.png'
            }],
            ['Wanderer\'s Troupe', {
                name: 'Wanderer\'s Troupe',
                imageUrl: 'assets/images/gi/set/GI_Set_WanderersTroupe.png'
            }],
        ]),
    
        HSRSets: new Map([
            ['Champion of Streetwise Boxing', {
                name: 'Champion of Streetwise Boxing',
                imageUrl: 'assets/images/hsr/set/HSR_Set_ChampionOfStreetwiseBoxing.png'
            }],
            ['Genius of Brilliant Stars', {
                name: 'Genius of Brilliant Stars',
                imageUrl: 'assets/images/hsr/set/HSR_Set_GeniusOfBrilliantStars.png'
            }],
            ['Guard of Wuthering Snow', {
                name: 'Guard of Wuthering Snow',
                imageUrl: 'assets/images/hsr/set/HSR_Set_GuardOfWutheringSnow.png'
            }],
            ['Hunter of Glacial Forest', {
                name: 'Hunter of Glacial Forest',
                imageUrl: 'assets/images/hsr/set/HSR_Set_HunterOfGlacialForest.png'
            }],
            ['Iron Cavalry Against the Scourge', {
                name: 'Iron Cavalry Against the Scourge',
                imageUrl: 'assets/images/hsr/set/HSR_Set_IronCavalryAgainstTheScourge.png'
            }],
            ['Knight of Purity Palace', {
                name: 'Knight of Purity Palace',
                imageUrl: 'assets/images/hsr/set/HSR_Set_KnightOfPurityPalace.png'
            }],
            ['Longevous Disciple', {
                name: 'Longevous Disciple',
                imageUrl: 'assets/images/hsr/set/HSR_Set_LongevousDisciple.png'
            }],
            ['Messenger Traversing Hackerspace', {
                name: 'Messenger Traversing Hackerspace',
                imageUrl: 'assets/images/hsr/set/HSR_Set_MessengerTraversingHackerspace.png'
            }],
            ['Musketeer of Wild Wheat', {
                name: 'Musketeer of Wild Wheat',
                imageUrl: 'assets/images/hsr/set/HSR_Set_MusketeerOfWildWheat.png'
            }],
            ['Passerby of Wandering Cloud', {
                name: 'Passerby of Wandering Cloud',
                imageUrl: 'assets/images/hsr/set/HSR_Set_PasserbyOfWanderingCloud.png'
            }],
            ['Pioneer Diver of Dead Waters', {
                name: 'Pioneer Diver of Dead Waters',
                imageUrl: 'assets/images/hsr/set/HSR_Set_PioneerDiverOfDeadWaters.png'
            }],
            ['Prisoner in Deep Confinement', {
                name: 'Prisoner in Deep Confinement',
                imageUrl: 'assets/images/hsr/set/HSR_Set_PrisonerInDeepConfinement.png'
            }],
            ['The Ashblazing Grand Duke', {
                name: 'The Ashblazing Grand Duke',
                imageUrl: 'assets/images/hsr/set/HSR_Set_TheAshblazingGrandDuke.png'
            }],
            ['The Wind-Soaring Valorous', {
                name: 'The Wind-Soaring Valorous',
                imageUrl: 'assets/images/hsr/set/HSR_Set_TheWindSoaringValorous.png'
            }],
            ['Thief of Shooting Meteor', {
                name: 'Thief of Shooting Meteor',
                imageUrl: 'assets/images/hsr/set/HSR_Set_ThiefOfShootingMeteor.png'
            }],
            ['Wastelander of Banditry Desert', {
                name: 'Wastelander of Banditry Desert',
                imageUrl: 'assets/images/hsr/set/HSR_Set_WastelanderOfBanditryDesert.jpg'
            }],
            ['Watchmaker, Master of Dream Machinations', {
                name: 'Watchmaker, Master of Dream Machinations',
                imageUrl: 'assets/images/hsr/set/HSR_Set_WatchmakerMasterOfDreamMachinations.png'
            }],
            ['Belobog of the Architects', {
                name: 'Belobog of the Architects',
                imageUrl: 'assets/images/hsr/set/HSR_Set_BelobogOfTheArchitects.png'
            }],
            ['Broken Keel', {
                name: 'Broken Keel',
                imageUrl: 'assets/images/hsr/set/HSR_Set_BrokenKeel.png'
            }],
            ['Duran, Dynasty of Running Wolves', {
                name: 'Duran, Dynasty of Running Wolves',
                imageUrl: 'assets/images/hsr/set/HSR_Set_DuranDynastyOfRunningWolves.png'
            }],
            ['Firmament Frontline: Glamoth', {
                name: 'Firmament Frontline: Glamoth',
                imageUrl: 'assets/images/hsr/set/HSR_Set_FirmamentFrontlineGlamoth.png'
            }],
            ['Fleet of the Ageless', {
                name: 'Fleet of the Ageless',
                imageUrl: 'assets/images/hsr/set/HSR_Set_FleetOfTheAgeless.png'
            }],
            ['Forge of the Kalpagni Lantern', {
                name: 'Forge of the Kalpagni Lantern',
                imageUrl: 'assets/images/hsr/set/HSR_Set_ForgeOfTheKalpagniLantern.png'
            }],
            ['Inert Salsotto', {
                name: 'Inert Salsotto',
                imageUrl: 'assets/images/hsr/set/HSR_Set_InertSalsotto.png'
            }],
            ['Izumo Gensei and Takama Divine Realm', {
                name: 'Izumo Gensei and Takama Divine Realm',
                imageUrl: 'assets/images/hsr/set/HSR_Set_IzumoGenseiAndTakamaDivineRealm.png'
            }],
            ['Pan-Cosmic Commercial Enterprise', {
                name: 'Pan-Cosmic Commercial Enterprise',
                imageUrl: 'assets/images/hsr/set/HSR_Set_PanCosmicCommercialEnterprise.png'
            }],
            ['Penacony, Land of the Dreams', {
                name: 'Penacony, Land of the Dreams',
                imageUrl: 'assets/images/hsr/set/HSR_Set_PenaconyLandOfTheDreams.png'
            }],
            ['Rutilant Arena', {
                name: 'Rutilant Arena',
                imageUrl: 'assets/images/hsr/set/HSR_Set_RutilantArena.png'
            }],
            ['Space Sealing Station', {
                name: 'Space Sealing Station',
                imageUrl: 'assets/images/hsr/set/HSR_Set_SpaceSealingStation.png'
            }],
            ['Talia: Kingdom of Banditry', {
                name: 'Talia: Kingdom of Banditry',
                imageUrl: 'assets/images/hsr/set/HSR_Set_TaliaKingdomOfBanditry.png'
            }],
            ['Scholar\'s Silver-Rimmed Monocle', {
                name: 'Scholar\'s Silver-Rimmed Monocle',
                imageUrl: 'assets/images/hsr/set/HSR_Set_ScholarsSilverRimmedMonocle.png'
            }],
            ['Sacerdos\' Relived Ordeal', {
                name: 'Sacerdos\' Relived Ordeal',
                imageUrl: 'assets/images/hsr/set/HSR_Set_SacerdosRelivedOrdeal.png'
            }],
            ['Sprightly Vonwacq', {
                name: 'Sprightly Vonwacq',
                imageUrl: 'assets/images/hsr/set/HSR_Set_SprightlyVonwacq.png'
            }],
        ]),
    
        ZZZSets: new Map([
            ['Chaotic Metal', {
                name: 'Chaotic Metal',
                imageUrl: 'assets/images/zzz/drive-disk/ZZZ_DD_ChaoticMetal.png'
            }],
            ['Hormone Punk', {
                name: 'Hormone Punk',
                imageUrl: 'assets/images/zzz/drive-disk/ZZZ_DD_HormonePunk.png'
            }],
            ['Polar Metal', {
                name: 'Polar Metal',
                imageUrl: 'assets/images/zzz/drive-disk/ZZZ_DD_PolarMetal.png'
            }],
            ['Shockstar Disco', {
                name: 'Shockstar Disco',
                imageUrl: 'assets/images/zzz/drive-disk/ZZZ_DD_ShockstarDisco.png'
            }],
            ['Swing Jazz', {
                name: 'Swing Jazz',
                imageUrl: 'assets/images/zzz/drive-disk/ZZZ_DD_SwingJazz.png'
            }],
            ['Woodpecker Electro', {
                name: 'Woodpecker Electro',
                imageUrl: 'assets/images/zzz/drive-disk/ZZZ_DD_WoodpeckerElectro.png'
            }],
            ['Freedom Blues', {
                name: 'Freedom Blues',
                imageUrl: 'assets/images/zzz/drive-disk/ZZZ_DD_FreedomBlues.png'
            }],
            ['Thunder Metal', {
                name: 'Thunder Metal',
                imageUrl: 'assets/images/zzz/drive-disk/ZZZ_DD_ThunderMetal.png'
            }],
            ['Fanged Metal', {
                name: 'Fanged Metal',
                imageUrl: 'assets/images/zzz/drive-disk/ZZZ_DD_FangedMetal.png'
            }],
            ['Proto Punk', {
                name: 'Proto Punk',
                imageUrl: 'assets/images/zzz/drive-disk/ZZZ_DD_ProtoPunk.png'
            }],
            ['Inferno Metal', {
                name: 'Inferno Metal',
                imageUrl: 'assets/images/zzz/drive-disk/ZZZ_DD_InfernoMetal.png'
            }],
            ['Chaos Jazz', {
                name: 'Chaos Jazz',
                imageUrl: 'assets/images/zzz/drive-disk/ZZZ_DD_ChaosJazz.png'
            }],
            ['Branch & Blade Song', {
                name: 'Branch & Blade Song',
                imageUrl: 'assets/images/zzz/drive-disk/ZZZ_DD_Branch&BladeSong.png'
            }],
        ])
    }
}