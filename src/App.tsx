import { Component, ErrorInfo, ReactNode, Suspense, useEffect, useState } from 'react';
import { ToastProvider } from './contexts/ToastContext';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { PageTransition } from './components/ui/PageTransition';
import { AuroraBackground } from './components/ui/AuroraBackground';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { PainPoints } from './components/sections/PainPoints';
import { AISolutions } from './components/sections/AISolutions';
import { HowItWorks } from './components/sections/HowItWorks';
import { IndustrySpecific } from './components/sections/IndustrySpecific';
import { About } from './components/sections/About';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { BackToTop } from './components/ui/BackToTop';
import './App.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-light text-white/90">Something went wrong</h1>
            <p className="text-white/70">{this.state.error?.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function PageLoader() {
  return (
    <div className="fixed inset-0 bg-[#020817] flex items-center justify-center z-[100]">
      <LoadingSpinner size="lg" className="text-blue-400" />
    </div>
  );
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time to prevent flash
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <PageTransition>
      <AuroraBackground>
        <Header />
        <main>
          <Hero />
          <PainPoints />
          <AISolutions />
          <HowItWorks />
          <IndustrySpecific />
          <About />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </AuroraBackground>
    </PageTransition>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </ErrorBoundary>
  );
}