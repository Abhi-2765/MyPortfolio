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
      <div className="max-w-[600px] w-full mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg border border-gray-800 transition-all duration-300 hover:border-gray-100 hover:bg-gray-800">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center mb-6 text-teal-400">
          Contact Me
        </h2>
  
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email Input */}
          <div>
            <label htmlFor="from" className="block text-sm font-medium text-teal-400">
              Your Email
            </label>
            <input
              type="email"
              id="from"
              name="from"
              placeholder="your@email.com"
              required
              className="w-full px-3 py-2 mt-1 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
  
          {/* Subject Input */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-teal-400">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject of your message"
              required
              className="w-full px-3 py-2 mt-1 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
  
          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-teal-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              rows="5"
              required
              className="w-full px-3 py-2 mt-1 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 resize-y"
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
      </div>
    );
  };
  
  export default Contact;
  