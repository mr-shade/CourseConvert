import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiClock } from 'react-icons/fi';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-700 opacity-95"></div>
      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-lg border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <FiClock className="mr-2 h-4 w-4" />
                  Limited Time Offer
                </motion.div>

                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Ready to Create Your High-Converting Course Landing Page?
                </motion.h2>

                <motion.p
                  className="text-xl mb-8 text-white/90"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Join thousands of course creators who are using CourseConvert to increase their enrollments and grow their online teaching business.
                </motion.p>

                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {[
                    'Fully responsive design for all devices',
                    'High-converting layout and components',
                    'Easy customization with Tailwind CSS',
                    'Regular updates and new features'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                        <FiCheck className="h-3.5 w-3.5 text-white" />
                      </div>
                      <p className="ml-3 text-white/90">{feature}</p>
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">Get Started Today</h3>
                <p className="text-white/80 mb-6">Lock in our special pricing before it's gone!</p>

                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/90">Regular Price</span>
                    <span className="text-white/70 line-through">$99</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white font-bold">Today's Price</span>
                    <span className="text-white font-bold text-2xl">$49</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full mb-2">
                    <div className="h-full w-[15%] bg-white rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-white/70 text-sm">
                    <span className="text-white font-medium">85% claimed!</span> Offer ends soon
                  </p>
                </div>

                <motion.button
                  className="w-full btn bg-white text-primary-700 hover:bg-gray-100 shadow-lg mb-4 btn-3d"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get Started Now <FiArrowRight className="ml-2" />
                </motion.button>

                <motion.button
                  className="w-full btn border-2 border-white text-white hover:bg-white/10"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Schedule a Demo
                </motion.button>

                <p className="mt-6 text-center text-white/70 text-sm">
                  No credit card required. 14-day free trial available on all plans.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
