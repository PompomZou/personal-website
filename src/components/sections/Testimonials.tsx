import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';


const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: t.testimonials.items.sarah.name,
      role: t.testimonials.items.sarah.role,
      company: t.testimonials.items.sarah.company,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      content: t.testimonials.items.sarah.content,
      rating: 5
    },
    {
      id: 2,
      name: t.testimonials.items.michael.name,
      role: t.testimonials.items.michael.role,
      company: t.testimonials.items.michael.company,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: t.testimonials.items.michael.content,
      rating: 5
    },
    {
      id: 3,
      name: t.testimonials.items.lisa.name,
      role: t.testimonials.items.lisa.role,
      company: t.testimonials.items.lisa.company,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: t.testimonials.items.lisa.content,
      rating: 5
    }
  ];

  return (
    <section className="section-container">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t.testimonials.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.testimonials.description}
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
              {t.testimonials.readyTitle}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
              {t.testimonials.readyDesc}
            </p>
            <button className="btn-primary">
              {t.testimonials.startConversation}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;