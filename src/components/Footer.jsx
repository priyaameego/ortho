import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import orthoLogo from '../assets/ortho.jpg';

export default function Footer() {
  return (
    <footer className="bg-secondary relative overflow-hidden text-white pt-24 pb-8 border-t border-gray-800">
      {/* Subtle Geometric Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiM2YmE0ZmYiLz48L3N2Zz4=')] bg-repeat" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Column 1 */}
          <div className="space-y-8">
            <Link to="/" className="inline-block bg-white p-4 rounded-2xl hover:bg-gray-50 transition-colors shadow-lg">
              <img src={orthoLogo} alt="Advanced Ortho Industries" className="h-16 md:h-20 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-base leading-relaxed">
              Orthopaedic & Rehabilitation Solutions with Experience, Engineering and Care. ISO 9001:2015 Certified.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-8 tracking-wide">Quick Links</h4>
            <ul className="space-y-5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Products', path: '/products' },
                { name: 'Quality / ISO 9001:2015', path: '/quality' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-3 text-base">
                    <ChevronRight size={16} className="text-primary-light" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-8 tracking-wide">Company</h4>
            <ul className="space-y-5">
              {[
                { name: 'Founder’s Legacy', path: '/founders-legacy' },
                { name: 'Vision & Mission', path: '/vision-mission' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-3 text-base">
                    <ChevronRight size={16} className="text-primary-light" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-8 tracking-wide">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-400 text-base group">
                <a href="https://maps.google.com/?q=Advanced+Ortho+Industries+Kanpur" target="_blank" rel="noreferrer" className="flex items-start gap-4 hover:text-white transition-colors">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin size={20} className="text-primary-light" />
                  </div>
                  <span className="mt-2">
                    Advanced Ortho Industries Pvt. Ltd.<br />
                    Kanpur, Uttar Pradesh, India
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 text-gray-400 text-base group">
                <a href="tel:+919889274488" className="flex items-center gap-4 hover:text-white transition-colors w-full">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone size={20} className="text-primary-light" />
                  </div>
                  <span>+91 9889274488</span>
                </a>
              </li>
              <li className="flex items-center gap-4 text-gray-400 text-base group">
                <a href="mailto:info@advancedortho.in" className="flex items-center gap-4 hover:text-white transition-colors w-full">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} className="text-primary-light" />
                  </div>
                  <span>info@advancedortho.in</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium tracking-wide">
          <p className="text-white/80 font-bold italic">Building Better Rehabilitation Solutions</p>
          <p>© Advanced Ortho Industries Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
