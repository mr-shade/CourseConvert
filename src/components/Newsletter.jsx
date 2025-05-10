import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiCheck } from 'react-icons/fi';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary-900 to-secondary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FiMail className="h-12 w-12 mx-auto mb-4 text-primary-300" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Course News</h2>
            <p className="text-lg text-white/80">
              Subscribe to our newsletter for exclusive content, teaching tips, and special offers.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitted ? (
              <div className="text-center py-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
                  <FiCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Thank You for Subscribing!</h3>
                <p className="text-white/80">
                  You've been added to our newsletter. Watch your inbox for course updates and special offers.
                </p>
                <button 
                  className="mt-6 text-primary-300 hover:text-white transition-colors"
                  onClick={() => setSubmitted(false)}
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary-300"
                      required
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="consent"
                        type="checkbox"
                        className="h-4 w-4 rounded border-white/20 bg-white/10 text-primary-500 focus:ring-primary-300"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="consent" className="text-white/80">
                        I agree to receive email newsletters and promotional content. You can unsubscribe at any time.
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <motion.button
                      type="submit"
                      className="w-full btn bg-white text-primary-700 hover:bg-white/90 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="inline-flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        'Subscribe Now'
                      )}
                    </motion.button>
                  </div>
                </form>
                
                <div className="mt-6 text-center text-sm text-white/60">
                  We respect your privacy and will never share your information.
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
