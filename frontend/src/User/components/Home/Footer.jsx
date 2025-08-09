import React, { useState } from 'react';
import { Linkedin, Github, Twitter, Mail, Send, Zap, Calendar, ArrowRight, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: 'vwoc',
      url: '#',
      gradient: 'from-blue-400 to-blue-600'
    },
    {
      icon: Github,
      name: 'GitHub', 
      handle: 'vwoc',
      url: '#',
      gradient: 'from-gray-400 to-gray-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      handle: 'TeamVWOC',
      url: '#',
      gradient: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: Mail,
      name: 'Email',
      handle: 'vigybagwinterofcode@gmail.com',
      url: 'mailto:vigybagwinterofcode@gmail.com',
      gradient: 'from-purple-400 to-purple-600'
    }
  ];

  const archiveLinks = [
    { name: 'VWoC Archive', year: 'All Years', url: '#' },
    { name: 'VWoC 2024', year: 'Current', url: '#' },
    { name: 'VWoC 2023', year: '2023', url: '#' },
    { name: 'VWoC 2022', year: '2022', url: '#' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <div className="group cursor-pointer mb-6">
              <div className="flex items-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full p-0.5">
                    <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                      <Zap className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    VWoC
                  </h2>
                  <p className="text-sm text-gray-400">Winter of Code</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Empowering the next generation of developers through open-source collaboration and innovation.
              </p>
              
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Heart className="w-4 h-4 text-red-400" />
                <span>Made with love by the VWoC Team</span>
              </div>
              
              <p className="text-sm text-gray-500">
                &copy; 2024 VWoC. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Archive Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Archive
            </h3>
            <div className="space-y-3">
              {archiveLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="group flex items-center justify-between p-3 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div>
                    <span className="text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {link.name}
                    </span>
                    {link.year !== link.name.split(' ')[1] && (
                      <span className="block text-xs text-gray-400">{link.year}</span>
                    )}
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-all duration-300 group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact Us
            </h3>
            
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 placeholder-gray-400"
                />
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 placeholder-gray-400"
                />
              </div>
              
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 placeholder-gray-400 resize-none"
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white p-4 rounded-xl font-semibold hover:from-purple-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Connect With Us
            </h3>
            
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="group flex items-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-400/50 hover:bg-slate-800/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${social.gradient} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}>
                    <social.icon className={`w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300`} />
                  </div>
                  
                  <div className="ml-4 flex-1">
                    <span className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                      {social.name}
                    </span>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {social.handle}
                    </p>
                  </div>
                  
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-all duration-300 group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Code of Conduct</a>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Winter of Code 2024 • December 1st - February 28th</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;