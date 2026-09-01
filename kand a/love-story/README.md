# Our Story ❤️ — Personal Relationship Website

A beautiful, cinematic, fully static digital love story built with **pure HTML5, CSS3, and Vanilla JavaScript** — no frameworks, no libraries, no build step.

Deploy it directly to **GitHub Pages, Netlify, Vercel, or any static web server**.

---

## ✨ Features

- 🎬 **Hero Section** with live relationship counter (years, months, days, hours, minutes, seconds)
- 📖 **Vertical Timeline** with animated scroll-in milestones (dates, stories, photos, quotes, locations)
- 🖼️ **Masonry Photo Gallery** with custom fullscreen lightbox, keyboard navigation (Esc / ← / →)
- 💝 **"Little Things I Love About Us"** interactive cards
- ⏱️ **Big Anniversary Counter** section — updates every second
- 📅 **Important Dates** cards (meetings, birthdays, anniversaries, proposal…)
- ⭐ **Our Favorites** section (song, movie, place, food, trip, joke, memory, flower)
- 💌 **Cinematic Love Letter** with envelope-open interaction & modal
- 🎵 **Background Music** toggle with localStorage preference
- 💕 **Interactive Click Hearts** — tap/click anywhere for floating hearts
- 🔐 **Secret Message** hidden in a tiny corner heart
- 🔢 **Reasons Why I Love You** — "Show me another" interactive generator
- 🔮 **Our Future** dreams cards (travel, home, pets, growing old…)
- 🎞️ **Final Cinematic Section** with animated heart
- 📱 **Fully Responsive** (mobile 360px → desktop 1920px+)
- 🧭 **Sticky Navigation** with mobile hamburger menu & smooth scroll
- ⚡ **Performance**: lazy-loaded images, CSS animations, IntersectionObserver
- ♿ **Accessible**: semantic HTML, ARIA labels, keyboard nav, `prefers-reduced-motion`
- 🌈 **Premium UI**: glassmorphism, soft gradients, floating particles, glow effects, tasteful animations
- 🖱️ **Custom Cursor** effect on desktop

---

## 📁 Project Structure

```
love-story/
├── index.html          ← All sections, navigation, meta tags
├── style.css           ← Complete styling + animations + responsive
├── script.js           ← Configuration + ALL logic (single file)
│
└── assets/
    ├── images/         ← Put your personal photos here
    │   ├── hero.jpg
    │   ├── memory1.jpg
    │   ├── meeting.jpg
    │   └── ...
    │
    ├── music/
    │   └── our-song.mp3   ← Put your song file here
    │
    └── icons/          (optional: not required, uses Unicode/SVG)
```

---

## 🚀 How to Run Locally

Just open `index.html` in your browser, or use any simple static server:

```bash
# Option 1 — Python
python -m http.server 8000

# Option 2 — Node (if you have it)
npx serve .
```

Then visit `http://localhost:8000` (or `love-story/` sub-folder depending on where you run it).

---

## 🎨 Personalization Guide

### 1️⃣ Edit ONE configuration object

Open **`script.js`** and find the `coupleData` object near the top (around line 9).

**Everything** is driven from this object — you won't need to edit the HTML or CSS unless you want deeper design changes.

```js
const coupleData = {
    yourName: 'YOUR_NAME',
    partnerName: 'PARTNER_NAME',
    startDate: '2024-03-12',          // ISO format YYYY-MM-DD
    startDateDisplay: '12 March 2024',// Human readable
    // ... and everything else below
};
```

---

### 2️⃣ Change Names & Start Date

```js
yourName: 'Alex',
partnerName: 'Jordan',
startDate: '2023-06-18',              // For the counter (YYYY-MM-DD)
startDateDisplay: '18 June 2023',     // Displayed on the site
```

---

### 3️⃣ Add Your Photos

1. Drop your images into **`assets/images/`**
2. Reference their filenames inside the `coupleData` arrays:

#### Timeline photos
```js
timeline: [
    {
        date: '18 June 2023',
        title: 'The Day We Met',
        story: 'I saw you across the room...',
        image: 'assets/images/our-meeting.jpg',   // ← your photo
        location: 'The Coffee Shop, Paris',
        quote: 'And everything changed.'
    },
    // ... add as many as you want
]
```

#### Gallery photos
```js
gallery: [
    { image: 'assets/images/date1.jpg', date: '18 June 2023', location: 'Paris', caption: 'First glance' },
    { image: 'assets/images/beach.jpg', date: '22 July 2023',  location: 'Nice',  caption: 'Our beach day'  },
    // ... add all your favorite memories
]
```

> 💡 If an image fails to load, a soft **"Memory ❤️"** placeholder appears automatically so the site never looks broken.

---

### 4️⃣ Add Your Music

1. Put an MP3 file into **`assets/music/our-song.mp3`** (or any filename)
2. Update the reference in `coupleData`:

```js
song: {
    title: 'Can\'t Help Falling in Love',
    file: 'assets/music/our-song.mp3'   // ← your file
}
```

The music button appears at the bottom-right. Users must **click to play** (no autoplay — browsers block it anyway). Their choice is remembered in `localStorage`.

---

### 5️⃣ Write Your Timeline Stories

Edit the **`timeline`** array. Each milestone supports:

