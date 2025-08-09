import React, { useEffect, useRef, useState } from 'react'
import { Code, Clock, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Zap, Users, Trophy, Star, ArrowRight, Play, Pause } from 'lucide-react'

// Enhanced Matrix Rain Effect with neon colors
const MatrixRainEffect = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const charArray = characters.split('')
    
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops = Array(Math.floor(columns)).fill(1)

    const colors = ['#00ff41', '#00d4ff', '#ff0080', '#ffff00']
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        const color = colors[Math.floor(Math.random() * colors.length)]
        ctx.fillStyle = color
        
        // Add glow effect
        ctx.shadowColor = color
        ctx.shadowBlur = 10
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        ctx.shadowBlur = 0

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const animationInterval = setInterval(draw, 50)

    return () => {
      clearInterval(animationInterval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ filter: 'brightness(0.4)' }}
    />
  )
}

// Enhanced Preloader with futuristic design
const Preloader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="relative">
      <div className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute top-2 left-2 w-16 h-16 border-4 border-pink-400 border-b-transparent rounded-full animate-spin animate-reverse"></div>
      <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full animate-pulse"></div>
    </div>
  </div>
)

// Enhanced Countdown Timer with neon effects
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2024-12-01T00:00:00')
    
    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center space-x-6 text-white mb-8">
      <Clock className="w-8 h-8 text-cyan-400 animate-pulse" />
      <div className="flex space-x-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="relative group">
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-4 text-center transition-all duration-300 hover:scale-110 hover:border-cyan-400/60">
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                {String(value).padStart(2, '0')}
              </span>
              <span className="block text-xs uppercase tracking-wider text-gray-300 mt-1">{unit}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Enhanced Project Showcase
const ProjectShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const projects = [
    { 
      title: 'Neural Network Visualizer', 
      category: 'AI/ML',
      image: 'https://img.freepik.com/free-vector/chat-bot-concept-illustration_114360-5522.jpg',
      gradient: 'from-blue-500 to-purple-600'
    },
    { 
      title: 'Quantum Blockchain Explorer', 
      category: 'Blockchain',
      image: 'https://th.bing.com/th/id/OIP.vofvtCNd8Mykk6K6aQ24DQHaFj?rs=1&pid=ImgDetMain',
      gradient: 'from-green-500 to-teal-600'
    },
    { 
      title: 'AR Mobile Experience', 
      category: 'Mobile',
      image: 'https://image.freepik.com/free-vector/mobile-gaming-illustration_188398-39.jpg',
      gradient: 'from-pink-500 to-rose-600'
    },
    { 
      title: 'Accessibility AI Assistant', 
      category: 'Web Dev',
      image: 'https://media.istockphoto.com/vectors/web-accessibility-program-abstract-concept-vector-illustration-vector-id1324723229?k=20&m=1324723229&s=612x612&w=0&h=JbeXMaeRRqCksTVoY3HmtBQTQrcntlCU4YE7vUqx7ys=',
      gradient: 'from-orange-500 to-red-600'
    },
  ]

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="flex transition-transform duration-500 ease-out" 
           style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {projects.map((project, index) => (
          <div key={index} className="w-full flex-shrink-0 relative group">
            <div className="relative h-80 overflow-hidden rounded-2xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white mb-2">
                  {project.category}
                </span>
                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Controls */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-full hover:bg-white/20 transition-all duration-300"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-full hover:bg-white/20 transition-all duration-300"
        onClick={nextSlide}
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>
      
      {/* Play/Pause */}
      <button
        className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm border border-white/20 p-2 rounded-full hover:bg-white/20 transition-all duration-300"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? <Pause className="text-white w-5 h-5" /> : <Play className="text-white w-5 h-5" />}
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

// Enhanced Contributors Spotlight
const ContributorsSpotlight = () => {
  const contributors = [
    { 
      name: 'Jane Doe', 
      expertise: 'AI/ML Engineer', 
      image: 'https://th.bing.com/th/id/OIP.mGcmaPrseO1StqjinTtGwwHaHN?rs=1&pid=ImgDetMain',
      rating: 4.9,
      projects: 12
    },
    { 
      name: 'John Smith', 
      expertise: 'Blockchain Developer', 
      image: 'https://th.bing.com/th/id/OIP.2OW5JpvU6FoFKnG8pFHseQAAAA?rs=1&pid=ImgDetMain',
      rating: 4.8,
      projects: 8
    },
    { 
      name: 'Alice Johnson', 
      expertise: 'Full Stack Developer', 
      image: 'https://th.bing.com/th/id/OIP.MW5KCvdZjebeRLc2tEBoaAHaHa?rs=1&pid=ImgDetMain',
      rating: 4.9,
      projects: 15
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {contributors.map((contributor, index) => (
        <div
          key={index}
          className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/5 to-purple-400/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="relative mb-6">
              <img 
                src={contributor.image} 
                alt={contributor.name} 
                className="w-24 h-24 rounded-full mx-auto border-4 border-cyan-400/20 group-hover:border-cyan-400/60 transition-all duration-300" 
              />
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-1">
                <Star className="w-4 h-4 text-white" />
              </div>
            </div>
            <h3 className="text-white text-xl font-bold text-center mb-2">{contributor.name}</h3>
            <p className="text-cyan-400 text-sm text-center mb-4">{contributor.expertise}</p>
            <div className="flex justify-between items-center text-gray-400 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{contributor.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Trophy className="w-4 h-4 text-purple-400" />
                <span>{contributor.projects} projects</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Enhanced FAQ Accordion
const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'What is Vigybag Winter of Code?',
      answer: 'Vigybag Winter of Code is an innovative annual coding event where students dive into cutting-edge open-source projects, enhance their skills, and build the future of technology during the winter break.'
    },
    {
      question: 'Who can participate?',
      answer: 'Any passionate coder can join! Whether you\'re a beginner taking your first steps or an experienced developer looking to contribute to groundbreaking projects.'
    },
    {
      question: 'How long does the program run?',
      answer: 'The program runs for an intensive 8-week period during the winter break, giving you plenty of time to make meaningful contributions.'
    },
    {
      question: 'What technologies will I work with?',
      answer: 'You\'ll work with the latest technologies including AI/ML, Blockchain, Web3, Mobile Development, Cloud Computing, and emerging tech stacks.'
    },
    {
      question: 'Is there any cost to participate?',
      answer: 'Absolutely free! We believe in making quality education and mentorship accessible to everyone, regardless of their financial background.'
    },
  ]

  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden">
          <button
            className="flex justify-between items-center w-full text-left p-6 hover:bg-slate-700/20 transition-all duration-300"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <span className="text-white font-bold text-lg">{faq.question}</span>
            <div className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
              <ChevronDown className="text-cyan-400 w-6 h-6" />
            </div>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${
            activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-6 pb-6 text-gray-300 leading-relaxed">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Enhanced Newsletter Form
const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail('')
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <div className="relative flex-grow">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 text-white px-6 py-4 rounded-full focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitted}
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 flex items-center justify-center space-x-2"
        >
          {isSubmitted ? (
            <span>Subscribed!</span>
          ) : (
            <>
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}

// Main Component
export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 min-h-screen w-full overflow-x-hidden">
      <style jsx="true" global="true">{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
        .animate-reverse {
          animation-direction: reverse;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center pt-20">
          <MatrixRainEffect />
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <div className="animate-float">
              <h1 className="text-4xl md:text-7xl font-black leading-tight mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  VIGYBAG WINTER
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  OF CODE 2024
                </span>
              </h1>
            </div>
            
            <CountdownTimer />
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Join the future of open-source development. Build revolutionary projects, learn from industry experts, and shape tomorrow's technology.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { label: "AI/ML", icon: "🧠", color: "from-blue-500 to-cyan-500" },
                { label: "BLOCKCHAIN", icon: "⛓️", color: "from-green-500 to-teal-500" },
                { label: "WEB3", icon: "🌐", color: "from-purple-500 to-pink-500" },
                { label: "MOBILE", icon: "📱", color: "from-orange-500 to-red-500" }
              ].map((tech, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${tech.color} p-[2px] rounded-full hover:scale-110 transition-all duration-300`}
                >
                  <div className="bg-slate-900 px-6 py-3 rounded-full flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="text-white font-semibold">{tech.label}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Explore Projects</span>
                <Code className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      
        {/* Benefits Section */}
        <div className="py-24 bg-gradient-to-r from-slate-900/50 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Why Join Winter of Code?
              </span>
            </h2>
            <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg">
              Experience the future of collaborative development with cutting-edge projects and world-class mentorship
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Skill Enhancement",
                  description: "Master cutting-edge technologies with hands-on experience in real-world projects that matter.",
                  gradient: "from-yellow-400 to-orange-500"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Expert Mentorship",
                  description: "Learn from industry leaders and experienced developers who guide your journey every step of the way.",
                  gradient: "from-green-400 to-blue-500"
                },
                {
                  icon: <Trophy className="w-8 h-8" />,
                  title: "Recognition & Rewards",
                  description: "Earn certificates, build your portfolio, and get recognized for your contributions to open source.",
                  gradient: "from-purple-400 to-pink-500"
                }
              ].map((benefit, index) => (
                <div key={index} className="group relative">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 h-full">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.gradient} mb-6`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/5 to-purple-400/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Showcase Section */}
        <div className="py-24 bg-gradient-to-r from-purple-900/20 to-slate-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <ProjectShowcase />
          </div>
        </div>

        {/* Contributors Spotlight Section */}
        <div className="py-24 bg-gradient-to-r from-slate-900/50 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Meet Our Contributors
              </span>
            </h2>
            <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg">
              Connect with talented developers and mentors from around the world
            </p>
            <ContributorsSpotlight />
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto">
                <span>View All Contributors</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-24 bg-gradient-to-r from-purple-900/20 to-slate-900/50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <FAQAccordion />
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-24 bg-gradient-to-r from-slate-900/50 to-purple-900/20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-purple-400/5 to-pink-400/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Stay in the Loop
                  </span>
                </h2>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                  Get exclusive updates, early access to new projects, and insider tips from our community of developers.
                </p>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Footer */}
        <div className="py-24 bg-gradient-to-r from-purple-900/20 to-slate-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12">
                <h2 className="text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Ready to Code the Future?
                  </span>
                </h2>
                <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                  Join thousands of developers already building tomorrow's technology today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-2xl shadow-purple-500/25">
                    <span>Register Now</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>
                  <button className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-full font-bold text-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center space-x-3">
                    <span>Learn More</span>
                    <Code className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}