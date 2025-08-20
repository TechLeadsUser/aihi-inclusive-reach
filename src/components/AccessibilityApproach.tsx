const AccessibilityApproach = () => {
  return <section className="bg-background py-[40px]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-heading lg:text-3xl font-semibold">
              Our <span className="brand-gradient font-semibold">Approach</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-brand-magenta mx-auto rounded-full" />
          </div>
          
          <div className="bg-card card-gradient rounded-2xl p-8 lg:p-12 shadow-card border border-border/50 py-[24px]">
            <p className="text-lg text-muted-foreground leading-relaxed lg:text-base">
              At AIHI, inclusivity is more than a principle—it's how we design, develop, 
              and deliver our services. We strive to create digital platforms that are 
              usable by everyone, regardless of ability or background.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* Design */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center shadow-brand">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Design</h3>
              <p className="text-muted-foreground text-sm">User-centered design with accessibility at its core</p>
            </div>
            
            {/* Develop */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center shadow-brand">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Develop</h3>
              <p className="text-muted-foreground text-sm">Implementation following accessibility standards and best practices</p>
            </div>
            
            {/* Deliver */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-brand-magenta/10 rounded-full flex items-center justify-center shadow-brand">
                <svg className="w-8 h-8 text-brand-magenta" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Deliver</h3>
              <p className="text-muted-foreground text-sm">Continuous monitoring and improvement of accessible services</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AccessibilityApproach;