import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Code2, Users, Gift, Rocket, Calendar, Star, Trophy, Target, Zap, ArrowRight, CheckCircle, Award, Globe, Heart, Shield } from 'lucide-react';

const timelineData = [
  {
    date: '29-30th Sept',
    event: 'Project Assignment to Mentors',
    description: 'Mentors receive their assigned projects and begin preparation',
    icon: Users,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    date: '1st October', 
    event: 'Community Bonding Period Starts',
    description: 'Students connect with mentors and explore project repositories',
    icon: Heart,
    color: 'from-pink-500 to-rose-500'
  },
  {
    date: '3rd October',
    event: 'Coding Period Starts', 
    description: 'The main coding phase begins with active development',
    icon: Code2,
    color: 'from-green-500 to-emerald-500'
  },
  {
    date: '5th October',
    event: 'Leaderboard Opens',
    description: 'Track your progress and compete with fellow developers',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-500'
  },
];

const partners = [
  { name: 'Google Developer Student Clubs', logo: 'https://res.cloudinary.com/startup-grind/image/upload/dpr_2.0,fl_sanitize/v1/gcs/platform-data-dsc/contentbuilder/logo_dark_stacked_5giak2X.svg' },
  { name: 'GitHub', logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
  { name: 'Microsoft', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' },
  { name: 'AWS', logo: 'https://a0.awsstatic.com/libra-css/images/logos/aws_smile-header-desktop-en-white_59x35.png' },
  { name: 'Docker', logo: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png' },
  { name: 'MongoDB', logo: 'https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png' },
];

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    // Auto-advance timeline
    const interval = setInterval(() => {
      setActiveTimeline(prev => (prev + 1) % timelineData.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const StatCard = ({ icon: Icon, number, label, gradient }) => (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" style={{background: `linear-gradient(135deg, ${gradient})`}}></div>
      <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 text-center">
        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r mb-4`} style={{background: `linear-gradient(135deg, ${gradient})`}}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="text-4xl font-bold text-white mb-2">{number}</div>
        <div className="text-gray-400">{label}</div>
      </div>
    </div>
  );

  const RewardCard = ({ icon: Icon, title, description, gradient, features }) => (
    <div className="group relative h-full">
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl" style={{background: `linear-gradient(135deg, ${gradient})`}}></div>
      <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
        <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r mb-6`} style={{background: `linear-gradient(135deg, ${gradient})`}}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-400">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const TimelineItem = ({ item, index, isActive }) => (
    <div 
      className={`relative transition-all duration-500 cursor-pointer ${
        isActive ? 'scale-105' : 'hover:scale-102'
      }`}
      onClick={() => setActiveTimeline(index)}
    >
      <div className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-3xl p-8 transition-all duration-500 ${
        isActive 
          ? 'border-cyan-400/60 shadow-lg shadow-cyan-400/20' 
          : 'border-slate-700/50 hover:border-cyan-400/30'
      }`}>
        <div className="flex items-start space-x-4">
          <div className={`p-3 rounded-2xl bg-gradient-to-r ${item.color} flex-shrink-0`}>
            <item.icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
              isActive ? 'text-cyan-400' : 'text-white'
            }`}>
              {item.date}
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">{item.event}</h4>
            <p className="text-gray-400 leading-relaxed">{item.description}</p>
          </div>
        </div>
        {isActive && (
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
            <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-black min-h-screen text-white overflow-hidden">
      <style jsx="true" global="true">{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-black mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                About VWoC
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover the future of open-source collaboration and join thousands of developers building tomorrow's technology
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <StatCard icon={Users} number="5000+" label="Contributors" gradient="#06b6d4, #8b5cf6" />
            <StatCard icon={Code2} number="200+" label="Projects" gradient="#10b981, #06b6d4" />
            <StatCard icon={Globe} number="50+" label="Countries" gradient="#f59e0b, #ef4444" />
            <StatCard icon={Award} number="95%" label="Success Rate" gradient="#8b5cf6, #ec4899" />
          </div>

          {/* Main Description */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-400/10 to-pink-400/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 p-12 rounded-3xl">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mr-6">
                  <Code2 className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  VWoC: How it Works?
                </h2>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                VWoC (Vigybag Winter of Code) provides a fully immersive learning experience for students and first-time contributors by promoting the wonders of open-source software and crafting a community of new and experienced technical developers.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                The best projects are selected for this program. Students get acquainted with the projects from the mentors during the Community Bonding Period. Students work on these projects during the coding phase. At the end of the coding period, the winners of the programs are announced based on their contribution in terms of quantity as well as quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Partners */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Community Partners
            </span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Trusted by leading organizations and supported by industry giants
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-full h-16 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Rewards & Benefits
              </span>
            </h2>
            <h3 className="text-2xl font-semibold text-gray-300 mb-4">
              Why you must register for VWoC 2024?
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Join thousands of developers and unlock exclusive benefits, recognition, and career opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <RewardCard
              icon={Users}
              title="Community Bonding"
              description="Connect with experienced mentors and like-minded developers from around the world."
              gradient="#06b6d4, #8b5cf6"
              features={[
                "One-on-one mentorship sessions",
                "Weekly community meetups", 
                "Exclusive Discord community access",
                "Networking opportunities"
              ]}
            />
            <RewardCard
              icon={Award}
              title="Digital Certification"
              description="Receive verified certificates that enhance your professional profile and resume."
              gradient="#10b981, #059669"
              features={[
                "LinkedIn-verified certificates",
                "Skill endorsements",
                "Portfolio enhancement",
                "Industry recognition"
              ]}
            />
            <RewardCard
              icon={Gift}
              title="Exclusive Rewards"
              description="Get recognized with social media shoutouts, swag, and exclusive VWoC merchandise."
              gradient="#f59e0b, #dc2626"
              features={[
                "Limited edition merchandise",
                "Social media features",
                "Winner announcements", 
                "Exclusive badges and titles"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Schedule of VWoC 2024
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Follow our carefully planned timeline to make the most of your VWoC journey
            </p>
          </div>
          
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <TimelineItem 
                key={index} 
                item={item} 
                index={index} 
                isActive={activeTimeline === index}
              />
            ))}
          </div>
          
          {/* Timeline Progress Bar */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-3">
              {timelineData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTimeline(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTimeline === index 
                      ? 'bg-cyan-400 scale-125' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12">
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ready to Begin Your Journey?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of developers already building the future of open source. Your contribution matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-2xl shadow-purple-500/25">
                  <span>Register Now</span>
                  <ArrowRight className="w-6 h-6" />
                </button>
                <button className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-10 py-5 rounded-full font-bold text-lg hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center space-x-3">
                  <span>View Projects</span>
                  <Code2 className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}