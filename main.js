// Event Listeners ----------------------------------------
window.addEventListener('load', () => {
    loadData();
})

window.addEventListener('hashchange', () => {
    if(!window.location.hash) {
        // set default selected team
        location.hash = '#GI';
    }
    refreshPageContent();
})

function loadData() {
    loadTabs();
    if(!window.location.hash) {
        // set default selected team
        location.hash = '#GI';
    }
    refreshPageContent();
}

// --------------------------------------------------------
function loadTabs() {
    const games = getAllGames();
    const tabsElement = document.getElementById('gamesTabs');
    games.forEach(g => {
        const a = createElement('a', 'nav-link');
        a.setAttribute('href', `#${g.code}`);

        const logo = createElement('img', null, 'height: 20px;');
        logo.setAttribute('src', g.logoUrl);
        a.appendChild(logo);

        const label = createElement('span', 'tab-text', null, g.label);
        a.appendChild(label);

        // link to guide page
        if (g.guideUrl) {
            const link = createElement(
                'a', 'tab-text', 'padding-inline-start: 10px;', `<i class="${Constants.icons.externalLink}"></i>`);
            link.setAttribute('href', g.guideUrl);
            link.setAttribute('target', '_blank');
            a.appendChild(link);
        }
        
        const li = createElement('li', 'nav-item');
        li.appendChild(a);
        tabsElement.appendChild(li);
    })
}

// set active tab
function setActiveTab() {
    const tabs = document.querySelectorAll('.nav-link');
    tabs.forEach(tab => {
        if (tab.href.includes(window.location.hash)) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    })
}

// refresh table & active tab
function refreshPageContent() {
    const activeGame = getGame(window.location.hash.replace('#', ''));

    setActiveTab();
    loadTeamsTable(activeGame.code);

    // set Team Members header col size
    document.getElementById('membersHeader').colSpan = activeGame.teamSize;

    // set background image & logo
    document.body.setAttribute(
        'style', `background-image: url(${activeGame.backgroundUrl}); background-position: center center;`);
    document.getElementById('gamelogo').setAttribute('src', activeGame.logoUrl);

    // enable tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}
