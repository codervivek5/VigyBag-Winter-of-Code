import React, { useState } from 'react';
import { motion, Reorder } from 'framer-motion';

// Sample mentor data with placeholders
const sampleMentors = [
  {
    id: 1,
    name: 'John Doe',
    designation: 'Senior Developer',
    bio: 'John is a seasoned developer with expertise in full-stack web development. He loves mentoring students and sharing his knowledge.',
    img: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    twitter: 'https://twitter.com/johndoe',
    color: 'bg-purple-900'
  },
  {
    id: 2,
    name: 'Jane Smith',
    designation: 'UI/UX Designer',
    bio: 'Jane is passionate about creating visually appealing and user-friendly designs. She has mentored many students in UI/UX design.',
    img: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/in/janesmith',
    twitter: 'https://twitter.com/janesmith',
    color: 'bg-blue-900'
  },
  {
    id: 3,
    name: 'Michael Johnson',
    designation: 'Data Scientist',
    bio: 'Michael specializes in data analysis and machine learning. He enjoys helping students understand complex data concepts.',
    img: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/in/michaeljohnson',
    twitter: 'https://twitter.com/michaeljohnson',
    color: 'bg-red-900'
  },
  {
    id: 4,
    name: 'Emily Davis',
    designation: 'Mobile Developer',
    bio: 'Emily is a mobile development expert who has worked on both iOS and Android projects. She loves teaching students mobile app development.',
    img: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/in/emilydavis',
    twitter: 'https://twitter.com/emilydavis',
    color: 'bg-green-900'
  },
  {
    id: 5,
    name: 'Chris Lee',
    designation: 'DevOps Engineer',
    bio: 'Chris is a DevOps engineer with years of experience in automating workflows and improving software delivery processes.',
    img: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/in/chrislee',
    twitter: 'https://twitter.com/chrislee',
    color: 'bg-yellow-900'
  },
  {
    id: 6,
    name: 'Sophia Brown',
    designation: 'Blockchain Developer',
    bio: 'Sophia is a blockchain expert with deep knowledge in decentralized technologies and smart contract development.',
    img: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/in/sophiabrown',
    twitter: 'https://twitter.com/sophiabrown',
    color: 'bg-indigo-900'
  },
  {
    id: 7,
    name: 'David Wilson',
    designation: 'Cybersecurity Specialist',
    bio: 'David is a cybersecurity specialist who has worked in the field for over a decade, helping students secure their applications.',
    img: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/in/davidwilson',
    twitter: 'https://twitter.com/davidwilson',
    color: 'bg-pink-900'
  },
  {
    id: 8,
    name: 'Olivia Martinez',
    designation: 'Cloud Architect',
    bio: 'Olivia designs cloud solutions for enterprises and enjoys teaching students how to build scalable cloud-based applications.',
    img: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/in/oliviamartinez',
    twitter: 'https://twitter.com/oliviamartinez',
    color: 'bg-teal-900'
  },
  {
    id: 9,
    name: 'James Anderson',
    designation: 'AI Researcher',
    bio: 'James is an AI researcher working on cutting-edge machine learning technologies. He loves mentoring students in AI development.',
    img: 'https://via.placeholder.com/150',
    linkedin: 'https://www.linkedin.com/in/jamesanderson',
    twitter: 'https://twitter.com/jamesanderson',
    color: 'bg-orange-900'
  }
];

export default function MentorPage() {
  const [mentors, setMentors] = useState(sampleMentors);

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
          VWoC Mentors
        </h1>

        <Reorder.Group values={mentors} onReorder={setMentors} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map(mentor => (
            <Reorder.Item key={mentor.id} value={mentor} className="cursor-pointer">
              <motion.div
                layoutId={mentor.id}
                className={`${mentor.color} rounded-lg p-6 relative overflow-hidden`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2" />
                
                <img
                  src={mentor.img}
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full mb-4 mx-auto"
                />
                
                <h2 className="text-lg font-bold mb-2 text-yellow-300 text-center">{mentor.name}</h2>
                <p className="text-sm text-gray-300 text-center">{mentor.designation}</p>
                <p className="text-[10px] mb-4 text-gray-300 leading-relaxed text-center">{mentor.bio}</p>
                
                <div className="flex justify-center space-x-4">
                  <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                    LinkedIn
                  </a>
                  <a href={mentor.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                    Twitter
                  </a>
                </div>
              </motion.div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </>
  );
}
