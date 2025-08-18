const AccessibilityCommitment = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card card-gradient rounded-2xl p-8 lg:p-12 shadow-card border border-border/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-full translate-y-12 -translate-x-12" />
            
            <div className="relative space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-brand">
                  <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold font-heading">
                  Commitment to <span className="brand-gradient">Improvement</span>
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg lg:text-xl text-foreground leading-relaxed">
                  Accessibility is an ongoing journey. While some areas are still being 
                  improved, we are actively working to enhance usability, remove barriers, 
                  and create inclusive digital experiences.
                </p>
                
                <div className="bg-secondary/50 rounded-xl p-6 border border-border/30">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
                      </svg>
                    </div>
                    <div className="text-muted-foreground">
                      We continuously review and enhance our platforms, ensuring that every 
                      update brings us closer to our goal of universal accessibility.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityCommitment;