window.addEventListener('load', () => {
    if(!window.location.hash) {
        location.hash = '#GI';
    }
    window.dispatchEvent(new Event("hashchange"));
});
