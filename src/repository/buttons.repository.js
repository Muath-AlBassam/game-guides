
class ButtonsRepository {
    getAllButtons(gameCode) {
        switch (gameCode) {
            case Constants.games.TK8:
                return this.data.TK8Buttons;
            default:
                return new Map([]);
        }
    }
    
    getButton(gameCode, buttonName) {
        const button = this.getAllButtons(gameCode).get(buttonName);
        return button ?? { name: buttonName };
    }

    data = {
        // https://opengameart.org/content/free-keyboard-and-controllers-prompts-pack
        // https://github.com/spironan/TekinputGenerator/tree/master/Images/Inputs
        TK8Buttons: new Map([
            ['A', {
                name: 'A',
                imageUrl: 'assets/images/xbox/XBX_A.png'
            }],
            ['B', {
                name: 'B',
                imageUrl: 'assets/images/xbox/XBX_B.png'
            }],
            ['X', {
                name: 'X',
                imageUrl: 'assets/images/xbox/XBX_X.png'
            }],
            ['Y', {
                name: 'Y',
                imageUrl: 'assets/images/xbox/XBX_Y.png'
            }],
            ['AB', {
                name: 'AB',
                imageUrl: 'assets/images/xbox/XBX_AB.png'
            }],
            ['AX', {
                name: 'AX',
                imageUrl: 'assets/images/xbox/XBX_AX.png'
            }],
            ['YB', {
                name: 'YB',
                imageUrl: 'assets/images/xbox/XBX_YB.png'
            }],
            ['YX', {
                name: 'YX',
                imageUrl: 'assets/images/xbox/XBX_YX.png'
            }],
            ['U', {
                name: 'Up',
                imageUrl: 'assets/images/tk8/button/TK8_Up.png'
            }],
            ['UL', {
                name: 'UpLeft',
                imageUrl: 'assets/images/tk8/button/TK8_UpLeft.png'
            }],
            ['UR', {
                name: 'UpRight',
                imageUrl: 'assets/images/tk8/button/TK8_UpRight.png'
            }],
            ['D', {
                name: 'Down',
                imageUrl: 'assets/images/tk8/button/TK8_Down.png'
            }],
            ['DL', {
                name: 'DownLeft',
                imageUrl: 'assets/images/tk8/button/TK8_DownLeft.png'
            }],
            ['DR', {
                name: 'DownRight',
                imageUrl: 'assets/images/tk8/button/TK8_DownRight.png'
            }],
            ['L', {
                name: 'Left',
                imageUrl: 'assets/images/tk8/button/TK8_Left.png'
            }],
            ['R', {
                name: 'Right',
                imageUrl: 'assets/images/tk8/button/TK8_Right.png'
            }]
        ])
    }
}

const buttonsRepository = new ButtonsRepository();
// ----------------------------------------------------------------------------