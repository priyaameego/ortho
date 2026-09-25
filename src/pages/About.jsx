import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="bg-white">
      {/* Premium Inner Page Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2000" 
            alt="About Advanced Ortho" 
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
              About Advanced Ortho Industries
            </h1>
            <p className="text-xl md:text-2xl text-primary-light font-light">
              Experience, engineering and rehabilitation expertise working together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-light/50 clip-diagonal pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-lg text-gray-700 leading-relaxed"
            >
              <p>
                Advanced Ortho Industries Pvt. Ltd. was initially established as a small unit with a vision of providing quality orthopaedic and rehabilitation solutions.
              </p>
              <p>
                The foundation of the company was laid by Mr K. N. Verma, a professional in the field of Prosthetics and Orthotics, who holds a qualification from the National Institute of Prosthetic and Orthotics Training (NIPOT), Cuttack, Odisha, now known as SVNIRTAR.
              </p>
              <p>
                Before establishing the unit, Mr. K. N. Verma rendered his professional services at ALIMCO, Kanpur, as a Prosthetist/Orthotist and Rehabilitation Expert. His professional journey includes experience in prosthetics, orthotics and rehabilitation services, including association with reputed healthcare institutions.
              </p>
              <p>
                The company is now being carried forward and promoted by his son, Mr. Vishnu K Verma, Mechanical Engineer, who brings more than 18 years of professional experience across Automotive, Defence, Power, Textile and Rehabilitation domains.
              </p>
              <div className="p-6 bg-secondary-light rounded-2xl border-l-4 border-primary">
                <p className="font-bold text-secondary text-xl">
                  This combination of clinical rehabilitation expertise and engineering experience forms the foundation of Advanced Ortho Industries.
                </p>
              </div>
              <div className="bg-primary/5 p-6 rounded-2xl flex items-start gap-4">
                <div className="w-2 h-full bg-primary rounded-full shrink-0"></div>
                <p className="font-medium text-gray-800">
                  As an ISO 9001:2015 Certified Company, we are committed to maintaining systematic quality processes and continuously improving our products and services.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-32 bg-secondary-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgwLDgyLDE1NSwwLjA1KSIvPjwvc3ZnPg==')] pointer-events-none opacity-50" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden"
          >
            <div className="grid lg:grid-cols-5">
              {/* Graphic/Left Side */}
              <div className="lg:col-span-2 bg-secondary relative overflow-hidden min-h-[400px] flex items-center justify-center p-12">
                <div className="absolute inset-0 opacity-10">
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_90deg_at_50%_50%,#00529b_0%,transparent_50%,#00529b_100%)]"
                  />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-secondary/90 backdrop-blur-3xl" />
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="w-32 h-32 rounded-full border-2 border-primary-light/30 flex items-center justify-center mb-8 relative">
                    <div className="absolute inset-2 rounded-full border border-white/10" />
                    <svg className="w-12 h-12 text-primary-light opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.714 4.026-6.589 4.983-6.589l1.011 1.011c-1.892 0-3.012 1.487-3.012 4.469h3v8.5H14.017zm-10 0v-7.391c0-5.714 4.026-6.589 4.983-6.589l1.011 1.011c-1.892 0-3.012 1.487-3.012 4.469h3v8.5H4.017z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-heading font-bold text-white tracking-wider uppercase mb-2">Director's</h3>
                  <h3 className="text-3xl font-heading font-light text-primary-light italic">Message</h3>
                </motion.div>
              </div>

              {/* Content/Right Side */}
              <div className="lg:col-span-3 p-12 lg:p-20 relative bg-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full pointer-events-none" />
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed relative z-10">
                  <p className="text-2xl font-heading font-semibold text-secondary leading-snug mb-8">
                    "At Advanced Ortho Industries Pvt. Ltd., our vision is to combine rehabilitation expertise with engineering excellence to develop reliable and practical orthopaedic and rehabilitation solutions.
                  </p>
                  
                  <p>
                    Building on the strong foundation laid by our founder, Shri K. N. Verma, and his experience in Prosthetics, Orthotics and Rehabilitation, we are committed to carrying this legacy forward through quality, innovation and continuous improvement.
                  </p>
                  
                  <p>
                    We believe that growth is meaningful when it contributes to society. Through Advanced Ortho Industries, we aim to build a responsible organisation that continuously learns, innovates and improves to develop dependable rehabilitation solutions.
                  </p>
                  
                  <p className="font-medium text-primary">
                    Our journey has begun with experience. Our future is driven by innovation, quality and a commitment to better rehabilitation solutions."
                  </p>
                </div>
                
                <div className="mt-16 pt-8 border-t border-gray-100 relative z-10">
                  <div className="w-12 h-1 bg-primary mb-6" />
                  <h4 className="text-2xl font-bold text-secondary mb-1">Vishnu K Verma</h4>
                  <p className="text-gray-500 font-medium tracking-wide uppercase text-sm mb-1">Director</p>
                  <p className="text-gray-400 text-sm">Advanced Ortho Industries Pvt. Ltd.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Timeline */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-secondary">The Journey</h2>
            <p className="text-xl text-gray-600">From professional clinical experience to an established engineering and manufacturing organisation.</p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12 relative">
              {/* Connecting Line */}
              <div className="absolute left-[1.6rem] top-4 bottom-8 w-1 bg-gradient-to-b from-primary to-primary-light/30 rounded-full" />
              
              {[
                'Foundation & Clinical Focus',
                'Professional Prosthetics & Orthotics Experience',
                'Engineering & Industrial Expertise Integration',
                'Advanced Ortho Industries Formation',
                'Continuous Improvement & Future Growth'
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="flex items-start gap-8 relative z-10 group bg-white p-6 rounded-2xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-transparent hover:border-gray-50 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border-4 border-primary text-primary flex items-center justify-center font-bold text-lg shrink-0 shadow-lg shadow-primary/20 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {idx + 1}
                  </div>
                  <span className="font-bold text-2xl text-secondary mt-2 group-hover:text-primary transition-colors">{step}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="bg-secondary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000')] opacity-5 mix-blend-screen bg-cover bg-center" />
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16 tracking-tight text-white"
          >
            Our Expertise
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6"
          >
            {[
              'Prosthetics',
              'Orthotics',
              'Rehabilitation',
              'Engineering',
              'Manufacturing',
              'Quality Processes'
            ].map((skill, idx) => (
              <motion.div 
                key={idx}
                variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white hover:bg-primary transition-all duration-300 p-4 md:p-6 lg:px-3 lg:py-6 xl:p-6 rounded-2xl cursor-pointer shadow-xl hover:shadow-primary/40 flex items-center justify-center text-center group"
              >
                <span className="font-bold text-sm md:text-base lg:text-sm xl:text-base break-words lg:break-normal w-full text-secondary group-hover:text-white transition-colors">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
