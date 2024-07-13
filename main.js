window.addEventListener('load', () => {
    if(!window.location.hash) {
        location.hash = '#' + Constants.games.GI;
    }
    window.dispatchEvent(new Event("hashchange"));
});

// close modal on clicking outside
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        modal.style.display = "none";
    }
}