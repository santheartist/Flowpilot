import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 10 team members',
      'Unlimited projects',
      'Basic task automation',
      '5GB storage',
      'Email support',
      'Mobile app access',
    ],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '79',
    description: 'For growing teams that need more power',
    features: [
      'Up to 50 team members',
      'Unlimited projects',
      'Advanced automation',
      '100GB storage',
      'Priority support',
      'AI-powered insights',
      'Custom integrations',
      'Advanced analytics',
    ],
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations with advanced needs',
    features: [
      'Unlimited team members',
      'Unlimited projects',
      'Enterprise automation',
      'Unlimited storage',
      'Dedicated support',
      'AI-powered insights',
      'Custom integrations',
      'Advanced analytics',
      'SSO & SAML',
      'Custom SLA',
    ],
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-[96px] px-8 bg-white dark:bg-gray-900">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-[14px] mb-2">
            Pricing
          </div>
          <h2 className="text-[44px] font-semibold text-foreground">
            Simple, transparent pricing
          </h2>
          <p className="text-[18px] text-secondary max-w-[640px] mx-auto">
            Choose the perfect plan for your team. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary/5 to-purple-500/5 dark:from-primary/10 dark:to-purple-500/10 border-primary shadow-xl scale-105'
                  : 'bg-white dark:bg-gray-800/50 border-border hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 bg-primary text-white rounded-full text-[13px]">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="space-y-4 mb-8">
                <h3 className="text-[24px] font-semibold text-foreground">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  {plan.price === 'Custom' ? (
                    <span className="text-[44px] font-semibold text-foreground">
                      {plan.price}
                    </span>
                  ) : (
                    <>
                      <span className="text-[44px] font-semibold text-foreground">
                        ${plan.price}
                      </span>
                      <span className="text-[16px] text-secondary">/month</span>
                    </>
                  )}
                </div>
                <p className="text-[15px] text-secondary">
                  {plan.description}
                </p>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-xl transition-all duration-200 text-[16px] mb-8 ${
                  plan.highlighted
                    ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20'
                    : 'bg-accent dark:bg-white/10 text-foreground hover:bg-accent/80 dark:hover:bg-white/20 border border-border'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
              </button>

              {/* Features List */}
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted ? 'bg-primary' : 'bg-accent dark:bg-white/10'
                      }`}>
                        <Check className={`w-3 h-3 ${
                          plan.highlighted ? 'text-white' : 'text-foreground'
                        }`} />
                      </div>
                    </div>
                    <span className="text-[15px] text-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-[15px] text-secondary">
            All plans include 14-day free trial. No credit card required.{' '}
            <a href="#" className="text-primary hover:underline">
              View detailed comparison →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}