const { createApp, ref, computed, onMounted, watch } = Vue;

const translations = {
    nav: { home: { da: 'Hjem', en: 'Home' }, menu: { da: 'Menu', en: 'Menu' }, about: { da: 'Om os', en: 'About' } },
    choose: {
        title: { da: 'Pizza 2', en: 'Pizza 2' },
        subtitle: { da: 'Vælg din oplevelse', en: 'Choose your experience' },
        classic: { da: 'Klassisk', en: 'Classic' },
        classicDesc: { da: 'Traditionelle pizzaer, kødelsker og alle favoritterne', en: 'Traditional pies, meat lovers, and all the favourites' },
        vegan: { da: 'Vegansk', en: 'Vegan' },
        veganDesc: { da: 'Plantebaserede pizzaer, vegansk ost og friske grøntsager', en: 'Plant-based pizzas, dairy-free cheese, and fresh vegetables' },
    },
    home: {
        heroTitle: {
            classic: { da: 'Friskbagt pizza hver dag', en: 'Fresh Pizza, Made Daily' },
            vegan: { da: '100% plantebaseret pizza', en: '100% Plant-Based Pizza' },
        },
        heroText: {
            classic: { da: 'Familiedrevet siden 1987. Håndrullet dej, hjemmelavet sauce og de fineste ingredienser.', en: 'Family-owned since 1987. Hand-tossed dough, homemade sauce, and the finest ingredients.' },
            vegan: { da: 'Samme passion, samme håndværk — ingen animalske produkter. Alle pizzaer med hjemmelavet vegansk ost og friske lokale grøntsager.', en: 'Same passion, same craft — no animal products. Every pie made with house-made vegan cheese and fresh local vegetables.' },
        },
        viewMenu: { da: 'Se vores menu', en: 'View Our Menu' },
        hoursTitle: { da: 'Åbningstider & Beliggenhed', en: 'Hours & Location' },
        hours: { da: 'Åbningstider', en: 'Hours' },
        location: { da: 'Beliggenhed', en: 'Location' },
        phone: { da: 'Tlf', en: 'Phone' },
    },
    menu: {
        title: { da: 'Vores menu', en: 'Our Menu' },
        note: {
            classic: { da: 'Stykker af alle pizzaer: 25 kr stk.', en: 'Slices available for all pies: 25 kr each.' },
            vegan: { da: 'Alle retter er 100% plantebaserede.', en: 'All items are 100% plant-based.' },
        },
    },
    about: {
        title: { da: 'Vores historie', en: 'Our Story' },
        tagline: { da: 'Tre generationer af pizza-perfektion.', en: 'Three generations of pizza perfection.' },
        naplesTitle: { da: 'Fra Napoli til København', en: 'From Naples to Copenhagen' },
        naplesP1: { da: 'Sal Moretti åbnede dørene til Pizza 2 i 1987 med intet andet end en familieopskrift, en brugt ovn og en drøm. Hans far havde drevet et lille pizzeria i Napoli, og Sal bragte de traditioner til København.', en: 'Sal Moretti opened the doors to Pizza 2 in 1987 with nothing but a family recipe, a secondhand oven, and a dream. His father had run a small pizzeria in Naples, and Sal brought those traditions to Copenhagen.' },
        naplesP2: { da: 'Næsten fire årtier senere er opskriften ikke ændret. Sals søn Marco driver nu køkkenet, og hans barnebarn Sofia tager sig af gæsterne i weekenderne.', en: "Nearly four decades later, the recipe hasn't changed. Sal's son Marco now runs the kitchen, and his granddaughter Sofia handles the front of house on weekends." },
        diffTitle: { da: 'Hvad gør os anderledes', en: 'What Makes Us Different' },
        diffItems: {
            da: ['48-timers koldfermenteret dej', 'Sauce lavet i huset dagligt af importerede San Marzano-tomater', 'Frisk mozzarella leveret hver morgen fra et lokalt københavnsk mejeri', 'Kulfyret ovn der når 425°C', 'Ingen frysere — alt laves frisk'],
            en: ['48-hour cold-fermented dough', 'Sauce made in-house daily from imported San Marzano tomatoes', 'Fresh mozzarella delivered every morning from a local Copenhagen dairy', 'Coal-fired oven reaching 800°F', 'No freezers — everything is made fresh'],
        },
        communityTitle: { da: 'Fællesskab', en: 'Community' },
        communityText: { da: 'Vi sponsorerer det lokale ungdomshold, afholder fredags open-mic, og hver jul giver vi 200 gratis pizzaer væk til familier i nabolaget.', en: 'We sponsor the local youth team, host Friday night open-mic, and every Christmas we give away 200 free pies to families in the neighbourhood.' },
    },
    footer: { da: '© 2026 Pizza 2. Alle rettigheder forbeholdes.', en: '© 2026 Pizza 2. All rights reserved.' },
    switchStyle: { da: 'Skift stil', en: 'Switch Style' },
};

