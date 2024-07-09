// Event Listeners ------------------------------------------------------------
window.addEventListener('load', () => {
    loadData();
})

window.addEventListener('hashchange', () => {
    if(!window.location.hash) {
        location.hash = '#GI';
    }
    refreshPageContent();
})

function loadData() {
    if(!window.location.hash) {
        location.hash = '#GI';
    }
    refreshPageContent();
}

function setActiveTab() {
    // const tabs = document.querySelectorAll('.nav-link');
    // tabs.forEach(tab => {
    //     if (tab.href.includes(window.location.hash)) {
    //         tab.classList.add('active');
    //     } else {
    //         tab.classList.remove('active');
    //     }
    // })
}

// refresh content ------------------------------------------------------------
function refreshPageContent() {
    // setActiveTab();
    
    // const activeGame = getGame(window.location.hash.replace('#', ''));
    // loadTeamsTable(activeGame);

    // set background image & logo
    // document.body.setAttribute(
    //     'style', `background-image: url(${activeGame.backgroundUrl}); background-position: center center;`);
    // document.getElementById('gamelogo').setAttribute('src', activeGame.logoUrl);

    // enable tooltips
    // const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    // const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}
