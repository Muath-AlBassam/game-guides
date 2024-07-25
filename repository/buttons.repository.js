// https://opengameart.org/content/free-keyboard-and-controllers-prompts-pack
// https://github.com/spironan/TekinputGenerator/tree/master/Images/Inputs

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
        ['Up', {
            name: 'Up',
            imageUrl: 'assets/tk8/button/TK8_Up.png'
        }],
        ['UpLeft', {
            name: 'UpLeft',
            imageUrl: 'assets/tk8/button/TK8_UpLeft.png'
        }],
        ['UpRight', {
            name: 'UpRight',
            imageUrl: 'assets/tk8/button/TK8_UpRight.png'
        }],
        ['Down', {
            name: 'Down',
            imageUrl: 'assets/tk8/button/TK8_Down.png'
        }],
        ['DownLeft', {
            name: 'DownLeft',
            imageUrl: 'assets/tk8/button/TK8_DownLeft.png'
        }],
        ['DownRight', {
            name: 'DownRight',
            imageUrl: 'assets/tk8/button/TK8_DownRight.png'
        }],
        ['Left', {
            name: 'Left',
            imageUrl: 'assets/tk8/button/TK8_Left.png'
        }],
        ['Right', {
            name: 'Right',
            imageUrl: 'assets/tk8/button/TK8_Right.png'
        }]
    ])
}