import React from 'react';
import { Target, Lightbulb, Users, Rocket, Shield, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Conversion-Focused',
    description: 'Every decision backed by data and user research to maximize business impact and ROI.'
  },
  {
    icon: Lightbulb,
    title: 'AI-Driven Innovation',
    description: 'Leverage cutting-edge AI technologies to solve complex operational challenges.'
  },
  {
    icon: Users,
    title: 'Cross-Functional Leadership',
    description: 'Proven ability to align diverse teams and stakeholders toward common goals.'
  },
  {
    icon: Rocket,
    title: 'Rapid Execution',
    description: 'From concept to launch in record time without compromising on quality.'
  },
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'Thorough planning and testing to ensure smooth product launches and operations.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Build systems and processes that grow with your business needs.'
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="section-container bg-white">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Why Work With Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The unique value I bring to every project and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center pt-8">
          <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Let's discuss how we can work together to bring your product vision to life 
              with the power of AI and creative technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start a Project
              </button>
              <button className="btn-secondary">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;