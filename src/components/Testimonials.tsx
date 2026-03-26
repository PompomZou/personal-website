import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Engineering Director',
    company: 'Lazada',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    content: 'Daisy has an exceptional ability to translate complex AI concepts into practical business solutions. Her leadership on LazCortex transformed our operational efficiency.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Zhang',
    role: 'VP of Product',
    company: 'Alibaba International',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    content: 'Working with Daisy is a masterclass in product strategy. She combines analytical rigor with creative problem-solving in ways that consistently deliver results.',
    rating: 5
  },
  {
    id: 3,
    name: 'Lisa Wang',
    role: 'UX Research Lead',
    company: 'Tech Startup',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    content: 'Daisy\'s user-centric approach and attention to detail elevated our product experience. Her collaborative style makes cross-functional work seamless.',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="section-container">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            What Colleagues Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feedback from team members and collaborators across different projects and companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-gray-300 dark:text-gray-600" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center pt-8">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
              Let's discuss how we can create exceptional products that drive real business impact.
            </p>
            <button className="btn-primary">
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;