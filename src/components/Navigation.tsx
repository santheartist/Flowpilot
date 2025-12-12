import { useState, useEffect } from 'react';
import { Layers } from 'lucide-react';
import { DarkModeToggle } from './DarkModeToggle';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <span className="text-[20px] font-semibold text-foreground">FlowPilot</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <a
              href="#product"
              className="text-[15px] text-secondary hover:text-foreground transition-colors duration-200"
            >
              Product
            </a>
            <a
              href="#features"
              className="text-[15px] text-secondary hover:text-foreground transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-[15px] text-secondary hover:text-foreground transition-colors duration-200"
            >
              Pricing
            </a>
            <a
              href="#resources"
              className="text-[15px] text-secondary hover:text-foreground transition-colors duration-200"
            >
              Resources
            </a>
            <a
              href="#login"
              className="text-[15px] text-secondary hover:text-foreground transition-colors duration-200"
            >
              Login
            </a>
            <DarkModeToggle />
            <button className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}