# Hemsida 3.0 - Skyland AI Solutions Website

A modern web application for Skyland AI Solutions, built with React, TypeScript, and Vite, featuring a beautiful aurora background effect, AI voice integration, and dark mode support. This website showcases AI automation solutions for service-based businesses.

## 🎯 Project Purpose

Skyland AI Solutions helps service-based businesses automate, scale, and grow profitably through intelligent, high-impact AI solutions. This website serves as our digital platform to:
- Educate visitors about AI automation opportunities
- Demonstrate our AI capabilities through interactive features
- Convert visitors into clients through engaging experiences
- Showcase our success stories and ROI potential

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.3
- **Build Tool:** Vite 5.4
- **Language:** TypeScript
- **Styling:** Tailwind CSS + ShadCN UI
- **Animations:** Framer Motion
- **Voice AI:** ElevenLabs Convai Widget
- **Development Tools:**
  - ESLint for code quality
  - PostCSS for CSS processing
  - Tailwind for utility-first CSS

## 📁 Project Structure

```
src/
├── components/
│   ├── aurora-background.tsx  # Animated aurora effect
│   ├── voice-agent.tsx        # Dana AI component
│   ├── theme-toggle.tsx       # Dark/light mode switch
│   └── ui/                   # UI components
├── lib/
│   └── utils.ts              # Utility functions
├── styles/                   # Tailwind styles
├── pages/                    # Route pages
├── App.tsx                   # Main component
├── main.tsx                  # Entry point
└── index.css                # Global styles
```

## ✨ Core Features

- **Visual Design**
  - Beautiful aurora background animation
  - GPU-optimized CSS animations
  - Dark/Light mode with system preference support
  - Responsive design across all devices

- **AI Voice Agent (Dana)**
  - Natural language conversation
  - Business needs analysis
  - Custom solution recommendations
  - Real-time voice interaction
  - Industry-specific knowledge base

- **Content & Conversion**
  - Interactive success stories
  - ROI calculator
  - Industry-specific case studies
  - Dynamic CTAs
  - Lead generation forms

## 📋 Website Structure

### 1️⃣ Hero Section — Instant Engagement
- **Headline**: "Automate Your Business, Multiply Your Revenue — Let AI Do the Work"
- **Subheadline**: "Skyland AI helps service businesses save 30+ hours/month and grow profitably"
- **Visual Elements**:
  - Aurora Background with gradient shifts
  - Floating AI-themed icons
- **CTAs**:
  - Primary: "Get Your Free AI Audit"
  - Secondary: "Ask Dana: How Can AI Help My Business?"
- **Trust Indicators**: Client logos and success metrics

### 2️⃣ Problem Showcase
- Interactive timeline showing common business pain points
- Statistics about manual task costs
- Industry-specific challenges
- Animated visualizations of workflow bottlenecks

### 3️⃣ Solution Showcase
- **AI Voice & Chat Demo**
  - Live Dana integration
  - Real-time conversation examples
- **Lead Conversion Tools**
  - Interactive dashboard preview
  - ROI calculator
- **Process Automation**
  - Before/After workflow comparisons
  - Time-saving metrics

### 4️⃣ Case Studies Section
- Industry-specific success stories
- Video testimonials
- ROI metrics and statistics
- Interactive result showcases

### 5️⃣ Implementation Process
- 4-step visualization:
  1. AI Audit
  2. Custom Development
  3. Integration
  4. Optimization
- Timeline estimates
- Milestone indicators

### 6️⃣ Pricing Section
- Transparent pricing tiers
- ROI comparisons
- Feature breakdowns
- Custom solution calculator

### 7️⃣ AI-Powered FAQ
- Live chat with Dana
- Common question database
- Dynamic response system
- Security certifications

### 8️⃣ Call-to-Action
- Free consultation offer
- AI strategy session booking
- Lead capture system
- Exit intent optimization

## 🎙️ Voice AI Integration

The project uses ElevenLabs' Convai widget for the AI Voice Agent (Dana). Here's how it's implemented:

```html
<!-- Voice Agent Widget -->
<elevenlabs-convai agent-id="4mN4rizdi79gwLhFxlOu"></elevenlabs-convai>
<script src="https://elevenlabs.io/convai-widget/index.js" async></script>
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

## 🎯 Target Industries

- Real Estate & Property Management
- Call Centers & Customer Service
- Boutique Hotels & Guest Services
- Travel Agencies & Tour Operators

## 🚀 Current State

The project is in active development with the following components implemented:
- Basic application structure
- Aurora background effect
- Theme switching functionality
- Development environment setup
- Voice AI integration (Dana)

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
  - [ ] Industry-specific case studies
  - [ ] ROI calculator
  - [ ] Success stories
- [ ] Add routing
- [ ] Enhance responsive design
- [ ] Add more animations and transitions
- [ ] Style and integrate Dana (Voice Agent)
- [ ] Implement lead generation forms
- [ ] Add dynamic CTAs

## 🌟 Key Differentiators

- Interactive AI Demo with Dana
- Industry-Specific ROI Calculator
- Video Testimonials
- Transparent Pricing Comparison
- Real-time AI Interaction

## 🤝 Contributing

Feel free to contribute to this project by creating issues or submitting pull requests. This project is part of Skyland AI Solutions' mission to make AI automation accessible to service-based businesses. 