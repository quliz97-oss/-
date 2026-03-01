import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', id: 'home', path: '/' },
    { name: '안전점수 순위', id: 'ranking', path: '/ranking' },
    { name: '취약유형 분석', id: 'vulnerable', path: '/' },
    { name: '점수 산정 기준', id: 'method', path: '/' },
    { name: '데이터 업로드', id: 'upload', path: '/' },
  ];

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(location.pathname.replace('/', ''));
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const item of navItems) {
        if (item.path !== '/') continue;
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.path === '/ranking') {
      navigate('/ranking');
      setIsMenuOpen(false);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: item.id } });
    } else {
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Clear state
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-5 h-5 bg-[#1E40FF] rounded-sm"></div>
            <span className="text-lg font-bold text-black tracking-tight">
              RentCar Safety Insight
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`text-[13px] font-medium transition-all relative py-2 ${
                  activeSection === item.id ? 'text-[#1E40FF]' : 'text-gray-500 hover:text-black'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1E40FF]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right Label */}
          <div className="hidden md:flex items-center">
            <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
              데이터 기준일: 2026-02
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-500 hover:text-black"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 py-4 px-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`block w-full text-left text-sm font-medium transition-colors ${
                activeSection === item.id ? 'text-[#1E40FF]' : 'text-gray-600 hover:text-[#1E40FF]'
              }`}
            >
              {item.name}
            </button>
          ))}
          <div className="pt-2 border-t border-gray-50 text-[11px] text-gray-400">
            데이터 기준일: 2026-02
          </div>
        </div>
      )}
    </header>
  );
}
