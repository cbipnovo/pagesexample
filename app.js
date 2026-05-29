const { createApp, ref, computed, onMounted, watch, nextTick } = Vue;

const translations = {
    nav: { home: { da: 'Hjem', en: 'Home' }, menu: { da: 'Menu', en: 'Menu' }, gallery: { da: 'Galleri', en: 'Gallery' }, about: { da: 'Om os', en: 'About' }, contact: { da: 'Kontakt', en: 'Contact' }, findUs: { da: 'Find os', en: 'Find Us' } },
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
    contact: {
        title: { da: 'Kontakt os', en: 'Contact Us' },
        subtitle: { da: 'Har du spørgsmål, feedback eller en cateringforespørgsel? Skriv til os!', en: 'Have a question, feedback, or catering inquiry? Drop us a message!' },
        name: { da: 'Navn', en: 'Name' },
        email: { da: 'E-mail', en: 'Email' },
        message: { da: 'Besked', en: 'Message' },
        send: { da: 'Send besked', en: 'Send Message' },
        success: { da: 'Tak! Din besked er sendt. Vi vender tilbage hurtigst muligt.', en: 'Thanks! Your message has been sent. We\'ll get back to you soon.' },
        error: { da: 'Noget gik galt. Prøv venligst igen.', en: 'Something went wrong. Please try again.' },
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
        const pizzaOfTheWeek = ref(null);

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
            mobileMenuOpen.value = false;
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
            fetch('data/pizza-of-the-week.json')
                .then(r => r.json())
                .then(data => { pizzaOfTheWeek.value = data; })
                .catch(() => {});
        });

        const mobileMenuOpen = ref(false);
        const contactForm = ref({ name: '', email: '', message: '' });
        const contactStatus = ref(null);

        function toggleMobileMenu() {
            mobileMenuOpen.value = !mobileMenuOpen.value;
        }

        function closeMobileMenu() {
            mobileMenuOpen.value = false;
        }

        function submitContact() {
            contactStatus.value = 'sending';
            const formData = new FormData();
            formData.append('access_key', 'demo-key-cool-pizza');
            formData.append('name', contactForm.value.name);
            formData.append('email', contactForm.value.email);
            formData.append('message', contactForm.value.message);
            fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
                .then(r => r.json())
                .then(data => {
                    if (data.success) {
                        contactStatus.value = 'success';
                        contactForm.value = { name: '', email: '', message: '' };
                    } else {
                        contactStatus.value = 'error';
                    }
                })
                .catch(() => { contactStatus.value = 'error'; });
        }

        return { page, mode, lang, menuHtml, testimonials, galleryPhotos, lightboxPhoto, pizzaOfTheWeek, mobileMenuOpen, contactForm, contactStatus, t, navigate, selectMode, toggleLang, backToChoose, openLightbox, closeLightbox, toggleMobileMenu, closeMobileMenu, submitContact };
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
                    <button class="hamburger" :class="{ open: mobileMenuOpen }" @click="toggleMobileMenu" aria-label="Menu">
                        <span></span><span></span><span></span>
                    </button>
                    <ul :class="{ 'nav-open': mobileMenuOpen }">
                        <li><a :class="{ active: page === 'home' }" @click.prevent="navigate('home')">{{ t('nav.home') }}</a></li>
                        <li><a :class="{ active: page === 'menu' }" @click.prevent="navigate('menu')">{{ t('nav.menu') }}</a></li>
                        <li><a :class="{ active: page === 'gallery' }" @click.prevent="navigate('gallery')">{{ t('nav.gallery') }}</a></li>
                        <li><a :class="{ active: page === 'about' }" @click.prevent="navigate('about')">{{ t('nav.about') }}</a></li>
                        <li><a :class="{ active: page === 'contact' }" @click.prevent="navigate('contact')">{{ t('nav.contact') }}</a></li>
                        <li><a :class="{ active: page === 'findus' }" @click.prevent="navigate('findus')">{{ t('nav.findUs') }}</a></li>
                        <li><a class="switch-link" @click.prevent="backToChoose">{{ t('switchStyle') }}</a></li>
                        <li class="nav-lang-mobile"><button class="lang-toggle" @click="toggleLang">{{ lang === 'da' ? 'EN' : 'DA' }}</button></li>
                    </ul>
                    <button class="lang-toggle lang-toggle-desktop" @click="toggleLang">{{ lang === 'da' ? 'EN' : 'DA' }}</button>
                </nav>
            </header>
            <div class="nav-overlay" :class="{ visible: mobileMenuOpen }" @click="closeMobileMenu"></div>

            <main>
                <!-- Home -->
                <template v-if="page === 'home'">
                    <section class="hero">
                        <h1>{{ t('home.heroTitle') }}</h1>
                        <p>{{ t('home.heroText') }}</p>
                        <button class="btn" @click="navigate('menu')">{{ t('home.viewMenu') }}</button>
                    </section>

                    <section class="potw" v-if="pizzaOfTheWeek">
                        <div class="potw-card">
                            <img :src="pizzaOfTheWeek.image" :alt="pizzaOfTheWeek.name[lang]">
                            <div class="potw-content">
                                <span class="potw-badge">{{ pizzaOfTheWeek.badge[lang] }}</span>
                                <h3>{{ pizzaOfTheWeek.name[lang] }}</h3>
                                <p>{{ pizzaOfTheWeek.description[lang] }}</p>
                                <span class="potw-price">{{ pizzaOfTheWeek.price }}</span>
                            </div>
                        </div>
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

                <!-- Contact -->
                <template v-if="page === 'contact'">
                    <section class="contact-page">
                        <h1>{{ t('contact.title') }}</h1>
                        <p class="contact-subtitle">{{ t('contact.subtitle') }}</p>
                        <form class="contact-form" @submit.prevent="submitContact">
                            <div class="form-group">
                                <label :for="'contact-name'">{{ t('contact.name') }}</label>
                                <input id="contact-name" type="text" v-model="contactForm.name" required>
                            </div>
                            <div class="form-group">
                                <label :for="'contact-email'">{{ t('contact.email') }}</label>
                                <input id="contact-email" type="email" v-model="contactForm.email" required>
                            </div>
                            <div class="form-group">
                                <label :for="'contact-message'">{{ t('contact.message') }}</label>
                                <textarea id="contact-message" v-model="contactForm.message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn" :disabled="contactStatus === 'sending'">{{ t('contact.send') }}</button>
                        </form>
                        <p v-if="contactStatus === 'success'" class="contact-success">{{ t('contact.success') }}</p>
                        <p v-if="contactStatus === 'error'" class="contact-error">{{ t('contact.error') }}</p>
                    </section>
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
                <div class="social-links">
                    <a href="https://instagram.com/coolpizzacph" target="_blank" rel="noopener" aria-label="Instagram">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                    <a href="https://facebook.com/coolpizzacph" target="_blank" rel="noopener" aria-label="Facebook">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="https://tripadvisor.com/coolpizza" target="_blank" rel="noopener" aria-label="TripAdvisor">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.04 10.43 5.976 5.976 0 004.075-1.6L12 19.535l1.918-1.918a5.98 5.98 0 004.078 1.6 5.997 5.997 0 004.04-10.43L24 6.648h-4.35a13.573 13.573 0 00-7.644-2.353zM6.003 17.213a3.997 3.997 0 110-7.994 3.997 3.997 0 010 7.994zm11.994 0a3.997 3.997 0 110-7.994 3.997 3.997 0 010 7.994zM6.003 11.219a2 2 0 100 4 2 2 0 000-4zm11.994 0a2 2 0 100 4 2 2 0 000-4z"/></svg>
                    </a>
                </div>
                <p>{{ t('footer') }}</p>
            </footer>
        </template>
    </div>
    `
}).mount('#app');
