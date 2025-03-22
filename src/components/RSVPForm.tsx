
import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui/use-toast';

interface RSVPFormProps {
  theme?: 'gold' | 'cosmic' | 'dark' | 'garden';
}

const RSVPForm = ({ theme = 'gold' }: RSVPFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: 'yes',
    guests: '1',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "RSVP Submitted",
        description: "Thank you for your response!",
      });
    }, 1500);
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'gold':
        return {
          container: 'bg-navy/80 backdrop-blur-sm border border-gold/20 p-6 rounded-lg shadow-xl',
          heading: 'text-gold',
          input: 'bg-navy/50 border-gold/30 text-champagne placeholder-champagne/50 focus:border-gold',
          button: 'bg-gold text-navy hover:bg-gold/80',
          text: 'text-champagne',
        };
      case 'cosmic':
        return {
          container: 'bg-deep-space/80 backdrop-blur-sm border border-cosmic-purple/30 p-6 rounded-lg shadow-xl',
          heading: 'text-nebula-pink',
          input: 'bg-deep-space/50 border-cosmic-purple/30 text-starlight placeholder-starlight/50 focus:border-nebula-pink',
          button: 'bg-cosmic-purple text-starlight hover:bg-nebula-pink',
          text: 'text-starlight',
        };
      case 'dark':
        return {
          container: 'bg-slate/10 backdrop-blur-sm border border-electric-blue/20 p-6 rounded-sm',
          heading: 'text-electric-blue',
          input: 'bg-charcoal/70 border-electric-blue/30 text-white placeholder-gray-400 focus:border-electric-blue',
          button: 'border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-charcoal',
          text: 'text-gray-300',
        };
      case 'garden':
        return {
          container: 'bg-white rounded-lg shadow-md p-6 border border-leaf-green/10',
          heading: 'text-earth-brown',
          input: 'bg-leaf-green/5 border-leaf-green/20 text-earth-brown placeholder-earth-brown/50 focus:border-leaf-green',
          button: 'bg-leaf-green text-white hover:bg-earth-brown',
          text: 'text-earth-brown/80',
        };
      default:
        return {
          container: 'bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg',
          heading: 'text-white',
          input: 'bg-black/30 border-white/30 text-white placeholder-white/50 focus:border-white',
          button: 'bg-white text-black hover:bg-white/80',
          text: 'text-white/80',
        };
    }
  };

  const themeClasses = getThemeClasses();

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={themeClasses.container}
      >
        <div className="text-center py-6">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className={`text-2xl font-bold mb-2 ${themeClasses.heading}`}>Thank You!</h3>
          <p className={themeClasses.text}>
            Your RSVP has been submitted successfully. We look forward to celebrating with you!
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className={`mt-6 text-sm underline ${themeClasses.text}`}
          >
            Submit another response
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={themeClasses.container}
    >
      <h3 className={`text-2xl font-bold mb-6 ${themeClasses.heading}`}>RSVP</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className={`block mb-1 text-sm font-medium ${themeClasses.text}`}>Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full p-3 rounded-md border ${themeClasses.input} transition-colors duration-300`}
            placeholder="Your Name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className={`block mb-1 text-sm font-medium ${themeClasses.text}`}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full p-3 rounded-md border ${themeClasses.input} transition-colors duration-300`}
            placeholder="your@email.com"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="attendance" className={`block mb-1 text-sm font-medium ${themeClasses.text}`}>Attending?</label>
            <select
              id="attendance"
              name="attendance"
              required
              value={formData.attendance}
              onChange={handleInputChange}
              className={`w-full p-3 rounded-md border ${themeClasses.input} transition-colors duration-300`}
            >
              <option value="yes">Yes, I'll be there</option>
              <option value="no">Sorry, can't make it</option>
              <option value="maybe">Maybe</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="guests" className={`block mb-1 text-sm font-medium ${themeClasses.text}`}>Number of Guests</label>
            <select
              id="guests"
              name="guests"
              required
              value={formData.guests}
              onChange={handleInputChange}
              className={`w-full p-3 rounded-md border ${themeClasses.input} transition-colors duration-300`}
              disabled={formData.attendance === 'no'}
            >
              <option value="1">Just me</option>
              <option value="2">2 people</option>
              <option value="3">3 people</option>
              <option value="4">4 people</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className={`block mb-1 text-sm font-medium ${themeClasses.text}`}>Message (Optional)</label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full p-3 rounded-md border ${themeClasses.input} transition-colors duration-300`}
            placeholder="Any special message for the couple..."
          />
        </div>
        
        <div className="pt-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitting}
            type="submit"
            className={`w-full py-3 rounded-md font-medium ${themeClasses.button} transition-all duration-300 flex items-center justify-center`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : "Send RSVP"}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default RSVPForm;
