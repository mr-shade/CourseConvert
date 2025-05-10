import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  const togglePricing = () => {
    setAnnual(!annual);
  };

  const plans = [
    {
      id: 1,
      name: 'Basic',
      description: 'Perfect for beginners starting their first course',
      monthlyPrice: 12,
      annualPrice: 120,
      features: [
        'Single course landing page',
        'Basic curriculum display',
        'Testimonial section',
        'Mobile responsive design',
        'Email capture form',
        'Basic analytics',
      ],
      popular: false,
      cta: 'Get Started',
    },
    {
      id: 2,
      name: 'Pro',
      description: 'Ideal for established course creators',
      monthlyPrice: 39,
      annualPrice: 390,
      features: [
        'Everything in Basic',
        'Multiple course landing pages',
        'Advanced curriculum display',
        'Pricing table with tiers',
        'Video testimonials',
        'A/B testing capability',
        'Advanced analytics',
        'Priority support',
      ],
      popular: true,
      cta: 'Get Pro',
    },
    {
      id: 3,
      name: 'Enterprise',
      description: 'For professional educators and organizations',
      monthlyPrice: 69,
      annualPrice: 690,
      features: [
        'Everything in Pro',
        'Unlimited course landing pages',
        'Custom branding options',
        'Advanced marketing tools',
        'Student portal integration',
        'Payment processing',
        'Team collaboration',
        'Dedicated support',
        'White-label option',
      ],
      popular: false,
      cta: 'Contact Sales',
    },
  ];

  return (
    <section id="pricing" className="section bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Pricing Plans
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose the Perfect Plan for Your Needs
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Select a plan that works best for your course creation goals. All plans include core features to help you succeed.
          </motion.p>
          
          <motion.div 
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className={`mr-3 ${!annual ? 'font-bold text-primary-700' : 'text-gray-600'}`}>Monthly</span>
            <button 
              onClick={togglePricing}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200"
            >
              <span className="sr-only">Toggle pricing</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${annual ? 'translate-x-6' : 'translate-x-1'}`}
              />
              <span 
                className={`absolute inset-0 rounded-full ${annual ? 'bg-primary-600' : 'bg-gray-200'}`}
                aria-hidden="true"
              />
            </button>
            <span className={`ml-3 ${annual ? 'font-bold text-primary-700' : 'text-gray-600'}`}>
              Annual <span className="text-xs text-green-600 font-medium">(Save 20%)</span>
            </span>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`bg-white rounded-lg shadow-custom border ${plan.popular ? 'border-primary-400 relative' : 'border-gray-200'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                  <span className="inline-flex rounded-full bg-primary-100 px-4 py-1 text-xs font-semibold text-primary-700">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${annual ? plan.annualPrice : plan.monthlyPrice}</span>
                  <span className="text-gray-600">/{annual ? 'year' : 'month'}</span>
                </div>
                <button 
                  className={`w-full mb-8 ${plan.popular ? 'btn btn-primary' : 'btn btn-outline'}`}
                >
                  {plan.cta}
                </button>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4">Not sure which plan is right for you?</h3>
          <p className="text-gray-600 mb-6">Contact our team for a personalized recommendation based on your specific needs.</p>
          <button className="btn btn-outline">Contact Sales</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
