import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function FoundersLegacy() {
  return (
    <div className="bg-secondary-light min-h-screen">
      {/* Premium Inner Page Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000" 
            alt="Founder's Legacy" 
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
              Experience That Became a Foundation
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Legacy Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <div className="space-y-8 text-xl text-gray-700 leading-relaxed font-light">
              <p>
                Advanced Ortho Industries carries forward the professional experience and vision of its founder, <strong className="font-bold text-secondary">Mr K. N. Verma</strong>.
              </p>
              <p>
                With his background in Prosthetics & Orthotics and professional experience at ALIMCO, Kanpur, he established the foundation of the organisation with a focus on rehabilitation and patient-oriented solutions.
              </p>
              <p>
                Today, the next generation is carrying this vision forward by bringing together engineering knowledge, industrial experience and rehabilitation expertise.
              </p>
              <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10">
                <p className="font-medium text-primary text-2xl">
                  This combination enables Advanced Ortho Industries to look at orthopaedic and rehabilitation products from both clinical and engineering perspectives.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Timeline */}
      <section className="py-24 bg-secondary-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-16 relative">
                {[
                  { title: 'Mr. K. N. Verma', desc: 'The Visionary Founder' },
                  { title: 'Prosthetics & Orthotics', desc: 'Core Expertise' },
                  { title: 'Professional Experience', desc: 'ALIMCO, Kanpur & Reputed Institutions' },
                  { title: 'Foundation of Advanced Ortho', desc: 'Establishing a unit for quality rehabilitation solutions' },
                  { title: 'Next Generation', desc: 'Mr. Vishnu K Verma joins the leadership' },
                  { title: 'Engineering + Industrial Experience', desc: 'Bringing modern manufacturing practices' },
                  { title: 'Future of Rehabilitation Solutions', desc: 'A combined clinical and engineering approach' }
                ].map((step, idx, arr) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row gap-8 md:items-center relative z-10 group"
                  >
                    <div className="w-20 h-20 bg-white border-4 border-primary rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-lg shadow-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                      <span className="font-bold text-2xl">{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                      <p className="text-gray-500 font-medium text-lg">{step.desc}</p>
                    </div>
                    {/* Timeline Connector */}
                    {idx < arr.length - 1 && (
                      <div className="hidden md:block absolute left-[2.4rem] top-[5.5rem] w-1 h-[4.5rem] bg-gradient-to-b from-primary to-primary-light/30 rounded-full"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Experience to Innovation */}
      <section className="bg-secondary text-white py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2000')] opacity-5 mix-blend-screen bg-cover bg-center" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-20 tracking-tight text-white"
          >
            From Experience to Innovation
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 max-w-7xl mx-auto"
          >
            {[
              'EXPERIENCE',
              'ENGINEERING',
              'QUALITY',
              'INNOVATION',
              'REHABILITATION'
            ].map((word, idx) => (
              <motion.div 
                key={idx}
                variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white hover:bg-primary transition-all duration-300 p-4 md:p-6 lg:px-3 lg:py-6 xl:p-6 rounded-2xl cursor-pointer shadow-xl hover:shadow-primary/40 flex items-center justify-center text-center group"
              >
                <span className="font-bold text-sm md:text-base lg:text-sm xl:text-base break-words lg:break-normal w-full text-secondary group-hover:text-white transition-colors">{word}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
