// load all js files (components, repositories, ...etc)
document.addEventListener('DOMContentLoaded', () => {
    loadAllScripts();
});

// add default hash
window.addEventListener('load', () => {
    if(!window.location.hash) {
        location.hash = '#' + Constants.games.GI;
    }
    window.dispatchEvent(new Event("hashchange"));
});

// listen to window clicks
window.onclick = function(event) {
    // close dialog on clicking outside
    if (Array.from(document.getElementsByClassName('gagu-dialog')).includes(event.target)) {
        closeDialog();
    }
}

// general function to close any dialog
function closeDialog() {
    Array.from(document.getElementsByClassName('dialog-shown')).forEach(elemnt => {
        elemnt.classList.remove('dialog-shown');
    })
}