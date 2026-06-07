import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-text-dark text-cream pt-20 pb-10 px-6 lg:px-12 border-t border-sage/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        <div className="md:col-span-1 flex flex-col">
          <h2 className="text-3xl font-serif mb-6 text-blush">Lumina Aesthetics</h2>
          <p className="text-sm text-beige mb-6 font-light leading-relaxed">
            Redefining elegance. A premium sanctuary for the modern woman, offering top-notch hair, skin, and makeup services in a calming environment.
          </p>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-lg font-serif mb-6 tracking-wider text-sage">Quick Links</h3>
          <ul className="space-y-4 text-sm text-beige font-light">
            <li><Link to="/" className="hover:text-blush transition-colors">Home</Link></li>
            <li><Link to="/lookbook" className="hover:text-blush transition-colors">The Lookbook</Link></li>
            <li><Link to="/services" className="hover:text-blush transition-colors">Services</Link></li>
            <li><Link to="/services" className="hover:text-blush transition-colors">Book an Appointment</Link></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-lg font-serif mb-6 tracking-wider text-sage">Hours</h3>
          <ul className="space-y-2 text-sm text-beige font-light">
            <li className="flex justify-between border-b border-beige/20 pb-2"><span>Monday - Friday</span> <span>9:00 AM - 8:00 PM</span></li>
            <li className="flex justify-between border-b border-beige/20 pb-2 pt-2"><span>Saturday</span> <span>10:00 AM - 7:00 PM</span></li>
            <li className="flex justify-between pt-2"><span>Sunday</span> <span>Closed</span></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center text-xs text-beige/60 font-light pt-8 border-t border-beige/20">
        &copy; {new Date().getFullYear()} Lumina Aesthetics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
