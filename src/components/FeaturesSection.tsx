import { Zap, Users, BarChart3, Brain } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Task Automation',
    description: 'Automate repetitive workflows and save hours every week with intelligent task routing and smart triggers.',
    gradient: 'from-yellow-500/10 to-orange-500/10',
    iconBg: 'bg-yellow-500/20',
    iconColor: 'text-yellow-600',
  },
  {
    icon: Users,
    title: 'Real-time Collaboration',
    description: 'Work together seamlessly with live updates, comments, and notifications that keep everyone in sync.',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-600',
  },
  {
    icon: BarChart3,
    title: 'Smart Analytics',
    description: 'Track progress with visual dashboards and custom reports that reveal insights at a glance.',
    gradient: 'from-purple-500/10 to-pink-500/10',
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-600',
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Get intelligent recommendations and predictions to optimize your workflow and deliver projects faster.',
    gradient: 'from-green-500/10 to-emerald-500/10',
    iconBg: 'bg-green-500/20',
    iconColor: 'text-green-600',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-[96px] px-8 bg-white dark:bg-gray-900">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-[14px] mb-2">
            Features
          </div>
          <h2 className="text-[44px] font-semibold text-foreground">
            Everything you need to succeed
          </h2>
          <p className="text-[18px] text-secondary max-w-[640px] mx-auto">
            Powerful features designed to help teams collaborate better and deliver exceptional results.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${feature.gradient} dark:from-white/5 dark:to-white/10 rounded-2xl p-8 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-[24px] font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-[16px] text-secondary leading-[1.6]">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                    <svg
                      className="w-4 h-4 text-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}