import React, { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSound } from '../../utils/sounds';

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  isLoading = false,
  onClick,
  className = '',
  disabled = false,
  sound = true,
  ...props
}, ref) => {
  const { playClick, playLoading } = useSound();
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const variantClasses = {
    primary: 'bg-futuristic-accent hover:bg-futuristic-accent/90 text-futuristic-dark font-bold shadow-glow hover:shadow-glow-lg transition-all duration-300',
    secondary: 'bg-futuristic-dark-light border border-futuristic-accent/30 hover:border-futuristic-accent/70 text-futuristic-accent-light shadow-inner-glow hover:shadow-glow transition-all duration-300',
    ghost: 'bg-transparent hover:bg-futuristic-dark-light/50 text-futuristic-accent-light hover:text-futuristic-accent transition-all duration-300',
    danger: 'bg-red-600/90 hover:bg-red-600 text-white font-bold shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300',
  };
  
  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };
  
  const iconOnlyClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-2.5',
  };
  
  const isIconOnly = !children && Icon;
  
  const handleClick = (e) => {
    if (disabled || isLoading) return;
    
    // Play sound effect if enabled
    if (sound) {
      if (isLoading) {
        playLoading();
      } else {
        playClick();
      }
    }
    
    if (onClick) {
      onClick(e);
    }
  };
  
  return (
    <motion.button
      ref={ref}
      className={`
        relative overflow-hidden rounded-lg font-display font-medium
        focus:outline-none focus:ring-2 focus:ring-futuristic-accent focus:ring-offset-2 focus:ring-offset-futuristic-dark
        disabled:opacity-50 disabled:cursor-not-allowed
        ${isIconOnly ? iconOnlyClasses[size] : sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      onClick={handleClick}
      disabled={disabled || isLoading}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      whileHover={!disabled ? { 
        scale: 1.02,
        transition: { duration: 0.2 }
      } : {}}
      {...props}
    >
      <div className="relative flex items-center justify-center gap-2">
        {isLoading && (
          <motion.span
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className={`${iconSizes[size]} border-2 border-futuristic-accent border-t-transparent rounded-full`}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
            />
          </motion.span>
        )}
        
        <AnimatePresence mode="wait">
          {!isLoading && (
            <motion.span
              className={`flex items-center gap-2 ${
                isIconOnly ? '' : 'px-1'
              }`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {Icon && iconPosition === 'left' && (
                <Icon className={`${iconSizes[size]} ${children ? 'mr-1' : ''}`} />
              )}
              {children}
              {Icon && iconPosition === 'right' && (
                <Icon className={`${iconSizes[size]} ${children ? 'ml-1' : ''}`} />
              )}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      
      {/* Hover effect */}
      {!disabled && !isLoading && (
        <motion.span
          className="absolute inset-0 -z-10 bg-gradient-to-r from-futuristic-accent/20 to-futuristic-neon/20 opacity-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;
