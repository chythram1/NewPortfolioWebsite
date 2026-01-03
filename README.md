## Chythra Malapati - Portfolio

This is my personal portfolio website built with React and Vite, featuring smooth animations, dynamic effects, and a sleek dark theme with a blurred city night background.

## ✨ Features

- **Dynamic Hero Section** - Color-changing name animation with typewriter effect
- **Smooth Scroll Animations** - Sections fade in as you scroll using Framer Motion
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile
- **Interactive Project Cards** - Hover effects with gradient borders
- **Spotify Integration** - Display currently loving track with animated equalizer
- **Modern UI** - Glassmorphism effects, gradient accents, and clean typography

## 🛠️ Built With

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Animations:** Framer Motion
- **Styling:** CSS3 (Custom properties, Grid, Flexbox)
- **Fonts:** Inter (Google Fonts)

## 📂 Project Structure

```
myportfolio/
├── public/
│   ├── city-bg.png          # Background image
│   └── projects/            # Project images & assets
│       ├── project1.png
│       ├── project3.png
│       ├── memoji.png
│       └── ...
├── src/
│   ├── components/
│   │   ├── navbar.jsx
│   │   ├── navbar.css
│   │   ├── herosection.jsx
│   │   ├── herosection.css
│   │   ├── about.jsx
│   │   ├── about.css
│   │   ├── skills.jsx
│   │   ├── skills.css
│   │   ├── projects.jsx
│   │   ├── projectssection.css
│   │   ├── experience.jsx
│   │   ├── experience.css
│   │   ├── contact.jsx
│   │   ├── contact.css
│   │   └── ScrollReveal.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chythram1/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` folder.

## 🌟 Key Sections

1. **Hero** - Introduction with animated name and typewriter tagline
2. **About** - Brief bio with stats (internships, publications, projects)
3. **Skills** - Categorized tech stack display
4. **Projects** - 3-column grid of featured work
5. **Experience** - Professional and research experience
6. **Contact** - Social links with Spotify integration
