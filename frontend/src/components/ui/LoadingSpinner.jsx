import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSound } from '../../utils/sounds';

const LoadingSpinner = ({
  size = 'md',
  color = 'accent',
  label = 'Loading...',
  showLabel = true,
  playSound = true,
  className = '',
}) => {
  const { playLoading } = useSound();
  
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-[3px]',
    xl: 'h-16 w-16 border-[3px]',
  };
  
  const colorClasses = {
    accent: 'border-futuristic-accent/20 border-t-futuristic-accent',
    primary: 'border-primary-500/20 border-t-primary-500',
    secondary: 'border-secondary-500/20 border-t-secondary-500',
    white: 'border-white/20 border-t-white',
  };
  
  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg',
  };
  
  // Play loading sound when component mounts
  useEffect(() => {
    if (playSound) {
      playLoading();
    }
  }, [playSound, playLoading]);
  
  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <div className="relative">
        {/* Outer glow */}
        <motion.div
          className={`absolute inset-0 rounded-full ${sizeClasses[size]} ${colorClasses[color]}`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            filter: 'blur(4px)',
          }}
        />
        
        {/* Main spinner */}
        <motion.div
          className={`rounded-full ${sizeClasses[size]} ${colorClasses[color]}`}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Inner dot */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-1 h-1 bg-futuristic-accent rounded-full"
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              x: -4,
              y: -4,
              boxShadow: '0 0 10px 2px rgba(34, 211, 238, 0.5)',
            }}
          />
        </motion.div>
      </div>
      
      {showLabel && (
        <motion.span 
          className={`text-futuristic-accent-light ${textSizes[size]} font-display tracking-wider`}
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {label}
        </motion.span>
      )}
      
      {/* Pulsing dots animation */}
      {showLabel && (
        <div className="flex items-center justify-center gap-1 mt-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-1.5 h-1.5 bg-futuristic-accent rounded-full"
              animate={{
                y: [0, -5, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
