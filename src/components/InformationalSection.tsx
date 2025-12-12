import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const benefits = [
  'Reduce project delivery time by up to 40%',
  'Centralize all communication in one place',
  'Get real-time visibility into project health',
  'Automate status updates and reporting',
  'Scale seamlessly as your team grows',
];

export function InformationalSection() {
  return (
    <section className="py-[96px] px-8 bg-background">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-[14px]">
                Why FlowPilot
              </div>
              <h2 className="text-[44px] font-semibold text-foreground leading-[1.15]">
                Work smarter, not harder.
              </h2>
              <p className="text-[18px] text-secondary leading-[1.6]">
                FlowPilot combines powerful automation with intuitive design to help your team focus on what matters most—delivering exceptional work.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-[16px] text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="group px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 transition-all duration-200 text-[16px] flex items-center gap-2">
              Explore Features
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Right Column - Image/Dashboard */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 dark:from-primary/20 dark:to-purple-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-border p-8 space-y-6">
              {/* Mock dashboard content */}
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="text-[18px] font-semibold">Project Timeline</div>
                <div className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-[13px]">
                  On Track
                </div>
              </div>

              {/* Timeline items */}
              <div className="space-y-4">
                {[
                  { phase: 'Planning & Research', progress: 100, status: 'complete' },
                  { phase: 'Design & Prototyping', progress: 100, status: 'complete' },
                  { phase: 'Development Sprint 1', progress: 75, status: 'active' },
                  { phase: 'QA & Testing', progress: 30, status: 'upcoming' },
                  { phase: 'Launch & Deployment', progress: 0, status: 'upcoming' },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[14px] text-foreground">{item.phase}</span>
                      <span className="text-[13px] text-secondary">{item.progress}%</span>
                    </div>
                    <div className="h-2 bg-accent dark:bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          item.status === 'complete' ? 'bg-green-500' :
                          item.status === 'active' ? 'bg-primary' : 'bg-secondary/30'
                        }`}
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Team avatars */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-500 border-2 border-white dark:border-gray-900"
                      />
                    ))}
                    <div className="w-8 h-8 rounded-full bg-accent dark:bg-white/10 border-2 border-white dark:border-gray-900 flex items-center justify-center">
                      <span className="text-[11px] text-secondary">+8</span>
                    </div>
                  </div>
                  <span className="text-[13px] text-secondary">12 team members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}