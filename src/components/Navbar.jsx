import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import orthoLogo from '../assets/ortho.jpg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Products', path: '/products' },
  { name: 'Quality', path: '/quality' },
  { name: 'Founder’s Legacy', path: '/founders-legacy' },
  { name: 'Vision & Mission', path: '/vision-mission' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="fixed top-0 w-full z-50 flex flex-col transition-all duration-500">
      {/* Top Alert Bar */}
      <div className={`bg-primary-dark text-white py-2 text-sm hidden md:block transition-all duration-500 ${scrolled ? 'h-0 py-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919889274488" className="flex items-center gap-2 hover:text-primary-light transition-colors">
              <Phone size={14} /> +91 9889274488
            </a>
            <a href="mailto:info@advancedortho.in" className="flex items-center gap-2 hover:text-primary-light transition-colors">
              <Mail size={14} /> info@advancedortho.in
            </a>
          </div>
          <div className="text-primary-light font-medium text-xs tracking-wider uppercase">
            ISO 9001:2015 Certified Company
          </div>
        </div>
      </div>

      <header
        className={`w-full transition-all duration-500 ${
          scrolled ? 'bg-white/90 backdrop-blur-xl shadow-md py-2' : 'bg-white py-2 md:py-3 border-b border-gray-100/50'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50 group">
            <img src={orthoLogo} alt="Advanced Ortho Industries" className={`w-auto object-contain mix-blend-multiply group-hover:scale-[1.02] transition-all duration-500 ${scrolled ? 'h-12 md:h-14' : 'h-14 md:h-16'}`} />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-[15px] font-bold transition-all duration-300 hover:text-primary relative group uppercase tracking-wider text-xs ${
                      location.pathname === link.path ? 'text-primary' : 'text-secondary'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1.5 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                      location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-bold transition-all duration-300 shadow-[0_10px_20px_rgba(0,82,155,0.2)] hover:shadow-[0_15px_30px_rgba(0,82,155,0.4)] hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 p-2 text-secondary hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-3xl z-40 lg:hidden pt-28 pb-8 px-6 overflow-y-auto flex flex-col"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="border-b border-gray-100 pb-4"
                >
                  <Link
                    to={link.path}
                    className={`flex items-center justify-between text-lg font-bold ${
                      location.pathname === link.path ? 'text-primary' : 'text-secondary'
                    }`}
                  >
                    {link.name}
                    <ChevronRight size={18} className="opacity-50" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                to="/contact"
                className="w-full bg-primary text-white flex justify-center py-4 rounded-xl font-bold uppercase tracking-wider text-sm shadow-lg shadow-primary/20"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
