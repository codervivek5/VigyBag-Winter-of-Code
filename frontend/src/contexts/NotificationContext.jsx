import React, { createContext, useContext, useState, useCallback } from 'react';

const NotificationContext = createContext();

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  
  const showNotification = useCallback(({ 
    message, 
    type = 'info', 
    title, 
    duration = 5000,
    position = 'top-right'
  }) => {
    const id = Date.now().toString();
    
    setNotifications(prev => [
      ...prev,
      {
        id,
        message,
        type,
        title,
        duration,
        position,
      }
    ]);
    
    // Auto-remove notification after duration
    if (duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, duration);
    }
    
    return id;
  }, []);
  
  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);
  
  // Helper methods for different notification types
  const notificationMethods = {
    success: (message, options = {}) => 
      showNotification({ ...options, message, type: 'success' }),
    error: (message, options = {}) => 
      showNotification({ ...options, message, type: 'error' }),
    warning: (message, options = {}) => 
      showNotification({ ...options, message, type: 'warning' }),
    info: (message, options = {}) => 
      showNotification({ ...options, message, type: 'info' }),
  };
  
  return (
    <NotificationContext.Provider
      value={{
        ...notificationMethods,
        showNotification,
        removeNotification,
      }}
    >
      {children}
      <NotificationContainer notifications={notifications} />
    </NotificationContext.Provider>
  );
};

const NotificationContainer = ({ notifications }) => {
  // Group notifications by position
  const notificationsByPosition = notifications.reduce((acc, notification) => {
    const position = notification.position || 'top-right';
    if (!acc[position]) {
      acc[position] = [];
    }
    acc[position].push(notification);
    return acc;
  }, {});
  
  // Define position styles
  const positionStyles = {
    'top-left': 'top-4 left-4 items-start',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2 items-center',
    'top-right': 'top-4 right-4 items-end',
    'bottom-left': 'bottom-4 left-4 items-start',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2 items-center',
    'bottom-right': 'bottom-4 right-4 items-end',
  };
  
  return (
    <>
      {Object.entries(notificationsByPosition).map(([position, positionNotifications]) => (
        <div
          key={position}
          className={`fixed z-50 flex flex-col gap-3 w-full max-w-xs pointer-events-none ${positionStyles[position] || positionStyles['top-right']}`}
        >
          {positionNotifications.map((notification) => (
            <Notification
              key={notification.id}
              {...notification}
              onClose={() => notification.removeNotification(notification.id)}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default NotificationContext;
