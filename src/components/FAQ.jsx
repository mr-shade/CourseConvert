import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    id: 1,
    question: 'How easy is it to customize the CourseConvert template?',
    answer: 'CourseConvert is designed to be extremely user-friendly. You can easily customize colors, fonts, images, and content without any coding knowledge. For those who want more advanced customization, we provide CSS access as well.',
  },
  {
    id: 2,
    question: 'Can I connect CourseConvert to my email marketing platform?',
    answer: 'Yes! CourseConvert integrates seamlessly with popular email marketing platforms like ConvertKit, Mailchimp, ActiveCampaign, and more. This allows you to automatically add leads to your email sequences.',
  },
  {
    id: 3,
    question: 'Do I need to pay for hosting separately?',
    answer: 'No, hosting is included in all CourseConvert plans. We provide fast, reliable hosting optimized for landing pages to ensure your course page loads quickly and converts well.',
  },
  {
    id: 4,
    question: 'Can I accept payments directly through CourseConvert?',
    answer: 'Yes, our Pro and Enterprise plans include payment processing integration with Stripe and PayPal, allowing you to accept payments directly on your landing page without redirecting students elsewhere.',
  },
  {
    id: 5,
    question: 'Is there a limit to how many students can enroll through my landing page?',
    answer: 'No, there are no limits on student enrollments. Our platform is built to scale, so whether you have 10 or 10,000 students, CourseConvert can handle it without any performance issues.',
  },
  {
    id: 6,
    question: 'Do you offer a money-back guarantee?',
    answer: 'Yes, we offer a 30-day money-back guarantee. If you"re not satisfied with CourseConvert for any reason, simply contact our support team within 30 days of purchase for a full refund.',
  },
  {
    id: 7,
    question: 'Can I use CourseConvert with my existing course platform?',
    answer: 'Absolutely! CourseConvert works with all major course platforms including Teachable, Thinkific, Kajabi, Podia, and more. We provide easy integration instructions for each platform.',
  },
  {
    id: 8,
    question: 'What kind of support do you offer?',
    answer: 'All plans include email support. Our Pro and Enterprise plans also include priority support with faster response times. Enterprise customers receive dedicated support with a personal account manager.',
  },
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState(1);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq" className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Common Questions About CourseConvert
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Find answers to the most common questions about our platform and features.
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={faq.id}
              className="mb-6 border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleItem(faq.id)}
              >
                <h3 className="text-lg font-bold text-gray-900">{faq.question}</h3>
                <span className="ml-6 flex-shrink-0">
                  {openItem === faq.id ? (
                    <FiChevronUp className="h-5 w-5 text-primary-600" />
                  ) : (
                    <FiChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </span>
              </button>
              {openItem === faq.id && (
                <motion.div 
                  className="mt-4 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg mb-4">Still have questions?</p>
          <button className="btn btn-outline">Contact Support</button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
