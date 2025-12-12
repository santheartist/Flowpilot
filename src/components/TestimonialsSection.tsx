import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "FlowPilot transformed how our team collaborates. We've cut our project delivery time in half and everyone stays aligned effortlessly.",
    author: "Sarah Johnson",
    role: "VP of Product, TechFlow",
    avatar: "https://images.unsplash.com/photo-1543132220-7bc04a0e790a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTQ2NDc3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
  },
  {
    quote: "The AI insights feature is a game-changer. It helps us spot bottlenecks before they become problems and keeps our projects on track.",
    author: "Michael Chen",
    role: "Engineering Manager, DataCore",
    avatar: "https://images.unsplash.com/photo-1543132220-7bc04a0e790a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTQ2NDc3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
  },
  {
    quote: "Best project management tool we've used. Clean interface, powerful features, and amazing customer support. Highly recommend!",
    author: "Emily Rodriguez",
    role: "CEO, StartupLab",
    avatar: "https://images.unsplash.com/photo-1543132220-7bc04a0e790a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlcnNvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTQ2NDc3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-[96px] px-8 bg-accent/30 dark:bg-gray-800/30">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-[14px] mb-2">
            Testimonials
          </div>
          <h2 className="text-[44px] font-semibold text-foreground">
            Trusted by leading teams
          </h2>
          <p className="text-[18px] text-secondary max-w-[640px] mx-auto">
            See what teams around the world are saying about FlowPilot.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-8 border border-border hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 space-y-6"
            >
              {/* Rating Stars */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[16px] text-foreground leading-[1.6]">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-[14px] text-secondary">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}