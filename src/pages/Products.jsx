import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Orthopaedic Supports & Appliances',
    desc: 'Functional supports designed for structural stability and recovery.',
    img: '/products/ortho_supports.jpg'
  },
  {
    name: 'Rehabilitation Aids',
    desc: 'Aids designed to support mobility and independent movement.',
    img: '/products/rehab_aids.jpg'
  },
  {
    name: 'Prosthetic & Orthotic Products',
    desc: 'Specialized products crafted with engineering precision.',
    img: '/products/prosthetics.jpg'
  },
  {
    name: 'Knee & Limb Supports',
    desc: 'Support structures for joints requiring stabilization.',
    img: '/products/knee_brace.jpg'
  },
  {
    name: 'Splints and Orthotic Devices',
    desc: 'Devices designed to restrict movement for healing.',
    img: '/products/splints.jpg'
  },
  {
    name: 'Crepe and Support Bandages',
    desc: 'Essential medical-grade materials for basic support.',
    img: '/products/crepe_bandages.jpg'
  },
  {
    name: 'Patient Support Products',
    desc: 'Products aimed at improving overall patient comfort.',
    img: '/products/patient_support.jpg'
  },
  {
    name: 'Customised Orthopaedic Solutions',
    desc: 'Tailored solutions designed around specific requirements.',
    img: '/products/custom_ortho.jpg'
  }
];

export default function Products() {
  return (
    <div className="bg-secondary-light min-h-screen">
      {/* Premium Inner Page Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000" 
            alt="Our Products" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
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
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-primary-light font-light max-w-3xl mx-auto leading-relaxed">
              Advanced Ortho Industries Pvt. Ltd. is focused on manufacturing and developing a range of orthopaedic appliances and rehabilitation aids designed to support mobility, comfort and rehabilitation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group border border-gray-100 flex flex-col h-full transform hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-secondary/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={cat.img} 
                    alt={cat.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow relative bg-white">
                  {/* Decorative line */}
                  <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <h3 className="text-2xl font-bold mb-4 leading-tight text-secondary group-hover:text-primary transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-gray-600 text-lg mb-8 flex-grow leading-relaxed">{cat.desc}</p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors uppercase tracking-widest group/link"
                  >
                    Enquire Now <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Development Approach */}
      <section className="relative py-32 overflow-hidden bg-secondary border-t border-gray-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000')] opacity-5 mix-blend-screen bg-cover bg-center" />
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">Product Development Approach</h2>
            <p className="text-2xl text-gray-300 mb-8 leading-relaxed font-light">
              Our product development approach combines practical rehabilitation knowledge with engineering and manufacturing expertise.
            </p>
            <p className="text-lg text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
              We continuously work towards improving product functionality, comfort, durability and quality while keeping the requirements of patients and healthcare professionals in focus.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-light hover:text-secondary px-10 py-5 rounded-full font-bold transition-all duration-300 shadow-xl hover:-translate-y-1 text-lg"
            >
              Discuss Your Requirement <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
