import { Layers, Twitter, Linkedin, Github } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Security', 'Roadmap', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
  Resources: ['Documentation', 'Help Center', 'Community', 'API Reference', 'Status'],
  Legal: ['Privacy', 'Terms', 'Cookie Policy', 'Licenses', 'GDPR'],
};

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="grid grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-[20px] font-semibold text-foreground">FlowPilot</span>
            </div>
            <p className="text-[15px] text-secondary leading-[1.6] max-w-[280px]">
              The modern project management platform that helps teams deliver exceptional results.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 bg-accent dark:bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-accent dark:bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-accent dark:bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-[15px] font-semibold text-foreground">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] text-secondary hover:text-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex items-center justify-between">
          <p className="text-[14px] text-secondary">
            © 2025 FlowPilot. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[14px] text-secondary hover:text-foreground transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[14px] text-secondary hover:text-foreground transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[14px] text-secondary hover:text-foreground transition-colors duration-200"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}