import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  isDarkMode?: boolean; // Add prop to accept dark mode state
}

const ContactForm: React.FC<ContactFormProps> = ({ isDarkMode = true }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with setTimeout
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: 'Message sent successfully! I will get back to you soon.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <motion.div className="w-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {submitStatus && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 mb-6 rounded-lg text-center ${
            submitStatus.success
              ? isDarkMode 
                ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                : 'bg-green-100 text-green-700 border border-green-200'
              : isDarkMode
                ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                : 'bg-red-100 text-red-700 border border-red-200'
          }`}
        >
          {submitStatus.message}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`${
              isDarkMode 
                ? 'bg-gray-700/50 border-gray-600 text-gray-200' 
                : 'bg-gray-50 border-gray-300 text-gray-900'
            } border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`${
              isDarkMode 
                ? 'bg-gray-700/50 border-gray-600 text-gray-200' 
                : 'bg-gray-50 border-gray-300 text-gray-900'
            } border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={`${
              isDarkMode 
                ? 'bg-gray-700/50 border-gray-600 text-gray-200' 
                : 'bg-gray-50 border-gray-300 text-gray-900'
            } border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label htmlFor="message" className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={`${
              isDarkMode 
                ? 'bg-gray-700/50 border-gray-600 text-gray-200' 
                : 'bg-gray-50 border-gray-300 text-gray-900'
            } border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
            placeholder="Your message here..."
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-3 px-5 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg hover:from-blue-500 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-900 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