createApp({
    setup() {
        const page = ref('choose');
        const mode = ref(localStorage.getItem('pizza2-mode') || null);
        const lang = ref(localStorage.getItem('pizza2-lang') || 'da');
        const menuHtml = ref('');

        function t(key) {
            const keys = key.split('.');
            let obj = translations;
            for (const k of keys) obj = obj[k];
            if (obj[mode.value]) return obj[mode.value][lang.value];
            return obj[lang.value];
        }

        function navigate(p) {
            page.value = p;
            if (p === 'menu') loadMenu();
        }

        function selectMode(m) {
            mode.value = m;
            localStorage.setItem('pizza2-mode', m);
            document.documentElement.setAttribute('data-mode', m);
            page.value = 'home';
        }

        function toggleLang() {
            lang.value = lang.value === 'da' ? 'en' : 'da';
            localStorage.setItem('pizza2-lang', lang.value);
        }

        function backToChoose() {
            mode.value = null;
            localStorage.removeItem('pizza2-mode');
            document.documentElement.removeAttribute('data-mode');
            page.value = 'choose';
        }

        function loadMenu() {
            if (!mode.value) return;
            fetch('menus/' + mode.value + '.md')
                .then(r => r.text())
                .then(md => { menuHtml.value = parseMarkdown(md); })
                .catch(() => { menuHtml.value = '<p>Failed to load menu.</p>'; });
        }

        function parseMarkdown(md) {
            let html = '';
            let inTable = false;
            const lines = md.split('\n');

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                if (line.startsWith('# ')) {
                    if (inTable) { html += '</tbody></table>'; inTable = false; }
                    html += '<h2>' + line.slice(2) + '</h2>';
                } else if (line.startsWith('|') && !line.match(/^\|[-\s|]+\|$/)) {
                    const cells = line.split('|').filter(c => c.trim());
                    if (!inTable) {
                        html += '<table class="menu-table"><thead><tr>';
                        cells.forEach(c => { html += '<th>' + c.trim() + '</th>'; });
                        html += '</tr></thead><tbody>';
                        inTable = true;
                        i++;
                    } else {
                        html += '<tr>';
                        cells.forEach(c => { html += '<td>' + c.trim() + '</td>'; });
                        html += '</tr>';
                    }
                } else if (line.trim() === '') {
                    if (inTable) { html += '</tbody></table>'; inTable = false; }
                }
            }
            if (inTable) html += '</tbody></table>';
            return html;
        }

        onMounted(() => {
            if (mode.value) {
                document.documentElement.setAttribute('data-mode', mode.value);
                page.value = 'home';
            }
        });

        return { page, mode, lang, menuHtml, t, navigate, selectMode, toggleLang, backToChoose };
    },

    template: `
    <div class="app">
        <!-- Choose Page -->
        <section v-if="page === 'choose'" class="choose-page">
            <h1>{{ t('choose.title') }}</h1>
            <p class="choose-subtitle">{{ t('choose.subtitle') }}</p>
            <div class="choose-grid">
                <button class="choose-card choose-classic" @click="selectMode('classic')">
                    <h2>{{ t('choose.classic') }}</h2>
                    <p>{{ t('choose.classicDesc') }}</p>
                </button>
                <button class="choose-card choose-vegan" @click="selectMode('vegan')">
                    <h2>{{ t('choose.vegan') }}</h2>
                    <p>{{ t('choose.veganDesc') }}</p>
                </button>
            </div>
            <button class="lang-toggle lang-toggle-choose" @click="toggleLang">{{ lang === 'da' ? 'EN' : 'DA' }}</button>
        </section>

        <!-- Site (after mode selected) -->
        <template v-if="mode">
            <header>
                <nav>
                    <div class="logo">Pizza 2 <span class="mode-badge">{{ mode === 'classic' ? t('choose.classic') : t('choose.vegan') }}</span></div>
                    <ul>
                        <li><a :class="{ active: page === 'home' }" @click.prevent="navigate('home')">{{ t('nav.home') }}</a></li>
                        <li><a :class="{ active: page === 'menu' }" @click.prevent="navigate('menu')">{{ t('nav.menu') }}</a></li>
                        <li><a :class="{ active: page === 'about' }" @click.prevent="navigate('about')">{{ t('nav.about') }}</a></li>
                        <li><a class="switch-link" @click.prevent="backToChoose">{{ t('switchStyle') }}</a></li>
                    </ul>
                    <button class="lang-toggle" @click="toggleLang">{{ lang === 'da' ? 'EN' : 'DA' }}</button>
                </nav>
            </header>

            <main>
                <!-- Home -->
                <template v-if="page === 'home'">
                    <section class="hero">
                        <h1>{{ t('home.heroTitle') }}</h1>
                        <p>{{ t('home.heroText') }}</p>
                        <button class="btn" @click="navigate('menu')">{{ t('home.viewMenu') }}</button>
                    </section>

                    <section class="hours">
                        <h2>{{ t('home.hoursTitle') }}</h2>
                        <div class="hours-grid">
                            <div class="hours-card">
                                <h3>{{ t('home.hours') }}</h3>
                                <p>Mon - Thu: 11:00 - 22:00</p>
                                <p>Fri - Sat: 11:00 - 00:00</p>
                                <p>Sun: 12:00 - 21:00</p>
                            </div>
                            <div class="hours-card">
                                <h3>{{ t('home.location') }}</h3>
                                <p>Vesterbrogade 42</p>
                                <p>1620 København V</p>
                                <p>{{ t('home.phone') }}: +45 33 12 04 56</p>
                            </div>
                        </div>
                    </section>
                </template>

                <!-- Menu -->
                <template v-if="page === 'menu'">
                    <h1>{{ t('menu.title') }}</h1>
                    <div v-html="menuHtml"></div>
                    <p class="menu-note">{{ t('menu.note') }}</p>
                </template>

                <!-- About -->
                <template v-if="page === 'about'">
                    <section class="about-hero">
                        <h1>{{ t('about.title') }}</h1>
                        <p class="tagline">{{ t('about.tagline') }}</p>
                    </section>
                    <section class="about-content">
                        <div class="about-text">
                            <h2>{{ t('about.naplesTitle') }}</h2>
                            <p>{{ t('about.naplesP1') }}</p>
                            <p>{{ t('about.naplesP2') }}</p>
                        </div>
                        <div class="about-text">
                            <h2>{{ t('about.diffTitle') }}</h2>
                            <ul class="about-list">
                                <li v-for="item in t('about.diffItems')" :key="item">{{ item }}</li>
                            </ul>
                        </div>
                        <div class="about-text">
                            <h2>{{ t('about.communityTitle') }}</h2>
                            <p>{{ t('about.communityText') }}</p>
                        </div>
                    </section>
                </template>
            </main>

            <footer>
                <p>{{ t('footer') }}</p>
            </footer>
        </template>
    </div>
    `
}).mount('#app');
