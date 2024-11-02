import {React ,useRef} from 'react'
import { motion } from 'framer-motion'
import loader from "../../../assets/Vigybag-logo.gif"
import logo from "../../../assets/Vigybag-logo.png"
import {Link } from "react-router-dom"

function Navbar() {
  const headerRef = useRef(null);
  const header = headerRef.current
  return (
    
    <>
    
    <header ref={headerRef} className=" fixed top-0 left-0 right-0 flex justify-between items-center p-4 md:p-6 backdrop-blur-md z-50 bg-opacity-80">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={loader} alt="Vigybag Logo" className="w-10 h-10 object-contain"  />
              <h1 className="text-xl font-bold text-white ">VWoC</h1>
            </motion.div>
            <motion.nav 
              className="hidden md:flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <Link to='/'> <button className="text-gray-300 hover:text-white text-xs">Home</button></Link>
              <Link to='/about'> <button className="text-gray-300 hover:text-white text-xs">About</button></Link>
              <Link to='/projects'> <button className="text-gray-300 hover:text-white text-xs">Projects</button></Link>
              <Link to='/mentors'> <button className="text-gray-300 hover:text-white text-xs">Mentors</button></Link>
              <Link to='/leaderboard'> <button className="text-gray-300 hover:text-white text-xs">Leaderboard</button></Link>
            </motion.nav>
            <Link to="/select"><motion.button
              className="bg-gray-800 text-white px-4 py-2 rounded-full text-xs hover:bg-gray-700 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Register Now
            </motion.button></Link>
          </header>
    </>
  )
}

export default Navbar
