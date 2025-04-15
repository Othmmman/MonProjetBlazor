function toggleSubMenu(id) {
    const submenu = document.getElementById(id);
    const all = document.querySelectorAll('.submenu');
    all.forEach(el => {
        if (el !== submenu) el.classList.remove('show');
    });
    submenu.classList.toggle('show');
}

function closeAllSubMenus() {
    const all = document.querySelectorAll('.submenu');
    all.forEach(el => el.classList.remove('show'));
}
