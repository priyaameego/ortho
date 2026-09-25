import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, X } from 'lucide-react';

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    e.target.reset();
  };

  return (
    <div className="bg-secondary-light min-h-screen">
      {/* Success Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"
              onClick={() => setShowPopup(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.9, y: 20 }} 
              className="bg-white rounded-3xl p-10 max-w-md w-full relative z-10 shadow-2xl text-center"
            >
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-secondary transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-4">Thank You!</h3>
              <p className="text-gray-600 text-lg mb-8">
                Your enquiry has been successfully submitted. Our team will contact you shortly.
              </p>
              <button 
                onClick={() => setShowPopup(false)}
                className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold transition-all"
              >
                Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Premium Inner Page Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/60 z-10" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-20 text-center pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Contact Advanced Ortho Industries
            </h1>
            <p className="text-xl md:text-2xl text-primary-light font-light max-w-3xl mx-auto leading-relaxed">
              We welcome enquiries from hospitals, rehabilitation centres, healthcare professionals, distributors, institutions and customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgwLDgyLDE1NSwwLjA1KSIvPjwvc3ZnPg==')] pointer-events-none opacity-50" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 max-w-7xl mx-auto">
            
            {/* Contact Info (Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-white p-10 rounded-[2rem] shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-gray-100 h-full">
                <h2 className="text-3xl font-bold mb-10 text-secondary">Advanced Ortho Industries</h2>
                
                <div className="space-y-8">
                  {[
                    { icon: MapPin, title: 'Manufacturing Unit', subtitle: 'Advanced Ortho Industries Pvt Ltd.', tag: 'Support for better life', desc: 'T-9, UPSIC Flatted Factory Complex, 166B, Udyog Nagar, Sanjay Nagar, Kanpur – 208022, Uttar Pradesh, India', href: 'https://maps.google.com/?q=T-9,+UPSIC+Flatted+Factory+Complex,+166B,+Udyog+Nagar,+Sanjay+Nagar,+Kanpur' },
                    { icon: Phone, title: 'Phone', desc: '+91 9889274488', href: 'tel:+919889274488' },
                    { icon: Mail, title: 'Email', desc: 'info@advancedortho.in', href: 'mailto:info@advancedortho.in' },
                    { icon: Globe, title: 'Website', desc: 'www.advancedortho.in', href: '#' }
                  ].map((item, idx) => (
                    <a key={idx} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} className="flex items-start gap-6 group hover:bg-gray-50 p-3 -m-3 rounded-2xl transition-colors">
                      <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 mt-1">
                        <item.icon size={24} />
                      </div>
                      <div className="mt-1">
                        <h3 className="font-bold text-secondary mb-1 text-lg">{item.title}</h3>
                        {item.subtitle && <p className="font-bold text-gray-800 text-base mb-1">{item.subtitle}</p>}
                        {item.tag && <p className="text-primary font-medium text-sm italic mb-2">"{item.tag}"</p>}
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form (Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="bg-white p-10 md:p-14 rounded-[2rem] shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-gray-100 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full pointer-events-none" />
                <h2 className="text-3xl font-bold mb-4 text-secondary relative z-10">Send an Enquiry</h2>
                <p className="text-gray-600 mb-10 relative z-10 text-lg">For product enquiries, business associations, institutional requirements and other enquiries, please contact our team.</p>
                
                <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700 tracking-wide uppercase">Full Name</label>
                      <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white text-lg" placeholder="John Doe" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700 tracking-wide uppercase">Organisation</label>
                      <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white text-lg" placeholder="Hospital / Clinic Name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700 tracking-wide uppercase">Email</label>
                      <input type="email" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white text-lg" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700 tracking-wide uppercase">Phone</label>
                      <input type="tel" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white text-lg" placeholder="+91 XXXXXXXXXX" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 tracking-wide uppercase">Enquiry Type</label>
                    <div className="relative">
                      <select className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white text-lg text-gray-700 appearance-none cursor-pointer">
                        <option>Product Enquiry</option>
                        <option>Business Association</option>
                        <option>Institutional Requirement</option>
                        <option>Distributor Enquiry</option>
                        <option>General Enquiry</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700 tracking-wide uppercase">Message</label>
                    <textarea rows="5" className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50 focus:bg-white resize-none text-lg" placeholder="How can we help you?"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white py-5 rounded-xl font-bold transition-all shadow-[0_10px_20px_rgba(0,82,155,0.2)] hover:shadow-[0_15px_30px_rgba(0,82,155,0.4)] flex items-center justify-center gap-3 text-lg hover:-translate-y-1">
                    Submit Enquiry <Send size={20} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map visual section */}
      <section className="h-[500px] w-full bg-secondary relative overflow-hidden">
        <motion.img 
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 10, ease: "linear" }}
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
          alt="Map Location" 
          className="w-full h-full object-cover grayscale opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mb-6 shadow-[0_20px_40px_rgba(0,82,155,0.4)] relative"
          >
            <MapPin size={40} />
            <div className="absolute -bottom-4 w-10 h-2 bg-black/20 rounded-full blur-sm" />
          </motion.div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full shadow-2xl font-bold text-white tracking-widest uppercase">
            Kanpur, Uttar Pradesh
          </div>
        </div>
      </section>
    </div>
  );
}

// Add ChevronDown since it was used in select
function ChevronDown(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );
}
