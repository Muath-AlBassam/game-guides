document.addEventListener('DOMContentLoaded', () => {
    loadAllScripts();
});

window.addEventListener('load', () => {
    addDefaultHash();
});

window.addEventListener('hashchange', () => {
    initializePopovers();
});

window.onclick = function(event) {
    closeDialogOnOutsideClick();
}

//-----------------------------------------------------------------------------

function addDefaultHash() {
    if(!window.location.hash) {
        location.hash = '#' + Constants.games.GI;
    }
    window.dispatchEvent(new Event("hashchange"));
}

function initializePopovers() {
    // clear current popovers
    const popovers = document.querySelectorAll('[data-bs-toggle="popover"]');
    popovers.forEach(popover => bootstrap.Popover.getInstance(popover)?.dispose());
    // reload popovers
    setTimeout(() => {
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
        [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
    }, 1000)
}

function closeDialogOnOutsideClick() {
    if (Array.from(document.getElementsByClassName('gagu-dialog')).includes(event.target)) {
        closeDialog();
    }
}

//-----------------------------------------------------------------------------

// general function to close any dialog
function closeDialog() {
    Array.from(document.getElementsByClassName('dialog-shown')).forEach(elemnt => {
        elemnt.classList.remove('dialog-shown');
    })
}