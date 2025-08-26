import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const TestimonialsSection = () => {
  const { elementRef, hasBeenInView } = useIntersectionObserver();

  const testimonials = [
    {
      name: "Priya & Arjun",
      wedding: "Mumbai Palace Wedding",
      quote: "Evara transformed our dream into reality. Every detail was perfect, from the mandap decorations to the final send-off. They understood our vision completely.",
      image: "/circle.png"
    },
    {
      name: "Kavya & Rohit", 
      wedding: "Heritage Resort Celebration",
      quote: "The team's attention to detail and cultural sensitivity made our wedding truly special. They seamlessly blended tradition with modern elegance.",
      image: "/circle.png"
    },
    {
      name: "Anisha & Dev",
      wedding: "Destination Wedding Goa",
      quote: "From planning to execution, everything was flawless. Our guests are still talking about how magical the entire celebration was.",
      image: "/circle.png"
    }
  ];

  return (
    <section 
      ref={elementRef}
      className={`relative py-20 bg-[#fdf8f3] overflow-hidden transition-all duration-1000 ${
        hasBeenInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-[#00223f] leading-tight mb-6">
            Love Stories
          </h2>
          <p className="text-lg text-[#7c756d] max-w-2xl mx-auto leading-relaxed">
            Hear from couples who trusted us to make their special day unforgettable
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group cursor-default"
            >
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-xl hover:scale-105 border border-[#d8ad7f]/20 h-full">
                {/* Quote Icon */}
                <div className="text-6xl text-[#AA7220]/20 mb-4 font-serif leading-none">
                  "
                </div>
                
                {/* Quote */}
                <blockquote className="text-[#7c756d] leading-relaxed text-lg mb-8 italic">
                  {testimonial.quote}
                </blockquote>
                
                {/* Couple Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#AA7220]/30">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#00223f] mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[#AA7220] font-medium">
                      {testimonial.wedding}
                    </p>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="mt-6 w-0 h-1 bg-gradient-to-r from-[#AA7220] to-[#d8ad7f] transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block">
            <h3 className="text-2xl lg:text-3xl font-serif text-[#00223f] mb-4">
              Ready to Create Your Story?
            </h3>
            <p className="text-[#7c756d] mb-6">
              Let us help you craft a celebration as unique as your love
            </p>
            <button className="bg-[#AA7220] text-[#fdf8f3] px-8 py-4 rounded-full font-medium tracking-wider transition-all duration-300 hover:bg-[#d8ad7f] hover:text-[#00223f] hover:scale-105 shadow-lg hover:shadow-xl">
              START YOUR JOURNEY
            </button>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#AA7220]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-[#d77759]/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default TestimonialsSection;