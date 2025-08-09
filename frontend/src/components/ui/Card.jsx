import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useSound } from '../../utils/sounds';

const Card = forwardRef(({
  children,
  className = '',
  hoverEffect = 'scale',
  glow = true,
  border = 'gradient',
  onClick,
  sound = true,
  ...props
}, ref) => {
  const { playClick } = useSound();
  
  const borderClasses = {
    none: '',
    solid: 'border border-futuristic-accent/20',
    gradient: 'relative overflow-hidden',
  };
  
  const hoverEffects = {
    none: '',
    scale: 'hover:scale-[1.02]',
    lift: 'hover:-translate-y-1',
    glow: 'hover:shadow-glow-lg',
  };
  
  const handleClick = (e) => {
    if (onClick) {
      if (sound) {
        playClick();
      }
      onClick(e);
    }
  };
  
  return (
    <motion.div
      ref={ref}
      className={`
        relative rounded-xl bg-futuristic-dark-light/50 backdrop-blur-sm overflow-hidden
        transition-all duration-300 ease-out
        ${hoverEffects[hoverEffect]}
        ${glow ? 'shadow-glow' : 'shadow-md'}
        ${borderClasses[border]}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      whileHover={onClick ? { 
        scale: 1.02,
        transition: { duration: 0.2 }
      } : {}}
      whileTap={onClick ? { 
        scale: 0.98,
        transition: { duration: 0.1 }
      } : {}}
      onClick={handleClick}
      {...props}
    >
      {border === 'gradient' && (
        <div className="absolute inset-0 p-px bg-gradient-to-br from-futuristic-accent/30 via-futuristic-neon/20 to-futuristic-accent/30 rounded-xl -z-10">
          <div className="w-full h-full bg-futuristic-dark/80 backdrop-blur-sm rounded-xl"></div>
        </div>
      )}
      
      <div className="relative z-10 h-full">
        {children}
      </div>
      
      {/* Hover effect */}
      {onClick && (
        <motion.div 
          className="absolute inset-0 -z-10 bg-gradient-to-br from-futuristic-accent/5 via-transparent to-futuristic-neon/5 opacity-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
});

Card.displayName = 'Card';

// Card Header Component
const CardHeader = ({ children, className = '', ...props }) => (
  <div 
    className={`p-6 pb-2 ${className}`}
    {...props}
  >
    {children}
  </div>
);

// Card Title Component
const CardTitle = ({ children, className = '', ...props }) => (
  <h3 
    className={`text-xl font-display font-bold text-futuristic-accent-light ${className}`}
    {...props}
  >
    {children}
  </h3>
);

// Card Description Component
const CardDescription = ({ children, className = '', ...props }) => (
  <p 
    className={`mt-1 text-sm text-gray-300 ${className}`}
    {...props}
  >
    {children}
  </p>
);

// Card Content Component
const CardContent = ({ children, className = '', ...props }) => (
  <div 
    className={`p-6 pt-2 ${className}`}
    {...props}
  >
    {children}
  </div>
);

// Card Footer Component
const CardFooter = ({ children, className = '', ...props }) => (
  <div 
    className={`p-6 pt-0 flex items-center gap-2 ${className}`}
    {...props}
  >
    {children}
  </div>
);

// Attach sub-components to Card
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
