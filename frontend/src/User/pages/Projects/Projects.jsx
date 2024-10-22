import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

// Sample project data with 9 projects
const sampleProjects = [
  {
    id: 1,
    title: 'Click-The-Edible-Game',
    author: 'Rakesh Roshan',
    description: 'A well-designed interesting game made using HTML, CSS, and JS where you can play with your favorite edible and click it to get the most scores.',
    repoLink: 'https://github.com/rakesh/click-the-edible-game',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Web', 'Development'],
    color: 'bg-purple-900'
  },
  {
    id: 2,
    title: 'Auberge',
    author: 'Shivam Verma',
    description: 'A hostel management app developed using Flutter, Firebase, and Google Sheets API, providing a platform for managing hostel life including announcements, mess menu updates, and more.',
    repoLink: 'https://github.com/shivam/auberge',
    tags: ['Flutter', 'Firebase', 'Google Sheets API'],
    color: 'bg-blue-900'
  },
  {
    id: 3,
    title: 'Beautify',
    author: 'Rakesh Roshan',
    description: 'Beautify comprises a curated selection of beautifully designed components and animations to elevate the overall UI experience of any website.',
    repoLink: 'https://github.com/rakesh/beautify',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web', 'Development'],
    color: 'bg-red-900'
  },
  {
    id: 4,
    title: 'CodeAid',
    author: 'Rahul Sharma',
    description: 'A platform for beginner coders to access tutorials, challenges, and a supportive coding community.',
    repoLink: 'https://github.com/rahul/codeaid',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    color: 'bg-green-900'
  },
  {
    id: 5,
    title: 'SmartFarm',
    author: 'Pooja Patel',
    description: 'SmartFarm is an IoT-based solution for real-time monitoring and managing agricultural activities, ensuring optimal crop yield and reducing waste.',
    repoLink: 'https://github.com/pooja/smartfarm',
    tags: ['IoT', 'Raspberry Pi', 'Sensors', 'Agriculture'],
    color: 'bg-yellow-900'
  },
  {
    id: 6,
    title: 'Expense Tracker',
    author: 'Ravi Verma',
    description: 'A cross-platform mobile app to manage personal finances, track expenses, and set savings goals with seamless cloud sync.',
    repoLink: 'https://github.com/ravi/expense-tracker',
    tags: ['Flutter', 'Firebase', 'Mobile', 'Finance'],
    color: 'bg-indigo-900'
  },
  {
    id: 7,
    title: 'TaskMate',
    author: 'Sneha Gupta',
    description: 'A task management tool designed to help users organize, prioritize, and complete tasks efficiently using a sleek and intuitive interface.',
    repoLink: 'https://github.com/sneha/taskmate',
    tags: ['React', 'Redux', 'Task Management', 'Productivity'],
    color: 'bg-pink-900'
  },
  {
    id: 8,
    title: 'Artfolio',
    author: 'Ananya Sharma',
    description: 'An online portfolio builder for artists, allowing them to showcase their work, connect with potential clients, and receive feedback.',
    repoLink: 'https://github.com/ananya/artfolio',
    tags: ['React', 'GraphQL', 'Portfolio', 'UI/UX'],
    color: 'bg-teal-900'
  },
  {
    id: 9,
    title: 'Weather Wizard',
    author: 'Vikram Sinha',
    description: 'A weather forecasting app that uses real-time data from multiple APIs to provide highly accurate weather predictions.',
    repoLink: 'https://github.com/vikram/weather-wizard',
    tags: ['React', 'Weather API', 'PWA'],
    color: 'bg-orange-900'
  }
];

export default function VWoCProjects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState(sampleProjects);
  const [selectedId, setSelectedId] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = sampleProjects.filter(project =>
      project.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(event.target.value.toLowerCase())) ||
      project.author.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setProjects(filtered);
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        
        * {
          font-family: 'Press Start 2P', cursive;
        }
      `}</style>

      <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-12 text-yellow-300 leading-relaxed">
          VWoC Projects
        </h1>
        
        <div className="relative max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Search By Name, Tag, or Author"
            className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none text-xs"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute right-3 top-3.5 text-gray-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              className={`${project.color} rounded-lg p-6 relative overflow-hidden cursor-pointer`}
              onClick={() => setSelectedId(project.id)}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2" />
              <h2 className="text-lg font-bold mb-4 text-yellow-300 leading-relaxed">{project.title}</h2>
              <p className="text-[10px] mb-4 text-gray-300 leading-relaxed">By {project.author}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="bg-yellow-400 text-black px-2 py-1 rounded-full text-[8px] leading-relaxed">
                    #{tag}
                  </span>
                ))}
              </div>
              <p className="text-[8px] mb-6 text-gray-200 leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className="fixed inset-0 bg-gray-800 bg-opacity-90 flex items-center justify-center p-6 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div className="bg-gray-700 p-8 rounded-lg text-white">
                <button
                  className="absolute top-4 right-4 bg-red-600 hover:bg-red-500 text-white rounded-full px-3 py-1 text-sm"
                  onClick={() => setSelectedId(null)}
                >
                  Close
                </button>
                {projects
                  .filter(project => project.id === selectedId)
                  .map(project => (
                    <div key={project.id}>
                      <h2 className="text-2xl font-bold mb-4 text-yellow-300">{project.title}</h2>
                      <p className="text-sm mb-2 text-gray-300">By {project.author}</p>
                      <p className="text-sm mb-6">{project.description}</p>
                      <a
                        href={project.repoLink}
                        className="inline-block bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors text-white text-xs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Repository
                      </a>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="bg-yellow-400 text-black px-2 py-1 rounded-full text-[10px]">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
