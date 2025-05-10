import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    content: "CourseConvert helped me launch my first online course with confidence. The landing page template was easy to customize and looked incredibly professional. I saw a 40% increase in conversions after switching to CourseConvert!",
    author: "Sarah Johnson",
    role: "Digital Marketing Instructor",
    rating: 5,
  },
  {
    id: 2,
    content: "As someone who's not tech-savvy, I was worried about creating a landing page for my yoga course. CourseConvert made it simple with its intuitive design. My enrollment numbers doubled in just one month!",
    author: "Michael Chen",
    role: "Yoga & Meditation Teacher",
    rating: 5,
  },
  {
    id: 3,
    content: "The testimonial section on CourseConvert's template helped me showcase success stories from my previous students, which significantly boosted trust with new prospects. Worth every penny!",
    author: "Emily Rodriguez",
    role: "Language Learning Coach",
    rating: 4,
  },
  {
    id: 4,
    content: "I've tried several landing page builders, but CourseConvert is specifically designed for course creators like me. The curriculum display section perfectly highlights my course modules and lessons.",
    author: "David Thompson",
    role: "Photography Instructor",
    rating: 5,
  },
  {
    id: 5,
    content: "The pricing table feature in CourseConvert helped me present different course tiers clearly. My students appreciate the transparency, and I've seen more premium tier enrollments as a result.",
    author: "Lisa Williams",
    role: "Business Coach",
    rating: 5,
  },
  {
    id: 6,
    content: "CourseConvert's FAQ section template helped me address common objections before they became roadblocks. My conversion rate improved by 25% after implementing this feature alone!",
    author: "James Wilson",
    role: "Fitness Trainer",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Success Stories
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hear from course creators who have transformed their online teaching business with CourseConvert.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-custom border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                  {testimonial.author.split(' ').map(name => name[0]).join('')}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
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
          <p className="text-xl font-medium mb-6">Join 2,000+ satisfied course creators</p>
          <button className="btn btn-primary">Start Creating Your Course Page</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
