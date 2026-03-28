# Umang Mavani — Portfolio

Personal portfolio website showcasing 5+ years of software engineering experience across full-stack, backend, and cloud-native development.

**Live:** [umang3797.github.io/myportfolio](https://umang3797.github.io/myportfolio) (if hosted on GitHub Pages)

## Tech Stack

- HTML5, CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (ES6+)
- Bootstrap 5
- AOS, Swiper, Typed.js, GLightbox, PureCounter
- Google Fonts (Sora, Plus Jakarta Sans, JetBrains Mono)

## Features

- Dark / Light mode with system preference detection and localStorage persistence
- Responsive sidebar navigation with hover-expand on desktop
- Animated hero with typed text effect
- Timeline-based resume with experience, education, and research papers
- Project gallery with lightbox and detail modals
- Testimonials carousel
- Certificate cards grid
- Skill tags organized by category
- SEO optimized (meta tags, Open Graph, JSON-LD structured data)
- Accessible (ARIA labels, semantic HTML, keyboard-friendly)

## Structure

```
myportfolio/
├── index.html                    # Main single-page portfolio
├── portfolio-details*.html       # Project detail pages (6)
├── assets/
│   ├── css/style.css             # Design system with dark/light tokens
│   ├── js/main.js                # Theme toggle, nav, animations
│   ├── img/                      # Profile, project, and cert images
│   └── vendor/                   # Bootstrap, AOS, Swiper, etc.
├── .gitignore
└── README.md
```

## Run Locally

```bash
git clone https://github.com/Umang3797/myportfolio.git
cd myportfolio
# Open index.html in a browser, or use a local server:
npx serve .
```

## License

Free to use for personal portfolio purposes.
