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

function loadTabs() {
    const games = TeamBuildsData.games;
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
        const link = createElement('a', 'tab-text', 'padding-inline-start: 10px;', `<i class="${TeamBuildsConstants.icons.externalLink}"></i>`);
        link.setAttribute('href', g.guideUrl);
        link.setAttribute('target', '_blank');
        a.appendChild(link);
        
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

// refresh table & active nav
function refreshPageContent() {
    const games = TeamBuildsData.games;
    const activeGame = games.filter(g => g.code ==  window.location.hash.replace('#', ''))[0];

    setActiveTab();
    loadTeamsTable(activeGame.code);

    // set background image & logo
    document.body.setAttribute('style', `background-image: url(${activeGame.backgroundUrl})`);
    document.getElementById('gamelogo').setAttribute('src', activeGame.logoUrl);

    // enable tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}
