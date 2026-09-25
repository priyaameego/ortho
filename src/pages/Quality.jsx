import { motion } from 'framer-motion';
import { CheckCircle, Users, TrendingUp, Settings, Shield } from 'lucide-react';

const qualityPillars = [
  {
    title: 'CONSISTENT QUALITY',
    desc: 'We strive to maintain consistency in our manufacturing and inspection processes.',
    icon: CheckCircle
  },
  {
    title: 'CUSTOMER FOCUS',
    desc: 'We understand the requirements of patients, healthcare professionals and customers and work towards meeting applicable requirements.',
    icon: Users
  },
  {
    title: 'CONTINUOUS IMPROVEMENT',
    desc: 'We continuously review our processes and seek opportunities for improvement.',
    icon: TrendingUp
  },
  {
    title: 'PROCESS DISCIPLINE',
    desc: 'We follow systematic processes for procurement, manufacturing, inspection and delivery.',
    icon: Settings
  },
  {
    title: 'RELIABILITY & RESPONSIBILITY',
    desc: 'We aim to provide products that are dependable and suitable for their intended applications.',
    icon: Shield
  }
];

export default function Quality() {
  return (
    <div className="bg-white">
      {/* Premium Inner Page Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000" 
            alt="Quality" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
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
              Quality & Commitment
            </h1>
            <p className="text-xl md:text-2xl text-primary-light font-medium tracking-widest uppercase">
              An ISO 9001:2015 Certified Company
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative">
        {/* Abstract background shape */}
        <div className="absolute -top-[20%] left-0 w-1/2 h-full bg-primary/5 clip-diagonal pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <p className="text-2xl text-secondary font-light leading-relaxed mb-8">
              At <strong className="font-bold">Advanced Ortho Industries Pvt. Ltd.</strong>, quality is an integral part of our approach to product development and manufacturing.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-600 leading-relaxed">
              Our ISO 9001:2015 certification reflects our commitment to maintaining a structured Quality Management System and continually improving our processes.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {qualityPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <pillar.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-secondary">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ISO Section Premium */}
      <section className="bg-secondary text-white py-32 text-center relative overflow-hidden">
        {/* Animated Background Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[600px] h-[600px] border border-primary rounded-full border-dashed"
          />
          <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[800px] h-[800px] border border-primary-light rounded-full border-dashed opacity-50"
          />
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(255,255,255,0.2)] relative"
          >
            <Shield size={64} className="text-primary" />
            <div className="absolute inset-0 border-4 border-primary rounded-full animate-ping opacity-20"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">ISO 9001:2015</h2>
            <p className="text-2xl text-primary-light mb-12 tracking-widest uppercase font-bold">Certified Company</p>
            <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <p className="text-2xl md:text-3xl font-light text-white italic">
                "Quality is not only a certification—it is a commitment to continuous improvement."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
