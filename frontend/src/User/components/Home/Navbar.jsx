import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Info, Code2, Users, Trophy, ArrowRight, Zap } from 'lucide-react'

function Navbar() {
  const headerRef = useRef(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Projects', href: '/projects', icon: Code2 },
    { name: 'Mentors', href: '/mentors', icon: Users },
    { name: 'Leaderboard', href: '/leaderboard', icon: Trophy },
  ]

  const NavLink = ({ item, mobile = false }) => (
    <motion.a
      href={item.href}
      className={`group relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
        mobile 
          ? 'text-white hover:text-cyan-400 text-lg font-medium w-full justify-start' 
          : 'text-gray-300 hover:text-white text-sm font-medium'
      }`}
      whileHover={{ scale: mobile ? 1.02 : 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Icon for mobile */}
      {mobile && <item.icon className="w-5 h-5" />}
      
      {/* Text */}
      <span className="relative z-10">{item.name}</span>
      
      {/* Hover underline for desktop */}
      {!mobile && (
        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
      )}
    </motion.a>
  )

  return (
    <>
      <motion.header 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50 shadow-lg shadow-slate-900/20' 
            : 'bg-slate-900/20 backdrop-blur-md'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo Section */}
            <motion.div 
              className="flex items-center space-x-3 group cursor-pointer"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Logo with glow effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full p-0.5">
                  <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
              </div>
              
              {/* Brand Text */}
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  VWoC
                </h1>
                <p className="text-xs text-gray-400 -mt-1">Winter of Code</p>
              </div>
            </motion.div>
            
            {/* Desktop Navigation */}
            <motion.nav 
              className="hidden lg:flex items-center space-x-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <NavLink item={item} />
                </motion.div>
              ))}
            </motion.nav>
            
            {/* Right Section */}
            <div className="flex items-center space-x-4">
              
              {/* Register Button */}
              <motion.a
                href="/select"
                className="relative group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-sm overflow-hidden transition-all duration-300 hover:from-cyan-400 hover:to-purple-500 hover:scale-105 shadow-lg shadow-cyan-500/25"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Register Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </motion.a>
              
              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative p-2 text-gray-300 hover:text-white transition-colors"
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-6 h-6 relative">
                  <AnimatePresence>
                    {isMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0"
                      >
                        <X className="w-6 h-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0"
                      >
                        <Menu className="w-6 h-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-slate-700/50 bg-slate-900/95 backdrop-blur-xl"
            >
              <div className="max-w-7xl mx-auto px-4 py-6">
                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <NavLink item={item} mobile />
                    </motion.div>
                  ))}
                  
                  {/* Mobile Register Button */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                    className="pt-4"
                  >
                    <a
                      href="/select"
                      className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-4 rounded-full font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300"
                    >
                      <span>Register Now</span>
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      
      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-20"></div>
    </>
  )
}

export default Navbar