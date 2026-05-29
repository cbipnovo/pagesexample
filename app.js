const { createApp, ref, computed, onMounted, watch, nextTick } = Vue;

const translations = {
    nav: { home: { da: 'Hjem', en: 'Home' }, menu: { da: 'Menu', en: 'Menu' }, gallery: { da: 'Galleri', en: 'Gallery' }, about: { da: 'Om os', en: 'About' }, findUs: { da: 'Find os', en: 'Find Us' } },
    choose: {
        title: { da: 'Cool Pizza', en: 'Cool Pizza' },
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
        naplesP1: { da: 'Sal Moretti åbnede dørene til Cool Pizza i 1987 med intet andet end en familieopskrift, en brugt ovn og en drøm. Hans far havde drevet et lille pizzeria i Napoli, og Sal bragte de traditioner til København.', en: 'Sal Moretti opened the doors to Cool Pizza in 1987 with nothing but a family recipe, a secondhand oven, and a dream. His father had run a small pizzeria in Naples, and Sal brought those traditions to Copenhagen.' },
        naplesP2: { da: 'Næsten fire årtier senere er opskriften ikke ændret. Sals søn Marco driver nu køkkenet, og hans barnebarn Sofia tager sig af gæsterne i weekenderne.', en: "Nearly four decades later, the recipe hasn't changed. Sal's son Marco now runs the kitchen, and his granddaughter Sofia handles the front of house on weekends." },
        diffTitle: { da: 'Hvad gør os anderledes', en: 'What Makes Us Different' },
        diffItems: {
            da: ['48-timers koldfermenteret dej', 'Sauce lavet i huset dagligt af importerede San Marzano-tomater', 'Frisk mozzarella leveret hver morgen fra et lokalt københavnsk mejeri', 'Kulfyret ovn der når 425°C', 'Ingen frysere — alt laves frisk'],
            en: ['48-hour cold-fermented dough', 'Sauce made in-house daily from imported San Marzano tomatoes', 'Fresh mozzarella delivered every morning from a local Copenhagen dairy', 'Coal-fired oven reaching 800°F', 'No freezers — everything is made fresh'],
        },
        communityTitle: { da: 'Fællesskab', en: 'Community' },
        communityText: { da: 'Vi sponsorerer det lokale ungdomshold, afholder fredags open-mic, og hver jul giver vi 200 gratis pizzaer væk til familier i nabolaget.', en: 'We sponsor the local youth team, host Friday night open-mic, and every Christmas we give away 200 free pies to families in the neighbourhood.' },
    },
    findUs: {
        title: { da: 'Find os', en: 'Find Us' },
        subtitle: { da: 'Vesterbrogade 42, 1620 København V', en: 'Vesterbrogade 42, 1620 Copenhagen V' },
        directions: { da: 'Vi ligger tæt på København H — 5 minutters gang fra stationen.', en: "We're a 5-minute walk from Copenhagen Central Station." },
    },
    gallery: {
        title: { da: 'Galleri', en: 'Gallery' },
        subtitle: { da: 'Se vores pizzaer', en: 'See our pizzas' },
    },
    testimonials: {
        title: { da: 'Hvad vores gæster siger', en: 'What Our Guests Say' },
    },
    footer: { da: '© 2026 Cool Pizza. Alle rettigheder forbeholdes.', en: '© 2026 Cool Pizza. All rights reserved.' },
    switchStyle: { da: 'Skift stil', en: 'Switch Style' },
};

