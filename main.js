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

// close modal on clicking outside
window.onclick = function(event) {
    if (Array.from(document.getElementsByClassName('gagu-modal')).includes(event.target)) {
        closeModal();
    }
}

function closeModal() {
    Array.from(document.getElementsByClassName('modal-shown')).forEach(elemnt => {
        elemnt.classList.remove('modal-shown');
    })
}