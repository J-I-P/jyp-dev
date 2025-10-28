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
        
      </main>
    </>
  );
}