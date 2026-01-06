# Chythra Malapati - Portfolio

A modern, interactive portfolio website showcasing my work as a Software Engineer with AI/ML expertise. Built with React and Vite, featuring stunning animations, dynamic effects, and a sleek design inspired by contemporary web aesthetics.

## ✨ Features

- **Dynamic Loading Screen** - GridScan animation with gradient color effects and smooth fade transitions
- **Animated Hero Section** - Elegant fade-in with pink curtain effect and glowing center radial gradient
- **Pink Lightning Borders** - Interactive button hover effects with animated pink/magenta borders
- **Scrolling Logo Bar** - Infinite horizontal scroll showcasing affiliations
- **Gooey Navigation** - Centered navbar with particle animations and smooth active state transitions
- **ColorBends Background** - Dynamic gradient background with mouse interaction and parallax effects
- **Smooth Scroll Animations** - Section-by-section reveal animations using ScrollReveal
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Modern Typography** - Playfair Display cursive font for hero title highlights

## 🛠️ Built With

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** CSS3 (Custom properties, animations, gradients, masks)
- **Fonts:** Playfair Display (Google Fonts)
- **Special Effects:**
  - Custom GridScan loading component
  - ColorBends animated background
  - Particle animation system
  - CSS mask-composite for lightning borders

## 🎨 Design Highlights

- **Color Palette:** Pink/magenta accents (#ff1493, #ff69b4) with dark theme
- **Effects:**
  - Glassmorphism navbar with backdrop blur
  - Radial gradient glow effects
  - Infinite scroll animations
  - Transform-based hover interactions
  - Keyframe animations for smooth transitions

## 📂 Project Structure

```
myportfolio/
├── public/
│   └── logos/                # Company/affiliation logos
│       ├── vt-logo.png
│       ├── vcu.png
│       ├── indivior_logo.png
│       ├── markel.svg
│       ├── csg.png
│       └── rr-establish.png
├── src/
│   ├── components/
│   │   ├── GridScan.jsx      # Loading screen component
│   │   ├── colorbends.jsx    # Animated gradient background
│   │   ├── navbar.jsx         # Gooey navigation with particles
│   │   ├── navbar.css
│   │   ├── herosection.jsx    # Hero with fade-in animation
│   │   ├── herosection.css
│   │   ├── logobar.jsx        # Scrolling logo component
│   │   ├── logobar.css
│   │   ├── about.jsx
│   │   ├── about.css
│   │   ├── skills.jsx
│   │   ├── skills.css
│   │   ├── projects.jsx
│   │   ├── projects.css
│   │   ├── experience.jsx
│   │   ├── experience.css
│   │   ├── contact.jsx
│   │   ├── contact.css
│   │   └── scrollreveal.jsx   # Scroll animation wrapper
│   ├── App.jsx                # Main app with loading logic
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
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

### Preview Production Build

```bash
npm run preview
```

## 🌟 Key Sections

1. **Loading Screen** - GridScan animation with gradient text overlay
2. **Hero** - "Hi, I'm Chythra Malapati" with fade-in animation and pink curtain effect
3. **Logo Bar** - Scrolling company/affiliation logos
4. **About** - Brief bio and background
5. **Skills** - Categorized tech stack display
6. **Projects** - Featured work showcase
7. **Experience** - Professional and research experience timeline
8. **Contact** - Social links and contact information

## 🎯 Special Features

### Hero Section Animation Timeline
- Loading screen displays for 3.2s
- Fade out begins at 3.2s (1s duration)
- Loading completes at 4.2s
- Hero section begins fade-in at 4.5s (0.3s delay)
- Hero fully visible by 5.7s

### Logo Bar
- Infinite horizontal scroll animation (40s loop)
- Hover to pause
- Individual logo scale on hover
- Seamless loop using duplicated elements

### Navigation
- Centered nav items with gooey particle effects
- Pink active state with smooth transitions
- Fixed position with glass morphism effect

## 📝 Customization

To customize the portfolio for your own use:

1. Update personal information in components (name, bio, etc.)
2. Replace logo images in `public/logos/`
3. Modify color scheme in CSS files (search for `#ff1493`, `#ff69b4`)
4. Adjust animation timings in component files
5. Update navigation items in `App.jsx`

## 📄 License

This project is open source and available for personal and educational use.

## 🤝 Contact

Chythra Malapati
- Portfolio: [Your deployed URL]
- GitHub: [@chythram1](https://github.com/chythram1)
- LinkedIn: [Your LinkedIn]

---

Built with ❤️ using React and Vite
