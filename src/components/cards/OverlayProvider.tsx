import { createContext, useContext, useState, ReactNode } from "react";
import ExpandedCardModal from "./ExpandedCardModal";

interface OverlayContextProps {
  setOverlay: (props: OverlayData | null) => void;
}

const OverlayContext = createContext<OverlayContextProps>({
  setOverlay: () => {},
});

interface OverlayData {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  content: ReactNode;
}

export function OverlayProvider({ children }: { children: ReactNode }) {
  const [overlay, setOverlay] = useState<OverlayData | null>(null);

  return (
    <OverlayContext.Provider value={{ setOverlay }}>
      {children}
      <ExpandedCardModal
        isOpen={!!overlay}
        onClose={() => setOverlay(null)}
        icon={overlay?.icon ?? null}
        title={overlay?.title ?? ""}
        subtitle={overlay?.subtitle}
        body={overlay?.content ?? null}
      />
    </OverlayContext.Provider>
  );
}

export function useOverlay() {
  return useContext(OverlayContext);
} 