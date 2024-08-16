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
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}

function closeModal() {
    document.getElementById('modal').classList.remove('modal-shown');
}