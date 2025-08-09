import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, CheckCircleIcon, ExclamationCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { useSound } from '../../utils/sounds';

const iconMap = {
  success: CheckCircleIcon,
  error: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon,
  info: InformationCircleIcon,
};

const bgColors = {
  success: 'bg-green-900/80 backdrop-blur-sm',
  error: 'bg-red-900/80 backdrop-blur-sm',
  warning: 'bg-amber-900/80 backdrop-blur-sm',
  info: 'bg-blue-900/80 backdrop-blur-sm',
};

const borderColors = {
  success: 'border-green-500/30',
  error: 'border-red-500/30',
  warning: 'border-amber-500/30',
  info: 'border-blue-500/30',
};

const iconColors = {
  success: 'text-green-400',
  error: 'text-red-400',
  warning: 'text-amber-400',
  info: 'text-blue-400',
};

const Notification = ({
  message,
  type = 'info',
  title,
  duration = 5000,
  onClose,
  show = true,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(show);
  const { playSuccess, playError, playWarning } = useSound();
  const Icon = iconMap[type] || iconMap.info;

  useEffect(() => {
    setIsVisible(show);
    
    // Play sound effect based on notification type
    if (show) {
      switch (type) {
        case 'success':
          playSuccess();
          break;
        case 'error':
          playError();
          break;
        case 'warning':
          playWarning();
          break;
        default:
          break;
      }
    }
    
    // Auto-dismiss after duration if provided
    let timer;
    if (show && duration > 0) {
      timer = setTimeout(() => {
        handleClose();
      }, duration);
    }
    
    return () => clearTimeout(timer);
  }, [show, type, duration, playSuccess, playError, playWarning]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      setTimeout(onClose, 300); // Wait for animation to complete
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`relative w-full max-w-sm rounded-lg border ${borderColors[type]} ${bgColors[type]} shadow-lg overflow-hidden ${className}`}
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <div className="p-4">
            <div className="flex items-start">
              <div className={`flex-shrink-0 pt-0.5 ${iconColors[type]}`}>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                {title && (
                  <h3 className="text-sm font-medium text-gray-100">
                    {title}
                  </h3>
                )}
                <p className="mt-1 text-sm text-gray-200">
                  {message}
                </p>
              </div>
              <div className="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  className="inline-flex rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-futuristic-accent focus:ring-offset-2 focus:ring-offset-futuristic-dark"
                  onClick={handleClose}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Progress bar */}
          {duration > 0 && (
            <motion.div
              className="h-0.5 bg-futuristic-accent/50"
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: duration / 1000, ease: 'linear' }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
