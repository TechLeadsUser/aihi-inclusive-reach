const AccessibilityContact = () => {
  return <section className="bg-secondary/30 py-[40px]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-heading lg:text-3xl font-semibold">
              Feedback & <span className="brand-gradient">Support</span>
            </h2>
            <p className="text-muted-foreground text-base">
              We're here to help and improve together
            </p>
          </div>
          
          <div className="bg-card card-gradient rounded-2xl p-8 lg:p-12 shadow-card border border-border/50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Contact info */}
              <div className="space-y-6">
                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center space-x-4 p-4 bg-secondary/50 rounded-xl border border-border/30 hover:border-primary/50 transition-smooth group">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email us at</p>
                      <a href="mailto:help@aihicloud.com" className="text-lg font-semibold text-primary hover:text-accent transition-smooth">
                        help@aihicloud.com
                      </a>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-center space-x-4 p-4 bg-secondary/50 rounded-xl border border-border/30 hover:border-accent/50 transition-smooth group">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                      <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call us at</p>
                      <a href="tel:+919876543210" className="text-lg font-semibold text-accent hover:text-brand-magenta transition-smooth">+91 99511 80686</a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Message */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10">
                  <p className="text-foreground leading-relaxed text-sm">
                    If you face challenges while accessing our website or services, 
                    please contact us. We will make every effort to provide information 
                    in an accessible format.
                  </p>
                </div>
                
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm">We typically respond within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AccessibilityContact;