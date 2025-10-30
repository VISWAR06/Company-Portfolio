import React from "react";

const Contact = () => {
  return (
    <section className="py-20 text-center" id="contact">
      <h2 className="text-3xl font-bold text-gray-100 mb-6">Contact Me</h2>
      <p className="text-gray-300 mb-6">
        Let’s connect! You can reach me anytime via email.
      </p>

      <form
        action="https://getform.io/f/your-endpoint-here"
        method="POST"
        className="max-w-md mx-auto space-y-4"
      >
        <input type="text" name="name" placeholder="Your Name" className="w-full p-3 rounded bg-dark border border-purple-600" />
        <input type="email" name="email" placeholder="Your Email" className="w-full p-3 rounded bg-dark border border-purple-600" />
        <textarea name="message" rows="4" placeholder="Your Message" className="w-full p-3 rounded bg-dark border border-purple-600"></textarea>
        <button type="submit" className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700">
          Send Message
        </button>
      </form>

      <div className="mt-8 text-gray-400">
        <p>Email: <a href="mailto:viswaravikumr@gmail.com" className="text-primary">viswaravikumr@gmail.com</a></p>
      </div>
    </section>
  );
};

export default Contact;
