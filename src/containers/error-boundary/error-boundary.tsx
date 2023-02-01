import type { ErrorInfo, ReactElement } from 'react';
import { Component } from 'react';

import { Code } from './styles';

type ErrorBoundaryProps = {
  children: ReactElement;
};

type ErrorBoundaryState = {
  error?: Error;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error({ error, errorInfo });
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;
    if (error) {
      return <Code>{error.message}</Code>;
    }
    return children;
  }
}
