import React, { useState, useEffect, useMemo } from 'react';
import { Trophy, Medal, Award, Crown, Star, TrendingUp, TrendingDown, Minus, Zap, GitBranch, Code2, Users, Calendar, Filter, Search, ChevronDown, Target, Flame, Sparkles } from 'lucide-react';

const sampleScores = [
  { 
    id: 1, 
    name: 'Sarah Chen', 
    username: '@sarahc_dev',
    score: 2850, 
    avatar: 'SC',
    contributions: 47,
    streak: 12,
    lastActive: '2 hours ago',
    trend: 'up',
    trendChange: 15,
    level: 'Expert',
    badges: ['🏆', '🔥', '⭐'],
    projects: 8
  },
  { 
    id: 2, 
    name: 'Alex Rodriguez', 
    username: '@alexr_code',
    score: 2720, 
    avatar: 'AR',
    contributions: 42,
    streak: 9,
    lastActive: '1 hour ago',
    trend: 'up',
    trendChange: 8,
    level: 'Expert',
    badges: ['🥈', '💎', '🚀'],
    projects: 6
  },
  { 
    id: 3, 
    name: 'Maya Patel', 
    username: '@maya_builds',
    score: 2580, 
    avatar: 'MP',
    contributions: 38,
    streak: 15,
    lastActive: '30 minutes ago',
    trend: 'up',
    trendChange: 12,
    level: 'Advanced',
    badges: ['🥉', '⚡', '🌟'],
    projects: 7
  },
  { 
    id: 4, 
    name: 'David Kim', 
    username: '@davidk_dev',
    score: 2340, 
    avatar: 'DK',
    contributions: 35,
    streak: 6,
    lastActive: '3 hours ago',
    trend: 'down',
    trendChange: -3,
    level: 'Advanced',
    badges: ['💻', '🎯'],
    projects: 5
  },
  { 
    id: 5, 
    name: 'Emma Thompson', 
    username: '@emmacodes',
    score: 2180, 
    avatar: 'ET',
    contributions: 31,
    streak: 8,
    lastActive: '1 hour ago',
    trend: 'up',
    trendChange: 6,
    level: 'Advanced',
    badges: ['🌈', '💡'],
    projects: 4
  },
  { 
    id: 6, 
    name: 'Marcus Johnson', 
    username: '@marcusj_tech',
    score: 1950, 
    avatar: 'MJ',
    contributions: 28,
    streak: 4,
    lastActive: '5 hours ago',
    trend: 'same',
    trendChange: 0,
    level: 'Intermediate',
    badges: ['🔧'],
    projects: 3
  },
  { 
    id: 7, 
    name: 'Lily Wang', 
    username: '@lily_codes',
    score: 1820, 
    avatar: 'LW',
    contributions: 25,
    streak: 7,
    lastActive: '2 hours ago',
    trend: 'up',
    trendChange: 9,
    level: 'Intermediate',
    badges: ['🎨', '✨'],
    projects: 4
  },
  { 
    id: 8, 
    name: 'Ryan O\'Connor', 
    username: '@ryan_builds',
    score: 1690, 
    avatar: 'RO',
    contributions: 22,
    streak: 3,
    lastActive: '4 hours ago',
    trend: 'down',
    trendChange: -5,
    level: 'Intermediate',
    badges: ['🌟'],
    projects: 3
  },
  { 
    id: 9, 
    name: 'Zoe Martinez', 
    username: '@zoe_dev',
    score: 1540, 
    avatar: 'ZM',
    contributions: 19,
    streak: 5,
    lastActive: '6 hours ago',
    trend: 'up',
    trendChange: 4,
    level: 'Beginner',
    badges: ['🌱'],
    projects: 2
  },
  { 
    id: 10, 
    name: 'Jack Wilson', 
    username: '@jackw_code',
    score: 1420, 
    avatar: 'JW',
    contributions: 16,
    streak: 2,
    lastActive: '1 day ago',
    trend: 'same',
    trendChange: 0,
    level: 'Beginner',
    badges: ['🎯'],
    projects: 2
  }
];

const timeRanges = ['All Time', 'This Month', 'This Week', 'Today'];
const categories = ['Overall', 'Contributions', 'Streak', 'Projects'];

