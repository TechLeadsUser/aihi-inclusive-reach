const AccessibilityCommitment = () => {
  return <section className="bg-background py-[40px]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card card-gradient rounded-2xl p-8 lg:p-12 shadow-card border border-border/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-full translate-y-12 -translate-x-12" />
            
            <div className="relative space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                
                <h2 className="text-3xl font-bold font-heading lg:text-3xl">
                  Commitment to <span className="brand-gradient">Improvement</span>
                </h2>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-foreground leading-relaxed lg:text-base">
                  Accessibility is an ongoing journey. While some areas are still being 
                  improved, we are actively working to enhance usability, remove barriers, 
                  and create inclusive digital experiences.
                </p>
                
                <div className="bg-secondary/50 rounded-xl p-6 border border-border/30">
                  <div className="flex items-start space-x-4">
                    
                    <div className="text-muted-foreground rounded-sm">
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
    </section>;
};
export default AccessibilityCommitment;