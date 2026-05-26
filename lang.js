function setLanguage(lang) {
    document.querySelectorAll('[data-da][data-en]').forEach(function(el) {
        el.textContent = el.getAttribute('data-' + lang);
    });
    document.documentElement.lang = lang;
    var btn = document.querySelector('.lang-toggle');
    if (btn) btn.textContent = lang === 'da' ? 'EN' : 'DA';
    localStorage.setItem('lang', lang);
}

function toggleLanguage() {
    var current = localStorage.getItem('lang') || 'da';
    setLanguage(current === 'da' ? 'en' : 'da');
}

(function() {
    var saved = localStorage.getItem('lang');
    if (saved && saved !== 'da') setLanguage(saved);
})();
