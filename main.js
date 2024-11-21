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

// close dialog on clicking outside
window.onclick = function(event) {
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