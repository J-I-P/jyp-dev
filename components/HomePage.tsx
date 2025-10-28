// components/HomePage.tsx
'use client'; // Required because we use useState/useEffect for the ThemeSwitcher

import Link from 'next/link';
import { useState, useEffect } from 'react';
// Import necessary icons
import { Download, TerminalSquare, Sun, Moon, Menu, Code, Database, Server, Container, Zap, Rocket, Building, TrendingUp, GitBranch, Wrench, Cloud, Mail, ChevronUp } from 'lucide-react';
// Import brand icons
import { SiPython, SiTypescript, SiFastapi, SiFlask, SiDjango, SiDocker, SiKubernetes, SiHelm, SiElasticsearch, SiApachekafka, SiAmazon, SiFluentd, SiMysql, SiGithub, SiLinkedin } from 'react-icons/si';

// Import Theme Context
import { useTheme } from '../context/ThemeContext';


// ==========================================================
// 1. ThemeSwitcher Component (Embedded)
// ==========================================================
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  // Log current theme when component renders
  useEffect(() => {
    console.log('ThemeSwitcher: Current theme:', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    console.log('ThemeSwitcher: Button clicked - switching from', theme, 'to', theme === 'dark' ? 'light' : 'dark');
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-full transition-all duration-300 ease-in-out
                 bg-light-surface hover:bg-primary-accent/20
                 dark:bg-dark-surface dark:hover:bg-primary-accent/30"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-secondary-accent" />
      )}
    </button>
  );
};


// ==========================================================
// 2. ScrollToTop Component (Embedded)
// ==========================================================
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-30
                     w-12 h-12 bg-primary-accent text-white
                     rounded-full shadow-lg hover:shadow-xl
                     hover:bg-primary-accent/80 hover:scale-110
                     transition-all duration-300 transform
                     flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};


// ==========================================================
// 3. Navbar Component (Embedded)
// ==========================================================
const Navbar = () => {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-10
                    bg-light-surface/90 dark:bg-dark-surface/90
                    shadow-md backdrop-blur-sm transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo / Brand Name */}
          <Link href="/" className="flex-shrink-0 text-2xl font-black
                                         text-primary-accent transition-colors duration-500 hover:opacity-80">
            JYPIN.DEV
          </Link>

          {/* Navigation Links and Theme Switcher */}
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}
                    className="hidden md:block text-light-text dark:text-dark-text
                               hover:text-primary-accent dark:hover:text-primary-accent
                               transition-colors duration-300 font-medium text-lg">
                {item.label}
              </Link>
            ))}

            <ThemeSwitcher />

            <button className="md:hidden p-2 text-light-text dark:text-dark-text">
              <Menu className="h-6 w-6" />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};


