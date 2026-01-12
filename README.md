# Anubha Jain - UGC Creator Portfolio

A modern, high-performance portfolio website designed for a UGC (User Generated Content) Creator & Strategist. Built with React and TypeScript, this project features a premium, dark-themed aesthetic with smooth animations and seamless video integration.

## 🌟 Features

- **Premium Design**: Sleek dark mode aesthetic with glassmorphism effects and curated typography.
- **Dynamic Animations**: Smooth transitions and parallax scrolling effects powered by **Framer Motion**.
- **Video Integration**: Native HTML5 video player with custom modal overlays for showcasing portfolio work.
- **Responsive Layout**: Fully responsive design that works perfectly on desktop, tablet, and mobile devices.
- **Type-Safe**: Built with **TypeScript** in Strict Mode for robust code quality.
- **Data-Driven**: Content management via simple JSON files for easy updates without touching code.
- **Performance**: Optimized build with **Vite** for lightning-fast loading.

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd AnubhaJain-Portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**

    ```bash
    npm run dev
    ```

    The site will be available at `http://localhost:5173` (or similar port).

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, videos)
├── components/      # Shared UI components (Navbar, etc.)
├── data/            # JSON content files (profile, portfolio, etc.)
├── sections/        # Page sections (Hero, Portfolio, Services, etc.)
├── utils/           # Utility functions and mappers
├── App.tsx          # Main application component
├── main.tsx         # Entry point
└── types.ts         # TypeScript definitions
public/
└── assets/          # Public static assets
```

## ✏️ Customization

The personalized content is separated from the code in the `src/data/` directory. You can update these JSON files to customize the portfolio:

- **`profile.json`**: Update name, roles, headline, stats, and social links.
- **`portfolio.json`**: Add or remove portfolio projects, including video URLs and thumbnails.
- **`services.json`**: Modify service offerings and descriptions.
- **`whyme.json`**: Update the "Why Me" section benefits and stats.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
