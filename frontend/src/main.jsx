import React from 'react';
import { createRoot } from 'react-dom/client';
import { NotificationProvider } from './contexts/NotificationContext';
import { ThemeProvider } from './contexts/ThemeContext';
import App from './App';
import './index.css';

// Preload sounds
import { preloadSounds } from './utils/sounds';
preloadSounds();

// Global error handling
const setupErrorHandling = () => {
  // Handle uncaught errors
  const handleError = (error, errorInfo) => {
    console.error('Uncaught error:', error, errorInfo);
    
    // Show error notification if NotificationProvider is available
    if (window.showNotification) {
      window.showNotification({
        type: 'error',
        title: 'Something went wrong',
        message: error.message || 'An unexpected error occurred',
      });
    }
  };

  // Handle unhandled promise rejections
  const handleRejection = (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    
    if (window.showNotification) {
      window.showNotification({
        type: 'error',
        title: 'Async Error',
        message: event.reason?.message || 'An async error occurred',
      });
    }
  };

  // Add global error handlers
  window.addEventListener('error', (event) => {
    event.preventDefault();
    handleError(event.error, { componentStack: event.error?.componentStack });
  });

  window.addEventListener('unhandledrejection', (event) => {
    event.preventDefault();
    handleRejection(event);
  });

  // Expose error handling to window for debugging
  window.handleError = handleError;
};

// Initialize error handling
setupErrorHandling();

// Create root and render app
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// Expose a global method to show notifications for debugging
window.showNotification = (notification) => {
  const event = new CustomEvent('show-notification', { detail: notification });
  window.dispatchEvent(event);
};
