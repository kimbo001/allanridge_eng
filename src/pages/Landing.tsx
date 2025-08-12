import React from 'react';
import { Flame, Settings, Wrench, Shield, Phone, Mail } from 'lucide-react';

const Landing = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-white">ALLANRIDGE</span>
            <span className="text-orange-500 block">ENGINEERING</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Precision welding and fabrication services built on decades of industrial expertise
          </p>
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-800 px-6 py-3 rounded-lg">
              <Shield className="h-6 w-6 text-orange-500" />
              <span className="font-medium">QUALITY ASSURED</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800 px-6 py-3 rounded-lg">
              <Settings className="h-6 w-6 text-orange-500" />
              <span className="font-medium">PRECISION WORK</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              OUR <span className="text-orange-500">SERVICES</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver industrial-grade solutions with uncompromising quality and precision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Welding Service */}
            <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-8 hover:border-orange-500 transition-colors duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-lg mx-auto mb-6">
                <Flame className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">WELDING</h3>
              <p className="text-gray-300 text-center mb-6">
                Professional welding services using state-of-the-art equipment and techniques. 
                We handle everything from structural steel to intricate metalwork with precision and reliability.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  MIG & TIG Welding
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Structural Steel Work
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Repairs & Maintenance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Custom Metal Work
                </li>
              </ul>
            </div>

            {/* Fabricating Service */}
            <div className="bg-gray-900 border-2 border-gray-700 rounded-lg p-8 hover:border-orange-500 transition-colors duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-lg mx-auto mb-6">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">FABRICATING</h3>
              <p className="text-gray-300 text-center mb-6">
                Expert metal fabrication services from concept to completion. 
                We transform raw materials into precision-engineered components and structures.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Custom Metal Fabrication
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Sheet Metal Work
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Cutting & Forming
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  Assembly Services
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              WHY CHOOSE <span className="text-orange-500">ALLANRIDGE?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">QUALITY GUARANTEED</h3>
              <p className="text-gray-400">
                Every project meets the highest industry standards with rigorous quality control
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">PRECISION ENGINEERING</h3>
              <p className="text-gray-400">
                Advanced equipment and expert craftsmanship ensure perfect results every time
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">EXPERIENCED TEAM</h3>
              <p className="text-gray-400">
                Decades of combined experience in industrial welding and fabrication
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            READY TO START YOUR PROJECT?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Contact us today for a consultation and discover how we can bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-white">
              <Phone className="h-5 w-5" />
              <span className="font-medium">123456789</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white opacity-50"></div>
            <div className="flex items-center space-x-2 text-white">
              <Mail className="h-5 w-5" />
              <span className="font-medium">piet@pompies.co.za</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;