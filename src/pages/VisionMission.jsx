import { motion } from 'framer-motion';
import { Target, Flag, Shield, Award, Lightbulb, HeartHandshake, TrendingUp } from 'lucide-react';

const missions = [
  "To develop and manufacture quality orthopaedic and rehabilitation products.",
  "To combine rehabilitation expertise with modern engineering practices.",
  "To continuously improve product quality and manufacturing processes.",
  "To understand and respond to the practical needs of patients and healthcare professionals.",
  "To develop reliable and functional solutions at accessible and sustainable levels.",
  "To build long-term relationships with customers, healthcare institutions and business partners."
];

const values = [
  { name: 'QUALITY', icon: Shield },
  { name: 'INTEGRITY', icon: Award },
  { name: 'INNOVATION', icon: Lightbulb },
  { name: 'RESPONSIBILITY', icon: HeartHandshake },
  { name: 'CONTINUOUS IMPROVEMENT', icon: TrendingUp }
];

export default function VisionMission() {
  return (
    <div className="bg-white">
      {/* Premium Inner Page Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2000" 
            alt="Vision & Mission" 
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/60 z-10" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-20 text-center pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mb-8 shadow-2xl border border-white/20 text-white">
              <Target size={48} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Our Vision & Mission
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-secondary-light relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-primary/5 clip-diagonal pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 md:p-16 rounded-[3rem] shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-gray-100 text-center max-w-5xl mx-auto relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-primary rounded-b-xl" />
            <h2 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-8">The Vision</h2>
            <p className="text-3xl md:text-4xl text-secondary font-bold leading-relaxed tracking-tight">
              "To build a trusted organisation in the field of orthopaedic, prosthetic, orthotic and rehabilitation solutions, with a focus on quality, innovation and user needs."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary"
            >
              <Flag size={40} />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Mission</h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {missions.map((mission, idx) => (
              <motion.div 
                key={idx}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-[0_10px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                <div className="text-5xl font-bold text-gray-100 mb-6 font-heading group-hover:text-primary-light transition-colors duration-300">
                  0{idx + 1}
                </div>
                <p className="text-gray-700 leading-relaxed font-medium text-lg relative z-10">
                  {mission}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000')] opacity-5 mix-blend-screen bg-cover bg-center" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight"
          >
            Our Values
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-6xl mx-auto"
          >
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] flex flex-col items-center gap-6 hover:bg-primary transition-all duration-300 cursor-default min-w-[220px] shadow-xl hover:shadow-primary/30"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                  <val.icon size={32} className="text-white" />
                </div>
                <span className="font-bold tracking-widest uppercase">{val.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
