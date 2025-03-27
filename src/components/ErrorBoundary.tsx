import { Component, ErrorInfo, ReactNode } from "react";
import { ErrorBoundaryFallback } from "./ErrorBoundaryFallback";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false
  };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBoundaryFallback />;
    }
    return this.props.children;
  }
} 