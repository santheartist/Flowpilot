import { ArrowRight, Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-[96px] px-8 bg-gradient-to-br from-primary via-primary to-purple-600 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-[52px] font-semibold text-white leading-[1.15] max-w-[800px] mx-auto">
            Ready to accelerate your team's productivity?
          </h2>

          {/* Subtext */}
          <p className="text-[20px] text-white/90 max-w-[640px] mx-auto">
            Join thousands of teams already using FlowPilot to deliver projects faster and smarter.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <button className="group px-8 py-4 bg-white text-primary rounded-xl hover:bg-white/95 hover:shadow-2xl hover:shadow-black/20 transition-all duration-200 text-[16px] flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl hover:bg-white/20 hover:shadow-xl transition-all duration-200 text-[16px]">
              Schedule a Demo
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-12 pt-8">
            <div className="text-center">
              <div className="text-[32px] font-semibold text-white">14 days</div>
              <div className="text-[14px] text-white/80">Free trial</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-[32px] font-semibold text-white">No CC</div>
              <div className="text-[14px] text-white/80">Required</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-[32px] font-semibold text-white">24/7</div>
              <div className="text-[14px] text-white/80">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
