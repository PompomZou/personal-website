import React from 'react';
import { Mail, MessageCircle, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="section-container">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Let's Connect</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Always open to discussing new opportunities, collaborations, 
            and innovative projects. Reach out and let's create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="mailto:daisy@example.com"
            className="group bg-white p-6 rounded-xl border border-gray-200 card-hover text-center space-y-4"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto group-hover:bg-blue-600 transition-colors duration-300">
              <Mail className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-sm text-gray-600">daisy@example.com</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="#"
            className="group bg-white p-6 rounded-xl border border-gray-200 card-hover text-center space-y-4"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto group-hover:bg-green-600 transition-colors duration-300">
              <MessageCircle className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-900">WeChat</h3>
              <p className="text-sm text-gray-600">@daisy_zou</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="#"
            className="group bg-white p-6 rounded-xl border border-gray-200 card-hover text-center space-y-4"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto group-hover:bg-blue-700 transition-colors duration-300">
              <Linkedin className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-900">LinkedIn</h3>
              <p className="text-sm text-gray-600">zou-yujia</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="#"
            className="group bg-white p-6 rounded-xl border border-gray-200 card-hover text-center space-y-4"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto group-hover:bg-gray-900 transition-colors duration-300">
              <Github className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-gray-900">GitHub</h3>
              <p className="text-sm text-gray-600">daisy-zou</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © 2024 Zou Yujia (Daisy). Crafted with passion for innovation and excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;