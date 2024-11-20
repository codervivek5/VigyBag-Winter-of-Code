'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Code, Clock, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Slider from 'react-slick'
import Lenis from '@studio-freight/lenis'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import loader from "../../../assets/Vigybag-logo.gif"
import logo from "../../../assets/Vigybag-logo.png"

// Matrix Rain Effect Component

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
    
    const fontSize = 16
    const columns = canvas.width / fontSize

    const drops = Array(Math.floor(columns)).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#0F0'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const animationInterval = setInterval(draw, 33)

    return () => {
      clearInterval(animationInterval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ filter: 'brightness(0.7)', overflow: 'hidden' }} // Added overflow hidden to remove x-axis scroll
    />
  )
}

// Preloader component
const Preloader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212ff]">
    {/* <img src={loader} alt="Loading..." className="w-50 h-50 object-contain" /> */}
  </div>
)

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
      } else {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center space-x-4 text-white mb-6">
      <Clock className="w-6 h-6" />
      <div className="flex space-x-2">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <span className="text-2xl font-bold">{value}</span>
            <span className="text-xs uppercase">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const ProjectShowcase = () => {
  const sliderRef = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  const projects = [
    { title: 'AI Chatbot', image: 'https://img.freepik.com/free-vector/chat-bot-concept-illustration_114360-5522.jpg' },
    { title: 'Blockchain Explorer', image: 'https://th.bing.com/th/id/OIP.vofvtCNd8Mykk6K6aQ24DQHaFj?rs=1&pid=ImgDetMain' },
    { title: 'Mobile Game', image: 'https://image.freepik.com/free-vector/mobile-gaming-illustration_188398-39.jpg' },
    { title: 'Web Accessibility Tool', image: 'https://media.istockphoto.com/vectors/web-accessibility-program-abstract-concept-vector-illustration-vector-id1324723229?k=20&m=1324723229&s=612x612&w=0&h=JbeXMaeRRqCksTVoY3HmtBQTQrcntlCU4YE7vUqx7ys=' },
  ]

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="px-2">
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-white text-lg font-bold">{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2  p-2 rounded-full"
        onClick={() => sliderRef.current.slickPrev()}
      >
        {/* <ChevronLeft className="text-white" /> */}
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2  p-2 rounded-full"
        onClick={() => sliderRef.current.slickNext()}
      >
        {/* <ChevronRight className="text-white" /> */}
      </button>
    </div>
  )
}

const ContributorsSpotlight = () => {
  const contributors = [
    { name: 'Jane Doe', expertise: 'AI/ML', image: 'https://th.bing.com/th/id/OIP.mGcmaPrseO1StqjinTtGwwHaHN?rs=1&pid=ImgDetMain' },
    { name: 'John Smith', expertise: 'Blockchain', image: 'https://th.bing.com/th/id/OIP.2OW5JpvU6FoFKnG8pFHseQAAAA?rs=1&pid=ImgDetMain' },
    { name: 'Alice Johnson', expertise: 'Web Development', image: 'https://th.bing.com/th/id/OIP.MW5KCvdZjebeRLc2tEBoaAHaHa?rs=1&pid=ImgDetMain' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {contributors.map((contributor, index) => (
        <motion.div
          key={index}
          className="bg-gray-800 p-6 rounded-3xl"
          whileHover={{ scale: 1.05 }}
        >
          <img src={contributor.image} alt={contributor.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h3 className="text-white text-lg font-bold text-center">{contributor.name}</h3>
          <p className="text-gray-400 text-sm text-center">{contributor.expertise}</p>
        </motion.div>
      ))}
      <div className="col-span-1 md:col-span-3 text-center mt-6">
        <Link to="/all-contributors" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          See More
        </Link>
      </div>
    </div>
  )
}

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'What is Vigybag Winter of Code?',
      answer: 'Vigybag Winter of Code is an annual coding event where students can contribute to open-source projects and enhance their skills during the winter break.'
    },
    {
      question: 'Who can participate?',
      answer: 'Any student with a passion for coding can participate, regardless of their experience level.'
    },
    {
      question: 'How long does the program run?',
      answer: 'The program typically runs for 6-8 weeks during the winter break.'
    },
    {
      question: 'Is there any cost to participate?',
      answer: 'No, participation in Vigybag Winter of Code is completely free.'
    },
  ]

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-700 pb-4">
          <button
            className="flex justify-between items-center w-full text-left"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <span className="text-white font-bold">{faq.question}</span>
            {activeIndex === index ? (
              <ChevronUp className="text-white" />
            ) : (
              <ChevronDown className="text-white" />
            )}
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-gray-400 text-sm"
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

