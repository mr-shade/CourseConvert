import { motion } from 'framer-motion';
import { FiLayout, FiUsers, FiDollarSign, FiStar, FiMessageCircle, FiMail } from 'react-icons/fi';

const features = [
  {
    id: 1,
    icon: <FiLayout className="h-6 w-6" />,
    title: 'Beautiful Course Layout',
    description: 'Showcase your curriculum with a clean, organized layout that helps students understand what theyll learn.',
  },
  {
    id: 2,
    icon: <FiUsers className="h-6 w-6" />,
    title: 'Instructor Credibility',
    description: 'Highlight your expertise and teaching style with a professional bio section that builds trust.',
  },
  {
    id: 3,
    icon: <FiStar className="h-6 w-6" />,
    title: 'Social Proof',
    description: 'Display testimonials from past students to increase confidence in your course quality.',
  },
  {
    id: 4,
    icon: <FiDollarSign className="h-6 w-6" />,
    title: 'Flexible Pricing Options',
    description: 'Offer multiple pricing tiers with clear value propositions to maximize conversions.',
  },
  {
    id: 5,
    icon: <FiMessageCircle className="h-6 w-6" />,
    title: 'FAQ Section',
    description: 'Address common questions and objections to reduce friction in the enrollment process.',
  },
  {
    id: 6,
    icon: <FiMail className="h-6 w-6" />,
    title: 'Lead Capture',
    description: 'Collect emails from interested prospects with integrated forms that connect to your email provider.',
  },
];

const Features = () => {
  return (
    <section id="features" className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full mb-4"
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
            Everything You Need to Sell Your Course
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
              className="bg-white p-8 rounded-lg shadow-custom border border-gray-100 hover:border-primary-200 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 text-primary-600 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
