// src/components/contact/ContactForm.jsx
'use client';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">GET IN TOUCH</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              
              <button
                type="submit"
                className="w-full bg-emerald-500 text-white py-3 px-6 rounded-md hover:bg-emerald-600 transition-colors"
              >
                SEND
              </button>
            </form>
          </div>

          {/* Google Map */}
          <div className="h-[400px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9899!3d40.7447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;