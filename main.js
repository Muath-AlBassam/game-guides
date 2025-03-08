document.addEventListener('DOMContentLoaded', async () => {
    await loadWorkbook();
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
    closeDialogOnOutsideClick(event);
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

function closeDialogOnOutsideClick(event) {
    // gagu-dialog is the container (it covers the whole page)
    if (Array.from(document.getElementsByClassName('gagu-dialog')).includes(event.target)) {
        closeDialog();
    }
}

workbook = null;
async function loadWorkbook() {
    console.log('fetching workbook');
    const sheet = await fetch('Game Guides DB.xlsx');
    const arrayBuffer = await sheet.arrayBuffer();
    workbook = XLSX.read(arrayBuffer, { type: 'array' });
}