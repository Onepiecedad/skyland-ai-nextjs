# Hemsida 3.0

A modern web application built with React, TypeScript, and Vite, featuring a beautiful aurora background effect and dark mode support.

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.3
- **Build Tool:** Vite 5.4
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** Custom React components
- **Voice AI:** ElevenLabs Convai Widget
- **Development Tools:**
  - ESLint for code quality
  - PostCSS for CSS processing
  - Tailwind for utility-first CSS

## 📁 Project Structure

```
src/
├── components/
│   ├── aurora-background.tsx  # Animated aurora effect component
│   ├── voice-agent.tsx        # Dana - AI Voice Agent component
│   └── theme-toggle.tsx       # Dark/light mode toggle
├── lib/
│   └── utils.ts              # Utility functions
├── App.tsx                   # Main application component
├── main.tsx                  # Application entry point
└── index.css                # Global styles
```

## ✨ Features

- Modern React application setup with TypeScript
- Beautiful aurora background animation
- Dark/Light mode toggle with system preference support
- Responsive design with Tailwind CSS
- Modern development environment with hot reload
- AI Voice Agent (Dana) powered by ElevenLabs

## 🎙️ Voice AI Integration

The project uses ElevenLabs' Convai widget for the AI Voice Agent (Dana). Here's how it's implemented:

```html
<!-- Voice Agent Widget -->
<elevenlabs-convai agent-id="4mN4rizdi79gwLhFxlOu"></elevenlabs-convai>
<script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>
```

### Voice Agent Features
- Natural language conversation
- Business needs analysis
- Custom solution recommendations
- Real-time voice interaction
- No backend setup required

### Implementation Notes
- Widget can be embedded in any section
- Handles voice processing on ElevenLabs servers
- Pre-configured with Skyland AI knowledge base
- Responsive design adapts to all screen sizes

## 🚀 Current State

The project is in active development with the following components implemented:
- Basic application structure
- Aurora background effect
- Theme switching functionality
- Development environment setup

## 🏃‍♂️ Running the Project

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## 🛠️ Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 📦 Dependencies

### Main Dependencies
- react
- react-dom
- clsx
- lucide-react
- tailwind-merge

### Development Dependencies
- TypeScript
- Vite
- ESLint
- Tailwind CSS
- PostCSS
- Autoprefixer

## 🔜 Next Steps

- [ ] Add more interactive components
- [ ] Implement main content sections
- [ ] Add routing
- [ ] Enhance responsive design
- [ ] Add more animations and transitions
- [ ] Style and integrate Dana (Voice Agent)

## 🤝 Contributing

Feel free to contribute to this project by creating issues or submitting pull requests. 