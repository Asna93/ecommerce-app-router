'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { ContactFormData } from '@/types';

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6 text-gray-600">
            Have a question or feedback? We&apos;d love to hear from you. 
            Fill out the form and we&apos;ll get back to you as soon as possible.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">📧 Email</h3>
              <p className="text-gray-600">support@eshop.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">📞 Phone</h3>
              <p className="text-gray-600">+1 (234) 567-890</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">📍 Address</h3>
              <p className="text-gray-600">
                123 Shopping Street<br />
                sharjah, UAE 
              </p>
            </div>
          </div>
        </div>

        <div>
          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Message sent successfully!
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
              />
            </div>
            
            <div>
              <label className="block font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
              />
            </div>
            
            <div>
              <label className="block font-semibold mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}