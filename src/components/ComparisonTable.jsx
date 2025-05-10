import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';

const ComparisonTable = () => {
  const features = [
    { name: 'Course Content Access', basic: true, pro: true, enterprise: true },
    { name: 'HD Video Lessons', basic: true, pro: true, enterprise: true },
    { name: 'Downloadable Resources', basic: true, pro: true, enterprise: true },
    { name: 'Mobile App Access', basic: false, pro: true, enterprise: true },
    { name: 'Certificate of Completion', basic: false, pro: true, enterprise: true },
    { name: 'Priority Support', basic: false, pro: true, enterprise: true },
    { name: 'Live Q&A Sessions', basic: false, pro: false, enterprise: true },
    { name: 'One-on-One Coaching', basic: false, pro: false, enterprise: true },
    { name: 'Private Community Access', basic: false, pro: true, enterprise: true },
    { name: 'Course Updates', basic: '1 year', pro: 'Lifetime', enterprise: 'Lifetime' },
    { name: 'Team Members', basic: '1', pro: 'Up to 5', enterprise: 'Unlimited' },
  ];

  return (
    <section id="comparison" className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Plan Comparison
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose the Right Plan for You
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Compare our plans to find the perfect fit for your learning needs and budget.
          </motion.p>
        </div>
        
        <motion.div 
          className="max-w-5xl mx-auto overflow-x-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="py-6 px-6 text-left bg-gray-50 border-b border-gray-200"></th>
                <th className="py-6 px-6 text-center bg-gray-50 border-b border-gray-200">
                  <div className="text-lg font-bold">Basic</div>
                  <div className="text-2xl font-bold mt-2">$12</div>
                  <div className="text-sm text-gray-500">per month</div>
                </th>
                <th className="py-6 px-6 text-center bg-primary-50 border-b border-primary-100 relative">
                  <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                    <span className="inline-flex rounded-full bg-primary-100 px-4 py-1 text-xs font-semibold text-primary-700">
                      Most Popular
                    </span>
                  </div>
                  <div className="text-lg font-bold text-primary-700">Pro</div>
                  <div className="text-2xl font-bold mt-2 text-primary-700">$39</div>
                  <div className="text-sm text-primary-600">per month</div>
                </th>
                <th className="py-6 px-6 text-center bg-gray-50 border-b border-gray-200">
                  <div className="text-lg font-bold">Enterprise</div>
                  <div className="text-2xl font-bold mt-2">$69</div>
                  <div className="text-sm text-gray-500">per month</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-4 px-6 border-b border-gray-200 font-medium">{feature.name}</td>
                  <td className="py-4 px-6 text-center border-b border-gray-200">
                    {typeof feature.basic === 'boolean' ? (
                      feature.basic ? (
                        <FiCheck className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <FiX className="h-5 w-5 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span>{feature.basic}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center border-b border-primary-100 bg-primary-50">
                    {typeof feature.pro === 'boolean' ? (
                      feature.pro ? (
                        <FiCheck className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <FiX className="h-5 w-5 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span className="font-medium">{feature.pro}</span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-center border-b border-gray-200">
                    {typeof feature.enterprise === 'boolean' ? (
                      feature.enterprise ? (
                        <FiCheck className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <FiX className="h-5 w-5 text-gray-300 mx-auto" />
                      )
                    ) : (
                      <span>{feature.enterprise}</span>
                    )}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="py-6 px-6"></td>
                <td className="py-6 px-6 text-center">
                  <motion.button
                    className="btn btn-outline w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </td>
                <td className="py-6 px-6 text-center">
                  <motion.button
                    className="btn btn-primary w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Pro
                  </motion.button>
                </td>
                <td className="py-6 px-6 text-center">
                  <motion.button
                    className="btn btn-secondary w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Sales
                  </motion.button>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
