import React from 'react';
import { MapPin, Calendar, Briefcase } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="section-container animate-fade-in">
      <div className="text-center space-y-8">
        {/* Avatar */}
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-4xl font-bold text-gray-700">
            ZY
          </div>
        </div>

        {/* Name & Title */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-gradient">
            Zou Yujia / Daisy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            E-commerce Product Manager | Creative Coder
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="badge">
            <MapPin className="w-3 h-3 mr-1" />
            Hangzhou, China
          </div>
          <div className="badge">
            <Briefcase className="w-3 h-3 mr-1" />
            Lazada (Alibaba International)
          </div>
          <div className="badge">
            <Calendar className="w-3 h-3 mr-1" />
            Available for Projects
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-gray-900">5+</div>
            <div className="text-sm text-gray-600">Years of Experience</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-gray-900">50+</div>
            <div className="text-sm text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-gray-900">15+</div>
            <div className="text-sm text-gray-600">AI Operations</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button className="btn-primary">
            View My Work
          </button>
          <button className="btn-secondary">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;