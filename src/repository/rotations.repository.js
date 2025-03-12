
class RotationsRepository {

    rotationsMap = new Map([]);

    constructor() {
        this.fetchData();
    }

    fetchData() {
        dataClient.loadData('ROTATIONS').then(rotations => {
            this.rotationsMap = DataUtils.arrayTo2LevelMap(
                rotations,
                vArr => {
                    return vArr.map(step => {
                        let mappedStep = [];
                        mappedStep.push(step.MEMBER);
                        mappedStep.push(this.formatStepAction(step.ACTION, step.GAME_CODE));
                        return mappedStep;
                    })
                },
                'TEAM_CODE'
            );
        });
    }

    getRotations(gameCode, teamName) {
        let rotations = this.rotationsMap.get(gameCode)?.get(teamName);
        return rotations ?? []
    }

    formatStepAction(action, gameCode) {
        return action
            .replace(/arrow/g, this.arrow)
            .replace(/normal/g, gameCode == 'GI' ? this.gi.normal : 'TBD')
            .replace(/charged/g, gameCode == 'GI' ? this.gi.charged : gameCode == 'ZZZ' ? this.zzz.charged : 'TBD')
            .replace(/skill/g, gameCode == 'GI' ? this.gi.skill : 'TBD')
            .replace(/ultimate/g, gameCode == 'GI' ? this.gi.ultimate : 'TBD')
            .replace(/plunge/g, gameCode == 'GI' ? this.gi.plunge : 'TBD')
            .replace(/basic/g, this.zzz.basic)
            .replace(/exspecial/g, this.zzz.exSpecial)
            .replace(/special/g, this.zzz.special)
            .replace(/qte/g, this.zzz.QTE)
            .replace(/dash/g, this.zzz.dash)
            .replace(/assault/g, this.zzz.assault)
            .replace(/burn/g, this.zzz.burn)
            .replace(/shock/g, this.zzz.shock)
            .replace(/ times /g, this.times)
            .replace(/st_(.*?)_st/g, this.smallText("$1"))
            .replace(/rp_(.*?)_rp/g, this.repeat("$1"));
    }

    arrow = `<span style="margin: auto 5px;">${Constants.unicode.arrow}</span>`;
    times = Constants.unicode.times;

    // st_***_st
    smallText = (text) => `<span style="font-size: 0.8rem; font-weight: normal; margin-left: 2px; vertical-align: 2px;">${text}</span>`;
    // rp_***_rp
    repeat = (text) => `<span class="arrow-border">${text}</span>`;

    tooltip = (text, tooltip) => `<span title="${tooltip}">${text}</span>`;
    imageOf = (path, tooltip) => `<img src="${path}" width="30" title="${tooltip}" />`;

    // GI moves shortcuts
    gi = {
        normal: this.tooltip('N', 'Normal Attack'),
        charged: this.tooltip('CA', 'Charged Attack'),
        skill: this.tooltip('E', 'Skill'),
        ultimate: this.tooltip('Q', 'Ultimate'),
        plunge: this.tooltip('Plunge', 'Plunge'),
    }

    // ZZZ moves shortcuts
    zzz = {
        basic: this.imageOf(DataUtils.getImageUrl('assets/images/zzz/icons/ZZZ_Basic.png'), 'Basic'),
        charged: this.tooltip('CA', 'Charged Attack'),
        exSpecial: this.imageOf(DataUtils.getImageUrl('assets/images/zzz/icons/ZZZ_ExSpecial.png'), 'EX Special'),
        special: this.imageOf(DataUtils.getImageUrl('assets/images/zzz/icons/ZZZ_Special.png'), 'Special'),
        QTE: this.imageOf(DataUtils.getImageUrl('assets/images/zzz/icons/ZZZ_QTE.png'), 'Switch (Chain / Quick-Assist)'),
        dash: this.imageOf(DataUtils.getImageUrl('assets/images/zzz/icons/ZZZ_Dash.png'), 'Dash'),
        assault: this.imageOf(DataUtils.getImageUrl('assets/images/zzz/icons/ZZZ_Physical.png'), 'Assault'),
        burn: this.imageOf(DataUtils.getImageUrl('assets/images/zzz/icons/ZZZ_Fire.png'), 'Burn'),
        shock: this.imageOf(DataUtils.getImageUrl('assets/images/zzz/icons/ZZZ_Electric.png'), 'Shock'),
        freeze: this.imageOf(DataUtils.getImageUrl('assets/images/zzz/icons/ZZZ_Ice.png'), 'Freeze'),
        corrupt: this.imageOf(DataUtils.getImageUrl('assets/images/zzz/icons/ZZZ_Ether.png'), 'Corrupt'),
    }
}

const rotationsRepository = new RotationsRepository();