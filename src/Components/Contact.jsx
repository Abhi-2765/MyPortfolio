import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Construct mailto link
    const email = "b.abhi2277@gmail.com";
    const subject = encodeURIComponent(formData.get("subject"));
    const body = encodeURIComponent(`From: ${formData.get("from")}\n\n${formData.get("message")}`);
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    form.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-6 md:p-10 rounded-lg text-gray-300 max-w-3xl w-full mx-auto text-lg leading-relaxed shadow-lg"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        className="font-poppins font-bold text-2xl text-white mb-4 border-b border-gray-600 pb-2 text-left"
      >
        Contact Me
      </motion.h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5 w-full">
        {/* Email Input */}
        <div className="w-full">
          <label htmlFor="from" className="block text-sm font-medium text-teal-400">
            Your Email
          </label>
          <input
            type="email"
            id="from"
            name="from"
            placeholder="your@email.com"
            required
            className="w-full px-3 py-2 mt-1 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
          />
        </div>

        {/* Subject Input */}
        <div className="w-full">
          <label htmlFor="subject" className="block text-sm font-medium text-teal-400">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject of your message"
            required
            className="w-full px-3 py-2 mt-1 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
          />
        </div>

        {/* Message Input */}
        <div className="w-full">
          <label htmlFor="message" className="block text-sm font-medium text-teal-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here..."
            rows="5"
            required
            className="w-full px-3 py-2 mt-1 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 resize-y transition duration-200"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-400 hover:text-blue-950 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
        >
          Send Message
        </button>
      </form>

      {/* Underline hover effect */}
      <motion.div
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.5 }}
        className="h-1 bg-[#64ffda] mt-6 w-16 mx-auto"
      ></motion.div>
    </motion.div>
  );
};

export default Contact;
