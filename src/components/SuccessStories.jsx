import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const successStories = [
  {
    id: 1,
    name: 'Jennifer Williams',
    role: 'Marketing Specialist',
    story: 'Before taking this course, I struggled to create effective landing pages for my clients. The structured approach and practical examples helped me develop a system that has increased conversion rates by an average of 35% for my clients.',
    achievement: 'Increased client conversion rates by 35%',
    imagePlaceholder: 'JW',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Fitness Coach',
    story: 'As someone with expertise in fitness but limited online marketing knowledge, this course was a game-changer. I launched my online coaching program using the templates and strategies, and enrolled 200+ students in my first month.',
    achievement: 'Enrolled 200+ students in first month',
    imagePlaceholder: 'MJ',
  },
  {
    id: 3,
    name: 'Sophia Chen',
    role: 'Language Teacher',
    story: 'I was skeptical about online courses, but decided to give it a try for my language teaching business. The step-by-step guidance helped me create a professional landing page that perfectly showcases my teaching style and course benefits.',
    achievement: 'Doubled monthly enrollment rate',
    imagePlaceholder: 'SC',
  }
];

const SuccessStories = () => {
  return (
    <section id="success-stories" className="section bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Student Success Stories
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Real Results from Real Students
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hear from students who have transformed their businesses and careers with our course.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              className="bg-white rounded-lg shadow-custom overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="h-3 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-xl font-bold mr-4">
                    {story.imagePlaceholder}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{story.name}</h3>
                    <p className="text-gray-600">{story.role}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="bg-primary-50 text-primary-700 font-medium px-4 py-2 rounded-md inline-block mb-4">
                    {story.achievement}
                  </div>
                  <p className="text-gray-700">{story.story}</p>
                </div>
                
                <motion.a
                  href="#"
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                  whileHover={{ x: 5 }}
                >
                  Read full story <FiArrowRight className="ml-2" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-700 mb-6">Join hundreds of successful students who have transformed their careers</p>
          <button className="btn btn-primary">Enroll Now and Write Your Success Story</button>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
