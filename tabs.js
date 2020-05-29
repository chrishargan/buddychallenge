function onTabClick(event) {
    let activeTab = document.querySelectorAll('.nav-link.active');
    activeTab.forEach(function(tab) {
        tab.className = tab.className.replace('active', '');
    });
    event.target.className += ' active';
    document.querySelectorAll('[role="tabpanel"]').forEach(function (el){
        el.classList.remove("active");
        el.classList.remove("show");
    });
    document.getElementById(event.target.href.split('#')[1]).className += ' show active';
}
const element = document.getElementById('info');

element.addEventListener('click', onTabClick, false);