// ==========================================================
// 4. Main HomePage Component (Contains Navbar + Hero + ScrollToTop)
// ==========================================================
export default function HomePage() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main className="min-h-screen pt-16 pb-20
                       bg-light-background dark:bg-dark-background
                       text-light-text dark:text-dark-text
                       transition-colors duration-500">

        {/* --- HERO SECTION --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-b border-gray-200 dark:border-gray-700">

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">

            {/* LEFT SIDE: Text and CTAs */}
            <div className="md:w-3/5">

              <p className="text-xl font-medium tracking-wider mb-2 text-secondary-accent">
                Hi, I'm Yi-Ping,
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
                A <span className="text-primary-accent">Backend</span> Software Engineer
                <br />
                Building <span className="dark:text-dark-text text-light-text">Scalable Systems.</span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed mb-8
                          text-gray-600 dark:text-gray-400">
                Senior Software Engineer with 3 years of experience, known for adaptability and
                problem-solving skills, delivering high-quality solutions under pressure. I specialize in building
                scalable backend systems with Python, FastAPI, and Flask, orchestrating containerized applications
                with Docker and Kubernetes, and architecting data pipelines using Kafka and Elasticsearch.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">

                <Link href="/projects"
                      className="flex items-center space-x-2 px-6 py-3 text-lg font-semibold
                                 text-white bg-primary-accent rounded-lg shadow-lg
                                 hover:bg-primary-accent/80 transition-all duration-300 transform
                                 hover:scale-[1.02] active:scale-[0.98]">
                  <TerminalSquare className="w-5 h-5" />
                  <span>View Projects</span>
                </Link>

                <Link href="/resume.pdf" download
                      className="flex items-center space-x-2 px-6 py-3 text-lg font-semibold
                                 text-light-text dark:text-dark-text
                                 border-2 border-secondary-accent rounded-lg
                                 hover:bg-secondary-accent/10 transition-all duration-300 transform
                                 hover:scale-[1.02] active:scale-[0.98]">
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </Link>

              </div>
            </div>

            {/* RIGHT SIDE: Profile Image */}
            <div className="md:w-2/5 flex justify-center order-first md:order-last">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden
                                 border-4 border-secondary-accent shadow-xl transform transition-transform duration-500 hover:rotate-3">
                    <img
                        src="/17896123.jpeg"
                        alt="Yi-Ping Jiang Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

          </div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section className="bg-light-surface/50 dark:bg-dark-surface/50 py-20 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Professional <span className="text-primary-accent">Experience</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                My journey in backend software engineering
              </p>
            </div>

            {/* Years of Experience Highlight */}
            <div className="text-center mb-12">
              <div className="inline-block bg-primary-accent/10 rounded-xl px-6 py-4">
                <h3 className="text-3xl font-bold text-primary-accent mb-2">3+ Years</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Professional Backend Development Experience
                </p>
                <p className="text-sm text-secondary-accent mt-1">
                  Recently promoted to Senior Software Engineer
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line - matches experience item height */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 h-234 w-0.5 bg-primary-accent"></div>

                {/* Experience Item */}
                <div className="relative flex items-center mb-8">
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-accent rounded-full border-4 border-light-surface dark:border-dark-surface"></div>

                  {/* Content */}
                  <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                    <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h3 className="text-2xl font-bold text-primary-accent">Trend Micro</h3>
                        <span className="text-lg font-semibold text-secondary-accent">Feb 2022 - Present</span>
                      </div>


                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Senior Software Engineer with 3+ years of experience building scalable backend systems and APIs
                        for cybersecurity solutions. Expertise in high-performance data processing, microservices architecture,
                        and leading technical initiatives.
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Python</span>
                        <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">FastAPI</span>
                        <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Flask</span>
                        <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Docker</span>
                        <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Kubernetes</span>
                        <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Kafka</span>
                        <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Elasticsearch</span>
                        <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Helm</span>
                        <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Azure</span>
                      </div>

                      <div className="space-y-6 mb-4">

                        {/* Senior Software Engineer Projects */}
                        <div>
                          <h5 className="text-lg font-semibold text-primary-accent">Senior Software Engineer</h5>
                          <p className="text-sm text-secondary-accent mb-3">Feb 2025 - Present</p>
                          <div className="space-y-3">
                            <div className="border-l-3 border-primary-accent pl-4">
                              <h6 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Speech Recognition Technology Upgrade</h6>
                              <p className="text-gray-600 dark:text-gray-400 text-sm">Migrated from Vosk to <span className="text-primary-accent font-medium">Faster Whisper</span>, achieving significant performance improvements and enhanced accuracy</p>
                            </div>
                            <div className="border-l-3 border-secondary-accent pl-4">
                              <h6 className="font-medium text-gray-800 dark:text-gray-200 mb-1">AI Chatbot Development</h6>
                              <p className="text-gray-600 dark:text-gray-400 text-sm">Built <span className="text-secondary-accent font-medium">RAG-based chatbot</span> using Elasticsearch for semantic search and knowledge retrieval</p>
                            </div>
                            <div className="border-l-3 border-primary-accent/70 pl-4">
                              <h6 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Infrastructure Modernization</h6>
                              <p className="text-gray-600 dark:text-gray-400 text-sm">Transitioned to <span className="text-primary-accent font-medium">self-created Helm charts</span> for Kubernetes deployment optimization</p>
                            </div>
                          </div>
                        </div>

                        {/* Software Engineer Projects */}
                        <div>
                          <h5 className="text-lg font-semibold text-primary-accent">Software Engineer</h5>
                          <p className="text-sm text-secondary-accent mb-3">Feb 2022 - Feb 2025</p>
                          <div className="space-y-3">
                            <div className="border-l-3 border-secondary-accent pl-4">
                              <h6 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Real-time Notification System</h6>
                              <p className="text-gray-600 dark:text-gray-400 text-sm">Designed <span className="text-secondary-accent font-medium">Kafka-based system</span> handling high-concurrency requests with Firebase and APNs integration</p>
                            </div>
                            <div className="border-l-3 border-primary-accent pl-4">
                              <h6 className="font-medium text-gray-800 dark:text-gray-200 mb-1">Data Pipeline Development</h6>
                              <p className="text-gray-600 dark:text-gray-400 text-sm">Built <span className="text-primary-accent font-medium">Fluentd pipeline</span> for MySQL to Elasticsearch data integration and transformation</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* --- EDUCATION SECTION --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-gray-200 dark:border-gray-700">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary-accent">Education</span> & Background
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Academic foundation in Computer Science and Information Engineering
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-8 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary-accent mb-2">Master's Degree</h3>
                  <h4 className="text-xl font-semibold text-secondary-accent">Computer Science and Information Engineering</h4>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">National Chung Cheng University</p>
                  <p className="text-secondary-accent font-medium">Jan 2019 - Dec 2021</p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Advanced studies in computer science fundamentals, software engineering, and information systems.
                Developed strong analytical and problem-solving skills through research-oriented coursework and projects.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-primary-accent mb-3">Languages</h5>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">Mandarin</span>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-primary-accent rounded-full"></div>
                        <div className="w-3 h-3 bg-primary-accent rounded-full"></div>
                        <div className="w-3 h-3 bg-primary-accent rounded-full"></div>
                        <div className="w-3 h-3 bg-primary-accent rounded-full"></div>
                        <div className="w-3 h-3 bg-primary-accent rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">English</span>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-secondary-accent rounded-full"></div>
                        <div className="w-3 h-3 bg-secondary-accent rounded-full"></div>
                        <div className="w-3 h-3 bg-secondary-accent rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                        <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-primary-accent mb-3">Academic Focus</h5>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <p><span className="inline-block w-2 h-2 bg-primary-accent rounded-full mr-2"></span>Software Engineering</p>
                    <p><span className="inline-block w-2 h-2 bg-secondary-accent rounded-full mr-2"></span>Information Systems</p>
                    <p><span className="inline-block w-2 h-2 bg-primary-accent/70 rounded-full mr-2"></span>Computer Science Fundamentals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-gray-200 dark:border-gray-700">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary-accent">Tech</span> Stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Technologies I work with to build scalable backend systems
            </p>
            <p className="text-sm text-secondary-accent">
              🎯 Click on any skill to see my experience level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

            {/* Backend Languages */}
            <div className="group bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-primary-accent/30">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 mr-3 text-primary-accent" />
                <h3 className="text-xl font-semibold text-primary-accent group-hover:text-primary-accent">Languages</h3>
              </div>

              <div className="space-y-3">
                <div className="skill-item">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-gray-100 dark:bg-gray-600 rounded-sm flex items-center justify-center mr-2">
                        <SiPython className="w-3 h-3 text-[#3776ab]" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Python</span>
                    </div>
                    <span className="text-xs text-primary-accent font-semibold">Expert</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-accent to-secondary-accent h-2 rounded-full w-[95%] transition-all duration-1000 ease-out group-hover:animate-pulse"></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-gray-100 dark:bg-gray-600 rounded-sm flex items-center justify-center mr-2">
                        <Database className="w-3 h-3 text-primary-accent" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">SQL</span>
                    </div>
                    <span className="text-xs text-primary-accent font-semibold">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-accent to-secondary-accent h-2 rounded-full w-[85%] transition-all duration-1000 ease-out delay-100 group-hover:animate-pulse"></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-gray-100 dark:bg-gray-600 rounded-sm flex items-center justify-center mr-2">
                        <SiTypescript className="w-3 h-3 text-[#3178c6]" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">TypeScript</span>
                    </div>
                    <span className="text-xs text-primary-accent font-semibold">Proficient</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-accent to-secondary-accent h-2 rounded-full w-[75%] transition-all duration-1000 ease-out delay-200 group-hover:animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="group bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-primary-accent/30">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 mr-3 text-primary-accent" />
                <h3 className="text-xl font-semibold text-primary-accent">Frameworks</h3>
              </div>

              <div className="space-y-3">
                <div className="skill-item">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-gray-100 dark:bg-gray-600 rounded-sm flex items-center justify-center mr-2">
                        <SiFastapi className="w-3 h-3 text-[#009688]" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">FastAPI</span>
                    </div>
                    <span className="text-xs text-primary-accent font-semibold">Expert</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-accent to-secondary-accent h-2 rounded-full w-[90%] transition-all duration-1000 ease-out group-hover:animate-pulse"></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-gray-100 dark:bg-gray-600 rounded-sm flex items-center justify-center mr-2">
                        <SiFlask className="w-3 h-3 text-[#000000]" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Flask</span>
                    </div>
                    <span className="text-xs text-primary-accent font-semibold">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-accent to-secondary-accent h-2 rounded-full w-[85%] transition-all duration-1000 ease-out delay-100 group-hover:animate-pulse"></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-gray-100 dark:bg-gray-600 rounded-sm flex items-center justify-center mr-2">
                        <SiDjango className="w-3 h-3 text-[#092e20]" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Django</span>
                    </div>
                    <span className="text-xs text-primary-accent font-semibold">Proficient</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-accent to-secondary-accent h-2 rounded-full w-[70%] transition-all duration-1000 ease-out delay-200 group-hover:animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* DevOps & Infrastructure */}
            <div className="group bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-primary-accent/30">
              <div className="flex items-center mb-4">
                <Container className="w-8 h-8 mr-3 text-primary-accent" />
                <h3 className="text-xl font-semibold text-primary-accent">DevOps</h3>
              </div>

              <div className="space-y-3">
                <div className="skill-item">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-gray-100 dark:bg-gray-600 rounded-sm flex items-center justify-center mr-2">
                        <SiDocker className="w-3 h-3 text-[#2496ed]" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Docker</span>
                    </div>
                    <span className="text-xs text-primary-accent font-semibold">Expert</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-accent to-secondary-accent h-2 rounded-full w-[90%] transition-all duration-1000 ease-out group-hover:animate-pulse"></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-gray-100 dark:bg-gray-600 rounded-sm flex items-center justify-center mr-2">
                        <SiKubernetes className="w-3 h-3 text-[#326ce5]" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Kubernetes</span>
                    </div>
                    <span className="text-xs text-primary-accent font-semibold">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-accent to-secondary-accent h-2 rounded-full w-[80%] transition-all duration-1000 ease-out delay-100 group-hover:animate-pulse"></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-gray-100 dark:bg-gray-600 rounded-sm flex items-center justify-center mr-2">
                        <SiHelm className="w-3 h-3 text-[#0f1689]" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Helm</span>
                    </div>
                    <span className="text-xs text-primary-accent font-semibold">Proficient</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-accent to-secondary-accent h-2 rounded-full w-[75%] transition-all duration-1000 ease-out delay-200 group-hover:animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data & Messaging */}
            <div className="group bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-primary-accent/30">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 mr-3 text-primary-accent" />
                <h3 className="text-xl font-semibold text-primary-accent">Data & Messaging</h3>
              </div>

              <div className="space-y-3">
                <div className="skill-item">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-gray-100 dark:bg-gray-600 rounded-sm flex items-center justify-center mr-2">
                        <SiElasticsearch className="w-3 h-3 text-[#005571]" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Elasticsearch</span>
                    </div>
                    <span className="text-xs text-primary-accent font-semibold">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-accent to-secondary-accent h-2 rounded-full w-[85%] transition-all duration-1000 ease-out group-hover:animate-pulse"></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-gray-100 dark:bg-gray-600 rounded-sm flex items-center justify-center mr-2">
                        <SiApachekafka className="w-3 h-3 text-[#231f20] dark:text-[#ffffff]" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Kafka</span>
                    </div>
                    <span className="text-xs text-primary-accent font-semibold">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-accent to-secondary-accent h-2 rounded-full w-[80%] transition-all duration-1000 ease-out delay-100 group-hover:animate-pulse"></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-gray-100 dark:bg-gray-600 rounded-sm flex items-center justify-center mr-2">
                        <SiMysql className="w-3 h-3 text-[#4479a1]" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">MySQL</span>
                    </div>
                    <span className="text-xs text-primary-accent font-semibold">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-accent to-secondary-accent h-2 rounded-full w-[85%] transition-all duration-1000 ease-out delay-200 group-hover:animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cloud Platforms */}
            <div className="group bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-primary-accent/30">
              <div className="flex items-center mb-4">
                <Server className="w-8 h-8 mr-3 text-primary-accent" />
                <h3 className="text-xl font-semibold text-primary-accent">Cloud Platforms</h3>
              </div>

              <div className="space-y-3">
                <div className="skill-item">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-gray-100 dark:bg-gray-600 rounded-sm flex items-center justify-center mr-2">
                        <Cloud className="w-3 h-3 text-[#0078d4]" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Azure</span>
                    </div>
                    <span className="text-xs text-primary-accent font-semibold">Proficient</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-accent to-secondary-accent h-2 rounded-full w-[75%] transition-all duration-1000 ease-out group-hover:animate-pulse"></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-gray-100 dark:bg-gray-600 rounded-sm flex items-center justify-center mr-2">
                        <SiAmazon className="w-3 h-3 text-[#ff9900]" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">AWS</span>
                    </div>
                    <span className="text-xs text-primary-accent font-semibold">Proficient</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-accent to-secondary-accent h-2 rounded-full w-[75%] transition-all duration-1000 ease-out delay-100 group-hover:animate-pulse"></div>
                  </div>
                </div>

                <div className="skill-item">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-gray-100 dark:bg-gray-600 rounded-sm flex items-center justify-center mr-2">
                        <SiFluentd className="w-3 h-3 text-[#0e83c8]" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">Fluentd</span>
                    </div>
                    <span className="text-xs text-primary-accent font-semibold">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-accent to-secondary-accent h-2 rounded-full w-[80%] transition-all duration-1000 ease-out delay-200 group-hover:animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Skills Tags */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
              🏆 Most Used Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-gradient-to-r from-primary-accent to-secondary-accent text-white rounded-full font-semibold hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                Python
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-primary-accent to-secondary-accent text-white rounded-full font-semibold hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                FastAPI
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-primary-accent to-secondary-accent text-white rounded-full font-semibold hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                Docker
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-primary-accent to-secondary-accent text-white rounded-full font-semibold hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                Elasticsearch
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-primary-accent to-secondary-accent text-white rounded-full font-semibold hover:scale-110 transition-transform duration-300 cursor-pointer shadow-lg">
                Kafka
              </span>
            </div>
          </div>
        </section>

        {/* --- WHAT I DO BEST SECTION --- */}
        <section className="bg-light-surface/50 dark:bg-dark-surface/50 py-20 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What I <span className="text-primary-accent">Do Best</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Core competencies that drive successful backend implementations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg">
                <Rocket className="w-12 h-12 text-primary-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">API Design & Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Building robust, scalable RESTful APIs with FastAPI and Flask that handle high traffic and complex business logic.
                </p>
              </div>

              <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg">
                <Building className="w-12 h-12 text-primary-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">System Architecture</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Designing microservices architectures and distributed systems that scale efficiently and maintain high availability.
                </p>
              </div>

              <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg">
                <TrendingUp className="w-12 h-12 text-primary-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Optimizing database queries, implementing caching strategies, and improving system performance under load.
                </p>
              </div>

              <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg">
                <GitBranch className="w-12 h-12 text-primary-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Data Pipeline Design</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Creating efficient data processing pipelines using Kafka and Elasticsearch for real-time analytics and search.
                </p>
              </div>

              <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg">
                <Container className="w-12 h-12 text-primary-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Containerization & Deployment</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Orchestrating containerized applications with Docker and Kubernetes for reliable, scalable deployments.
                </p>
              </div>

              <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg">
                <Wrench className="w-12 h-12 text-primary-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Problem Solving</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Debugging complex distributed systems and implementing solutions for challenging technical requirements.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* --- FEATURED PROJECTS SECTION --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-primary-accent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              Backend systems and APIs I've architected and built
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-accent to-secondary-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Project 1 - Enhanced */}
            <div className="group relative bg-light-surface dark:bg-dark-surface rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500 border-2 border-transparent hover:border-primary-accent/30 overflow-hidden">
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 to-secondary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Project Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-accent to-secondary-accent rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-primary-accent group-hover:text-secondary-accent transition-colors duration-300">
                Video Subtitle Speech Recognition
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Led the upgrade of speech recognition technology from <span className="font-semibold text-primary-accent">Vosk to Faster Whisper</span>, improving accuracy and reducing processing time. Optimized audio processing workflow and managed technology selection with performance optimization.
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-primary-accent/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary-accent">3x</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Performance</div>
                </div>
                <div className="text-center p-3 bg-secondary-accent/10 rounded-lg">
                  <div className="text-2xl font-bold text-secondary-accent">Improved</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Accuracy</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#3776ab]/20 text-[#3776ab] rounded-full text-sm font-medium flex items-center">
                  <div className="w-2 h-2 bg-[#3776ab] rounded-full mr-2"></div>
                  Python
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-sm font-medium flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Faster Whisper
                </span>
                <span className="px-3 py-1 bg-[#2496ed]/20 text-[#2496ed] rounded-full text-sm font-medium flex items-center">
                  <div className="w-2 h-2 bg-[#2496ed] rounded-full mr-2"></div>
                  Docker
                </span>
                <span className="px-3 py-1 bg-[#0f1689]/20 text-[#0f1689] rounded-full text-sm font-medium flex items-center">
                  <div className="w-2 h-2 bg-[#0f1689] rounded-full mr-2"></div>
                  Helm
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-primary-accent text-white py-2 px-4 rounded-lg hover:bg-primary-accent/80 transition-colors duration-300 text-sm font-medium">
                  View Details
                </button>
                <button className="p-2 border-2 border-secondary-accent text-secondary-accent rounded-lg hover:bg-secondary-accent hover:text-white transition-colors duration-300">
                  <Code className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Project 2 - Enhanced */}
            <div className="group relative bg-light-surface dark:bg-dark-surface rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500 border-2 border-transparent hover:border-primary-accent/30 overflow-hidden">
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-accent/5 to-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Project Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary-accent to-primary-accent rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <GitBranch className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-primary-accent group-hover:text-secondary-accent transition-colors duration-300">
                Kafka Real-time Push Notification
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Independently designed and implemented a real-time push notification system based on Kafka, handling <span className="font-semibold text-secondary-accent">high-concurrency requests</span> and triggering notifications via Firebase and APNs with event-driven architecture.
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-secondary-accent/10 rounded-lg">
                  <div className="text-2xl font-bold text-secondary-accent">Real-time</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Notifications</div>
                </div>
                <div className="text-center p-3 bg-primary-accent/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary-accent">Event-driven</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Architecture</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#231f20]/20 text-[#231f20] dark:text-white rounded-full text-sm font-medium flex items-center">
                  <div className="w-2 h-2 bg-[#231f20] dark:bg-white rounded-full mr-2"></div>
                  Kafka
                </span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm font-medium flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  Firebase
                </span>
                <span className="px-3 py-1 bg-gray-500/20 text-gray-500 rounded-full text-sm font-medium flex items-center">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                  APNs
                </span>
                <span className="px-3 py-1 bg-[#0f1689]/20 text-[#0f1689] rounded-full text-sm font-medium flex items-center">
                  <div className="w-2 h-2 bg-[#0f1689] rounded-full mr-2"></div>
                  Helm
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-secondary-accent text-white py-2 px-4 rounded-lg hover:bg-secondary-accent/80 transition-colors duration-300 text-sm font-medium">
                  View Details
                </button>
                <button className="p-2 border-2 border-primary-accent text-primary-accent rounded-lg hover:bg-primary-accent hover:text-white transition-colors duration-300">
                  <Code className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Project 3 - Enhanced */}
            <div className="group relative bg-light-surface dark:bg-dark-surface rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500 border-2 border-transparent hover:border-primary-accent/30 overflow-hidden">
              {/* Background Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 to-secondary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Project Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Container className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-primary-accent group-hover:text-secondary-accent transition-colors duration-300">
                Fluentd Data Pipeline
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Designed and maintained a Fluentd data pipeline to integrate data from MySQL into Elasticsearch. Configured <span className="font-semibold text-purple-500">Fluentd plugins</span> for data transformation and improved data transmission efficiency.
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-purple-500/10 rounded-lg">
                  <div className="text-2xl font-bold text-purple-500">Data</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Integration</div>
                </div>
                <div className="text-center p-3 bg-pink-500/10 rounded-lg">
                  <div className="text-2xl font-bold text-pink-500">Optimized</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Efficiency</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#0e83c8]/20 text-[#0e83c8] rounded-full text-sm font-medium flex items-center">
                  <div className="w-2 h-2 bg-[#0e83c8] rounded-full mr-2"></div>
                  Fluentd
                </span>
                <span className="px-3 py-1 bg-[#4479a1]/20 text-[#4479a1] rounded-full text-sm font-medium flex items-center">
                  <div className="w-2 h-2 bg-[#4479a1] rounded-full mr-2"></div>
                  MySQL
                </span>
                <span className="px-3 py-1 bg-[#005571]/20 text-[#005571] rounded-full text-sm font-medium flex items-center">
                  <div className="w-2 h-2 bg-[#005571] rounded-full mr-2"></div>
                  Elasticsearch
                </span>
                <span className="px-3 py-1 bg-[#3776ab]/20 text-[#3776ab] rounded-full text-sm font-medium flex items-center">
                  <div className="w-2 h-2 bg-[#3776ab] rounded-full mr-2"></div>
                  Python
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-sm font-medium">
                  View Details
                </button>
                <button className="p-2 border-2 border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-colors duration-300">
                  <Code className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Want to see more of my work?
            </p>
            <Link href="/projects" className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-accent to-secondary-accent text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <span>View All Projects</span>
              <TerminalSquare className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>

      {/* --- FIXED FOOTER --- */}
      <footer className="fixed bottom-0 left-0 w-full z-20
                         bg-light-surface/95 dark:bg-dark-surface/95
                         backdrop-blur-md border-t border-gray-200 dark:border-gray-700
                         shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-center space-x-3 md:space-x-4">
            <a href="https://github.com/J-I-P"
               className="flex items-center justify-center p-2 md:p-3
                          text-light-text dark:text-dark-text
                          border-2 border-secondary-accent rounded-lg
                          hover:bg-secondary-accent hover:text-white hover:shadow-lg hover:scale-105
                          transition-all duration-300 transform">
              <SiGithub className="w-4 h-4 md:w-5 md:h-5" />
            </a>

            <a href="https://linkedin.com/in/yi-ping-jiang/"
               className="flex items-center justify-center p-2 md:p-3
                          text-light-text dark:text-dark-text
                          border-2 border-secondary-accent rounded-lg
                          hover:bg-secondary-accent hover:text-white hover:shadow-lg hover:scale-105
                          transition-all duration-300 transform">
              <SiLinkedin className="w-4 h-4 md:w-5 md:h-5" />
            </a>

            <a href="mailto:apple80177@gmail.com"
               className="flex items-center justify-center p-2 md:p-3
                          text-white bg-primary-accent rounded-lg shadow-lg
                          hover:bg-primary-accent/80 hover:shadow-xl hover:scale-105
                          transition-all duration-300 transform">
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}