export default function EnhancedVWoCLeaderboard() {
  const [scores, setScores] = useState(sampleScores);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTimeRange, setSelectedTimeRange] = useState('All Time');
  const [selectedCategory, setSelectedCategory] = useState('Overall');
  const [showFilters, setShowFilters] = useState(false);
  const [animatedScores, setAnimatedScores] = useState({});

  useEffect(() => {
    // Animate score counting
    const animateScores = () => {
      const newAnimatedScores = {};
      scores.forEach(user => {
        let currentScore = 0;
        const targetScore = user.score;
        const increment = targetScore / 50;
        
        const animate = () => {
          if (currentScore < targetScore) {
            currentScore += increment;
            newAnimatedScores[user.id] = Math.min(Math.floor(currentScore), targetScore);
            setAnimatedScores({...newAnimatedScores});
            requestAnimationFrame(animate);
          }
        };
        animate();
      });
    };

    const timer = setTimeout(animateScores, 300);
    return () => clearTimeout(timer);
  }, [scores]);

  const filteredScores = useMemo(() => {
    return scores.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [scores, searchTerm]);

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1: return <Crown className="w-6 h-6 text-yellow-400" />;
      case 2: return <Medal className="w-6 h-6 text-gray-300" />;
      case 3: return <Award className="w-6 h-6 text-orange-400" />;
      default: return <span className="text-2xl font-bold text-cyan-400">#{rank}</span>;
    }
  };

  const getTrendIcon = (trend, change) => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-400" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-red-400" />;
    return <Minus className="w-4 h-4 text-gray-400" />;
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'from-purple-500 to-pink-500';
      case 'Advanced': return 'from-blue-500 to-cyan-500';
      case 'Intermediate': return 'from-green-500 to-emerald-500';
      case 'Beginner': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const getScoreDisplay = (userId, originalScore) => {
    return animatedScores[userId] !== undefined ? animatedScores[userId] : originalScore;
  };

  const LeaderboardCard = ({ user, rank, isTopThree = false }) => (
    <div className={`group relative ${isTopThree ? 'mb-8' : 'mb-4'}`}>
      <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl blur-xl ${
        rank === 1 ? 'from-yellow-400 to-orange-500' :
        rank === 2 ? 'from-gray-300 to-slate-400' :
        rank === 3 ? 'from-orange-400 to-red-500' :
        'from-cyan-400 to-purple-500'
      }`}></div>
      
      <div className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 ${
        isTopThree ? 'transform hover:scale-110' : ''
      } ${rank === 1 ? 'ring-2 ring-yellow-400/30' : ''}`}>
        
        {/* Top 3 special styling */}
        {isTopThree && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className={`px-4 py-2 rounded-full text-white font-bold text-sm bg-gradient-to-r ${
              rank === 1 ? 'from-yellow-400 to-orange-500' :
              rank === 2 ? 'from-gray-300 to-slate-400' :
              'from-orange-400 to-red-500'
            }`}>
              {rank === 1 ? '👑 Champion' : rank === 2 ? '🥈 Runner-up' : '🥉 Third Place'}
            </div>
          </div>
        )}

        <div className="flex items-center space-x-4">
          {/* Rank */}
          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12">
            {getRankIcon(rank)}
          </div>

          {/* Avatar */}
          <div className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${getLevelColor(user.level)} flex items-center justify-center font-bold text-white text-lg flex-shrink-0`}>
            {user.avatar}
            {user.streak > 10 && (
              <div className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                🔥
              </div>
            )}
          </div>

          {/* User Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-xl font-bold text-white truncate">{user.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getLevelColor(user.level)}`}>
                {user.level}
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-2">{user.username}</p>
            
            {/* Badges */}
            <div className="flex items-center space-x-1 mb-3">
              {user.badges.map((badge, index) => (
                <span key={index} className="text-lg">{badge}</span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <GitBranch className="w-4 h-4" />
                <span>{user.contributions}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Flame className="w-4 h-4 text-orange-400" />
                <span>{user.streak}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Code2 className="w-4 h-4" />
                <span>{user.projects}</span>
              </div>
            </div>
          </div>

          {/* Score and Trend */}
          <div className="text-right flex-shrink-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-3xl font-bold text-cyan-400">
                {getScoreDisplay(user.id, user.score).toLocaleString()}
              </span>
              <div className="flex items-center space-x-1">
                {getTrendIcon(user.trend, user.trendChange)}
                {user.trendChange !== 0 && (
                  <span className={`text-sm font-medium ${
                    user.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {Math.abs(user.trendChange)}
                  </span>
                )}
              </div>
            </div>
            <p className="text-xs text-gray-500">{user.lastActive}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-black text-white overflow-hidden">
      <style jsx="true" global="true">{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 p-6 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Leaderboard
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Compete with the best developers in VWoC 2024. Track your progress and climb to the top!
            </p>
            
            {/* Quick Stats */}
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span>Active Competition</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span>{filteredScores.length} Participants</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>Live Updates</span>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search participants..."
                  className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-slate-700/80 transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Time Range */}
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
              >
                {timeRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>

              {/* Category */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Top 3 Podium */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              🏆 Hall of Fame
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredScores.slice(0, 3).map((user, index) => (
                <LeaderboardCard 
                  key={user.id} 
                  user={user} 
                  rank={index + 1} 
                  isTopThree={true}
                />
              ))}
            </div>
          </div>

          {/* Rest of Leaderboard */}
          {filteredScores.length > 3 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-6 text-gray-300">
                Rising Stars
              </h2>
              <div className="space-y-4">
                {filteredScores.slice(3).map((user, index) => (
                  <LeaderboardCard 
                    key={user.id} 
                    user={user} 
                    rank={index + 4}
                  />
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredScores.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12 max-w-md mx-auto">
                <Target className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Participants Found</h3>
                <p className="text-gray-400 mb-4">
                  Try adjusting your search criteria.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-cyan-400 hover:to-purple-500 transition-all duration-300"
                >
                  Clear Search
                </button>
              </div>
            </div>
          )}

          {/* Footer Info */}
          <div className="text-center py-8 border-t border-slate-700/50">
            <p className="text-gray-400 mb-4">
              Leaderboard updates every 10 minutes • Last updated: Just now
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span>Live Competition Active</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Ends: October 31, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}