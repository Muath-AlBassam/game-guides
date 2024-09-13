window.addEventListener('load', () => {
    if(!window.location.hash) {
        location.hash = '#' + Constants.games.GI;
    }
    window.dispatchEvent(new Event("hashchange"));
});

// load all js files (components, repositories, ...etc)
document.addEventListener('DOMContentLoaded', () => {
    loadAllScripts();
});

// close dialog on clicking outside
window.onclick = function(event) {
    if (Array.from(document.getElementsByClassName('gagu-dialog')).includes(event.target)) {
        closeDialog();
    }
}

function closeDialog() {
    Array.from(document.getElementsByClassName('dialog-shown')).forEach(elemnt => {
        elemnt.classList.remove('dialog-shown');
    })
}