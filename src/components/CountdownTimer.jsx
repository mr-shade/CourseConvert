import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ targetDate, title, subtitle }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center">
        <div className="text-4xl md:text-5xl font-bold bg-white rounded-lg shadow-md px-6 py-4 w-24 text-center text-primary-600">
          {timeLeft[interval]}
        </div>
        <span className="text-sm font-medium mt-2 text-gray-600 capitalize">{interval}</span>
      </div>
    );
  });

  return (
    <section className="py-12 bg-gradient-to-r from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full mb-4">
            Limited Time Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title || 'Special Launch Discount Ends In'}</h2>
          <p className="text-xl text-gray-600 mb-8">{subtitle || 'Enroll now to lock in our introductory pricing before it expires!'}</p>
          
          <div className="flex justify-center space-x-4 mb-8">
            {timerComponents.length ? timerComponents : <span className="text-xl">Offer has expired!</span>}
          </div>
          
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Claim Your Discount Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;
