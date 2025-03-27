import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { ErrorBoundary } from "react-error-boundary";
import { OverlayProvider } from "./contexts/OverlayContext";
import { ToastProvider } from "./contexts/ToastContext";
import { BackToTop } from "./components/ui/BackToTop";
import { PageSections } from "./components/sections/PageSections";
import { AuroraBackground } from "./components/ui/AuroraBackground";
import { DanaWidget } from "./components/DanaWidget";

export default function App() {
  return (
    <div className="bg-black text-white relative min-h-screen overflow-x-hidden">
      {/* Layer 1: Global Aurora */}
      <AuroraBackground />

      {/* Providers: Required for useOverlay + useToast */}
      <OverlayProvider>
        <ToastProvider>
          {/* Layer 2: Main content */}
          <main className="relative z-10 flex flex-col min-h-screen">
            <ErrorBoundary fallback={<div>Something went wrong</div>}>
              <Suspense fallback={null}>
                <PageSections />
              </Suspense>
            </ErrorBoundary>

            <BackToTop />

            <Toaster
              position="bottom-right"
              toastOptions={{
                className: 'bg-gray-900 text-white',
                style: {
                  background: '#1a1a1a',
                  color: '#fff',
                  transform: 'translateZ(0)',
                },
              }}
            />
          </main>

          {/* Layer 3: Always on top */}
          <DanaWidget />
        </ToastProvider>
      </OverlayProvider>
    </div>
  );
}