"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { glass, hover, transition } from "@/lib/theme";

type ToastType = "success" | "error";

interface Toast {
  id: number;
  type: ToastType;
  message: string;
}

interface ToastContextType {
  showToast: (type: ToastType, message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Export the context provider component
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (type: ToastType, message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message }]);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-4 right-4 space-y-2 z-50">
        {toasts.map(({ id, type, message }) => (
          <div
            key={id}
            className={cn(
              "flex items-center gap-2 px-4 py-2",
              glass.card,
              hover.card,
              transition.base,
              type === "success" ? "border-green-400/30" : "border-red-400/30"
            )}
          >
            {type === "success" ? (
              <CheckCircle className="w-5 h-5 text-green-400" />
            ) : (
              <XCircle className="w-5 h-5 text-red-400" />
            )}
            <span className="text-white/90">{message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

// Export the hook as a named export
export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
} 