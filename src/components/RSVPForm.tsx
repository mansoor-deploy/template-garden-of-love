
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface RSVPFormProps {
  className?: string;
  theme?: "dark" | "light" | "gold" | "cosmic" | "garden";
}

const RSVPForm = ({ className, theme = "light" }: RSVPFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [guests, setGuests] = useState(0);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getThemeClasses = () => {
    switch (theme) {
      case "dark":
        return {
          container: "bg-gray-900 text-white",
          input: "bg-gray-800 border-gray-700 text-white placeholder-gray-500",
          button: "bg-white text-gray-900 hover:bg-gray-200",
          radioOff: "border-gray-600 bg-gray-800",
          radioOn: "border-white bg-white",
        };
      case "gold":
        return {
          container: "bg-navy text-champagne",
          input: "bg-midnight border-gold/20 text-champagne placeholder-champagne/70",
          button: "bg-gold text-navy hover:bg-champagne hover:text-navy",
          radioOff: "border-gold/50 bg-midnight",
          radioOn: "border-gold bg-gold",
        };
      case "cosmic":
        return {
          container: "bg-deep-space text-starlight",
          input: "bg-deep-space/70 border-cosmic-purple/30 text-white placeholder-starlight/60",
          button: "bg-cosmic-purple text-starlight hover:bg-nebula-pink",
          radioOff: "border-cosmic-purple bg-deep-space/50",
          radioOn: "border-starlight bg-starlight",
        };
      case "garden":
        return {
          container: "bg-leaf-green/10 text-earth-brown",
          input: "bg-white/80 border-leaf-green/30 text-earth-brown placeholder-earth-brown/60",
          button: "bg-leaf-green text-white hover:bg-earth-brown",
          radioOff: "border-leaf-green bg-white/80",
          radioOn: "border-leaf-green bg-leaf-green",
        };
      default:
        return {
          container: "bg-white text-gray-900",
          input: "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500",
          button: "bg-gray-900 text-white hover:bg-gray-800",
          radioOff: "border-gray-300 bg-white",
          radioOn: "border-gray-900 bg-gray-900",
        };
    }
  };

  const themeClasses = getThemeClasses();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("RSVP submitted successfully!");
      setName("");
      setEmail("");
      setAttending(null);
      setGuests(0);
      setMessage("");
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-lg shadow-xl overflow-hidden ${themeClasses.container} ${className}`}
    >
      <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-bold mb-6">RSVP</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-2 rounded-md border ${themeClasses.input} transition-all duration-200 focus:ring-2 focus:ring-opacity-50`}
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 rounded-md border ${themeClasses.input} transition-all duration-200 focus:ring-2 focus:ring-opacity-50`}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div>
            <span className="block text-sm font-medium mb-2">
              Will you attend?
            </span>
            <div className="flex space-x-4">
              <label className="flex items-center cursor-pointer">
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center mr-2 ${
                    attending === true
                      ? themeClasses.radioOn
                      : themeClasses.radioOff
                  }`}
                >
                  {attending === true && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 rounded-full bg-current"
                    />
                  )}
                </div>
                <input
                  type="radio"
                  className="sr-only"
                  name="attending"
                  value="yes"
                  checked={attending === true}
                  onChange={() => setAttending(true)}
                />
                <span>Yes, I'll be there</span>
              </label>

              <label className="flex items-center cursor-pointer">
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center mr-2 ${
                    attending === false
                      ? themeClasses.radioOn
                      : themeClasses.radioOff
                  }`}
                >
                  {attending === false && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 rounded-full bg-current"
                    />
                  )}
                </div>
                <input
                  type="radio"
                  className="sr-only"
                  name="attending"
                  value="no"
                  checked={attending === false}
                  onChange={() => setAttending(false)}
                />
                <span>Sorry, I can't make it</span>
              </label>
            </div>
          </div>

          {attending === true && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <label htmlFor="guests" className="block text-sm font-medium mb-1">
                Number of Guests (including you)
              </label>
              <select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className={`w-full px-4 py-2 rounded-md border ${themeClasses.input} transition-all duration-200 focus:ring-2 focus:ring-opacity-50`}
                required
              >
                <option value={0}>Select number of guests</option>
                <option value={1}>Just me (1)</option>
                <option value={2}>Me and a guest (2)</option>
                <option value={3}>3 guests</option>
                <option value={4}>4 guests</option>
              </select>
            </motion.div>
          )}

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message (Optional)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className={`w-full px-4 py-2 rounded-md border ${themeClasses.input} transition-all duration-200 focus:ring-2 focus:ring-opacity-50`}
              placeholder="Any special message or dietary requirements?"
            ></textarea>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-md font-medium ${themeClasses.button} transition-all duration-300 flex items-center justify-center`}
          >
            {isSubmitting ? (
              <div className="h-5 w-5 rounded-full border-2 border-t-transparent animate-spin mr-2"></div>
            ) : null}
            {isSubmitting ? "Submitting..." : "Send RSVP"}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default RSVPForm;
