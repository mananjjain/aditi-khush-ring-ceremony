/**
 * Aria & Ethan – Ring Ceremony Invitation Website Script
 * Fully custom, vanilla JS, high performance.
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- STATE MANAGEMENT ---
    let musicStarted = false;
    const MUSIC_START_TIME = 141; // 2 minutes 21 seconds = 141 seconds
    
    // --- DOM ELEMENTS ---
    const splashScreen = document.getElementById("splash-screen");
    const openEnvelopeBtn = document.getElementById("open-envelope-btn");
    const envelope = document.querySelector(".envelope");
    const mainContent = document.getElementById("main-content");
    
    const musicPlayer = document.getElementById("music-player");
    const musicToggle = document.getElementById("music-toggle");
    const bgAudio = document.getElementById("bg-audio");
    const volumeSlider = document.getElementById("volume-slider");
    
    const copyZoomBtn = document.getElementById("copy-zoom-link");
    const copyToast = document.getElementById("copy-toast");

    
    // --- SPLASH & ENVELOPE CONTROLS ---
    openEnvelopeBtn.addEventListener("click", () => {
        // Step 1: Open the envelope flap
        envelope.classList.add("open");
        
        // Start music on first interaction
        startMusic();
        
        // Step 2: Slide paper up, then fade out splash screen and reveal page content
        setTimeout(() => {
            splashScreen.classList.add("fade-out");
            mainContent.classList.add("visible");
            musicPlayer.classList.remove("hidden");
            
            // Trigger GSAP entry animations for Hero
            initHeroAnimations();
        }, 1500);
    });

    // --- MUSIC SYSTEM (LOCAL AUDIO FROM 2:21) ---
    let canSeek = false;

    bgAudio.addEventListener('loadedmetadata', () => {
        canSeek = true;
    });

    bgAudio.addEventListener('canplay', () => {
        canSeek = true;
    });

    function playAtStart() {
        bgAudio.volume = parseFloat(volumeSlider.value);

        try {
            if (canSeek && (bgAudio.currentTime < MUSIC_START_TIME - 1 || bgAudio.ended || bgAudio.currentTime >= bgAudio.duration - 1)) {
                bgAudio.currentTime = MUSIC_START_TIME;
            }
        } catch (e) {
            // Ignore seek errors until metadata is ready.
        }

        bgAudio.play().then(() => {
            musicToggle.classList.add('playing');
        }).catch(() => {
            musicToggle.classList.remove('playing');
        });
    }

    function startMusic() {
        if (musicStarted) return;
        musicStarted = true;

        try {
            bgAudio.load();
        } catch (e) {}

        bgAudio.volume = parseFloat(volumeSlider.value);

        if (canSeek) {
            playAtStart();
        } else {
            bgAudio.addEventListener('loadedmetadata', function onceReady() {
                bgAudio.removeEventListener('loadedmetadata', onceReady);
                playAtStart();
            });

            setTimeout(playAtStart, 500);
        }
    }

    function toggleMusic() {
        if (!musicStarted) {
            startMusic();
            return;
        }

        if (bgAudio.paused || bgAudio.ended) {
            playAtStart();
        } else {
            bgAudio.pause();
            musicToggle.classList.remove('playing');
        }
    }

    musicToggle.addEventListener('click', toggleMusic);

    volumeSlider.addEventListener('input', (e) => {
        try {
            bgAudio.volume = parseFloat(e.target.value);
        } catch (e) {}
    });

    bgAudio.addEventListener('ended', () => {
        try {
            bgAudio.currentTime = MUSIC_START_TIME;
        } catch (e) {}
        bgAudio.play().catch(() => {});
    });

    document.body.addEventListener('click', function firstAnyClick() {
        try {
            bgAudio.load();
            bgAudio.volume = parseFloat(volumeSlider.value);
        } catch (e) {}

        if (musicStarted && bgAudio.paused) {
            playAtStart();
        }

        document.body.removeEventListener('click', firstAnyClick);
    }, { once: true });

    // --- CANVAS BACKGROUND ANIMATION SYSTEM (PETALS & SPARKLES) ---
    function setupCanvas(canvasId, isSplash = false) {
        const canvas = document.getElementById(canvasId);
        const ctx = canvas.getContext("2d");
        
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        
        window.addEventListener("resize", () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });
        
        const particles = [];
        const maxParticles = isSplash ? 35 : 60;
        
        // Petal/Sparkle properties
        class Particle {
            constructor() {
                this.reset();
                this.y = Math.random() * height; // Distribute initially
            }
            
            reset() {
                this.type = Math.random() > 0.4 ? 'petal' : 'sparkle';
                this.x = Math.random() * width;
                this.y = -20;
                this.size = Math.random() * 8 + 4;
                this.speedY = Math.random() * 0.8 + 0.5;
                this.speedX = Math.random() * 0.6 - 0.3;
                this.opacity = Math.random() * 0.5 + 0.3;
                this.angle = Math.random() * 360;
                this.spinSpeed = Math.random() * 1.5 - 0.75;
                // Soft colors
                this.color = this.type === 'petal' 
                    ? `rgba(255, ${Math.floor(Math.random() * 30 + 190)}, ${Math.floor(Math.random() * 20 + 200)}, ${this.opacity})` // soft pink/rose
                    : `rgba(212, 175, 55, ${this.opacity})`; // gold
            }
            
            update(mouse) {
                this.y += this.speedY;
                this.x += this.speedX;
                this.angle += this.spinSpeed;
                
                // Mouse interaction (drifting away slightly)
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 180) {
                        const force = (180 - dist) / 180;
                        this.x += (dx / dist) * force * 1.5;
                    }
                }
                
                // Reset if offscreen
                if (this.y > height + 20 || this.x < -20 || this.x > width + 20) {
                    this.reset();
                }
            }
            
            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle * Math.PI / 180);
                
                if (this.type === 'petal') {
                    // Draw a lovely stylized petal shape
                    ctx.beginPath();
                    ctx.ellipse(0, 0, this.size, this.size * 0.6, 0, 0, Math.PI * 2);
                    ctx.fillStyle = this.color;
                    ctx.fill();
                    
                    // Center fold line
                    ctx.beginPath();
                    ctx.moveTo(-this.size, 0);
                    ctx.lineTo(this.size, 0);
                    ctx.strokeStyle = "rgba(255,255,255,0.35)";
                    ctx.lineWidth = 1;
                    ctx.stroke();
                } else {
                    // Draw a sparkling star/diamond shape
                    ctx.beginPath();
                    ctx.moveTo(0, -this.size);
                    ctx.lineTo(this.size * 0.4, 0);
                    ctx.lineTo(0, this.size);
                    ctx.lineTo(-this.size * 0.4, 0);
                    ctx.closePath();
                    
                    // Sparkle glow
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = "rgba(212, 175, 55, 0.8)";
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
                
                ctx.restore();
            }
        }
        
        // Track mouse coords
        const mouse = { x: null, y: null };
        window.addEventListener("mousemove", (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        window.addEventListener("mouseleave", () => {
            mouse.x = null;
            mouse.y = null;
        });
        
        // Initial build
        for (let i = 0; i < maxParticles; i++) {
            particles.push(new Particle());
        }
        
        // Loop
        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update(mouse);
                particles[i].draw();
            }
            
            requestAnimationFrame(animate);
        }
        animate();
    }
    
    // Init both canvases
    setupCanvas("splash-canvas", true);
    setupCanvas("ambient-canvas", false);

    // --- GSAP INTRO ANIMATIONS FOR HERO ---
    function initHeroAnimations() {
        // Split names or reveal elements
        gsap.from(".crest-container", {
            opacity: 0,
            scale: 0.5,
            rotation: -90,
            duration: 1.8,
            ease: "elastic.out(1, 0.5)"
        });
        
        gsap.from(".couple-names", {
            opacity: 0,
            y: 50,
            duration: 1.5,
            delay: 0.4,
            ease: "power4.out"
        });
        
        gsap.from(".hero-subtitle", {
            opacity: 0,
            y: 30,
            duration: 1.2,
            delay: 0.8,
            ease: "power3.out"
        });
        
        gsap.from(".hero-scroll-indicator", {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 1.4,
            ease: "power2.out"
        });
        
        // Sparkle layers subtle parallax
        gsap.from(".illustration-frame", {
            opacity: 0,
            scale: 0.95,
            rotation: 1,
            duration: 2,
            delay: 1,
            ease: "power3.out"
        });
    }

    // --- COUNTDOWN TIMER ---
    function initCountdown() {
        // Set date: 19 September 2026, 17:00 BST (UTC+1)
        const targetDate = new Date("September 19, 2026 17:00:00").getTime();
        
        const daysVal = document.querySelector("#days-card .number");
        const hoursVal = document.querySelector("#hours-card .number");
        const minutesVal = document.querySelector("#minutes-card .number");
        const secondsVal = document.querySelector("#seconds-card .number");
        const finishedMsg = document.getElementById("countdown-finished-msg");
        const countdownContainer = document.querySelector(".countdown-container");
        
        function updateClock() {
            const now = new Date().getTime();
            const distance = targetDate - now;
            
            if (distance < 0) {
                clearInterval(clockInterval);
                countdownContainer.classList.add("hidden");
                finishedMsg.classList.remove("hidden");
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Format leading zeroes
            daysVal.textContent = days < 10 ? "0" + days : days;
            hoursVal.textContent = hours < 10 ? "0" + hours : hours;
            minutesVal.textContent = minutes < 10 ? "0" + minutes : minutes;
            secondsVal.textContent = seconds < 10 ? "0" + seconds : seconds;
        }
        
        updateClock();
        const clockInterval = setInterval(updateClock, 1000);
    }
    initCountdown();

    // --- SCROLL REVEAL (INTERSECTION OBSERVER) ---
    const revealElements = document.querySelectorAll(".animate-scroll-up, .timeline-item");
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(elem => {
        revealObserver.observe(elem);
    });



    // --- COPY BUTTONS (Address & Google Meet link) ---
    function setupCopyButton(btnId, toastId) {
        const btn = document.getElementById(btnId);
        const toast = document.getElementById(toastId);
        if (!btn || !toast) return;
        btn.addEventListener("click", () => {
            const text = btn.getAttribute("data-link");
            navigator.clipboard.writeText(text).then(() => {
                toast.classList.add("show");
                setTimeout(() => toast.classList.remove("show"), 2000);
            }).catch(err => {
                console.error("Could not copy: ", err);
            });
        });
    }

    setupCopyButton("copy-zoom-link", "copy-toast");
    setupCopyButton("copy-meet-link", "copy-toast");


    // --- BUTTON RIPPLE EFFECT ---
    const rippleButtons = document.querySelectorAll(".ripple-btn, .gold-btn");
    rippleButtons.forEach(btn => {
        btn.addEventListener("click", function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement("span");
            ripple.classList.add("ripple-effect");
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

});
