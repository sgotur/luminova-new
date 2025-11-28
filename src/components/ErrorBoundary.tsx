import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Error Boundary component that catches JavaScript errors anywhere in the child component tree
 * and displays a fallback UI instead of crashing the entire application.
 * 
 * Requirements: 8.1 - Error handling for the navigation system
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error details for debugging - Requirement 8.1
    console.error('ErrorBoundary caught an error:', error);
    console.error('Error details:', errorInfo);
    
    // Update state with error information
    this.setState({
      error,
      errorInfo,
    });

    // In production, you might want to send this to an error reporting service
    // Example: logErrorToService(error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // Custom fallback UI if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI - Requirement 8.1
      return (
        <div className="container mt-5">
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Something went wrong</h4>
            <p className="mb-3">
              An unexpected error occurred while rendering the application.
            </p>
            {this.state.error && (
              <details className="mb-3">
                <summary className="cursor-pointer text-sm font-semibold">
                  Error details
                </summary>
                <pre className="mt-2 p-3 bg-light rounded text-sm overflow-auto">
                  <code>{this.state.error.toString()}</code>
                  {this.state.errorInfo && (
                    <code className="d-block mt-2">
                      {this.state.errorInfo.componentStack}
                    </code>
                  )}
                </pre>
              </details>
            )}
            <button
              onClick={this.handleReset}
              className="btn btn-primary me-2"
            >
              Try Again
            </button>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-outline-secondary"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
