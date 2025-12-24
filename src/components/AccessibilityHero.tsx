const AccessibilityHero = () => {
  return <section className="relative h-[360px] flex items-center justify-center overflow-hidden">
      {/* Background gradient - teal to purple to magenta */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center px-[24px]">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold font-heading leading-tight text-white lg:text-6xl">
                Accessibility
              </h1>
              <p className="text-xl text-white/90 leading-relaxed lg:text-xl">
                AIHI's commitment to inclusive digital experiences
              </p>
            </div>
          </div>
          
          {/* Right side - Phone illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <img src="/lovable-uploads/cabe82d0-9339-4bf0-8af9-d6594e2d2466.png" alt="3D hand holding mobile phone representing accessible technology" className="w-60 h-auto lg:w-60" />
          </div>
        </div>
      </div>
    </section>;
};
export default AccessibilityHero;