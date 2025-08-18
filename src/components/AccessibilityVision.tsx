const AccessibilityVision = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-brand-magenta/5 rounded-3xl" />
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-x-20 -translate-y-20" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/10 to-transparent rounded-full translate-x-16 translate-y-16" />
            
            {/* Content */}
            <div className="relative bg-card card-gradient rounded-3xl p-8 lg:p-16 shadow-card border border-border/50">
              <div className="text-center space-y-8">
                {/* Quote icon */}
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary via-accent to-brand-magenta rounded-full flex items-center justify-center shadow-brand">
                  <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>
                
                {/* Vision heading */}
                <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-6">
                  Our <span className="brand-gradient">Vision</span>
                </h2>
                
                {/* Quote */}
                <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed text-foreground max-w-4xl mx-auto">
                  "Accessibility is not just compliance—it's our commitment to 
                  <span className="brand-gradient font-semibold"> equal opportunity</span>, 
                  <span className="brand-gradient font-semibold"> shared growth</span>, and 
                  <span className="brand-gradient font-semibold"> innovation without barriers</span>."
                </blockquote>
                
                {/* Decorative elements */}
                <div className="flex justify-center space-x-2 pt-6">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                  <div className="w-2 h-2 bg-brand-magenta rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
                </div>
                
                {/* Supporting text */}
                <div className="bg-secondary/30 rounded-xl p-6 border border-border/20 max-w-3xl mx-auto">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    By building inclusive digital experiences, AIHI aims to empower professionals, 
                    learners, and businesses alike to achieve more without limitations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityVision;