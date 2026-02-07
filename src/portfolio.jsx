import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, Menu, X, Code, Server, Database, Award, Moon, Sun } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Social Network Platform",
      description: "Full-stack social platform with authentication, posts, likes, and comments. Built REST APIs using Django REST Framework with JWT authentication.",
      tech: ["Django", "DRF", "React", "PostgreSQL", "JWT", "Tailwind CSS"],
      github: "https://github.com/atifx17/social-network",
      highlights: ["REST APIs", "JWT Auth", "Responsive UI"]
    },
    {
      title: "WanderLust",
      description: "Accommodation marketplace with geolocation and image upload capabilities. Implemented Passport.js authentication and optimized MongoDB queries.",
      tech: ["Node.js", "Express.js", "MongoDB", "Passport.js", "Mapbox", "Cloudinary"],
      github: "https://github.com/atifx17/wanderlust",
      highlights: ["Mapbox Integration", "Cloud Storage", "Server-side Validation"]
    },
    {
      title: "NoteBot",
      description: "AI-powered flashcard generator using Google Gemini API. Designed for optimized learning with intelligent content generation.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "Gemini API"],
      github: "https://github.com/atifx17/NoteBot",
      highlights: ["AI Integration", "Performance Optimized", "REST APIs"]
    }
  ];

  const skills = {
    "Languages": ["Python", "JavaScript", "Java"],
    "Frontend": ["React.js", "HTML", "CSS", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js", "Django", "Django REST Framework"],
    "Databases": ["PostgreSQL", "MongoDB", "MySQL"],
    "Tools & Concepts": ["Git", "GitHub", "REST APIs", "Authentication", "MVC", "OOP", "Data Structures"]
  };

  const achievements = [
    {
      title: "AIR 3,322 in AINCAT 2025",
      description: "Among 4.6 lakh candidates",
      icon: Award,
      link: "https://www.naukri.com/campus/certificates/naukri_campus_ai_ncat_participation_may_2025/v0/683a06e5892c1f3133aadcbe",
      linkText: "View Certificate"
    },
    {
      title: "MERN Stack Certification",
      description: "Apna College",
      icon: Code,
      link: "https://drive.google.com/file/d/1CuRayotpnXKO2PfXZBBNSPSsi0uOq1aK/view",
      linkText: "View Certificate"
    },
    {
      title: "Google Cloud Infrastructure",
      description: "Coursera Foundation Course",
      icon: Server,
      link: "https://coursera.org/share/e5ad9895def87e3ee63a28b02b177137",
      linkText: "View Certificate"
    },
    {
      title: "ReactJS Certification",
      description: "Infosys Springboard",
      icon: Code,
      link: "https://drive.google.com/file/d/1D5fvSOaL4W1ix4besdmcx27cyxe4zDhi/view",
      linkText: "View Certificate"
    },
    {
      title: "Java Programming Certification",
      description: "Infosys Springboard",
      icon: Database,
      link: "https://drive.google.com/file/d/1D3fkzz94fnVO7RCGS8qdPf5CjgG1Hlre/view",
      linkText: "View Certificate"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const downloadResume = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    // resume should be placed in the `public` folder so it is served at the site root
    link.href = '/Md_Atif_Alam.pdf';
    link.download = 'Md_Atif_Alam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              MA
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'projects', 'skills', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section 
                      ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                      : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {section}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                className="text-slate-700 dark:text-slate-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'projects', 'skills', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              MD ATIF ALAM
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-2">Full Stack Developer</p>
            <p className="text-lg text-slate-500 dark:text-slate-400 flex items-center justify-center gap-2">
              <MapPin size={18} />
              Greater Noida, India
            </p>
          </div>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Computer Science student specializing in building scalable web applications with modern technologies. 
            Passionate about creating efficient, user-centric solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="https://github.com/atifx17" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition-all shadow-lg hover:shadow-xl"
            >
              <Github size={20} />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/atifx17" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href="https://leetcode.com/u/atifx17" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-orange-600 dark:bg-orange-700 text-white rounded-lg hover:bg-orange-700 dark:hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl"
            >
              <Code size={20} />
              LeetCode
            </a>
            <button 
              onClick={downloadResume}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-600 dark:text-slate-400">
            <a href="mailto:mdatifalam8@gmail.com" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail size={18} />
              mdatifalam8@gmail.com
            </a>
            <a href="tel:+916205785043" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Phone size={18} />
              +91 6205785043
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-12 text-center">About Me</h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-slate-700 dark:text-slate-200 mb-6">
              I'm a Computer Science student at Noida Institute of Engineering and Technology with a strong foundation in full-stack development. 
              My journey in tech is driven by curiosity and a commitment to continuous learning.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Education</h3>
                <p className="text-slate-600 dark:text-slate-300">B.Tech in Computer Science</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">NIET, Greater Noida (CGPA: 7.18)</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">2022 - 2026</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Focus Areas</h3>
                <p className="text-slate-600 dark:text-slate-300">Full Stack Development</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">REST APIs, Database Design</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Modern Web Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, i) => (
                        <span key={i} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
                  >
                    View on GitHub
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white dark:bg-slate-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 border-b-2 border-blue-600 dark:border-blue-400 pb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-sm shadow-sm hover:shadow-md transition-shadow">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-12 text-center">Achievements & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-3 rounded-lg">
                    <Icon size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-3">
                      {achievement.description}
                    </p>
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target={achievement.link !== '#' ? '_blank' : undefined}
                        rel={achievement.link !== '#' ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm transition-colors"
                      >
                        {achievement.linkText}
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-950 dark:to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-slate-300 dark:text-slate-400 mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
              href="mailto:mdatifalam8@gmail.com"
              className="bg-slate-700 dark:bg-slate-800 hover:bg-slate-600 dark:hover:bg-slate-700 rounded-lg p-6 transition-all hover:scale-105"
            >
              <Mail size={32} className="mx-auto mb-3" />
              <p className="font-semibold mb-1">Email</p>
              <p className="text-sm text-slate-300 dark:text-slate-400">mdatifalam8@gmail.com</p>
            </a>
            <a 
              href="tel:+916205785043"
              className="bg-slate-700 dark:bg-slate-800 hover:bg-slate-600 dark:hover:bg-slate-700 rounded-lg p-6 transition-all hover:scale-105"
            >
              <Phone size={32} className="mx-auto mb-3" />
              <p className="font-semibold mb-1">Phone</p>
              <p className="text-sm text-slate-300 dark:text-slate-400">+91 6205785043</p>
            </a>
            <a 
              href="https://linkedin.com/in/atifx17"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-700 dark:bg-slate-800 hover:bg-slate-600 dark:hover:bg-slate-700 rounded-lg p-6 transition-all hover:scale-105"
            >
              <Linkedin size={32} className="mx-auto mb-3" />
              <p className="font-semibold mb-1">LinkedIn</p>
              <p className="text-sm text-slate-300 dark:text-slate-400">linkedin.com/in/atifx17</p>
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/atifx17" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/atifx17" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="https://leetcode.com/u/atifx17" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              <Code size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-slate-400 dark:text-slate-500 py-8 px-4 text-center transition-colors duration-300">
        <p>© 2026 MD Atif Alam. Built with React & Tailwind CSS.</p>
        <p className="text-sm mt-2">Designed for excellence. Coded with passion.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
