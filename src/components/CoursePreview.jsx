import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiX, FiClock, FiVideo, FiDownload, FiCheck } from 'react-icons/fi';

const previewLessons = [
  {
    id: 1,
    title: 'Introduction to the Course',
    duration: '10:25',
    type: 'video',
    free: true,
  },
  {
    id: 2,
    title: 'Setting Up Your Learning Environment',
    duration: '15:40',
    type: 'video',
    free: true,
  },
  {
    id: 3,
    title: 'Core Concepts Explained',
    duration: '22:15',
    type: 'video',
    free: false,
  },
  {
    id: 4,
    title: 'Practical Exercise Walkthrough',
    duration: '18:30',
    type: 'video',
    free: false,
  },
  {
    id: 5,
    title: 'Course Resources & Materials',
    duration: 'N/A',
    type: 'download',
    free: true,
  }
];

const CoursePreview = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (lessonId) => {
    setSelectedVideo(lessonId);
    setVideoOpen(true);
  };

  const closeVideo = () => {
    setVideoOpen(false);
  };

  return (
    <section id="preview" className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Course Preview
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Sample What You'll Learn
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get a taste of our teaching style and course content with these free preview lessons.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div 
            className="lg:col-span-3 relative rounded-lg overflow-hidden shadow-custom"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-800 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => openVideo(1)}
                >
                  <FiPlay className="h-8 w-8 text-white" />
                </motion.button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">Introduction to the Course</h3>
                <p className="text-white/80">Get an overview of what you'll learn and how the course is structured</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-custom overflow-hidden">
              <div className="p-6 bg-primary-50 border-b border-gray-200">
                <h3 className="text-xl font-bold">Preview Lessons</h3>
                <p className="text-gray-600">Watch sample lessons from the course</p>
              </div>
              <ul className="divide-y divide-gray-100">
                {previewLessons.map((lesson) => (
                  <li key={lesson.id} className="p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-center">
                      <div className="flex items-start">
                        <div className="mr-3 mt-1">
                          {lesson.type === 'video' ? (
                            <FiVideo className="h-5 w-5 text-primary-600" />
                          ) : (
                            <FiDownload className="h-5 w-5 text-primary-600" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium">{lesson.title}</h4>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <FiClock className="mr-1 h-4 w-4" />
                            <span>{lesson.duration}</span>
                          </div>
                        </div>
                      </div>
                      {lesson.free ? (
                        <button 
                          className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                          onClick={() => lesson.type === 'video' && openVideo(lesson.id)}
                        >
                          {lesson.type === 'video' ? 'Watch' : 'Download'}
                        </button>
                      ) : (
                        <span className="text-gray-500 text-sm">Premium</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center text-gray-600">
                  <FiCheck className="h-5 w-5 text-green-500 mr-2" />
                  <span>Free preview lessons available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Video Modal */}
        {videoOpen && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <button 
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                onClick={closeVideo}
              >
                <FiX className="h-8 w-8" />
              </button>
              <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                <div className="flex items-center justify-center text-white">
                  <p>Video player would be embedded here</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursePreview;
