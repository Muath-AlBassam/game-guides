document.addEventListener('DOMContentLoaded', () => {
    loadAllScripts();
});

window.addEventListener('load', () => {
    initializePopovers();
});

window.addEventListener('hashchange', () => {
    initializePopovers();
    closeSidebar();
});

window.onclick = function(event) {
    closeDialogOnOutsideClick();
}

//-----------------------------------------------------------------------------

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
