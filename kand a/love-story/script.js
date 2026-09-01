(function () {
    'use strict';

    // ============================================================
    //  CENTRALIZED CONFIGURATION — EDIT THIS TO PERSONALIZE!
    // ============================================================
    const coupleData = {
        yourName: 'Khush',
        partnerName: 'Aditi',
        startDate: '2022-01-14',
        startDateDisplay: '14 January 2022',
        anniversary: '2022-01-14',
        relationshipTitle: 'Our Story',

        song: {
            title: 'Taylor Swift - Lover',
            file: 'https://www.youtube.com/embed/-BjZmE2gtdo?autoplay=1&mute=1&controls=0&loop=1&playlist=-BjZmE2gtdo&start=141&rel=0&modestbranding=1'
        },

        secretMessage: "If you're reading this, know that you are the most precious person in my world. Every single day with you feels like a gift I never want to stop unwrapping. Thank you for being my forever. I love you — today, tomorrow, and all the days after that.",

        letter: {
            greeting: 'My Dearest Aditi,',
            signature: 'Khush ❤️',
            paragraphs: [
                "Where do I even begin? From the very first moment I saw you, something inside me knew that my world was about to change forever. And it did — in the most beautiful way imaginable.",
                "I still think about the way you laughed on our first date, the way your eyes light up when you talk about something you love, the way you hold my hand just a little tighter when we cross the street. These are the moments I replay in my head on the days I miss you most.",
                "You are my calm in every storm, my warmth on the coldest nights, and my favorite part of every single day. You make ordinary mornings feel like adventures and quiet evenings feel like the grandest celebrations.",
                "Thank you for choosing me — every single day. Thank you for your patience, your kindness, and the way you love me even on the days I don't always love myself. Thank you for being my safe place, my biggest cheerleader, and my very best friend.",
                "Every love story is beautiful, but ours will always be my favorite. And I can't wait to write a million more chapters with you."
            ]
        },

        timeline: [
            {
                date: '14 January 2022',
                title: 'The Day We Met',
                story: "I still remember the first moment I saw you — the world seemed to pause and everything else faded into the background. I didn't know it then, but that cold January day was about to become the most important day of my life.",
                image: 'assets/images/meeting.jpg',
                location: 'Anand, Gujarat',
                quote: 'That day changed everything.'
            },
            {
                date: '15 January 2022',
                title: 'Our First Picture Together',
                story: "The day after we met, and already we had our first photograph together. Looking at it now, I see two nervous kids who had no idea just how much this one click would come to mean. The start of a thousand memories in the making.",
                image: 'assets/images/first-photo.jpg',
                location: 'Anand, Gujarat',
                quote: 'The first, but never the last.'
            },
            {
                date: '16 January 2022',
                title: 'Our First Date & We Became Official',
                story: 'The butterflies, the laughter, the way you smiled across the table. I was nervous and excited all at once, and by the end of the night, I already knew I wanted a second date. And a third. And a thousand more. Two days was all it took — and you made it official the very same night. ❤️',
                image: 'assets/images/first-date.jpg',
                location: 'Our Favorite Restaurant',
                quote: 'The first of countless beautiful evenings.'
            },
            {
                date: '31 October 2022',
                title: 'The Night We\'ll Never Forget',
                story: "31 October 2022. YKIKYK. Some moments you just can't explain to anyone else — the kind of night that becomes an entire language between two people. The kind that gets referenced with a smile and three letters, and both of you just know. This was ours.",
                image: 'assets/images/best-memory.jpg',
                location: 'Just Us',
                quote: 'You know exactly which one. 😉'
            },
            {
                date: '20 January 2025',
                title: 'Our First Trip — Manali',
                story: 'Manali, just us. Snow-capped mountains at sunrise, hot chai by the riverside, getting lost on tiny mountain roads, cold winds and even warmer smiles. Watching the golden sunset from Rohtang together, I realized the world feels different when you experience it with the right person. Every corner felt magical because you were there. 🏔️',
                image: 'assets/images/first-trip.jpg',
                location: 'Manali, Himachal Pradesh 🏔️',
                quote: 'With you, every place feels like home.'
            },
            {
                date: '14 February 2025',
                title: 'Our Valentine\'s Day',
                story: "Flowers, chocolates, that quiet dinner we'd been looking forward to. But what made it perfect wasn't the grand gestures — it was the simple fact that I got to spend it with you. Every day with you feels like Valentine's Day now.",
                image: 'assets/images/valentines.jpg',
                location: 'Dinner Date',
                quote: 'Every day is Valentine\'s Day with you.'
            },
            {
                date: '15 August 2025',
                title: 'First Big Celebration Together',
                story: "Dancing, celebrating, surrounded by the people we love. But the whole night, I only had eyes for you. You made me feel like the only person in the room, and I knew then that I never wanted to celebrate anything without you by my side.",
                image: 'assets/images/celebration.jpg',
                location: 'The Venue',
                quote: 'Every celebration is brighter with you.'
            },
            {
                date: '25 December 2025',
                title: 'Our Holiday Together',
                story: 'Cozy mornings, warm drinks, exchanged gifts. But the best gift was simply being together. I woke up that morning and realized I finally understood what home really meant — it\'s wherever you are.',
                image: 'assets/images/holiday.jpg',
                location: 'Home',
                quote: 'You are my favorite place to be.'
            },
            {
                date: 'Today',
                title: 'Today & Always',
                story: "And here we are. Not a single day has passed since 14 January 2022 where I haven't felt grateful for you. For your love, your patience, your laugh. Manali showed me how beautiful travel is with you; 31 October showed me how beautiful a random night can be. This is just the beginning — our story is still being written, and I can't wait for every page.",
                image: 'assets/images/today.jpg',
                location: 'Together',
                quote: 'Our story continues, always.'
            }
        ],

        gallery: [
            { image: 'assets/images/gallery1.jpg', date: '14 January 2022', location: 'Anand, Gujarat', caption: 'The day it all began' },
            { image: 'assets/images/gallery2.jpg', date: '16 January 2022', location: 'The Restaurant', caption: 'Our first date — still blushing' },
            { image: 'assets/images/gallery3.jpg', date: '05 February 2022', location: 'Park', caption: 'Our first photo together' },
            { image: 'assets/images/gallery4.jpg', date: '31 October 2022', location: 'Just Us', caption: 'YKIKYK — you know the night 😉' },
            { image: 'assets/images/gallery5.jpg', date: '20 January 2025', location: 'Manali', caption: 'Manali mountain sunset together' },
            { image: 'assets/images/gallery6.jpg', date: '21 January 2025', location: 'Manali', caption: 'Our first trip — snow & chai' },
            { image: 'assets/images/gallery7.jpg', date: '14 February 2025', location: 'Date Night', caption: 'Our Valentine\'s together' },
            { image: 'assets/images/gallery8.jpg', date: '15 August 2025', location: 'The Venue', caption: 'Dancing the night away' },
            { image: 'assets/images/gallery9.jpg', date: '25 December 2025', location: 'Home', caption: 'Our cozy holiday together' },
            { image: 'assets/images/gallery10.jpg', date: '31 December 2025', location: 'Rooftop', caption: 'Midnight kiss, new year' },
            { image: 'assets/images/gallery11.jpg', date: 'Just Because', location: 'Cafe', caption: 'Just us and coffee' },
            { image: 'assets/images/gallery12.jpg', date: 'Today', location: 'Everywhere', caption: 'Still falling for you' }
        ],

        littleThings: [
            { icon: '😊', title: 'The way you smile.', text: "It's my favorite thing in the world. Your smile can turn even the worst day around." },
            { icon: '🌙', title: 'Our late-night conversations.', text: 'Talking about everything and nothing, long after we should be asleep.' },
            { icon: '✨', title: 'How you make ordinary days special.', text: 'Even a trip to the grocery store feels like an adventure with you.' },
            { icon: '💖', title: 'You are my favorite person.', text: 'At the end of every day, you are the one I want next to me.' },
            { icon: '🤗', title: 'Your hugs.', text: 'They feel like home wrapped in warmth. I could stay in them forever.' },
            { icon: '😂', title: 'Your laugh.', text: 'The most beautiful sound I have ever heard. I never want to stop making you laugh.' },
            { icon: '🌤️', title: 'The way you see the world.', text: 'You make everything more beautiful just by being there.' },
            { icon: '🫂', title: 'Your kindness.', text: 'The way you care about everyone and everything. It makes me love you more.' }
        ],

        importantDates: [
            { icon: '❤️', event: 'First Meeting', date: '14 January 2022' },
            { icon: '🌹', event: 'First Date', date: '16 January 2022' },
            { icon: '💑', event: 'Became Official', date: '16 January 2022' },
            { icon: '✈️', event: 'First Trip — Manali', date: '20 January 2025' },
            { icon: '🎂', event: 'Her Birthday', date: '7 May 2005' },
            { icon: '🎈', event: 'His Birthday', date: '19 August 2005' },
            { icon: '🎉', event: 'Anniversary', date: '14 January Every Year' },
            { icon: '💍', event: 'Future...', date: 'To Be Continued' }
        ],

        favorites: [
            { icon: '🎵', label: 'Our Song', value: 'Kabhi Kabhi Aditi' },
            { icon: '🎬', label: 'Our Movie', value: 'Saiyaara' },
            { icon: '📍', label: 'Our Place', value: 'Your Home' },
            { icon: '🍽️', label: 'Our Food', value: 'Pani Puri & Vada Pav' },
            { icon: '✈️', label: 'Our Trip', value: 'Manali, Himachal 🏔️' },
            { icon: '😂', label: 'Inside Joke', value: 'Bitch 😂' },
            { icon: '💭', label: 'Best Memory', value: '31 Oct 2022 • YKIKYK' },
            { icon: '🌻', label: 'Our Flower', value: 'Sunflower' }
        ],

        reasons: [
            'Your smile lights up my entire world.',
            'Your kindness towards everyone you meet.',
            'Your laugh — the most beautiful sound.',
            'Your patience, even on my worst days.',
            'The way you care so deeply.',
            'How you always know just what to say.',
            'Your strength and courage.',
            'The way you make ordinary feel magical.',
            'Your soft heart and gentle soul.',
            'How you believe in me when I don\'t.',
            'The little dances you do when you\'re happy.',
            'Your passion for the things you love.',
            'How safe you make me feel.',
            'The way you say my name.',
            'Your unwavering loyalty.',
            'The way you hold my hand.',
            'Your dreams and ambitions.',
            'How you make me a better person.',
            'Your hugs when I need them most.',
            'The way you love me — all of me.',
            'Your random texts that make my day.',
            'The way you look at me.',
            'Your strength to keep going.',
            'How you never give up on us.',
            'Your silliness and playfulness.',
            'Your beautiful mind and heart.',
            'How you make mornings brighter.',
            'Your understanding and compassion.',
            'The memories we keep making.',
            'Simply because you are you.',
            'How you listen when I speak.',
            'The way you support my dreams.',
            'Your honesty and truth.',
            'How you bring out the best in me.',
            'Your determination and drive.',
            'The way you kiss my forehead.',
            'Your playful teasing.',
            'How you forgive me.',
            'Your wisdom and perspective.',
            'The quiet moments we share.',
            'How you make every place feel like home.',
            'Your thoughtfulness.',
            'The way you light up a room.',
            'Your creativity and talent.',
            'How you stand by me.',
            'The inside jokes only we get.',
            'Your warm heart.',
            'The way you challenge me to grow.',
            'Your trust in us.',
            'And a million more reasons — every single day.'
        ],

        future: [
            { icon: '✈️', title: 'Travel the World', text: 'Every corner of the earth, explored hand in hand. New places, new foods, new memories together.' },
            { icon: '🏠', title: 'Build Our Home', text: 'A place filled with laughter, love, and too many photographs. Our little piece of the world.' },
            { icon: '🐶', title: 'Get a Dog', text: 'Or maybe two. Long walks in the park, wet nose kisses, and more love than we know what to do with.' },
            { icon: '🌅', title: 'Watch More Sunsets', text: 'From every rooftop, every beach, every mountain. Hand in hand, as the sky turns pink and gold.' },
            { icon: '💍', title: 'Grow Old Together', text: 'Gray hair, wrinkles, stories that start with "remember when..." And still choosing each other, every single day.' },
            { icon: '🌱', title: 'Grow Together', text: 'Through every season — the sunny days and the rainy ones. Learning, loving, evolving, side by side.' }
        ]
    };

    // ============================================================
    //  UTILITY FUNCTIONS
    // ============================================================
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

    const pad = (n) => String(n).padStart(2, '0');

    function formatDateDisplay(dateStr) {
        if (dateStr === 'Today') return 'Today';
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return dateStr;
        const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    }

    // ============================================================
    //  LOADING SCREEN
    // ============================================================
    function initLoadingScreen() {
        const screen = $('#loading-screen');
        const progress = $('.loading-progress');
        if (!screen || !progress) return;

        let p = 0;
        const interval = setInterval(() => {
            p += Math.random() * 18 + 5;
            if (p >= 100) {
                p = 100;
                clearInterval(interval);
            }
            progress.style.width = p + '%';
        }, 120);

        window.addEventListener('load', () => {
            clearInterval(interval);
            progress.style.width = '100%';
            setTimeout(() => {
                screen.classList.add('hidden');
                setTimeout(() => screen.remove(), 900);
            }, 400);
        });

        setTimeout(() => {
            clearInterval(interval);
            progress.style.width = '100%';
            setTimeout(() => {
                screen.classList.add('hidden');
                setTimeout(() => { if (screen.parentNode) screen.remove(); }, 900);
            }, 400);
        }, 3500);
    }

    // ============================================================
    //  RELATIONSHIP COUNTERS
    // ============================================================
    function calcDuration(startISO) {
        const start = new Date(startISO);
        const now = new Date();
        const diffMs = now - start;

        let years = now.getFullYear() - start.getFullYear();
        let months = now.getMonth() - start.getMonth();
        let days = now.getDate() - start.getDate();

        if (days < 0) {
            months--;
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += prevMonth.getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        const totalSec = Math.floor(diffMs / 1000);
        const hours = Math.floor((totalSec % 86400) / 3600);
        const minutes = Math.floor((totalSec % 3600) / 60);
        const seconds = totalSec % 60;

        const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const totalMonths = years * 12 + months;

        return { years, months, days, hours, minutes, seconds, totalDays, totalMonths };
    }

    function updateCounters() {
        const d = calcDuration(coupleData.startDate);

        const hy = $('#hero-years'), hm = $('#hero-months'), hdy = $('#hero-days'),
              hh = $('#hero-hours'), hmi = $('#hero-minutes'), hs = $('#hero-seconds');
        if (hy) hy.textContent = d.years;
        if (hm) hm.textContent = d.months;
        if (hdy) hdy.textContent = d.days;
        if (hh) hh.textContent = pad(d.hours);
        if (hmi) hmi.textContent = pad(d.minutes);
        if (hs) hs.textContent = pad(d.seconds);

        const by = $('#big-years'), bm = $('#big-months'), bdy = $('#big-days'),
              bh = $('#big-hours'), bmi = $('#big-minutes'), bs = $('#big-seconds');
        if (by) by.textContent = d.years;
        if (bm) bm.textContent = d.months;
        if (bdy) bdy.textContent = d.days;
        if (bh) bh.textContent = pad(d.hours);
        if (bmi) bmi.textContent = pad(d.minutes);
        if (bs) bs.textContent = pad(d.seconds);
    }

    // ============================================================
    //  TEXT PLACEHOLDERS — inject coupleData into static elements
    // ============================================================
    function injectPlaceholders() {
        const set = (el, text) => { if (el) el.textContent = text; };

        set($('#hero-partner-name'), coupleData.partnerName);
        set($('#hero-your-name'), coupleData.yourName);
        set($('#hero-start-date'), coupleData.startDateDisplay);
        set($('#nav-names'), `${coupleData.yourName.charAt(0)} & ${coupleData.partnerName.charAt(0)}`);
        set($('#final-partner'), coupleData.partnerName);
        set($('#final-yours'), coupleData.yourName);
        set($('#final-since'), `Since ${coupleData.startDateDisplay}`);
        set($('#footer-partner'), coupleData.partnerName);
        set($('#footer-year'), String(new Date().getFullYear()));

        const greeting = coupleData.letter.greeting
            .replace('PARTNER_NAME', coupleData.partnerName);
        const signature = coupleData.letter.signature
            .replace('YOUR_NAME', coupleData.yourName);

        set($('#letter-greeting'), greeting);
        set($('#letter-signature'), signature);

        const letterBody = $('#letter-body');
        if (letterBody && Array.isArray(coupleData.letter.paragraphs)) {
            letterBody.innerHTML = coupleData.letter.paragraphs
                .map(p => `<p>${p}</p>`).join('');
        }

        const secretMsg = $('#secret-message');
        if (secretMsg) secretMsg.textContent = coupleData.secretMessage;
        if ($('.secret-signature')) $('.secret-signature').textContent = `— ${coupleData.yourName}`;

        const musicLabel = $('#music-label');
        if (musicLabel) musicLabel.textContent = coupleData.song.title;

        const bgMusic = $('#bg-music');
        if (bgMusic) {
            const src = bgMusic.querySelector('source');
            if (src) src.setAttribute('src', coupleData.song.file);
            if (bgMusic.src) bgMusic.src = coupleData.song.file;
        }
    }

    // ============================================================
    //  RENDER: TIMELINE
    // ============================================================
    function renderTimeline() {
        const container = $('#timeline-container');
        if (!container || !Array.isArray(coupleData.timeline)) return;

        container.innerHTML = coupleData.timeline.map((item, i) => {
            const imgAlt = `${item.title} — ${item.date}`;
            const imageBlock = item.image
                ? `<div class="timeline-image-wrap">
                    <img class="timeline-image"
                         src="${item.image}"
                         alt="${imgAlt}"
                         loading="lazy"
                         onerror="this.outerHTML='<div class=\\'timeline-image-placeholder\\'>Memory ❤️</div>'">
                   </div>`
                : '';
            const location = item.location
                ? `<div class="timeline-location">📍 ${item.location}</div>`
                : '';
            const quote = item.quote
                ? `<blockquote class="timeline-quote">"${item.quote}"</blockquote>`
                : '';
            return `
                <article class="timeline-item" data-index="${i}">
                    <div class="timeline-dot" aria-hidden="true"></div>
                    <div class="timeline-card">
                        <span class="timeline-date">${item.date}</span>
                        <h3 class="timeline-title">${item.title}</h3>
                        ${imageBlock}
                        ${location}
                        <p class="timeline-story">${item.story}</p>
                        ${quote}
                    </div>
                </article>
            `;
        }).join('');
    }

    // ============================================================
    //  RENDER: GALLERY + LIGHTBOX
    // ============================================================
    let galleryIndex = 0;
    let galleryItems = [];

    function renderGallery() {
        const grid = $('#gallery-grid');
        if (!grid || !Array.isArray(coupleData.gallery)) return;
        galleryItems = coupleData.gallery.slice();

        grid.innerHTML = galleryItems.map((g, i) => {
            const caption = g.caption || 'Our memory';
            const date = g.date || '';
            const location = g.location || '';
            const meta = [date, location].filter(Boolean).join(' · ');
            return `
                <figure class="gallery-item" data-index="${i}" role="button" tabindex="0" aria-label="Open photo: ${caption}">
                    <div class="gallery-item-img-wrap">
                        <img class="gallery-item-img"
                             src="${g.image}"
                             alt="${caption}"
                             loading="lazy"
                             onerror="this.outerHTML='<div class=\\'gallery-item-placeholder\\'>Photo ❤️</div>'">
                        <div class="gallery-item-overlay">
                            <figcaption class="gallery-item-title">${caption}</figcaption>
                            ${meta ? `<p class="gallery-item-meta">${meta}</p>` : ''}
                        </div>
                    </div>
                </figure>
            `;
        }).join('');

        grid.addEventListener('click', (e) => {
            const item = e.target.closest('.gallery-item');
            if (!item) return;
            const idx = parseInt(item.dataset.index, 10);
            if (!isNaN(idx)) openLightbox(idx);
        });

        grid.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const item = e.target.closest('.gallery-item');
                if (item) {
                    e.preventDefault();
                    const idx = parseInt(item.dataset.index, 10);
                    if (!isNaN(idx)) openLightbox(idx);
                }
            }
        });
    }

    function openLightbox(idx) {
        galleryIndex = idx;
        updateLightboxImage();
        const lb = $('#lightbox');
        if (lb) {
            lb.classList.add('open');
            lb.setAttribute('aria-hidden', 'false');
            document.body.classList.add('no-scroll');
        }
    }

    function closeLightbox() {
        const lb = $('#lightbox');
        if (lb) {
            lb.classList.remove('open');
            lb.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('no-scroll');
        }
    }

    function navigateLightbox(dir) {
        if (!galleryItems.length) return;
        galleryIndex = (galleryIndex + dir + galleryItems.length) % galleryItems.length;
        updateLightboxImage();
    }

    function updateLightboxImage() {
        const item = galleryItems[galleryIndex];
        if (!item) return;
        const img = $('#lightbox-img');
        const captionText = $('#lightbox-caption-text');
        const captionMeta = $('#lightbox-caption-meta');
        if (img) {
            img.style.opacity = '0';
            img.setAttribute('src', item.image);
            img.setAttribute('alt', item.caption || 'Memory');
            img.onload = () => { img.style.transition = 'opacity .3s ease-out'; img.style.opacity = '1'; };
            img.onerror = () => {
                img.src = "data:image/svg+xml," + encodeURIComponent(`
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'>
                        <rect width='100%' height='100%' fill='%23f5d5dc'/>
                        <text x='50%' y='50%' font-family='Cormorant Garamond, serif' font-size='32' fill='%235a1a2f' text-anchor='middle' dominant-baseline='middle'>Memory ❤️</text>
                    </svg>`);
                img.style.opacity = '1';
            };
        }
        if (captionText) captionText.textContent = item.caption || '';
        if (captionMeta) {
            const meta = [item.date, item.location].filter(Boolean).join(' · ');
            captionMeta.textContent = meta;
        }
    }

    function initLightboxUI() {
        const close = $('#lightbox-close');
        const prev = $('#lightbox-prev');
        const next = $('#lightbox-next');
        if (close) close.addEventListener('click', closeLightbox);
        if (prev) prev.addEventListener('click', () => navigateLightbox(-1));
        if (next) next.addEventListener('click', () => navigateLightbox(1));

        document.addEventListener('keydown', (e) => {
            const lb = $('#lightbox');
            if (!lb || !lb.classList.contains('open')) return;
            if (e.key === 'Escape') closeLightbox();
            else if (e.key === 'ArrowLeft') navigateLightbox(-1);
            else if (e.key === 'ArrowRight') navigateLightbox(1);
        });

        const lb = $('#lightbox');
        if (lb) {
            lb.addEventListener('click', (e) => {
                if (e.target.id === 'lightbox') closeLightbox();
            });
        }
    }

    // ============================================================
    //  RENDER: Little Things, Important Dates, Favorites, Future
    // ============================================================
    function renderLittleThings() {
        const c = $('#little-things-container');
        if (!c || !Array.isArray(coupleData.littleThings)) return;
        c.innerHTML = coupleData.littleThings.map(t => `
            <div class="little-card">
                <div class="little-card-icon">${t.icon}</div>
                <h3 class="little-card-title">${t.title}</h3>
                <p class="little-card-text">${t.text}</p>
            </div>
        `).join('');
    }

    function renderImportantDates() {
        const c = $('#dates-grid');
        if (!c || !Array.isArray(coupleData.importantDates)) return;
        c.innerHTML = coupleData.importantDates.map(d => `
            <div class="date-card">
                <span class="date-card-icon">${d.icon}</span>
                <h3 class="date-card-event">${d.event}</h3>
                <p class="date-card-date">${d.date}</p>
            </div>
        `).join('');
    }

    function renderFavorites() {
        const c = $('#favorites-grid');
        if (!c || !Array.isArray(coupleData.favorites)) return;
        c.innerHTML = coupleData.favorites.map(f => `
            <div class="favorite-card">
                <div class="favorite-icon">${f.icon}</div>
                <span class="favorite-label">${f.label}</span>
                <p class="favorite-value">${f.value}</p>
            </div>
        `).join('');
    }

    function renderFuture() {
        const c = $('#future-grid');
        if (!c || !Array.isArray(coupleData.future)) return;
        c.innerHTML = coupleData.future.map(f => `
            <div class="future-card">
                <span class="future-card-icon">${f.icon}</span>
                <h3 class="future-card-title">${f.title}</h3>
                <p class="future-card-text">${f.text}</p>
            </div>
        `).join('');
    }

    // ============================================================
    //  REASONS — interactive "Show me another"
    // ============================================================
    let reasonsIndex = 0;

    function initReasons() {
        const card = $('#reasons-card');
        const numEl = $('#reasons-number');
        const txtEl = $('#reasons-text');
        const btn = $('#reasons-btn');
        if (!card || !numEl || !txtEl || !btn || !Array.isArray(coupleData.reasons) || !coupleData.reasons.length) return;

        reasonsIndex = 0;
        showReason(numEl, txtEl);

        btn.addEventListener('click', () => {
            reasonsIndex = (reasonsIndex + 1) % coupleData.reasons.length;
            card.classList.remove('flip');
            void card.offsetWidth;
            card.classList.add('flip');
            setTimeout(() => showReason(numEl, txtEl), 300);
        });
    }

    function showReason(numEl, txtEl) {
        const total = coupleData.reasons.length;
        numEl.textContent = pad(reasonsIndex + 1);
        txtEl.textContent = coupleData.reasons[reasonsIndex];
    }

    // ============================================================
    //  LETTER MODAL
    // ============================================================
    function initLetter() {
        const modal = $('#letter-modal');
        const openBtn = $('#open-letter-btn');
        const closeBtn = $('#close-letter-btn');
        const overlay = $('#letter-overlay');
        if (!modal || !openBtn) return;

        const open = () => {
            modal.classList.add('open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('no-scroll');
            setTimeout(() => {
                const paper = $('.letter-paper');
                if (paper) paper.scrollTop = 0;
            }, 500);
        };
        const close = () => {
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('no-scroll');
        };

        openBtn.addEventListener('click', open);
        if (closeBtn) closeBtn.addEventListener('click', close);
        if (overlay) overlay.addEventListener('click', close);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('open')) close();
        });
    }

    // ============================================================
    //  MUSIC TOGGLE
    // ============================================================
    function initMusic() {
        const btn = $('#music-toggle');
        const icon = $('#music-icon');
        const audio = $('#bg-music');
        if (!btn || !audio) return;

        const MUSIC_KEY = 'loveStory.musicPlaying';

        const setPlayingState = (playing) => {
            if (playing) {
                btn.classList.add('playing');
                btn.setAttribute('aria-pressed', 'true');
                if (icon) icon.textContent = '🎶';
            } else {
                btn.classList.remove('playing');
                btn.setAttribute('aria-pressed', 'false');
                if (icon) icon.textContent = '🎵';
            }
        };

        audio.volume = 0.5;

        try {
            const saved = localStorage.getItem(MUSIC_KEY);
            if (saved === 'true') {
                const p = audio.play();
                if (p && typeof p.catch === 'function') {
                    p.catch(() => setPlayingState(false));
                }
            }
        } catch (e) {}

        btn.addEventListener('click', () => {
            if (audio.paused) {
                const p = audio.play();
                if (p && typeof p.then === 'function') {
                    p.then(() => {
                        setPlayingState(true);
                        try { localStorage.setItem(MUSIC_KEY, 'true'); } catch (e) {}
                    }).catch(() => setPlayingState(false));
                } else {
                    setPlayingState(true);
                    try { localStorage.setItem(MUSIC_KEY, 'true'); } catch (e) {}
                }
            } else {
                audio.pause();
                setPlayingState(false);
                try { localStorage.setItem(MUSIC_KEY, 'false'); } catch (e) {}
            }
        });

        audio.addEventListener('play', () => setPlayingState(true));
        audio.addEventListener('pause', () => setPlayingState(false));
    }

    // ============================================================
    //  SECRET MESSAGE MODAL
    // ============================================================
    function initSecret() {
        const heart = $('#secret-heart');
        const modal = $('#secret-modal');
        const overlay = $('#secret-overlay');
        const close = $('#secret-close');
        if (!heart || !modal) return;

        const open = () => {
            modal.classList.add('open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('no-scroll');
        };
        const closeIt = () => {
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('no-scroll');
        };

        heart.addEventListener('click', open);
        if (overlay) overlay.addEventListener('click', closeIt);
        if (close) close.addEventListener('click', closeIt);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('open')) closeIt();
        });
    }

    // ============================================================
    //  NAVIGATION
    // ============================================================
    function initNavigation() {
        const navbar = $('#navbar');
        const toggle = $('#nav-toggle');
        const menu = $('#nav-menu');
        const links = $$('.nav-link');

        if (navbar) {
            const onScroll = () => {
                if (window.scrollY > 40) navbar.classList.add('scrolled');
                else navbar.classList.remove('scrolled');

                const scrollPos = window.scrollY + 120;
                let current = 'home';
                $$('section[id]').forEach(sec => {
                    const top = sec.offsetTop;
                    const height = sec.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        current = sec.id;
                    }
                });
                links.forEach(l => {
                    const href = l.getAttribute('href') || '';
                    l.classList.toggle('active', href === `#${current}`);
                });
            };
            window.addEventListener('scroll', onScroll, { passive: true });
            onScroll();
        }

        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                const open = menu.classList.toggle('open');
                toggle.classList.toggle('open', open);
                toggle.setAttribute('aria-expanded', String(open));
            });

            links.forEach(link => {
                link.addEventListener('click', () => {
                    if (window.matchMedia('(max-width: 768px)').matches) {
                        menu.classList.remove('open');
                        toggle.classList.remove('open');
                        toggle.setAttribute('aria-expanded', 'false');
                    }
                });
            });
        }

        $$('a[href^="#"]').forEach(a => {
            a.addEventListener('click', (e) => {
                const id = a.getAttribute('href');
                if (!id || id === '#') return;
                const target = $(id);
                if (!target) return;
                e.preventDefault();
                const navH = (navbar ? navbar.offsetHeight : 72);
                const top = target.getBoundingClientRect().top + window.scrollY - navH + 1;
                window.scrollTo({ top, behavior: 'smooth' });
            });
        });
    }

    // ============================================================
    //  SCROLL REVEAL ANIMATIONS (IntersectionObserver)
    // ============================================================
    function initScrollAnimations() {
        const targets = $$('.reveal-on-scroll, .timeline-item, .gallery-item, .little-card, .date-card, .favorite-card, .future-card');

        const opts = { threshold: 0.12, rootMargin: '0px 0px -60px 0px' };

        if (!('IntersectionObserver' in window)) {
            targets.forEach(t => t.classList.add('visible'));
            return;
        }

        const io = new IntersectionObserver((entries) => {
            entries.forEach(en => {
                if (en.isIntersecting) {
                    const target = en.target;
                    const delay = parseInt(target.dataset.delay || '0', 10);
                    setTimeout(() => target.classList.add('visible'), delay);
                    io.unobserve(target);
                }
            });
        }, opts);

        targets.forEach((t, i) => {
            if (!t.dataset.delay && (t.classList.contains('timeline-item') ||
                t.classList.contains('gallery-item') ||
                t.classList.contains('little-card') ||
                t.classList.contains('date-card') ||
                t.classList.contains('favorite-card') ||
                t.classList.contains('future-card'))) {
                const siblingIdx = Array.prototype.indexOf.call(t.parentNode.children, t);
                t.style.transitionDelay = `${(siblingIdx % 6) * 80}ms`;
            }
            io.observe(t);
        });
    }

    // ============================================================
    //  HERO PARTICLES (floating hearts)
    // ============================================================
    function initHeroParticles() {
        const container = $('#hero-particles');
        if (!container) return;

        const chars = ['❤', '✦', '·', '❤'];
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const count = reduced ? 4 : 12;

        for (let i = 0; i < count; i++) {
            const p = document.createElement('span');
            p.className = 'hero-particle';
            p.textContent = chars[Math.floor(Math.random() * chars.length)];
            const size = 10 + Math.random() * 14;
            p.style.fontSize = size + 'px';
            p.style.left = Math.random() * 100 + '%';
            p.style.top = Math.random() * 100 + '%';
            const dur = 18 + Math.random() * 24;
            p.style.animationDuration = dur + 's';
            p.style.animationDelay = -Math.random() * dur + 's';
            const colors = ['rgba(90,26,47,0.45)', 'rgba(201,169,98,0.35)', 'rgba(232,180,188,0.5)'];
            p.style.color = colors[Math.floor(Math.random() * colors.length)];
            container.appendChild(p);
        }
    }

    // ============================================================
    //  CLICK HEARTS (click anywhere for floating heart)
    // ============================================================
    function initClickHearts() {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) return;

        const hearts = ['❤', '💗', '💕', '💖'];
        let lastSpawn = 0;

        document.addEventListener('click', (e) => {
            if (e.target.closest('button, a, .nav-toggle, input, textarea, select')) return;
            if (e.target.closest('[role="button"]')) return;

            const now = Date.now();
            if (now - lastSpawn < 80) return;
            lastSpawn = now;

            const h = document.createElement('span');
            h.className = 'click-heart';
            h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            const size = 16 + Math.floor(Math.random() * 16);
            h.style.fontSize = size + 'px';
            h.style.left = e.clientX + 'px';
            h.style.top = e.clientY + 'px';
            const hue = Math.floor(Math.random() * 20);
            h.style.color = `hsl(${340 + hue}, 55%, ${55 + Math.random() * 10}%)`;
            document.body.appendChild(h);
            setTimeout(() => h.remove(), 1300);
        });
    }

    // ============================================================
    //  CUSTOM CURSOR (desktop only)
    // ============================================================
    function initCustomCursor() {
        const dot = $('#cursor-dot');
        const ring = $('#cursor-ring');
        if (!dot || !ring) return;

        const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (isTouch || reduced) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX, ringY = mouseY;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        });

        function animateRing() {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
            requestAnimationFrame(animateRing);
        }
        animateRing();

        const updateHover = () => {
            const over = document.elementFromPoint(mouseX, mouseY);
            const interactive = over && over.closest('button, a, [role="button"], .gallery-item, .timeline-card, .little-card, .date-card, .favorite-card, .future-card, input, textarea, select, [tabindex]');
            ring.classList.toggle('hover', !!interactive);
        };

        document.addEventListener('mousemove', updateHover, { passive: true });
        document.addEventListener('mouseleave', () => {
            dot.style.opacity = '0';
            ring.style.opacity = '0';
        });
        document.addEventListener('mouseenter', () => {
            dot.style.opacity = '1';
            ring.style.opacity = '0.5';
        });
    }

    // ============================================================
    //  BOOTSTRAP
    // ============================================================
    function init() {
        injectPlaceholders();
        renderTimeline();
        renderGallery();
        renderLittleThings();
        renderImportantDates();
        renderFavorites();
        renderFuture();

        initLoadingScreen();
        initNavigation();
        initLightboxUI();
        initReasons();
        initLetter();
        initMusic();
        initSecret();
        initHeroParticles();
        initClickHearts();
        initCustomCursor();
        initScrollAnimations();

        updateCounters();
        setInterval(updateCounters, 1000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
