import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Lookbook', path: '/lookbook' },
    { name: 'Services & Booking', path: '/services' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-semibold text-text-dark">
          N.K Neha <span className="text-sage italic">Beauty Salon</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-sage ${
                location.pathname === link.path ? 'text-sage font-medium' : 'text-text-dark'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/services"
            className="bg-sage text-white px-6 py-2.5 rounded-full text-xs tracking-widest uppercase hover:bg-opacity-90 transition-all"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-text-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-cream shadow-lg py-6 px-6 flex flex-col space-y-4 border-t border-beige"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-text-dark hover:text-sage"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-blush text-text-dark font-medium px-6 py-3 text-center rounded-full mt-4"
          >
            Book Appointment
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
