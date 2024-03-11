import { useState } from "react";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [emailError, setEmailError] = useState ('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateEmail(formData.email)) {
          setEmailError('Sorry, invalid format');
          return;
        }
        try {
          // Your form submission logic
        } catch (error) {
          console.error('Error sending email:', error);
          alert('Failed to send email');
        }
      };
    
      const validateEmail = (email) => {
        // Email validation regex pattern
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
      };

  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="text-2xl font-bold mb-6">Contact</h2>
            <p className="text-gray-700 mb-6" style={{ maxWidth: '420px' }}>
              I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.
            </p>
          </div>
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <div className="relative">
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
                  {emailError && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <i className="fas fa-exclamation-triangle text-red-900"></i>
                    </div>
                  )}
                </div>
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"></textarea>
              </div>
              <button type="submit" className="border-b-2 border-blue-400 text-gray-800 py-2 font-semibold hover:text-blue-400">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
