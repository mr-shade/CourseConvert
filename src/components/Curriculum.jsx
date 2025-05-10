import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiCheck, FiClock, FiVideo, FiFileText } from 'react-icons/fi';

const modules = [
  {
    id: 1,
    title: 'Getting Started with Course Creation',
    description: 'Learn the fundamentals of creating an engaging online course',
    lessons: [
      { id: 1, title: 'Introduction to Online Teaching', duration: '15 min', type: 'video' },
      { id: 2, title: 'Setting Up Your Teaching Environment', duration: '20 min', type: 'video' },
      { id: 3, title: 'Planning Your Course Structure', duration: '25 min', type: 'video' },
      { id: 4, title: 'Course Creation Checklist', duration: '10 min', type: 'document' },
    ],
  },
  {
    id: 2,
    title: 'Creating Engaging Course Content',
    description: 'Master the art of creating content that keeps students engaged',
    lessons: [
      { id: 1, title: 'Crafting Compelling Video Lessons', duration: '30 min', type: 'video' },
      { id: 2, title: 'Designing Effective Slides', duration: '25 min', type: 'video' },
      { id: 3, title: 'Creating Interactive Exercises', duration: '20 min', type: 'video' },
      { id: 4, title: 'Content Creation Templates', duration: '15 min', type: 'document' },
    ],
  },
  {
    id: 3,
    title: 'Marketing Your Course',
    description: 'Learn proven strategies to promote and sell your course',
    lessons: [
      { id: 1, title: 'Building Your Course Landing Page', duration: '35 min', type: 'video' },
      { id: 2, title: 'Email Marketing for Course Creators', duration: '40 min', type: 'video' },
      { id: 3, title: 'Social Media Promotion Strategies', duration: '30 min', type: 'video' },
      { id: 4, title: 'Marketing Calendar Template', duration: '10 min', type: 'document' },
    ],
  },
  {
    id: 4,
    title: 'Growing Your Course Business',
    description: 'Scale your course business and create multiple income streams',
    lessons: [
      { id: 1, title: 'Creating a Course Ecosystem', duration: '25 min', type: 'video' },
      { id: 2, title: 'Building a Community Around Your Course', duration: '30 min', type: 'video' },
      { id: 3, title: 'Launching Multiple Courses', duration: '35 min', type: 'video' },
      { id: 4, title: 'Business Growth Planner', duration: '15 min', type: 'document' },
    ],
  },
];

const Curriculum = () => {
  const [openModule, setOpenModule] = useState(1);

  const toggleModule = (moduleId) => {
    setOpenModule(openModule === moduleId ? null : moduleId);
  };

  const getIcon = (type) => {
    switch (type) {
      case 'video':
        return <FiVideo className="h-4 w-4" />;
      case 'document':
        return <FiFileText className="h-4 w-4" />;
      default:
        return <FiVideo className="h-4 w-4" />;
    }
  };

  return (
    <section id="curriculum" className="section bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Course Curriculum
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What You'll Learn
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our comprehensive curriculum will take you from beginner to expert with step-by-step lessons and practical exercises.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {modules.map((module, index) => (
            <motion.div 
              key={module.id}
              className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div 
                className={`px-6 py-4 flex justify-between items-center cursor-pointer ${openModule === module.id ? 'bg-primary-50 border-b border-gray-200' : ''}`}
                onClick={() => toggleModule(module.id)}
              >
                <div>
                  <h3 className="text-lg font-bold flex items-center">
                    <span className="flex items-center justify-center w-8 h-8 bg-primary-100 text-primary-700 rounded-full mr-3 text-sm font-bold">
                      {module.id}
                    </span>
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{module.description}</p>
                </div>
                <div>
                  {openModule === module.id ? <FiChevronUp className="h-5 w-5 text-primary-600" /> : <FiChevronDown className="h-5 w-5 text-gray-400" />}
                </div>
              </div>
              
              {openModule === module.id && (
                <div className="px-6 py-4">
                  <ul className="divide-y divide-gray-100">
                    {module.lessons.map((lesson) => (
                      <li key={lesson.id} className="py-3 flex justify-between items-center">
                        <div className="flex items-center">
                          <span className="mr-3 text-primary-600">
                            {getIcon(lesson.type)}
                          </span>
                          <span>{lesson.title}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <FiClock className="mr-1 h-4 w-4" />
                          <span>{lesson.duration}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Course Includes:</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center">
                <FiCheck className="h-5 w-5 text-primary-600 mr-2" />
                <span>16 Video Lessons</span>
              </div>
              <div className="flex items-center">
                <FiCheck className="h-5 w-5 text-primary-600 mr-2" />
                <span>4 Downloadable Resources</span>
              </div>
              <div className="flex items-center">
                <FiCheck className="h-5 w-5 text-primary-600 mr-2" />
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center">
                <FiCheck className="h-5 w-5 text-primary-600 mr-2" />
                <span>Certificate of Completion</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
