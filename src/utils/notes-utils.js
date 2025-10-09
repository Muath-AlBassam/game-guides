class NotesUtils {
    
    static smallText = (text) => `<span style="font-size: 0.8rem; font-weight: normal; margin-left: 2px; vertical-align: 2px; opacity: 0.6;">${text}</span>`;
    static repeat = (text) => `<span class="arrow-border">${text}</span>`;
    static tooltip = (text, tooltip) => `<span title="${tooltip}">${text}</span>`;
    static imageOf = (path, tooltip, style = null) => `<img src="${path}" width="30" title="${tooltip}" style="${style ?? ''}" />`;

    static getCharacterAvatar(name, gameCode) {
        let charmd = charactersRepository.getOne(gameCode, name);
        return this.imageOf(charmd.imageUrl, null, 'margin-top: -8px;');
    }

    // GI moves shortcuts
    static gi = {
        normal: this.tooltip('N', 'Normal Attack'),
        charged: this.tooltip('CA', 'Charged Attack'),
        skill: this.tooltip('E', 'Skill'),
        ultimate: this.tooltip('Q', 'Ultimate'),
        plunge: this.tooltip('Plunge', 'Plunge'),
    }

    // ZZZ moves shortcuts
    static zzz = {
        basic: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Basic.png'), 'Basic'),
        charged: this.tooltip('CA', 'Charged Attack'),
        exSpecial: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_ExSpecial.png'), 'EX Special'),
        special: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Special.png'), 'Special'),
        ultimate: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Ultimate.png'), 'Ultimate'),
        switch: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Switch.png'), 'Switch (Chain / Quick-Assist)'),
        chain: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Chain.png'), 'Chain'),
        dash: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Dash.png'), 'Dash'),
        assault: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Physical.png'), 'Assault'),
        burn: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Fire.png'), 'Burn'),
        shock: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Electric.png'), 'Shock'),
        freeze: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Ice.png'), 'Freeze'),
        corrupt: this.imageOf(Utils.appendRepoUrl('assets/images/zzz/icons/ZZZ_Ether.png'), 'Corrupt'),
    }

    static formatNotes(text, gameCode) {
        if (text == null) {
            return text;
        }
        // img_***_img => image
        return String(text)
            .replace(/normal/g, (match) => gameCode == Constants.games.GI ? this.gi.normal : match)
            .replace(/charged/g, (match) => gameCode == Constants.games.GI ? this.gi.charged : gameCode == Constants.games.ZZZ ? this.zzz.charged : match)
            .replace(/skill/g, (match) => gameCode == Constants.games.GI ? this.gi.skill : match)
            .replace(/ultimate/g, (match) => gameCode == Constants.games.GI ? this.gi.ultimate : gameCode == Constants.games.ZZZ ? this.zzz.ultimate : match)
            .replace(/plunge/g, (match) => gameCode == Constants.games.GI ? this.gi.plunge : match)
            .replace(/basic/g, this.zzz.basic)
            .replace(/exspecial/g, this.zzz.exSpecial)
            .replace(/special/g, this.zzz.special)
            .replace(/chain/g, this.zzz.chain)
            .replace(/dash/g, this.zzz.dash)
            .replace(/assault/g, this.zzz.assault)
            .replace(/burn/g, this.zzz.burn)
            .replace(/shock/g, this.zzz.shock)
            .replace(/ times /g, Constants.unicode.times)
            .replace(/t_(.*?)_t/g, (match, capture) => `<b style="text-transform: uppercase; margin-right: 10px;">${capture}:</b>`)
            .replace(/img_(.*?)_img/g, (match, capture) => this.imageOf(Utils.appendRepoUrl(capture), null, 'margin-top: -8px;'))
            .replace(/st_(.*?)_st/g, (match, capture) => this.smallText(capture))
            .replace(/b_(.*?)_b/g, (match, capture) => `<b>${capture}</b>`)
            .replace(/c_(.*?)_c/g, (match, capture) => this.getCharacterAvatar(capture, gameCode));
    }
}