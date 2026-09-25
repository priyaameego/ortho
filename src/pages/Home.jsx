import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lightbulb, CheckCircle2, ChevronRight, Activity, Cpu, ArrowRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

const products = [
  'Orthopaedic Supports & Appliances',
  'Rehabilitation Aids',
  'Prosthetic & Orthotic Products',
  'Knee & Limb Supports',
  'Splints and Orthotic Devices',
  'Crepe and Support Bandages',
  'Patient Support Products',
  'Customised Orthopaedic Solutions',
];

const heroImages = [
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80&w=2000"
];

export default function Home() {
  const heroRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="overflow-hidden bg-secondary-light">
      {/* 1. HOMEPAGE HERO — FULL-WIDTH CINEMATIC BANNER WITH KEN BURNS & DEPTH */}
      <section ref={heroRef} className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Ken Burns Background Slider */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-secondary">
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={currentSlide}
              initial={{ scale: 1, opacity: 0 }}
              animate={{ 
                scale: 1.08,
                opacity: 0.6,
                transition: { 
                  scale: { duration: 15, ease: "linear" },
                  opacity: { duration: 1.5 }
                }
              }}
              exit={{ opacity: 0, transition: { duration: 1.5 } }}
              src={heroImages[currentSlide]}
              alt="Medical Engineering Hero"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
            />
          </AnimatePresence>
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-primary/40 z-10"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE1KSIvPjwvc3ZnPg==')] z-10 opacity-30"></div>
        </div>

        {/* 3D Depth Elements */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-10 pointer-events-none">
          <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[10%] w-[300px] h-[300px] border border-primary/20 rounded-full"
          />
          <motion.div 
            animate={{ y: [0, 30, 0], x: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"
          />
        </motion.div>

        <div className="container mx-auto px-6 lg:px-12 relative z-20 pt-20">
          <div className="max-w-4xl">
            {/* Sequenced Text Animation */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
              }}
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-2xl">
                  <ShieldCheck size={16} className="text-primary-light" />
                  ISO 9001:2015 Certified Company
                </div>
              </motion.div>
              
              <motion.h1 
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-white tracking-tight"
              >
                Orthopaedic & Rehabilitation Solutions with <span className="text-primary-light relative inline-block">Experience<div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/50 blur-sm rounded-full"></div></span>, <span className="text-primary-light">Engineering</span> and <span className="text-primary-light">Care</span>
              </motion.h1>
              
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light"
              >
                Advanced Ortho Industries Pvt. Ltd. is an ISO 9001:2015 Certified Company engaged in the manufacturing of orthopaedic appliances, rehabilitation aids, prosthetic and orthotic products.
              </motion.p>
              
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/products"
                  className="bg-primary hover:bg-primary-light text-white hover:text-secondary px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(0,82,155,0.4)] hover:shadow-[0_0_30px_rgba(0,82,155,0.6)] hover:-translate-y-1 flex items-center gap-2 group"
                >
                  Explore Our Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Premium Cards */}
          <div className="absolute right-6 lg:right-12 bottom-12 hidden lg:flex flex-col gap-6 z-30">
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 rounded-2xl shadow-2xl flex items-center gap-4 w-64 hover:bg-white/15 transition-colors cursor-default"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light shrink-0">
                <Activity size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Focus Area</p>
                <p className="font-bold text-white leading-tight">Rehabilitation</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 rounded-2xl shadow-2xl flex items-center gap-4 w-64 hover:bg-white/15 transition-colors cursor-default"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Quality</p>
                <p className="font-bold text-white leading-tight">ISO 9001:2015</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white relative z-20 py-24">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-secondary tracking-tight">About Advanced Ortho</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Advanced Ortho Industries Pvt. Ltd. is an ISO 9001:2015 Certified Company engaged in the manufacturing of orthopaedic appliances, rehabilitation aids, prosthetic and orthotic products.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to serve the healthcare and rehabilitation sector, the company combines professional expertise in Prosthetics & Orthotics with modern engineering and industrial experience.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
              With a strong foundation built on technical knowledge, practical experience and a commitment to quality, Advanced Ortho Industries is focused on developing products that support comfort, functionality, mobility and rehabilitation.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_10px_20px_rgba(0,82,155,0.2)] hover:shadow-[0_15px_30px_rgba(0,82,155,0.4)] hover:-translate-y-1 text-lg group"
            >
              Know More About Us <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-secondary-light py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-secondary tracking-tight"
            >
              Our Commitment
            </motion.h2>
          </div>
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: 'QUALITY', icon: ShieldCheck, desc: 'Maintaining systematic processes to ensure dependable products.' },
              { title: 'INNOVATION', icon: Lightbulb, desc: 'Combining engineering with practical clinical applications.' },
              { title: 'RELIABILITY', icon: CheckCircle2, desc: 'Focused on delivering trusted solutions for healthcare needs.' },
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
                whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
                className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-[2rem] shadow-[0_10px_30px_rgba(0,82,155,0.06)] hover:shadow-[0_20px_40px_rgba(0,82,155,0.12)] border border-gray-100 border-t-4 border-t-primary/20 hover:border-t-primary transition-all duration-500 group relative z-10"
                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
              >
                <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <card.icon size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary tracking-tight">What We Do</h2>
              <p className="text-xl text-gray-600">A comprehensive range of products manufactured to support recovery and improve mobility.</p>
            </div>
            <Link to="/products" className="shrink-0 text-primary font-bold text-lg hover:text-primary-dark transition-colors flex items-center gap-2 group">
              View All Products <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={{ hidden: { opacity: 0, scale: 0.95, y: 20 }, show: { opacity: 1, scale: 1, y: 0 } }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-secondary-light hover:bg-primary hover:text-white p-8 rounded-2xl transition-all duration-500 cursor-pointer group flex items-center justify-between shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary"
              >
                <span className="font-semibold text-lg leading-tight">{item}</span>
                <ChevronRight size={24} className="text-primary/40 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 ml-4" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience + Engineering */}
      <section className="bg-secondary text-white py-0 overflow-hidden relative">
        <div className="grid lg:grid-cols-2">
          <div className="h-[500px] lg:h-auto w-full relative overflow-hidden group">
            <motion.img 
              initial={{ scale: 1 }}
              whileInView={{ scale: 1.05 }}
              transition={{ duration: 10, ease: "linear" }}
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
              alt="Engineering Lab" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-secondary hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent lg:hidden" />
          </div>
          <div className="p-12 lg:p-24 flex flex-col justify-center bg-secondary relative z-10">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
                Experience + Engineering + Rehabilitation
              </h2>
              <p className="text-2xl text-gray-300 leading-relaxed font-light">
                Our product development approach combines practical rehabilitation knowledge with engineering and manufacturing expertise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Trust */}
      <section className="bg-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 divide-x divide-gray-100"
          >
            {[
              'ISO 9001:2015',
              'Quality Focused',
              'Engineering Experience',
              'Rehabilitation Expertise'
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="text-center px-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-3">{stat}</div>
                <div className="text-gray-500 text-sm uppercase tracking-widest font-bold">Core Pillar</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-secondary relative py-24 overflow-hidden border-t border-gray-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2000')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-10 text-white tracking-tight">Building Better Rehabilitation Solutions</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/products"
                className="bg-primary hover:bg-primary-light text-white hover:text-secondary px-10 py-5 rounded-full font-bold transition-all duration-300 shadow-xl hover:-translate-y-1 text-lg"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
