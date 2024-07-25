
function getAllButtons(gameCode) {
    switch (gameCode) {
        case Constants.games.TK8:
            return ButtonsRepository.TK8Buttons;
        default:
            return new Map([]);
    }
}

function getButton(gameCode, buttonName) {
    const button = getAllButtons(gameCode).get(buttonName);
    return button ?? { name: buttonName };
}

// ----------------------------------------------------------------------------

// https://opengameart.org/content/free-keyboard-and-controllers-prompts-pack
// https://github.com/spironan/TekinputGenerator/tree/master/Images/Inputs

const ButtonsRepository = {
    TK8Buttons: new Map([
        ['A', {
            name: 'A',
            imageUrl: 'assets/tk8/button/TK8_A.png'
        }],
        ['B', {
            name: 'B',
            imageUrl: 'assets/tk8/button/TK8_B.png'
        }],
        ['X', {
            name: 'X',
            imageUrl: 'assets/tk8/button/TK8_X.png'
        }],
        ['Y', {
            name: 'Y',
            imageUrl: 'assets/tk8/button/TK8_Y.png'
        }],
        ['U', {
            name: 'Up',
            imageUrl: 'assets/tk8/button/TK8_Up.png'
        }],
        ['UL', {
            name: 'UpLeft',
            imageUrl: 'assets/tk8/button/TK8_UpLeft.png'
        }],
        ['UR', {
            name: 'UpRight',
            imageUrl: 'assets/tk8/button/TK8_UpRight.png'
        }],
        ['D', {
            name: 'Down',
            imageUrl: 'assets/tk8/button/TK8_Down.png'
        }],
        ['DL', {
            name: 'DownLeft',
            imageUrl: 'assets/tk8/button/TK8_DownLeft.png'
        }],
        ['DR', {
            name: 'DownRight',
            imageUrl: 'assets/tk8/button/TK8_DownRight.png'
        }],
        ['L', {
            name: 'Left',
            imageUrl: 'assets/tk8/button/TK8_Left.png'
        }],
        ['R', {
            name: 'Right',
            imageUrl: 'assets/tk8/button/TK8_Right.png'
        }]
    ])
}