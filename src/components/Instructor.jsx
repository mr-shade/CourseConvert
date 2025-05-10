import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiYoutube, FiGlobe } from 'react-icons/fi';

const instructors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Lead Instructor & Course Creator',
    bio: 'Dr. Sarah Johnson is a renowned educator with over 15 years of experience in online teaching. She has helped more than 50,000 students master complex subjects through her innovative teaching methods and engaging course materials.',
    credentials: [
      'Ph.D. in Educational Technology',
      'Author of "Mastering Online Education"',
      'Featured in Forbes & EdTech Magazine',
      '15+ years teaching experience'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      youtube: 'https://youtube.com',
      website: 'https://example.com'
    }
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Co-Instructor & Industry Expert',
    bio: 'Michael brings real-world expertise to the course with his background as a senior consultant for Fortune 500 companies. His practical insights and case studies help students apply theoretical concepts to real business scenarios.',
    credentials: [
      'MBA from Stanford University',
      '10+ years industry experience',
      'Consultant for Fortune 500 companies',
      'Speaker at TEDx & industry conferences'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      youtube: 'https://youtube.com',
      website: 'https://example.com'
    }
  }
];

const Instructor = () => {
  return (
    <section id="instructors" className="section bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Meet Your Instructors
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Learn From Industry Experts
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our instructors bring years of real-world experience and academic excellence to help you succeed.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {instructors.map((instructor, index) => (
            <motion.div 
              key={instructor.id}
              className="bg-white rounded-lg shadow-custom overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center p-8">
                  <div className="w-48 h-48 rounded-full bg-white/20 flex items-center justify-center text-white text-4xl font-bold">
                    {instructor.name.split(' ').map(name => name[0]).join('')}
                  </div>
                </div>
                <div className="md:w-3/5 p-8">
                  <h3 className="text-2xl font-bold mb-2">{instructor.name}</h3>
                  <p className="text-primary-600 font-medium mb-4">{instructor.role}</p>
                  <p className="text-gray-600 mb-6">{instructor.bio}</p>
                  
                  <h4 className="font-bold text-gray-800 mb-3">Credentials:</h4>
                  <ul className="mb-6 space-y-2">
                    {instructor.credentials.map((credential, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                        <span>{credential}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex space-x-4">
                    <a href={instructor.socialLinks.linkedin} className="text-gray-500 hover:text-primary-600 transition-colors">
                      <FiLinkedin className="h-5 w-5" />
                    </a>
                    <a href={instructor.socialLinks.twitter} className="text-gray-500 hover:text-primary-600 transition-colors">
                      <FiTwitter className="h-5 w-5" />
                    </a>
                    <a href={instructor.socialLinks.youtube} className="text-gray-500 hover:text-primary-600 transition-colors">
                      <FiYoutube className="h-5 w-5" />
                    </a>
                    <a href={instructor.socialLinks.website} className="text-gray-500 hover:text-primary-600 transition-colors">
                      <FiGlobe className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructor;
