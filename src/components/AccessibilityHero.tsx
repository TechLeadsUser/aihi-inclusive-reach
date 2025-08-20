import heroImage from "@/assets/accessibility-hero.jpg";

const AccessibilityHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold font-heading leading-tight">
                <span className="brand-gradient">Accessibility</span>{' '}
                <span className="text-foreground">at AIHI</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Committed to building inclusive digital experiences for everyone.
              </p>
            </div>
            
            {/* Accessibility symbol */}
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shadow-brand">
                <svg 
                  className="w-8 h-8 text-primary" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  aria-label="Universal Access Symbol"
                >
                  <path d="M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM21 9h-6l-2-3-2 3H5a1 1 0 1 0 0 2h4.261l.575 1.722L8.728 11H7a1 1 0 1 0 0 2h1.388l-.312.935L7 15.133v4.867a1 1 0 1 0 2 0v-4.133l1.076-1.615L10.5 15v5a1 1 0 1 0 2 0v-5l.424-.748L14 15.867v4.133a1 1 0 1 0 2 0v-4.867l-1.076-1.198-.312-.935H16a1 1 0 1 0 0-2h-1.728l-1.108-1.722L13.739 11H21a1 1 0 1 0 0-2z"/>
                </svg>
              </div>
              <div className="text-sm text-muted-foreground">
                Universal Access for All
              </div>
            </div>
          </div>
          
          {/* Right side - Hero image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-brand">
              <img 
                src={heroImage} 
                alt="Diverse people connected by digital interfaces representing accessibility and inclusion in technology"
                className="w-full h-auto transition-smooth hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityHero;