import React, { useState } from 'react';
import { Search } from 'lucide-react';

// Define sample data
const sampleProjects = [
  {
    id: 1,
    title: 'Click-The-Edible-Game',
    author: 'Rakesh Roshan',
    description: 'A well-designed interesting game made using HTML, CSS, and JS where you can play with your favourite edible and click it to get the most scores.',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Web', 'Development'],
    color: 'bg-purple-900'
  },
  {
    id: 2,
    title: 'Auberge',
    author: 'Shivam Verma',
    description: 'Auberge is a hostel management app developed using Flutter, Firebase, and Google Sheets API. It provides a platform for managing hostel life, including sending announcements, reporting maintenance issues, providing daily mess menu updates, and a food rating system.',
    tags: ['Flutter', 'Firebase', 'Google', 'Sheets', 'API'],
    color: 'bg-blue-900'
  },
  {
    id: 3,
    title: 'Beautify',
    author: 'Rakesh Roshan',
    description: 'Beautify comprises a curated selection of beautifully designed components and animations that can be seamlessly incorporated into any website, elevating its overall UI experience.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web', 'Development'],
    color: 'bg-red-900'
  },
  // ... add all other projects here
];

export default function JWoCProjects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState(sampleProjects);

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
            placeholder="Search By Name or Tag"
            className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none text-xs"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className="absolute right-3 top-3.5 text-gray-500" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className={`${project.color} rounded-lg p-6 relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2" />
              <h2 className="text-lg font-bold mb-4 text-yellow-300 leading-relaxed">
                {project.title}
              </h2>
              <p className="text-[10px] mb-4 text-gray-300 leading-relaxed">By {project.author}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="bg-yellow-400 text-black px-2 py-1 rounded-full text-[8px] leading-relaxed">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <p className="text-[8px] mb-6 text-gray-200 leading-relaxed">{project.description}</p>
              
              <button className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors text-white text-[10px]">
                Contribute Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}