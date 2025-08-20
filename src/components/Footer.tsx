const Footer = () => {
  const footerLinks = [{
    name: "About Us",
    href: "/about"
  }, {
    name: "Careers",
    href: "/careers"
  }, {
    name: "Contact",
    href: "/contact"
  }, {
    name: "Privacy Policy",
    href: "/privacy"
  }, {
    name: "Cookie Policy",
    href: "/cookies"
  }, {
    name: "Responsible Disclosure",
    href: "/disclosure"
  }, {
    name: "Accessibility",
    href: "/"
  }];
  return <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* AIHI Brand */}
            <div className="col-span-2 space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-heading">
                  <span className="brand-gradient">AIHI</span>
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Building inclusive digital experiences that empower everyone to achieve more without limitations.
                </p>
              </div>
              
              {/* Contact info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <a href="mailto:help@aihicloud.com" className="text-muted-foreground hover:text-primary transition-smooth">
                    help@aihicloud.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <a href="tel:+919876543210" className="text-muted-foreground hover:text-accent transition-smooth">+91 99511 80686</a>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <div className="space-y-2">
                {footerLinks.slice(0, 4).map((link, index) => <a key={index} href={link.href} className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                    {link.name}
                  </a>)}
              </div>
            </div>
            
            {/* Legal */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Legal</h4>
              <div className="space-y-2">
                {footerLinks.slice(4).map((link, index) => <a key={index} href={link.href} className="block text-sm text-muted-foreground hover:text-accent transition-smooth">
                    {link.name}
                  </a>)}
              </div>
            </div>
          </div>
          
          {/* Bottom section */}
          <div className="border-t border-border/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © 2024 AIHI. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-4">
                
                <span className="text-xs text-muted-foreground">
                  Committed to Inclusive Design
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;