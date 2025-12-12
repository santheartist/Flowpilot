import { Play } from 'lucide-react';
import { DashboardMockup } from './DashboardMockup';

export function HeroSection() {
  return (
    <section className="relative pt-[168px] pb-[120px] px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-full blur-3xl -z-10 dark:from-primary/20" />
      
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-[56px] leading-[1.1] font-semibold text-foreground tracking-tight">
                Manage projects with clarity, speed, and intelligence.
              </h1>
              <p className="text-[20px] leading-[1.6] text-secondary max-w-[520px]">
                FlowPilot empowers teams to plan, execute, and deliver projects faster with AI-powered insights and real-time collaboration.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <button className="px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 transition-all duration-200 text-[16px]">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white dark:bg-white/10 text-foreground border border-border rounded-xl hover:bg-accent dark:hover:bg-white/20 hover:shadow-lg transition-all duration-200 text-[16px] flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-[28px] font-semibold text-foreground">10K+</div>
                <div className="text-[14px] text-secondary">Active teams</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-[28px] font-semibold text-foreground">99.9%</div>
                <div className="text-[14px] text-secondary">Uptime SLA</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-[28px] font-semibold text-foreground">4.9/5</div>
                <div className="text-[14px] text-secondary">User rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 dark:from-primary/30 dark:to-purple-500/30 rounded-3xl blur-3xl transform -rotate-6" />
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}