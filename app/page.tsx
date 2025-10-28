// app/page.tsx
'use client'; // Required because we use useState/useEffect for the ThemeSwitcher

import Link from 'next/link';
// Import necessary icons
import { Download, TerminalSquare, Sun, Moon, Menu } from 'lucide-react'; 

// Import Theme Context with the corrected relative path
// NOTE: Use "../context/ThemeContext" if page.tsx is inside app/
// Use "./context/ThemeContext" if page.tsx is inside app/[locale]/
import { useTheme } from '../context/ThemeContext'; 


// ==========================================================
// 1. ThemeSwitcher Component (Embedded)
// ==========================================================
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-full transition-all duration-300 ease-in-out
                 bg-dark-surface hover:bg-primary-accent/20 
                 dark:bg-light-surface/10 dark:hover:bg-primary-accent/30"
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
// 2. Navbar Component (Embedded)
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
// 3. Main Exported Home Component (Contains Navbar + Hero)
// ==========================================================
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-16 
                       bg-light-background dark:bg-dark-background 
                       text-light-text dark:text-dark-text 
                       transition-colors duration-500">
        
        {/* --- HERO SECTION --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* LEFT SIDE: Text and CTAs */}
            <div className="md:w-3/5">
              
              <p className="text-xl font-medium tracking-wider mb-2 text-secondary-accent">
                Hi, I'm Nicole,
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
                A <span className="text-primary-accent">Backend</span> Software Engineer
                <br />
                Building <span className="dark:text-dark-text text-light-text">Scalable Systems.</span>
              </h1>
              
              <p className="text-lg md:text-xl leading-relaxed mb-8
                          text-gray-600 dark:text-gray-400">
                I'm a backend software engineer specializing in Python ecosystems. I build robust APIs
                with FastAPI and Flask, orchestrate containerized applications with Docker and Kubernetes,
                and architect scalable systems using Elasticsearch and Kafka for high-performance data processing.
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

            {/* RIGHT SIDE: Placeholder for Profile Image / Illustration */}
            <div className="md:w-2/5 flex justify-center order-first md:order-last">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-secondary-accent/20 flex items-center justify-center 
                                 border-4 border-secondary-accent shadow-xl transform transition-transform duration-500 hover:rotate-3">
                    <span className="text-2xl font-bold text-secondary-accent">
                        [Placeholder Image]
                    </span>
                </div>
            </div>

          </div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section className="bg-light-surface/50 dark:bg-dark-surface/50 py-16">
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
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 h-282 w-0.5 bg-primary-accent"></div>

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

                      <div className="mb-4">
                        <h4 className="text-xl font-semibold text-primary-accent">Sr. Software Engineer</h4>
                        <p className="text-sm text-secondary-accent mb-2">Feb 2025 - Present</p>

                        <h4 className="text-lg font-semibold mt-3">Software Engineer</h4>
                        <p className="text-sm text-secondary-accent">Feb 2022 - Feb 2025</p>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Building scalable backend systems and APIs for cybersecurity solutions, focusing on
                        high-performance data processing and microservices architecture. Recently promoted to
                        Senior Software Engineer, leading technical initiatives and mentoring team members.
                      </p>

                      <div className="space-y-4 text-gray-600 dark:text-gray-400 mb-4">

                        {/* Senior Software Engineer Projects */}
                        <div>
                          <p className="font-semibold text-primary-accent mb-2">As Senior Software Engineer (2025 - Present):</p>

                          <div className="space-y-2 ml-3">
                            <p>• <span className="font-medium">Developed RAG-based Chatbot with Elasticsearch</span> - Created intelligent chatbot using Retrieval-Augmented Generation, leveraging Elasticsearch for semantic search and knowledge retrieval</p>

                            <p>• <span className="font-medium">Optimized Speech Recognition Pipeline</span> - Migrated subtitle generation model from Vosk to Faster-Whisper, achieving 3x performance improvement and reduced latency</p>

                            <p>• <span className="font-medium">Technical Leadership</span> - Leading technical initiatives and mentoring team members on backend architecture and best practices</p>
                          </div>
                        </div>

                        {/* Software Engineer Projects */}
                        <div>
                          <p className="font-semibold text-secondary-accent mb-2">As Software Engineer (2022 - 2025):</p>

                          <div className="space-y-2 ml-3">
                            <p>• <span className="font-medium">Built Kafka Subscription System</span> - Designed and implemented scalable event-driven architecture for real-time data processing across microservices</p>

                            <p>• <span className="font-medium">API Development & Integration</span> - Built high-performance REST APIs using FastAPI and Flask, handling thousands of concurrent requests with proper error handling and monitoring</p>

                            <p>• <span className="font-medium">Infrastructure & DevOps</span> - Orchestrated containerized applications with Docker and Kubernetes, implementing CI/CD pipelines for automated deployments</p>
                          </div>
                        </div>

                      </div>

                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Python</span>
                        <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">FastAPI</span>
                        <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Flask</span>
                        <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Docker</span>
                        <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Kubernetes</span>
                        <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Kafka</span>
                        <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Elasticsearch</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary-accent">Tech</span> Stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Technologies I work with to build scalable backend systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Backend Languages */}
            <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary-accent">Languages</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Python</li>
                <li>• SQL</li>
                <li>• JavaScript/TypeScript</li>
              </ul>
            </div>

            {/* Frameworks */}
            <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary-accent">Frameworks</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• FastAPI</li>
                <li>• Flask</li>
                <li>• Django</li>
              </ul>
            </div>

            {/* DevOps & Infrastructure */}
            <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary-accent">DevOps</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Docker</li>
                <li>• Kubernetes</li>
                <li>• Helm</li>
                <li>• CI/CD</li>
              </ul>
            </div>

            {/* Data & Messaging */}
            <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary-accent">Data & Messaging</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Elasticsearch</li>
                <li>• Kafka</li>
                <li>• PostgreSQL</li>
                <li>• Redis</li>
              </ul>
            </div>

          </div>
        </section>

        {/* --- WHAT I DO BEST SECTION --- */}
        <section className="bg-light-surface/50 dark:bg-dark-surface/50 py-16">
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
                <div className="text-primary-accent text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">API Design & Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Building robust, scalable RESTful APIs with FastAPI and Flask that handle high traffic and complex business logic.
                </p>
              </div>

              <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg">
                <div className="text-primary-accent text-3xl mb-4">🏗️</div>
                <h3 className="text-xl font-semibold mb-3">System Architecture</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Designing microservices architectures and distributed systems that scale efficiently and maintain high availability.
                </p>
              </div>

              <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg">
                <div className="text-primary-accent text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Optimizing database queries, implementing caching strategies, and improving system performance under load.
                </p>
              </div>

              <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg">
                <div className="text-primary-accent text-3xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold mb-3">Data Pipeline Design</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Creating efficient data processing pipelines using Kafka and Elasticsearch for real-time analytics and search.
                </p>
              </div>

              <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg">
                <div className="text-primary-accent text-3xl mb-4">🐳</div>
                <h3 className="text-xl font-semibold mb-3">Containerization & Deployment</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Orchestrating containerized applications with Docker and Kubernetes for reliable, scalable deployments.
                </p>
              </div>

              <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg">
                <div className="text-primary-accent text-3xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-3">Problem Solving</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Debugging complex distributed systems and implementing solutions for challenging technical requirements.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* --- FEATURED PROJECTS SECTION --- */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-primary-accent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Backend systems and APIs I've built
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Project 1 - Replace with your actual projects */}
            <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary-accent">Microservices API Platform</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                High-performance REST API built with FastAPI, handling 10k+ requests/minute with Redis caching and PostgreSQL.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">FastAPI</span>
                <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Redis</span>
                <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Docker</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary-accent">Real-time Data Pipeline</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Event-driven architecture using Kafka for streaming data processing with Elasticsearch for analytics and search.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Kafka</span>
                <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Elasticsearch</span>
                <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Kubernetes</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary-accent">Scalable Web Service</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Flask-based service with automated deployment pipeline using Helm charts and Kubernetes orchestration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Flask</span>
                <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">Helm</span>
                <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">CI/CD</span>
                <span className="px-3 py-1 bg-primary-accent/20 text-primary-accent rounded-full text-sm">MongoDB</span>
              </div>
            </div>

          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section className="bg-light-surface/50 dark:bg-dark-surface/50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-primary-accent">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Open to backend engineering opportunities and interesting projects
            </p>

            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/yourgithub"
                 className="flex items-center space-x-2 px-6 py-3 text-lg font-semibold
                            text-light-text dark:text-dark-text
                            border-2 border-secondary-accent rounded-lg
                            hover:bg-secondary-accent/10 transition-all duration-300">
                <span>GitHub</span>
              </a>

              <a href="https://linkedin.com/in/yourlinkedin"
                 className="flex items-center space-x-2 px-6 py-3 text-lg font-semibold
                            text-light-text dark:text-dark-text
                            border-2 border-secondary-accent rounded-lg
                            hover:bg-secondary-accent/10 transition-all duration-300">
                <span>LinkedIn</span>
              </a>

              <a href="mailto:your.email@example.com"
                 className="flex items-center space-x-2 px-6 py-3 text-lg font-semibold
                            text-white bg-primary-accent rounded-lg shadow-lg
                            hover:bg-primary-accent/80 transition-all duration-300">
                <span>Email Me</span>
              </a>
            </div>

            <p className="text-gray-600 dark:text-gray-400">
              💼 Currently open to backend engineering roles and consulting opportunities
            </p>
          </div>
        </section>

      </main>
    </>
  );
}