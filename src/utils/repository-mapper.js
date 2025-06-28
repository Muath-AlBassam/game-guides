class RepositoryMapper {
    static mapBuilds(builds) {
        return this.arrayTo2LevelMap(
            builds,
            vArr => {
                let weapon = vArr.find(item => item.TYPE == 'WEAPON');
                let sets = vArr.filter(item => item.TYPE == 'SET');
                return {
                    weapon: { name: weapon.NAME },
                    sets: sets.map(set => {
                        return { name: set.NAME, pieceCount: set.COUNT };
                    })
                };
            },
            'CHARACTER_CODE'
        );
    }

    static mapButtons(buttons) {
        return this.arrayTo2LevelMap(
            buttons,
            v => { return { name: v[0].NAME, imageUrl: Utils.appendRepoUrl(v[0].IMAGE_URL) } },
        );
    }

    static mapCharacters(characters) {
        return this.arrayTo2LevelMap(
            characters,
            v => { 
                return { 
                    name: v[0].NAME,
                    imageUrl: Utils.appendRepoUrl(v[0].IMAGE_URL),
                    cardImageUrl: Utils.appendRepoUrl(v[0].CARD_IMAGE_URL),
                    element: v[0].ELEMENT,
                    weaponType: v[0].WEAPON_TYPE,
                    role: v[0].ROLE,
                    rarity: v[0].RARITY
                }; 
            }
        );
    }

    static mapCombos(combos) {
        return this.arrayTo2LevelMap(
            combos,
            vArr => {
                return vArr.map(v => {
                    return v.COMBO.split(',')
                });
            },
            'CHARACTER_CODE'
        );
    }

    static mapElements(elements) {
        return this.arrayTo2LevelMap(
            elements,
            v => { return { name: v[0].NAME, imageUrl: Utils.appendRepoUrl(v[0].IMAGE_URL) }; }
        );
    }

    static mapGames(games) {
        return this.arrayTo1LevelMap(
            games,
            v => {
                return {
                    label: v[0].LABEL,
                    code: v[0].CODE,
                    style: v[0].STYLE,
                    teamSize: v[0].TEAM_SIZE,
                    hasPet: v[0].HAS_PET,
                    iconUrl: Utils.appendRepoUrl(v[0].ICON_URL),
                    logoUrl: Utils.appendRepoUrl(v[0].LOGO_URL),
                    backgroundUrl: Utils.appendRepoUrl(v[0].BACKGROUND_URL),
                    guideUrl: v[0].GUIDE_URL
                };
            }
        );
    }

    static mapNotes(notes) {
        return this.arrayTo2LevelMap(
            notes,
            vArr => {
                return vArr.map(v => {
                   return { text: v.TEXT };
                });
            },
            'OWNER_CODE'
        );
    }

    static mapPets(pets) {
        return this.arrayTo2LevelMap(
            pets,
            v => { return { name: v[0].NAME, imageUrl: Utils.appendRepoUrl(v[0].IMAGE_URL), rarity: v[0].RARITY }; }
        );
    }

    static mapRarities(rarities) {
        return this.arrayTo2LevelMap(
            rarities,
            v => { return { code: v[0].CODE, label: v[0].LABEL, imageUrl: Utils.appendRepoUrl(v[0].IMAGE_URL) }; }
        );
    }

    static mapRoles(roles) {
        return this.arrayTo2LevelMap(
            roles,
            v => { return { name: v[0].NAME, imageUrl: Utils.appendRepoUrl(v[0].IMAGE_URL) }; }
        );
    }

    static mapRotations(rotations) {
        return this.arrayTo2LevelMap(
            rotations,
            vArr => {
                return vArr.map(step => {
                    return {
                        stepNumber: step.STEP_NUMBER,
                        action: RotationsUtils.formatStepAction(step.ACTION, step.GAME_CODE)
                    };
                })
            },
            'TEAM_CODE'
        );
    }

    static mapSets(sets) {
        return this.arrayTo2LevelMap(
            sets,
            v => { return { name: v[0].NAME, type: v[0].TYPE, imageUrl: Utils.appendRepoUrl(v[0].IMAGE_URL) }; }
        );
    }

    static mapWeapons(weapons) {
        return this.arrayTo2LevelMap(
            weapons,
            v => { 
                return { 
                    name: v[0].NAME,
                    type: v[0].TYPE,
                    secondaryStat: v[0].SECONDARY_STAT,
                    imageUrl: Utils.appendRepoUrl(v[0].IMAGE_URL),
                    rarity: v[0].RARITY
                };
            }
        );
    }

    static mapWeaponTypes(types) {
        return this.arrayTo2LevelMap(
            types,
            v => { return { name: v[0].NAME, code: v[0].CODE, imageUrl: Utils.appendRepoUrl(v[0].IMAGE_URL) }; }
        );
    }

    static mapTeams(resMap) {
        let teamsData = resMap.get('TEAMS');
        let teamsByGame = this.arrayTo2LevelMap(
            teamsData,
            v => { 
                return { 
                    code: v[0].CODE,
                    category: v[0].CATEGORY,
                    name: v[0].NAME,
                    iconUrl: Utils.appendRepoUrl(v[0].ICON_URL),
                    pet: v[0].PET,
                    parentCode: v[0].PARENT_CODE,
                    order: v[0].ORDER
                }
            }
        );
        return this.appendCharactersToTeam(teamsByGame, resMap);
    }

    static appendCharactersToTeam(teamsByGame, resMap) {
        teamsByGame.forEach((gameTeams, gameCode) => {
            gameTeams.forEach((team, teamCode) => {
                team.characters = this.mapTeamsCharacters(resMap.get('TEAMS_CHARACTERS')).get(gameCode)?.get(teamCode) ?? [];
                gameTeams.set(teamCode, team);
            });
            // custom order (default: alphabetical)
            const sortedTeams = new Map([...gameTeams.entries()].sort((a, b) => a[1].order - b[1].order));
            teamsByGame.set(gameCode, sortedTeams);
        });
        return teamsByGame;
    }

    static mapTeamsCharacters(charactersData) {
        return this.arrayTo2LevelMap(
            charactersData,
            vArr => {
                return vArr.map(v => {
                    return { name: v.NAME, role: v.ROLE, isMain: v.IS_MAIN, replacements: v.REPLACEMENTS?.split(',') };
                }) 
            },
            'TEAM_CODE'
        );
    }

    //---------------------------------------------------------------------------------------------

    // groups array to map by 2 levels: GAME_CODE then @uniqueKey
    static arrayTo2LevelMap(array, objectMappingCallback, uniqueKey = 'CODE') {
        let groupedByGame = this.groupBy(array, 'GAME_CODE');
        groupedByGame.forEach((gv, gk) => {
            let groupedByCode = this.arrayTo1LevelMap(gv, objectMappingCallback, uniqueKey)
            groupedByGame.set(gk, groupedByCode);
        });
        return groupedByGame;
    }

    // groups array to map by 1 level: @uniqueKey
    static arrayTo1LevelMap(array, objectMappingCallback, uniqueKey = 'CODE') {
        let groupedByCode = this.groupBy(array, uniqueKey);
        groupedByCode.forEach((cv, ck) => {
            groupedByCode.set(ck, objectMappingCallback(cv))
        });
        return groupedByCode;
    }

    // groups array to map using a key
    static groupBy(array, keyAttr) {
        const map = new Map();
        array.forEach(item => {
            const key = item[keyAttr];
            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(item);
        });
        return map;
    }
}