createApp({
    setup() {
        const page = ref('choose');
        const mode = ref(localStorage.getItem('pizza2-mode') || null);
        const lang = ref(localStorage.getItem('pizza2-lang') || 'da');
        const menuHtml = ref('');
        const lightboxPhoto = ref(null);

        const testimonials = [
            { id: 'FB-001', quote: { da: 'Elsker at I har en hel vegansk menu! De fleste pizzasteder smider bare én mulighed på menuen. Den separate oplevelse føles premium.', en: 'Love that you have a full vegan menu! Most pizza places just throw one option on the menu as an afterthought. The separate experience feels premium.' }, source: 'Google Reviews' },
            { id: 'FB-009', quote: { da: 'Charmerende historie på Om os-siden. Elsker at lære om familiehistorien. Det fik mig til at føle mig forbundet med stedet, før jeg overhovedet gik ind.', en: 'Charming story on the About page. Love learning about the family history. Made me feel connected to the place before I even walked in.' }, source: 'Google Reviews' },
            { id: 'FB-015', quote: { da: 'Har lige opdaget at man kan skifte mellem klassisk og vegansk! Min partner og jeg skændes altid om det — nu kan vi hver browse vores egen menu. Genialt.', en: "Just discovered you can switch between classic and vegan! My partner and I always argue about this — now we can each browse our own menu. Genius." }, source: 'Instagram' },
            { id: 'FB-025', quote: { da: 'Fedt navn i øvrigt. Cool Pizza. Får mig til at smile hver gang. Hele sitet har en fin moderne stemning uden at være prætentiøs.', en: "Cool name btw. Cool Pizza. Makes me smile every time. The whole site has a nice modern vibe without being pretentious." }, source: 'Google Reviews' },
            { id: 'FB-006', quote: { da: 'Mit dansk er ikke så godt, så jeg sætter virkelig pris på den engelske mulighed på hjemmesiden! Det gjorde det nemt at læse menuen før jeg kom.', en: "My Danish isn't great so I really appreciate the English option on the website! Made it so easy to read the menu before coming in." }, source: 'In-store' },
        ];

        const galleryPhotos = [
            { id: 1, src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&fit=crop', alt: { da: 'Margherita med frisk basilikum', en: 'Margherita with fresh basil' } },
            { id: 2, src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1200&fit=crop', alt: { da: 'Pepperoni klassiker', en: 'Classic pepperoni' } },
            { id: 3, src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&fit=crop', alt: { da: 'Friskbagt pizza fra ovnen', en: 'Fresh pizza from the oven' } },
            { id: 4, src: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=1200&fit=crop', alt: { da: 'Vegansk pizza med grøntsager', en: 'Vegan pizza with vegetables' } },
            { id: 5, src: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=1200&fit=crop', alt: { da: 'Pizza med trøffel og svampe', en: 'Truffle and mushroom pizza' } },
            { id: 6, src: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=1200&fit=crop', alt: { da: 'Vores kulfyrede ovn', en: 'Our coal-fired oven' } },
            { id: 7, src: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=1200&fit=crop', alt: { da: 'Capricciosa med artiskok', en: 'Capricciosa with artichoke' } },
            { id: 8, src: 'https://images.unsplash.com/photo-1585238342024-78d387f4132e?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1585238342024-78d387f4132e?w=1200&fit=crop', alt: { da: 'Dejen forberedes', en: 'Preparing the dough' } },
        ];

        function t(key) {
            const keys = key.split('.');
            let obj = translations;
            for (const k of keys) obj = obj[k];
            if (obj[mode.value]) return obj[mode.value][lang.value];
            return obj[lang.value];
        }

        let map = null;

        function navigate(p) {
            page.value = p;
            if (p === 'menu') loadMenu();
            if (p === 'findus') {
                nextTick(() => { initMap(); });
            }
        }

        function initMap() {
            if (map) { map.remove(); map = null; }
            const lat = 55.6722;
            const lng = 12.5574;
            map = L.map('map').setView([lat, lng], 16);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);
            L.marker([lat, lng]).addTo(map)
                .bindPopup('<strong>Cool Pizza</strong><br>Vesterbrogade 42<br>1620 København V<br>+45 33 12 04 56')
                .openPopup();
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

        function openLightbox(photo) {
            lightboxPhoto.value = photo;
        }

        function closeLightbox() {
            lightboxPhoto.value = null;
        }

        onMounted(() => {
            if (mode.value) {
                document.documentElement.setAttribute('data-mode', mode.value);
                page.value = 'home';
            }
        });

        return { page, mode, lang, menuHtml, testimonials, galleryPhotos, lightboxPhoto, t, navigate, selectMode, toggleLang, backToChoose, openLightbox, closeLightbox };
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
                    <div class="logo">Cool Pizza <span class="mode-badge">{{ mode === 'classic' ? t('choose.classic') : t('choose.vegan') }}</span></div>
                    <ul>
                        <li><a :class="{ active: page === 'home' }" @click.prevent="navigate('home')">{{ t('nav.home') }}</a></li>
                        <li><a :class="{ active: page === 'menu' }" @click.prevent="navigate('menu')">{{ t('nav.menu') }}</a></li>
                        <li><a :class="{ active: page === 'gallery' }" @click.prevent="navigate('gallery')">{{ t('nav.gallery') }}</a></li>
                        <li><a :class="{ active: page === 'about' }" @click.prevent="navigate('about')">{{ t('nav.about') }}</a></li>
                        <li><a :class="{ active: page === 'findus' }" @click.prevent="navigate('findus')">{{ t('nav.findUs') }}</a></li>
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

                    <section class="testimonials">
                        <h2>{{ t('testimonials.title') }}</h2>
                        <div class="testimonials-grid">
                            <div class="testimonial-card" v-for="item in testimonials" :key="item.id">
                                <p class="testimonial-quote">"{{ item.quote[lang] }}"</p>
                                <span class="testimonial-source">— {{ item.source }}</span>
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

                <!-- Find Us -->
                <template v-if="page === 'findus'">
                    <section class="findus-page">
                        <h1>{{ t('findUs.title') }}</h1>
                        <p class="findus-address">{{ t('findUs.subtitle') }}</p>
                        <p class="findus-directions">{{ t('findUs.directions') }}</p>
                        <div id="map"></div>
                    </section>
                </template>

                <!-- Gallery -->
                <template v-if="page === 'gallery'">
                    <section class="gallery-page">
                        <h1>{{ t('gallery.title') }}</h1>
                        <p class="gallery-subtitle">{{ t('gallery.subtitle') }}</p>
                        <div class="gallery-grid">
                            <div class="gallery-item" v-for="photo in galleryPhotos" :key="photo.id" @click="openLightbox(photo)">
                                <img :src="photo.src" :alt="photo.alt[lang]" loading="lazy">
                            </div>
                        </div>
                    </section>
                    <div class="lightbox" v-if="lightboxPhoto" @click.self="closeLightbox">
                        <button class="lightbox-close" @click="closeLightbox">&times;</button>
                        <img :src="lightboxPhoto.full" :alt="lightboxPhoto.alt[lang]">
                    </div>
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
