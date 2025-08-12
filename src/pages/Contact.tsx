import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    clientPhone: '',
    clientEmail: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ clientPhone: '', clientEmail: '', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            CONTACT <span className="text-orange-500">US</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with our engineering team for your next project
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">
                GET IN <span className="text-orange-500">TOUCH</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Ready to discuss your welding and fabrication needs? Our experienced team is here to help bring your industrial projects to life.
              </p>
            </div>

            {/* Company Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-gray-800 p-6 rounded-lg border-l-4 border-orange-500">
                <Phone className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <p className="text-gray-300">123456789</p>
                  <p className="text-sm text-gray-400 mt-1">Available Monday - Friday, 8AM - 5PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-800 p-6 rounded-lg border-l-4 border-orange-500">
                <Mail className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-300">piet@pompies.co.za</p>
                  <p className="text-sm text-gray-400 mt-1">We typically respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-gray-800 p-6 rounded-lg border-l-4 border-orange-500">
                <Clock className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white mb-1">Business Hours</h3>
                  <div className="text-gray-300 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 8:00 AM - 12:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Reminder */}
            <div className="bg-orange-500 p-6 rounded-lg">
              <h3 className="font-bold text-white mb-3">Our Specialties</h3>
              <div className="grid grid-cols-2 gap-2 text-white text-sm">
                <div>• Professional Welding</div>
                <div>• Metal Fabrication</div>
                <div>• Structural Steel Work</div>
                <div>• Custom Manufacturing</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-white">
              SEND US A <span className="text-orange-500">MESSAGE</span>
            </h2>
            
            {isSubmitted ? (
              <div className="bg-green-600 p-6 rounded-lg text-center">
                <div className="text-white text-lg font-semibold mb-2">Thank You!</div>
                <p className="text-green-100">
                  Your message has been received. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="clientPhone" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="clientPhone"
                    name="clientPhone"
                    value={formData.clientPhone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="clientEmail" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="clientEmail"
                    name="clientEmail"
                    value={formData.clientEmail}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your welding or fabrication project..."
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 transition-colors resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 group"
                >
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  <span>SEND MESSAGE</span>
                </button>
              </form>
            )}

            <div className="mt-6 p-4 bg-gray-900 rounded border border-gray-600">
              <p className="text-sm text-gray-400 text-center">
                <strong className="text-orange-400">Emergency Services:</strong> For urgent repairs, 
                call us directly at <span className="text-white">123456789</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;