| Field        | Type     | Required? | Description                                      |
|--------------|----------|-----------|--------------------------------------------------|
| `date`       | string   | ✅         | e.g. `'18 June 2023'`                            |
| `title`      | string   | ✅         | Milestone headline                               |
| `story`      | string   | ✅         | 1–3 sentences about that moment                  |
| `image`      | string   | 🟡 optional | Path to photo, e.g. `'assets/images/x.jpg'`    |
| `location`   | string   | 🟡 optional | Where it happened                                |
| `quote`      | string   | 🟡 optional | Short italic quote at the bottom                 |

---

### 6️⃣ Edit "Little Things I Love About Us"

```js
littleThings: [
    { icon: '😊', title: 'The way you smile.', text: "Best part of my day." },
    { icon: '🌙', title: 'Our late-night talks.', text: 'Sleep can wait.' },
    // Add / remove — layout is fully responsive (auto grid)
]
```

Any emoji works as the icon.

---

### 7️⃣ Edit "Important Dates"

```js
importantDates: [
    { icon: '❤️', event: 'First Meeting',  date: '18 June 2023' },
    { icon: '💍',  event: 'The Proposal',  date: '24 December 2024' },
    { icon: '🎂',  event: 'Jordan\'s Birthday', date: '03 April 1998' },
    // ...
]
```

---

### 8️⃣ Edit "Our Favorites"

```js
favorites: [
    { icon: '🎵', label: 'Our Song',   value: 'Can\'t Help Falling in Love' },
    { icon: '🎬', label: 'Our Movie',  value: 'La La Land' },
    { icon: '📍', label: 'Our Place',  value: 'That little Italian spot' },
    // ...
]
```

---

### 9️⃣ Customize the Love Letter

Edit **both** the display (in case the config isn't used) AND the config object:

The clean way:
```js
letter: {
    greeting: 'My Dearest Jordan,',
    signature: 'Alex ❤️',
    paragraphs: [
        "Write your own heartfelt paragraphs here...",
        "Second paragraph...",
        "One paragraph per array item."
    ]
}
```

Or you can also edit the HTML fallback in `index.html` inside `#letter-body` (the JS config overwrites it anyway).

---

### 🔟 Add 50+ "Reasons Why I Love You"

Just keep adding strings to the `reasons` array:

```js
reasons: [
    'Your smile.',
    'Your laugh.',
    'The way you care.',
    // 50 pre-loaded reasons included — replace with your own!
]
```

The **"Show Me Another ❤️"** button cycles through them with a flip animation.

---

### 1️⃣1️⃣ Your Future Dreams

```js
future: [
    { icon: '✈️', title: 'Travel Japan', text: 'Kyoto in cherry-blossom season.' },
    { icon: '🏠',  title: 'Lake House',  text: 'A porch, a dog, and quiet mornings.' },
    // ...
]
```

---

### 1️⃣2️⃣ Secret Message 💌

The tiny heart at the bottom-left opens a secret modal. Edit the message:

```js
secretMessage: "Put your private message here. Only the two of you will know to click that little corner heart ❤️",
```

---

## 🎨 Want to Change Colors / Design?

Open **`style.css`** and find the CSS variables at the top:

```css
:root {
    --burgundy: #5a1a2f;        /* Primary deep wine */
    --burgundy-deep: #3d0f1f;   /* Darker shade */
    --burgundy-light: #7a2a45;  /* Lighter shade */
    --blush: #f5d5dc;           /* Soft pink */
    --cream: #fdf8f5;           /* Warm cream background */
    --white: #ffffff;
    --charcoal: #2a2528;        /* Main text */
    --gold: #c9a962;            /* Accent gold */
    /* ...plus shadow, radius, and easing variables */
}
```

Change these values and the entire site re-themes automatically.

---

## 🌍 Deploy

### GitHub Pages
1. Push the `love-story/` folder (or its contents) to a repo
2. Settings → Pages → Source: `main` branch, `/` (root)
3. Your site goes live at `https://your-username.github.io/repo-name/`

### Netlify / Vercel
- **Drag-and-drop** the entire `love-story` folder into their dashboard, OR
- Connect a Git repo — no build command needed (it's already static!)
- Set **publish directory** to the project root.

---

## ⌨️ Keyboard Shortcuts (Lightbox)

| Key            | Action             |
|----------------|--------------------|
| `Esc`          | Close lightbox/modal |
| `←` / `→`      | Previous / Next photo |
| `Enter` / `Space` on gallery item | Open lightbox |

---

## 🤝 Accessibility & Performance

- ✅ Semantic `<section>`, `<nav>`, `<article>`, `<figure>`, `<footer>`
- ✅ All buttons are real `<button>` elements with `aria-label`
- ✅ `aria-hidden`, `aria-modal`, `aria-expanded` where appropriate
- ✅ Visible focus-visible outlines
- ✅ Lightbox + modals support Escape key
- ✅ Respects `prefers-reduced-motion` (disables animations for users who opt out)
- ✅ All images have alt text + lazy loading + broken-image fallback placeholders
- ✅ CSS-only animations where possible; `transform` / `opacity` only (GPU-accelerated)
- ✅ No external JS dependencies; font preconnects for Google Fonts

---

## 🧰 Tips for an Even More Personal Touch

- 🎥 Add a hero background video — replace `.hero-background > .gradient-layer` with a `<video muted loop playsinline>` and an image poster for mobile.
- ✍️ Switch the timeline title order — add future milestones like "The Wedding" or "Baby Shower".
- 🎶 Add a second song + a mini playlist by extending the music logic in `initMusic()`.
- 📍 Add an interactive map embed (if both of you want it) inside a timeline milestone card.
- 💍 Add countdowns — duplicate the counter logic but point to a future date (e.g. wedding day).

---

Made with ❤️ for two people. Enjoy your story.