const NewsletterForm = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Subscribed with email:', email)
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded-full flex-grow"
          required
        />
        <button
          type="submit"
          className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition-colors"
        >
          Subscribe
        </button>
      </div>
    </form>
  )
}

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const headerRef = useRef(null)
  const heroRef = useRef(null)
  const projectsRef = useRef(null)
  const benefitsRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const header = headerRef.current
    const hero = heroRef.current
    const projects = projectsRef.current
    const benefits = benefitsRef.current

    if (header) header.style.opacity = '0'
    if (hero) hero.style.opacity = '0'
    if (projects) projects.style.opacity = '0'
    if (benefits) benefits.style.opacity = '0'

    setTimeout(() => {
      setIsLoading(false)
      
      setTimeout(() => {
        if (header) {
          header.style.transition = 'opacity 1s, transform 1s'
          header.style.opacity = '1'
        }
      }, 100)

      setTimeout(() => {
        if (hero) {
          hero.style.transition = 'opacity 1s'
          hero.style.opacity = '1'
        }
      }, 500)
    }, 3000)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.transition = 'opacity 1s, transform 1s'
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateX(0)'
          }
        })
      },
      { threshold: 0.1 }
    )

    if (projects) {
      projects.style.transform = 'translateX(-100px)'
      observer.observe(projects)
    }
    if (benefits) {
      benefits.style.transform = 'translateX(100px)'
      observer.observe(benefits)
    }

    return () => {
      observer.disconnect()
      lenis.destroy()
    }
  }, [])

  return (
    <div className="bg-[#121212ff] min-h-screen w-full overflow-x-hidden font-pixel">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        body {
          font-family: 'Press Start 2P', cursive;
        }
      `}</style>
      
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="flex flex-col">
          
        
          <main className="flex-1 pt-16">
            {/* Hero Section */}
            <div ref={heroRef} className="relative h-screen">
              <div className="absolute inset-0">
                <MatrixRainEffect />
              </div>
              <motion.div 
                className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-white">
                  VIGYBAG WINTER<br />OF CODE 2024
                </h1>
                <CountdownTimer />
                <p className="text-sm md:text-base mb-6 max-w-md text-gray-400">
                  Dive into open-source projects and enhance your coding skills during the winter break.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["WEB", "AI/ML", "MOBILE", "BLOCKCHAIN"].map((label, index) => (
                    <motion.button 
                      key={index}
                      className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          
            {/* Projects and Benefits Section */}
            <div className="bg-[#121212ff]">
              <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
                    ref={projectsRef}
                    className="bg-gray-800 p-6 rounded-3xl md:col-span-1"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src="https://th.bing.com/th/id/OIP.63x9iw-eA_o6xcIAyWLhNQHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain"
                        alt="Mentor Avatar 1"
                        className="w-10 h-10 rounded-full mr-2"
                      />
                      <img
                        src="https://thumbs.dreamstime.com/b/print-194810496.jpg"
                        alt="Mentor Avatar 2"
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                    <h2 className="text-lg font-bold text-white mb-3">PROJECTS FOR ALL LEVELS</h2>
                    <p className="text-xs text-gray-400 mb-4">From Beginner to Advanced, find the perfect project to contribute to and learn from.</p>
                    <img
                      src="https://kit8.net/wp-content/uploads/2020/12/Coding@2x.png"
                      alt="Coding illustration"
                      className="w-full h-40 object-cover rounded-2xl"
                    />
                  </motion.div>
                  <motion.div
                    ref={benefitsRef}
                    className="md:col-span-2"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <h2 className="text-xl font-bold text-white mb-6">BENEFITS OF PARTICIPATING IN WINTER OF CODE</h2>
                    <div className="space-y-6">
                      {['SKILL ENHANCEMENT', 'MENTORSHIP', 'NETWORKING OPPORTUNITIES'].map((benefit, index) => (
                        <motion.div 
                          key={index} 
                          className="flex items-start space-x-4"
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="w-14 h-14 bg-gray-700 rounded-full flex-shrink-0 flex items-center justify-center">
                            <Code className="w-8 h-8 text-gray-400" />
                          </div>
                          <div>
                            <h3 className="font-bold text-white text-sm mb-1">{benefit}</h3>
                            <p className="text-gray-400 text-xs">
                              {index === 0 && "Improve your coding skills by working on real-world projects."}
                              {index === 1 && "Get guidance from experienced developers in your field of interest."}
                              {index === 2 && "Connect with like-minded developers and mentors."}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Project Showcase Section */}
            <div className="bg-[#1a1a1a] py-16">
              <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-2xl font-bold text-white mb-8">Featured Projects</h2>
                <ProjectShowcase />
              </div>
            </div>

            {/* contributors Spotlight Section */}
            <div className="bg-[#121212ff] py-16">
              <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-2xl font-bold text-white mb-8">Meet Our Contributors</h2>
                <ContributorsSpotlight />
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-[#1a1a1a] py-16">
              <div className="max-w-3xl mx-auto px-4 md:px-8">
                <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
                <FAQAccordion />
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-[#121212ff] py-16">
              <div className="max-w-3xl mx-auto px-4 md:px-8 text-center border border-gray-600 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
                <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and opportunities.</p>
                <NewsletterForm />
              </div>
            </div>
          </main>

        
        </div>
      )}
    </div>
  )
}