import { motion } from 'framer-motion';
import { FiLayout, FiUsers, FiDollarSign, FiStar, FiMessageCircle, FiMail, FiArrowRight } from 'react-icons/fi';

const features = [
  {
    id: 1,
    icon: <FiLayout className="h-6 w-6" />,
    title: 'Beautiful Course Layout',
    description: "Showcase your curriculum with a clean, organized layout that helps students understand what they will learn.",
    color: 'from-blue-500 to-blue-600',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    id: 2,
    icon: <FiUsers className="h-6 w-6" />,
    title: 'Instructor Credibility',
    description: 'Highlight your expertise and teaching style with a professional bio section that builds trust.',
    color: 'from-purple-500 to-purple-600',
    lightColor: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
  {
    id: 3,
    icon: <FiStar className="h-6 w-6" />,
    title: 'Social Proof',
    description: 'Display testimonials from past students to increase confidence in your course quality.',
    color: 'from-yellow-500 to-yellow-600',
    lightColor: 'bg-yellow-50',
    textColor: 'text-yellow-600',
  },
  {
    id: 4,
    icon: <FiDollarSign className="h-6 w-6" />,
    title: 'Flexible Pricing Options',
    description: 'Offer multiple pricing tiers with clear value propositions to maximize conversions.',
    color: 'from-green-500 to-green-600',
    lightColor: 'bg-green-50',
    textColor: 'text-green-600',
  },
  {
    id: 5,
    icon: <FiMessageCircle className="h-6 w-6" />,
    title: 'FAQ Section',
    description: 'Address common questions and objections to reduce friction in the enrollment process.',
    color: 'from-pink-500 to-pink-600',
    lightColor: 'bg-pink-50',
    textColor: 'text-pink-600',
  },
  {
    id: 6,
    icon: <FiMail className="h-6 w-6" />,
    title: 'Lead Capture',
    description: 'Collect emails from interested prospects with integrated forms that connect to your email provider.',
    color: 'from-indigo-500 to-indigo-600',
    lightColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
  },
];

const Features = () => {
  return (
    <section id="features" className="section bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full mb-4 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powerful Features
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything You Need to <span className="heading-gradient">Sell Your Course</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            CourseConvert includes all the essential elements to create a high-converting landing page that turns visitors into enrolled students.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="bg-white p-8 rounded-xl shadow-soft border border-gray-100 hover:border-primary-200 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1)' }}
            >
              <div className={`inline-flex items-center justify-center p-3 ${feature.lightColor} ${feature.textColor} rounded-xl mb-5 shadow-sm`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-5">{feature.description}</p>

              <div className="pt-2 border-t border-gray-100">
                <a href="#" className={`inline-flex items-center text-sm font-medium ${feature.textColor} hover:opacity-80 transition-opacity`}>
                  Learn more <FiArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a href="#curriculum" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 shadow-lg transition-all duration-200">
            Explore All Features <FiArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
