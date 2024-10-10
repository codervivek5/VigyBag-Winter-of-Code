import React, { useEffect, useRef } from 'react';
import { Sparkles, Code2, Users, Gift, Rocket, Calendar } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    date: '29-30th Sept',
    event: 'Project Assignment to Mentors',
  },
  {
    date: '1st October',
    event: 'Coding Period Starts',
  },
  {
    date: '3rd October',
    event: 'Community bonding period starts',
  },
  {
    date: '5th October',
    event: 'Leaderboard Opens',
  },
];

export default function About() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    gsap.to('.circular-overlay', {
      scale: 1.2,
      opacity: 0.8,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.5,
    });
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

          body {
            font-family: 'Press Start 2P', cursive;
          }
        `}
      </style>

      {/* Hero Section */}
      <section ref={el => (sectionRefs.current[0] = el)} className="relative py-20 px-4">
        <div className="absolute inset-0">
          <div className="circular-overlay absolute w-96 h-96 bg-blue-500 rounded-full opacity-10 top-1/4 -left-48" />
          <div className="circular-overlay absolute w-96 h-96 bg-purple-500 rounded-full opacity-10 bottom-1/4 -right-48" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl font-bold mb-8">About Us</h1>
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-8 rounded-lg shadow-2xl">
            <h2 className="text-3xl font-semibold mb-4 flex items-center">
              <Code2 className="mr-2" />
              VWoC: How it Works?
            </h2>
            <p className="text-lg leading-relaxed">
              VWoC (Vigybag Winter of Code) provides a fully immersive learning experience for students and first-time contributors by promoting the wonders of open-source software and crafting a community of new and experienced technical developers. The best projects are selected for this program. Students get acquainted with the projects from the mentors during the Community Bonding Period. Students work on these projects during the coding phase. At the end of the coding period, the winners of the programs are announced on the basis of their contribution in terms of quantity as well as quality.
            </p>
          </div>
        </div>
      </section>

      {/* Community Partners */}
      <section ref={el => (sectionRefs.current[1] = el)} className="py-20 px-4 relative">
        <div className="circular-overlay absolute w-96 h-96 bg-green-500 rounded-full opacity-10 top-1/4 -right-48" />
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Community Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <img src={`https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_stacked_5giak2X.svg`} alt={`Partner ${index + 1}`} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section ref={el => (sectionRefs.current[2] = el)} className="py-20 px-4 relative bg-[#0f0f0f]">
        <div className="circular-overlay absolute w-96 h-96 bg-yellow-500 rounded-full opacity-10 bottom-1/4 -left-48" />
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Rewards</h2>
          <h3 className="text-2xl font-semibold mb-12 text-center">Why you must register for JWoC 2024?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RewardCard
              icon={<Users className="w-16 h-16" />}
              title="Paid Internship Opportunities"
              description="Top performers get opportunities for paid internships with leading tech companies."
            />
            <RewardCard
              icon={<Gift className="w-16 h-16" />}
              title="Coupons & Free Domains"
              description="Receive free domains, cloud credits, and premium subscriptions to developer tools."
            />
            <RewardCard
              icon={<Rocket className="w-16 h-16" />}
              title="Goodies & Cool Stickers"
              description="Get exclusive JWoC merchandise, stickers, and certificates of completion."
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={el => (sectionRefs.current[3] = el)} className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Schedule of VWoC 2024</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-orange-500 rounded-full" />
            <div className="space-y-24">
              {timelineData.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{item.date}</h3>
                      <p className="text-gray-600">{item.event}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-orange-500 rounded-full border-4 border-[#0a0a0a]" />
                  </div>
                  <div className="w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const RewardCard = ({ icon, title, description }) => (
  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300">
    <div className="flex flex-col items-center mb-6 text-center">
      <div className="mb-4 text-white">{icon}</div>
      <h3 className="text-2xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-200 text-center">{description}</p>
  </div>
);
