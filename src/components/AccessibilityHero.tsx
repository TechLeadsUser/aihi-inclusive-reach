const AccessibilityHero = () => {
  return (
    <section className="relative min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:h-[360px] flex items-center justify-center overflow-hidden">
      {/* Background gradient - teal to purple to magenta */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight text-white">
                Accessibility
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
                AIHI's commitment to inclusive digital experiences
              </p>
            </div>
          </div>
          
          {/* Right side - Phone illustration */}
          <div className="relative flex justify-center lg:justify-end order-first lg:order-last">
            <img 
              src="/lovable-uploads/cabe82d0-9339-4bf0-8af9-d6594e2d2466.png" 
              alt="3D hand holding mobile phone representing accessible technology" 
              className="w-40 sm:w-48 md:w-56 lg:w-60 h-auto max-w-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AccessibilityHero;