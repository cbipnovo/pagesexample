const { createApp, ref, reactive, computed, onMounted, watch, nextTick } = Vue;

const translations = {
    nav: { home: { da: 'Hjem', en: 'Home' }, menu: { da: 'Menu', en: 'Menu' }, builder: { da: 'Byg pizza', en: 'Build Pizza' }, gallery: { da: 'Galleri', en: 'Gallery' }, about: { da: 'Om os', en: 'About' }, contact: { da: 'Kontakt', en: 'Contact' }, findUs: { da: 'Find os', en: 'Find Us' }, features: { da: 'Funktioner', en: 'Features' } },
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
    builder: {
        title: { da: 'Byg din pizza', en: 'Build Your Pizza' },
        subtitle: { da: 'Vælg dine ingredienser og se din pizza blive til', en: 'Choose your ingredients and watch your pizza come to life' },
        size: { da: 'Størrelse', en: 'Size' },
        base: { da: 'Bund', en: 'Base' },
        sauce: { da: 'Sauce', en: 'Sauce' },
        cheese: { da: 'Ost', en: 'Cheese' },
        toppings: { da: 'Toppings', en: 'Toppings' },
        total: { da: 'Total', en: 'Total' },
        preview: { da: 'Din pizza', en: 'Your Pizza' },
        reset: { da: 'Start forfra', en: 'Start Over' },
        note: { da: 'Kun til sjov — ingen bestilling. Kom forbi og bestil din drømmepizza!', en: 'For fun only — no ordering. Come visit and order your dream pizza!' },
    },
    features: {
        title: { da: 'Funktioner', en: 'Features' },
        subtitle: { da: 'Slå funktioner til og fra for at tilpasse din oplevelse', en: 'Toggle features on and off to customise your experience' },
        issue: { da: 'Issue', en: 'Issue' },
        on: { da: 'Til', en: 'On' },
        off: { da: 'Fra', en: 'Off' },
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

        const testimonials = ref([]);

        const galleryFilter = ref('all');
        const galleryPhotos = [
            { id: 1, category: 'pizzas', src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&fit=crop', alt: { da: 'Margherita med frisk basilikum', en: 'Margherita with fresh basil' } },
            { id: 2, category: 'pizzas', src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1200&fit=crop', alt: { da: 'Pepperoni klassiker', en: 'Classic pepperoni' } },
            { id: 3, category: 'pizzas', src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&fit=crop', alt: { da: 'Friskbagt pizza fra ovnen', en: 'Fresh pizza from the oven' } },
            { id: 4, category: 'pizzas', src: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=1200&fit=crop', alt: { da: 'Vegansk pizza med grøntsager', en: 'Vegan pizza with vegetables' } },
            { id: 5, category: 'pizzas', src: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=1200&fit=crop', alt: { da: 'Pizza med trøffel og svampe', en: 'Truffle and mushroom pizza' } },
            { id: 6, category: 'restaurant', src: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=1200&fit=crop', alt: { da: 'Vores kulfyrede ovn', en: 'Our coal-fired oven' } },
            { id: 7, category: 'pizzas', src: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=1200&fit=crop', alt: { da: 'Capricciosa med artiskok', en: 'Capricciosa with artichoke' } },
            { id: 8, category: 'people', src: 'https://images.unsplash.com/photo-1585238342024-78d387f4132e?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1585238342024-78d387f4132e?w=1200&fit=crop', alt: { da: 'Dejen forberedes', en: 'Preparing the dough' } },
            { id: 9, category: 'restaurant', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&fit=crop', alt: { da: 'Restaurantens interiør', en: 'Restaurant interior' } },
            { id: 10, category: 'restaurant', src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&fit=crop', alt: { da: 'Hyggelig stemning om aftenen', en: 'Cozy evening atmosphere' } },
            { id: 11, category: 'people', src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&fit=crop', alt: { da: 'Gæster nyder deres mad', en: 'Guests enjoying their meal' } },
            { id: 12, category: 'people', src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop', full: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&fit=crop', alt: { da: 'Vores team i køkkenet', en: 'Our team in the kitchen' } },
        ];
        const filteredPhotos = computed(() => {
            if (galleryFilter.value === 'all') return galleryPhotos;
            return galleryPhotos.filter(p => p.category === galleryFilter.value);
        });

        function t(key) {
            const keys = key.split('.');
            let obj = translations;
            for (const k of keys) obj = obj[k];
            if (obj[mode.value]) return obj[mode.value][lang.value];
            return obj[lang.value];
        }

        const testimonialsUpdated = ref('');

        function relativeDate(dateStr) {
            const date = new Date(dateStr);
            const now = new Date();
            const days = Math.floor((now - date) / 86400000);
            if (days === 0) return lang.value === 'da' ? 'I dag' : 'Today';
            if (days === 1) return lang.value === 'da' ? 'I går' : 'Yesterday';
            if (days < 7) return lang.value === 'da' ? days + ' dage siden' : days + ' days ago';
            if (days < 14) return lang.value === 'da' ? '1 uge siden' : '1 week ago';
            return dateStr;
        }

        let map = null;

        function navigate(p) {
            page.value = p;
            mobileMenuOpen.value = false;
            if (p === 'menu') loadMenu();
            if (p === 'findus') {
                nextTick(() => { initMap(); });
            }
            if (p === 'builder') {
                if (!pizzaBuilder.cheese) {
                    pizzaBuilder.cheese = mode.value === 'vegan' ? 'vegan' : 'mozzarella';
                }
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

        const copied = ref(false);
        const shareUrl = computed(() => {
            if (!lightboxPhoto.value) return '';
            return window.location.origin + window.location.pathname + '#photo=' + lightboxPhoto.value.id;
        });

        const zoomLevel = ref(1);
        let lastPinchDist = 0;

        function openLightbox(photo) {
            lightboxPhoto.value = photo;
            zoomLevel.value = 1;
            lockScroll();
            copied.value = false;
        }

        function closeLightbox() {
            lightboxPhoto.value = null;
            zoomLevel.value = 1;
            unlockScroll();
        }

        function onLightboxWheel(e) {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -0.1 : 0.1;
            zoomLevel.value = Math.min(4, Math.max(1, zoomLevel.value + delta));
        }

        function onLightboxTouchStart(e) {
            if (e.touches.length === 2) {
                lastPinchDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
            }
        }

        function onLightboxTouchMove(e) {
            if (e.touches.length === 2) {
                e.preventDefault();
                const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
                const scale = dist / lastPinchDist;
                zoomLevel.value = Math.min(4, Math.max(1, zoomLevel.value * scale));
                lastPinchDist = dist;
            }
        }

        function onLightboxDblClick() {
            zoomLevel.value = zoomLevel.value > 1 ? 1 : 2.5;
        }

        function copyShareLink() {
            navigator.clipboard.writeText(shareUrl.value).then(() => {
                copied.value = true;
                setTimeout(() => { copied.value = false; }, 2000);
            });
        }

        onMounted(() => {
            if (mode.value) {
                document.documentElement.setAttribute('data-mode', mode.value);
                page.value = 'home';
            }
            if (darkMode.value) {
                document.documentElement.setAttribute('data-theme', 'dark');
            }
            fetch('data/testimonials.json')
                .then(r => r.json())
                .then(data => {
                    const pool = data.testimonials;
                    const mixed = pool.filter(t => t.sentiment === 'mixed');
                    const positive = pool.filter(t => t.sentiment === 'positive');
                    const picked = [mixed[Math.floor(Math.random() * mixed.length)]];
                    const shuffled = positive.sort(() => Math.random() - 0.5);
                    picked.push(...shuffled.slice(0, 3));
                    testimonials.value = picked.sort(() => Math.random() - 0.5);
                    testimonialsUpdated.value = data.updated || '';
                })
                .catch(() => {});
            fetch('data/pizza-of-the-week.json')
                .then(r => r.json())
                .then(data => {
                    const now = new Date();
                    const startOfYear = new Date(now.getFullYear(), 0, 1);
                    const currentWeek = Math.ceil(((now - startOfYear) / 86400000 + startOfYear.getDay() + 1) / 7);
                    const match = data.schedule.find(p => p.week === currentWeek);
                    const fallback = data.schedule.filter(p => p.week <= currentWeek).pop() || data.schedule[0];
                    const entry = match || fallback;
                    entry.badge = { da: 'Ugens Pizza', en: 'Pizza of the Week' };
                    entry.updated = data.updated;
                    pizzaOfTheWeek.value = entry;
                })
                .catch(() => {});
            const hash = window.location.hash;
            if (hash.startsWith('#photo=')) {
                const photoId = parseInt(hash.split('=')[1]);
                const photo = galleryPhotos.find(p => p.id === photoId);
                if (photo) {
                    page.value = 'gallery';
                    nextTick(() => { openLightbox(photo); });
                }
            }
        });

        const mobileMenuOpen = ref(false);
        const darkMode = ref(localStorage.getItem('pizza2-dark') === 'true');
        const contactForm = ref({ name: '', email: '', message: '' });
        const contactStatus = ref(null);

        // Feature Toggles
        const featureRegistry = [
            { key: 'gallery', issue: 20, name: { da: 'Galleri', en: 'Gallery' }, description: { da: 'Fotogalleri med lightbox og deling', en: 'Photo gallery with lightbox and sharing' } },
            { key: 'builder', issue: 28, name: { da: 'Byg pizza', en: 'Build Pizza' }, description: { da: 'Interaktiv pizza-bygger med live forhåndsvisning', en: 'Interactive pizza builder with live preview' } },
            { key: 'testimonials', issue: 25, name: { da: 'Anmeldelser', en: 'Testimonials' }, description: { da: 'Hvad vores gæster siger', en: 'What our guests say' } },
            { key: 'potw', issue: 22, name: { da: 'Ugens pizza', en: 'Pizza of the Week' }, description: { da: 'Ugentlig fremhævet pizza', en: 'Weekly featured pizza highlight' } },
            { key: 'contact', issue: 23, name: { da: 'Kontakt', en: 'Contact' }, description: { da: 'Kontaktformular til forespørgsler', en: 'Contact form for enquiries' } },
            { key: 'findus', issue: null, name: { da: 'Find os', en: 'Find Us' }, description: { da: 'Kort og rutevejledning', en: 'Map and directions' } },
            { key: 'socials', issue: 29, name: { da: 'Sociale medier', en: 'Social Links' }, description: { da: 'Links til sociale medier i footer', en: 'Social media links in footer' } },
        ];

        const savedFeatures = JSON.parse(localStorage.getItem('pizza2-features') || '{}');
        const featureStates = reactive(
            Object.fromEntries(featureRegistry.map(f => [f.key, savedFeatures[f.key] !== undefined ? savedFeatures[f.key] : true]))
        );

        function featureEnabled(key) {
            return featureStates[key] !== false;
        }

        function toggleFeature(key) {
            featureStates[key] = !featureStates[key];
            localStorage.setItem('pizza2-features', JSON.stringify(featureStates));
            if (!featureEnabled(page.value)) {
                page.value = 'home';
            }
        }

        // Pizza Builder
        const builderIngredients = {
            bases: {
                thin: { name: { da: 'Tynd', en: 'Thin crust' }, price: 0, classic: true, vegan: true },
                thick: { name: { da: 'Tyk', en: 'Thick crust' }, price: 10, classic: true, vegan: true },
                glutenFree: { name: { da: 'Glutenfri', en: 'Gluten-free' }, price: 15, classic: true, vegan: true },
            },
            sauces: {
                tomato: { name: { da: 'Tomat', en: 'Tomato' }, price: 0, classic: true, vegan: true, color: '#d32f2f' },
                pesto: { name: { da: 'Pesto', en: 'Pesto' }, price: 5, classic: true, vegan: true, color: '#558b2f' },
                white: { name: { da: 'Hvidløg', en: 'Garlic white' }, price: 5, classic: true, vegan: false, color: '#f5f0e0' },
            },
            cheeses: {
                mozzarella: { name: { da: 'Mozzarella', en: 'Mozzarella' }, price: 0, classic: true, vegan: false, color: '#fffde7' },
                vegan: { name: { da: 'Vegansk', en: 'Vegan' }, price: 10, classic: false, vegan: true, color: '#fff8e1' },
            },
            toppings: {
                pepperoni: { name: { da: 'Pepperoni', en: 'Pepperoni' }, price: 15, classic: true, vegan: false, color: '#b71c1c' },
                mushrooms: { name: { da: 'Svampe', en: 'Mushrooms' }, price: 10, classic: true, vegan: true, color: '#8d6e63' },
                peppers: { name: { da: 'Peberfrugt', en: 'Bell peppers' }, price: 10, classic: true, vegan: true, color: '#ff9800' },
                olives: { name: { da: 'Oliven', en: 'Olives' }, price: 10, classic: true, vegan: true, color: '#37474f' },
                onions: { name: { da: 'Rødløg', en: 'Red onions' }, price: 8, classic: true, vegan: true, color: '#7b1fa2' },
                tomatoes: { name: { da: 'Tomater', en: 'Tomatoes' }, price: 8, classic: true, vegan: true, color: '#e53935' },
                spinach: { name: { da: 'Spinat', en: 'Spinach' }, price: 8, classic: true, vegan: true, color: '#43a047' },
                bacon: { name: { da: 'Bacon', en: 'Bacon' }, price: 20, classic: true, vegan: false, color: '#6d4c41' },
                pineapple: { name: { da: 'Ananas', en: 'Pineapple' }, price: 12, classic: true, vegan: true, color: '#f9a825' },
                jalapenos: { name: { da: 'Jalapeño', en: 'Jalapeño' }, price: 8, classic: true, vegan: true, color: '#558b2f' },
            },
        };

        const builderSizes = {
            small: { base: 89, label: { da: '30 cm', en: '30 cm' } },
            large: { base: 129, label: { da: '45 cm', en: '45 cm' } },
        };

        const pizzaBuilder = reactive({
            size: 'small',
            base: 'thin',
            sauce: 'tomato',
            cheese: null,
            toppings: [],
        });

        function builderFilteredIngredients(category) {
            const items = builderIngredients[category];
            const result = {};
            for (const [key, item] of Object.entries(items)) {
                if (mode.value === 'vegan' && item.vegan) result[key] = item;
                else if (mode.value === 'classic' && item.classic) result[key] = item;
            }
            return result;
        }

        function builderPrice() {
            let total = builderSizes[pizzaBuilder.size].base;
            if (pizzaBuilder.base && builderIngredients.bases[pizzaBuilder.base]) total += builderIngredients.bases[pizzaBuilder.base].price;
            if (pizzaBuilder.sauce && builderIngredients.sauces[pizzaBuilder.sauce]) total += builderIngredients.sauces[pizzaBuilder.sauce].price;
            if (pizzaBuilder.cheese && builderIngredients.cheeses[pizzaBuilder.cheese]) total += builderIngredients.cheeses[pizzaBuilder.cheese].price;
            pizzaBuilder.toppings.forEach(t => { if (builderIngredients.toppings[t]) total += builderIngredients.toppings[t].price; });
            return total;
        }

        function builderToggleTopping(key) {
            const idx = pizzaBuilder.toppings.indexOf(key);
            if (idx >= 0) pizzaBuilder.toppings.splice(idx, 1);
            else pizzaBuilder.toppings.push(key);
        }

        function builderReset() {
            pizzaBuilder.size = 'small';
            pizzaBuilder.base = 'thin';
            pizzaBuilder.sauce = 'tomato';
            pizzaBuilder.cheese = mode.value === 'vegan' ? 'vegan' : 'mozzarella';
            pizzaBuilder.toppings = [];
        }

        const builderToppingPositions = computed(() => {
            const positions = [];
            const centerX = 140;
            const centerY = 140;
            pizzaBuilder.toppings.forEach((topping, index) => {
                const count = 4;
                for (let i = 0; i < count; i++) {
                    const angle = ((index * 137.5) + (i * 90)) * (3.14159 / 180);
                    const radius = 40 + ((index * 17 + i * 23) % 60);
                    const x = centerX + Math.cos(angle) * radius - 8;
                    const y = centerY + Math.sin(angle) * radius - 8;
                    positions.push({ type: topping, x, y });
                }
            });
            return positions;
        });

        function lockScroll() {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = '-' + window.scrollY + 'px';
            document.body.style.width = '100%';
        }

        function unlockScroll() {
            const scrollY = document.body.style.top;
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }

        function toggleMobileMenu() {
            mobileMenuOpen.value = !mobileMenuOpen.value;
            if (mobileMenuOpen.value) { lockScroll(); } else { unlockScroll(); }
        }

        function closeMobileMenu() {
            mobileMenuOpen.value = false;
            unlockScroll();
        }

        function toggleDarkMode() {
            darkMode.value = !darkMode.value;
            localStorage.setItem('pizza2-dark', darkMode.value);
            document.documentElement.setAttribute('data-theme', darkMode.value ? 'dark' : 'light');
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

        return { page, mode, lang, menuHtml, testimonials, testimonialsUpdated, galleryPhotos, filteredPhotos, galleryFilter, lightboxPhoto, pizzaOfTheWeek, mobileMenuOpen, darkMode, contactForm, contactStatus, copied, shareUrl, zoomLevel, pizzaBuilder, builderIngredients, builderSizes, builderToppingPositions, featureRegistry, featureStates, t, relativeDate, navigate, selectMode, toggleLang, backToChoose, openLightbox, closeLightbox, copyShareLink, onLightboxWheel, onLightboxTouchStart, onLightboxTouchMove, onLightboxDblClick, toggleMobileMenu, closeMobileMenu, toggleDarkMode, submitContact, builderFilteredIngredients, builderPrice, builderToggleTopping, builderReset, featureEnabled, toggleFeature };
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
                        <li v-if="featureEnabled('builder')"><a :class="{ active: page === 'builder' }" @click.prevent="navigate('builder')">{{ t('nav.builder') }}</a></li>
                        <li v-if="featureEnabled('gallery')"><a :class="{ active: page === 'gallery' }" @click.prevent="navigate('gallery')">{{ t('nav.gallery') }}</a></li>
                        <li><a :class="{ active: page === 'about' }" @click.prevent="navigate('about')">{{ t('nav.about') }}</a></li>
                        <li v-if="featureEnabled('contact')"><a :class="{ active: page === 'contact' }" @click.prevent="navigate('contact')">{{ t('nav.contact') }}</a></li>
                        <li v-if="featureEnabled('findus')"><a :class="{ active: page === 'findus' }" @click.prevent="navigate('findus')">{{ t('nav.findUs') }}</a></li>
                        <li><a :class="{ active: page === 'features' }" @click.prevent="navigate('features')">{{ t('nav.features') }}</a></li>
                        <li><a class="switch-link" @click.prevent="backToChoose">{{ t('switchStyle') }}</a></li>
                        <li class="nav-lang-mobile"><button class="dark-toggle" @click="toggleDarkMode">{{ darkMode ? '☀' : '☾' }}</button> <button class="lang-toggle" @click="toggleLang">{{ lang === 'da' ? 'EN' : 'DA' }}</button></li>
                    </ul>
                    <button class="dark-toggle" @click="toggleDarkMode" :aria-label="darkMode ? 'Light mode' : 'Dark mode'">{{ darkMode ? '☀' : '☾' }}</button>
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

                    <section class="potw" v-if="pizzaOfTheWeek && featureEnabled('potw')">
                        <div class="potw-card">
                            <img :src="pizzaOfTheWeek.image" :alt="pizzaOfTheWeek.name[lang]">
                            <div class="potw-content">
                                <span class="potw-badge">{{ pizzaOfTheWeek.badge[lang] }}</span>
                                <h3>{{ pizzaOfTheWeek.name[lang] }}</h3>
                                <p>{{ pizzaOfTheWeek.description[lang] }}</p>
                                <span class="potw-price">{{ pizzaOfTheWeek.price }}</span>
                                <span class="updated-label" v-if="pizzaOfTheWeek.updated">{{ lang === 'da' ? 'Opdateret' : 'Updated' }}: {{ relativeDate(pizzaOfTheWeek.updated) }}</span>
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

                    <section class="testimonials" v-if="featureEnabled('testimonials')">
                        <h2>{{ t('testimonials.title') }}</h2>
                        <p class="updated-label" v-if="testimonialsUpdated">{{ lang === 'da' ? 'Sidst opdateret' : 'Last refreshed' }}: {{ relativeDate(testimonialsUpdated) }}</p>
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
                <template v-if="page === 'findus' && featureEnabled('findus')">
                    <section class="findus-page">
                        <h1>{{ t('findUs.title') }}</h1>
                        <p class="findus-address">{{ t('findUs.subtitle') }}</p>
                        <p class="findus-directions">{{ t('findUs.directions') }}</p>
                        <div id="map"></div>
                    </section>
                </template>

                <!-- Gallery -->
                <template v-if="page === 'gallery' && featureEnabled('gallery')">
                    <section class="gallery-page">
                        <h1>{{ t('gallery.title') }}</h1>
                        <p class="gallery-subtitle">{{ t('gallery.subtitle') }}</p>
                        <div class="gallery-filters">
                            <button :class="{ active: galleryFilter === 'all' }" @click="galleryFilter = 'all'">{{ lang === 'da' ? 'Alle' : 'All' }}</button>
                            <button :class="{ active: galleryFilter === 'pizzas' }" @click="galleryFilter = 'pizzas'">{{ lang === 'da' ? 'Pizzaer' : 'Pizzas' }}</button>
                            <button :class="{ active: galleryFilter === 'restaurant' }" @click="galleryFilter = 'restaurant'">{{ lang === 'da' ? 'Restaurant' : 'Restaurant' }}</button>
                            <button :class="{ active: galleryFilter === 'people' }" @click="galleryFilter = 'people'">{{ lang === 'da' ? 'Mennesker' : 'People' }}</button>
                        </div>
                        <div class="gallery-grid">
                            <div class="gallery-item" v-for="photo in filteredPhotos" :key="photo.id" @click="openLightbox(photo)">
                                <img :src="photo.src" :alt="photo.alt[lang]" loading="lazy">
                            </div>
                        </div>
                    </section>
                    <div class="lightbox" v-if="lightboxPhoto" @click.self="closeLightbox" @wheel.prevent="onLightboxWheel" @touchstart="onLightboxTouchStart" @touchmove="onLightboxTouchMove">
                        <button class="lightbox-close" @click="closeLightbox">&times;</button>
                        <img :src="lightboxPhoto.full" :alt="lightboxPhoto.alt[lang]" :style="{ transform: 'scale(' + zoomLevel + ')' }" @dblclick="onLightboxDblClick">
                        <div class="lightbox-share">
                            <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(shareUrl)" target="_blank" rel="noopener" aria-label="Share on Facebook">Facebook</a>
                            <a :href="'https://twitter.com/intent/tweet?url=' + encodeURIComponent(shareUrl) + '&text=' + encodeURIComponent(lightboxPhoto.alt[lang])" target="_blank" rel="noopener" aria-label="Share on Twitter">Twitter</a>
                            <button @click="copyShareLink" aria-label="Copy link">{{ copied ? (lang === 'da' ? 'Kopieret!' : 'Copied!') : (lang === 'da' ? 'Kopier link' : 'Copy link') }}</button>
                        </div>
                    </div>
                </template>

                <!-- Pizza Builder -->
                <template v-if="page === 'builder' && featureEnabled('builder')">
                    <section class="builder-page">
                        <h1>{{ t('builder.title') }}</h1>
                        <p class="builder-subtitle">{{ t('builder.subtitle') }}</p>

                        <div class="builder-grid">
                            <div class="pizza-preview-card">
                                <h3>{{ t('builder.preview') }}</h3>
                                <div class="pizza-canvas" :class="{ 'pizza-large': pizzaBuilder.size === 'large' }">
                                    <div class="pizza-crust">
                                        <div class="pizza-base" :class="pizzaBuilder.base"></div>
                                        <div class="pizza-sauce" :style="{ background: pizzaBuilder.sauce ? builderIngredients.sauces[pizzaBuilder.sauce].color : 'transparent' }"></div>
                                        <div class="pizza-cheese" v-if="pizzaBuilder.cheese" :style="{ background: builderIngredients.cheeses[pizzaBuilder.cheese].color }"></div>
                                        <div class="pizza-toppings">
                                            <span v-for="(pos, i) in builderToppingPositions" :key="i" class="topping-dot" :style="{ left: pos.x + 'px', top: pos.y + 'px', background: builderIngredients.toppings[pos.type].color }"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="builder-price">
                                    <span class="builder-price-label">{{ t('builder.total') }}</span>
                                    <span class="builder-price-value">{{ builderPrice() }} kr</span>
                                </div>
                                <button class="btn btn-outline builder-reset" @click="builderReset">{{ t('builder.reset') }}</button>
                            </div>

                            <div class="builder-controls">
                                <div class="builder-section">
                                    <h4>{{ t('builder.size') }}</h4>
                                    <div class="builder-options">
                                        <button v-for="(s, key) in builderSizes" :key="key" class="builder-btn" :class="{ active: pizzaBuilder.size === key }" @click="pizzaBuilder.size = key">
                                            {{ s.label[lang] }}
                                            <span class="builder-btn-price">{{ s.base }} kr</span>
                                        </button>
                                    </div>
                                </div>

                                <div class="builder-section">
                                    <h4>{{ t('builder.base') }}</h4>
                                    <div class="builder-options">
                                        <button v-for="(item, key) in builderFilteredIngredients('bases')" :key="key" class="builder-btn" :class="{ active: pizzaBuilder.base === key }" @click="pizzaBuilder.base = key">
                                            {{ item.name[lang] }}
                                            <span class="builder-btn-price" v-if="item.price">+{{ item.price }} kr</span>
                                        </button>
                                    </div>
                                </div>

                                <div class="builder-section">
                                    <h4>{{ t('builder.sauce') }}</h4>
                                    <div class="builder-options">
                                        <button v-for="(item, key) in builderFilteredIngredients('sauces')" :key="key" class="builder-btn" :class="{ active: pizzaBuilder.sauce === key }" @click="pizzaBuilder.sauce = key">
                                            <span class="builder-swatch" :style="{ background: item.color }"></span>
                                            {{ item.name[lang] }}
                                            <span class="builder-btn-price" v-if="item.price">+{{ item.price }} kr</span>
                                        </button>
                                    </div>
                                </div>

                                <div class="builder-section">
                                    <h4>{{ t('builder.cheese') }}</h4>
                                    <div class="builder-options">
                                        <button v-for="(item, key) in builderFilteredIngredients('cheeses')" :key="key" class="builder-btn" :class="{ active: pizzaBuilder.cheese === key }" @click="pizzaBuilder.cheese = key">
                                            {{ item.name[lang] }}
                                            <span class="builder-btn-price" v-if="item.price">+{{ item.price }} kr</span>
                                        </button>
                                    </div>
                                </div>

                                <div class="builder-section">
                                    <h4>{{ t('builder.toppings') }}</h4>
                                    <div class="builder-options builder-options-wrap">
                                        <button v-for="(item, key) in builderFilteredIngredients('toppings')" :key="key" class="builder-btn" :class="{ active: pizzaBuilder.toppings.includes(key) }" @click="builderToggleTopping(key)">
                                            <span class="builder-swatch" :style="{ background: item.color }"></span>
                                            {{ item.name[lang] }}
                                            <span class="builder-btn-price">+{{ item.price }} kr</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p class="builder-note">{{ t('builder.note') }}</p>
                    </section>
                </template>

                <!-- Contact -->
                <template v-if="page === 'contact' && featureEnabled('contact')">
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

                <!-- Features -->
                <template v-if="page === 'features'">
                    <section class="features-page">
                        <h1>{{ t('features.title') }}</h1>
                        <p class="features-subtitle">{{ t('features.subtitle') }}</p>
                        <div class="features-list">
                            <div class="feature-card" v-for="feature in featureRegistry" :key="feature.key">
                                <div class="feature-info">
                                    <h3>{{ feature.name[lang] }}</h3>
                                    <p>{{ feature.description[lang] }}</p>
                                    <a v-if="feature.issue" class="feature-issue" :href="'https://github.com/cbipnovo/pagesexample/issues/' + feature.issue" target="_blank" rel="noopener">#{{ feature.issue }}</a>
                                </div>
                                <label class="feature-toggle">
                                    <input type="checkbox" :checked="featureStates[feature.key]" @change="toggleFeature(feature.key)">
                                    <span class="toggle-slider"></span>
                                    <span class="toggle-label">{{ featureStates[feature.key] ? t('features.on') : t('features.off') }}</span>
                                </label>
                            </div>
                        </div>
                    </section>
                </template>
            </main>

            <footer>
                <div class="social-links" v-if="featureEnabled('socials')">
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
