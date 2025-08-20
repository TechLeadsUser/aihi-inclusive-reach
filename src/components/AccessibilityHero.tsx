const AccessibilityHero = () => {
  return (
    <section className="relative h-[360px] flex items-center justify-center overflow-hidden">
      {/* Background gradient - teal to purple to magenta */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold font-heading leading-tight text-white">
                Accessibility
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                AIHI's commitment to inclusive digital experiences
              </p>
            </div>
          </div>
          
          {/* Right side - Phone illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <img 
              src="/lovable-uploads/cabe82d0-9339-4bf0-8af9-d6594e2d2466.png" 
              alt="3D hand holding mobile phone representing accessible technology"
              className="w-64 h-auto lg:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilityHero;