import React, { useState, useEffect, useMemo } from 'react';
import { Search, Filter, Grid, List, Star, Users, Code2, ExternalLink, GitBranch, Heart, Eye, Calendar, Tag, User, Zap, Sparkles, ChevronDown, X } from 'lucide-react';

const sampleProjects = [
  {
    id: 1,
    title: 'Click-The-Edible-Game',
    author: 'Rakesh Roshan',
    description: 'A well-designed interesting game made using HTML, CSS, and JS where you can play with your favourite edible and click it to get the most scores.',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Web', 'Development'],
    difficulty: 'Beginner',
    stars: 142,
    contributors: 8,
    issues: 12,
    lastUpdated: '2 days ago',
    category: 'Game Development',
    status: 'Active',
    featured: true
  },
  {
    id: 2,
    title: 'Auberge',
    author: 'Shivam Verma',
    description: 'Auberge is a hostel management app developed using Flutter, Firebase, and Google Sheets API. It provides a platform for managing hostel life, including sending announcements, reporting maintenance issues, providing daily mess menu updates, and a food rating system.',
    tags: ['Flutter', 'Firebase', 'Google', 'Sheets', 'API'],
    difficulty: 'Intermediate',
    stars: 89,
    contributors: 12,
    issues: 7,
    lastUpdated: '1 day ago',
    category: 'Mobile Development',
    status: 'Active',
    featured: false
  },
  {
    id: 3,
    title: 'Beautify',
    author: 'Rakesh Roshan',
    description: 'Beautify comprises a curated selection of beautifully designed components and animations that can be seamlessly incorporated into any website, elevating its overall UI experience.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web', 'Development'],
    difficulty: 'Intermediate',
    stars: 205,
    contributors: 15,
    issues: 5,
    lastUpdated: '3 hours ago',
    category: 'UI/UX',
    status: 'Active',
    featured: true
  },
  {
    id: 4,
    title: 'AI Code Assistant',
    author: 'Sarah Johnson',
    description: 'An intelligent code completion and suggestion tool powered by machine learning algorithms to help developers write better code faster.',
    tags: ['Python', 'Machine Learning', 'NLP', 'AI'],
    difficulty: 'Advanced',
    stars: 324,
    contributors: 23,
    issues: 18,
    lastUpdated: '5 hours ago',
    category: 'AI/ML',
    status: 'Active',
    featured: true
  },
  {
    id: 5,
    title: 'EcoTracker',
    author: 'Mike Chen',
    description: 'A comprehensive environmental impact tracking application that helps users monitor their carbon footprint and suggests eco-friendly alternatives.',
    tags: ['React', 'Node.js', 'MongoDB', 'Sustainability'],
    difficulty: 'Intermediate',
    stars: 156,
    contributors: 9,
    issues: 14,
    lastUpdated: '1 week ago',
    category: 'Environmental',
    status: 'Active',
    featured: false
  },
  {
    id: 6,
    title: 'CryptoVault',
    author: 'Alex Rivera',
    description: 'A secure cryptocurrency portfolio manager with real-time tracking, advanced analytics, and multi-wallet support for various blockchain networks.',
    tags: ['Blockchain', 'React', 'Web3', 'Cryptocurrency'],
    difficulty: 'Advanced',
    stars: 278,
    contributors: 18,
    issues: 9,
    lastUpdated: '2 days ago',
    category: 'Blockchain',
    status: 'Active',
    featured: true
  }
];

const categories = ['All', 'Game Development', 'Mobile Development', 'UI/UX', 'AI/ML', 'Environmental', 'Blockchain'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function EnhancedVWoCProjects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('stars');
  const [favoriteProjects, setFavoriteProjects] = useState(new Set());

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = sampleProjects.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        project.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All' || project.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'stars':
          return b.stars - a.stars;
        case 'contributors':
          return b.contributors - a.contributors;
        case 'recent':
          return new Date(b.lastUpdated) - new Date(a.lastUpdated);
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedDifficulty, sortBy]);

  const toggleFavorite = (projectId) => {
    setFavoriteProjects(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(projectId)) {
        newFavorites.delete(projectId);
      } else {
        newFavorites.add(projectId);
      }
      return newFavorites;
    });
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'from-green-500 to-emerald-500';
      case 'Intermediate': return 'from-yellow-500 to-orange-500';
      case 'Advanced': return 'from-red-500 to-pink-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const ProjectCard = ({ project, isList = false }) => (
    <div className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/10 ${isList ? 'flex items-center p-4' : 'p-6'}`}>
      {/* Animated background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-purple-400/5 to-pink-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
            <Star className="w-3 h-3 fill-current" />
            <span>Featured</span>
          </div>
        </div>
      )}

      {/* Favorite button */}
      <button 
        onClick={() => toggleFavorite(project.id)}
        className="absolute top-3 left-3 z-10 p-2 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 hover:border-red-400/50 transition-all duration-300"
      >
        <Heart className={`w-4 h-4 transition-colors duration-300 ${favoriteProjects.has(project.id) ? 'text-red-400 fill-current' : 'text-slate-400'}`} />
      </button>

      <div className={`relative z-10 ${isList ? 'flex-1 flex items-center space-x-6' : ''}`}>
        {!isList && (
          <>
            {/* Project header */}
            <div className="flex items-start justify-between mb-4 mt-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <User className="w-4 h-4" />
                  <span>{project.author}</span>
                </div>
              </div>
            </div>

            {/* Difficulty badge */}
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getDifficultyColor(project.difficulty)}`}>
                {project.difficulty}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-6 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.slice(0, 4).map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-slate-700/50 text-cyan-300 rounded-lg text-xs border border-slate-600/50 hover:border-cyan-400/50 transition-colors duration-300">
                  #{tag}
                </span>
              ))}
              {project.tags.length > 4 && (
                <span className="px-2 py-1 bg-slate-700/50 text-gray-400 rounded-lg text-xs border border-slate-600/50">
                  +{project.tags.length - 4}
                </span>
              )}
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-4 mb-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{project.stars}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-blue-400" />
                <span>{project.contributors}</span>
              </div>
              <div className="flex items-center space-x-1">
                <GitBranch className="w-4 h-4 text-green-400" />
                <span>{project.issues}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>{project.lastUpdated}</span>
              </div>
            </div>

            {/* Action button */}
            <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/25">
              <Code2 className="w-5 h-5" />
              <span>Contribute Now</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </>
        )}

        {isList && (
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-4">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">{project.author}</p>
              </div>
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-slate-700/50 text-cyan-300 rounded text-xs">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{project.stars}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-blue-400" />
                <span>{project.contributors}</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs text-white bg-gradient-to-r ${getDifficultyColor(project.difficulty)}`}>
                {project.difficulty}
              </span>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 flex items-center space-x-1">
                <span>Contribute</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 p-6 md:p-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                VWoC Projects
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover amazing open-source projects waiting for your contribution. Join the community and make an impact!
            </p>
            <div className="flex items-center justify-center space-x-6 mt-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span>{filteredAndSortedProjects.length} Projects Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span>{sampleProjects.reduce((acc, p) => acc + p.contributors, 0)} Contributors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-purple-400" />
                <span>Always Active</span>
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
                  placeholder="Search projects by name, tags, or author..."
                  className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:bg-slate-700/80 transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  showFilters 
                    ? 'bg-cyan-500/20 text-cyan-400 border-cyan-400/50' 
                    : 'bg-slate-700/50 text-gray-300 border-slate-600/50 hover:border-cyan-400/30'
                } border`}
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
              </button>

              {/* View Mode Toggle */}
              <div className="flex bg-slate-700/50 rounded-xl p-1 border border-slate-600/50">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-cyan-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-slate-600/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* Difficulty Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Difficulty</label>
                    <select
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
                    >
                      {difficulties.map(difficulty => (
                        <option key={difficulty} value={difficulty}>{difficulty}</option>
                      ))}
                    </select>
                  </div>

                  {/* Sort By */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
                    >
                      <option value="stars">Most Stars</option>
                      <option value="contributors">Most Contributors</option>
                      <option value="recent">Recently Updated</option>
                      <option value="name">Alphabetical</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results Info */}
          <div className="flex items-center justify-between mb-8 text-sm text-gray-400">
            <span>
              Showing {filteredAndSortedProjects.length} of {sampleProjects.length} projects
            </span>
            {(searchTerm || selectedCategory !== 'All' || selectedDifficulty !== 'All') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedDifficulty('All');
                }}
                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <X className="w-4 h-4" />
                <span>Clear Filters</span>
              </button>
            )}
          </div>

          {/* Projects Grid/List */}
          {filteredAndSortedProjects.length > 0 ? (
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'space-y-4'
            }>
              {filteredAndSortedProjects.map(project => (
                <ProjectCard key={project.id} project={project} isList={viewMode === 'list'} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12 max-w-md mx-auto">
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Projects Found</h3>
                <p className="text-gray-400 mb-4">
                  Try adjusting your search criteria or clearing the filters.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                    setSelectedDifficulty('All');
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-cyan-400 hover:to-purple-500 transition-all duration-300"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}