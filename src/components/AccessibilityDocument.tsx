const AccessibilityDocument = () => {
  return <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-r from-brand-teal via-brand-purple to-brand-magenta border-b border-border/30">
        <div className="absolute inset-0 bg-background/10" />
        <div className="relative container mx-auto px-4 py-16">
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold font-heading text-foreground">
                Accessibility
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                AIHI's commitment to inclusive digital experiences
              </p>
            </div>
            
            {/* Clipboard Icon */}
            <div className="hidden md:block">
              <div className="w-24 h-28 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
                <div className="w-full h-full bg-white rounded-lg m-1 flex flex-col items-center justify-center space-y-1">
                  <div className="w-12 h-1 bg-accent rounded-full opacity-60" />
                  <div className="w-10 h-1 bg-accent rounded-full opacity-40" />
                  <div className="w-14 h-1 bg-accent rounded-full opacity-60" />
                  <div className="w-8 h-1 bg-accent rounded-full opacity-40" />
                  <div className="w-12 h-1 bg-accent rounded-full opacity-60" />
                </div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-accent rounded-t-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Copyright Notice */}
      <section className="bg-secondary/20 border-b border-border/30">
        <div className="container mx-auto px-4 py-6">
          <p className="text-sm text-muted-foreground max-w-4xl">
            All contents are Copyright © 2025 AIHI. All rights reserved. Without prior written approval from AIHI 
            Pvt. Ltd., no portion of this document may be copied/reproduced in any form or by any means.
          </p>
        </div>
      </section>
      
      {/* Contents */}
      <section className="bg-background border-b border-border/30">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl">
            <h2 className="text-xl font-semibold mb-6 text-foreground">Contents</h2>
            <ol className="space-y-2 text-muted-foreground">
              <li>1. Accessibility Statement</li>
              <li>2. Our Approach</li>
              <li>3. Focus Areas</li>
              <li>4. Commitment to Improvement</li>
              <li>5. Feedback and Contact</li>
              <li>6. Our Vision</li>
            </ol>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl space-y-12">
          
          {/* Section 1: Accessibility Statement */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">1. Accessibility Statement</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At AIHI, inclusivity is at the core of how we design, develop, and deliver our services. We believe that 
                technology should empower everyone, and we are committed to making our website and digital platforms 
                accessible to all users, regardless of ability.
              </p>
              <p>
                We recognize that accessibility is an ongoing process, not a one-time implementation. At AIHI, we 
                continuously review and enhance our digital presence to ensure that learners, professionals, and 
                partners can access information and opportunities without barriers.
              </p>
            </div>
          </section>
          
          {/* Section 2: Our Approach */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">2. Our Approach</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At AIHI, inclusivity is more than a principle—it's how we design, develop, and deliver our services. 
                We strive to create digital platforms that are usable by everyone, regardless of ability or background.
              </p>
              <p>
                Our methodology encompasses three core principles:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Design:</strong> User-centered design with accessibility at its core</li>
                <li><strong>Develop:</strong> Implementation following accessibility standards and best practices</li>
                <li><strong>Deliver:</strong> Continuous monitoring and improvement of accessible services</li>
              </ul>
            </div>
          </section>
          
          {/* Section 3: Focus Areas */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">3. Focus Areas</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We prioritize key areas that make the biggest impact on user experience and accessibility:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-card rounded-lg p-6 border border-border/30">
                  <h3 className="font-semibold text-foreground mb-2">Clear Navigation</h3>
                  <p className="text-sm">Intuitive, user-friendly design that makes finding information effortless for all users.</p>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border/30">
                  <h3 className="font-semibold text-foreground mb-2">Readable Content</h3>
                  <p className="text-sm">Optimized layouts, fonts, and contrasts that ensure content is accessible and easy to read.</p>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border/30">
                  <h3 className="font-semibold text-foreground mb-2">Image Descriptions</h3>
                  <p className="text-sm">Meaningful alt text for visuals that convey the same information to all users.</p>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border/30">
                  <h3 className="font-semibold text-foreground mb-2">Multi-Device Support</h3>
                  <p className="text-sm">Accessible across devices and assistive technologies for flexible, inclusive access.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Section 4: Commitment to Improvement */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">4. Commitment to Improvement</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Accessibility is an ongoing journey. While some areas are still being improved, we are actively 
                working to enhance usability, remove barriers, and create inclusive digital experiences.
              </p>
              <p>
                We continuously review and enhance our platforms, ensuring that every update brings us closer to 
                our goal of universal accessibility. Our commitment extends beyond compliance to creating genuinely 
                inclusive experiences.
              </p>
            </div>
          </section>
          
          {/* Section 5: Feedback and Contact */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">5. Feedback and Contact</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Your feedback is vital in helping us improve. If you encounter any accessibility challenges on our 
                website or with our services, please reach out to us.
              </p>
              <div className="bg-card rounded-lg p-6 border border-border/30 space-y-3 px-[24px]">
                <div>
                  <strong className="text-foreground">📧 Email:</strong>{' '}
                  <a href="mailto:help@aihicloud.com" className="text-primary hover:text-accent transition-smooth">
                    help@aihicloud.com
                  </a>
                </div>
                <div>
                  <strong className="text-foreground">📞 Phone:</strong>{' '}
                  <a href="tel:+919876543210" className="text-primary hover:text-accent transition-smooth">
                    +91 9876543210
                  </a>
                </div>
              </div>
              <p>
                We take every request seriously and will make reasonable efforts to address your concerns promptly. 
                We will make every effort to provide information in an accessible format.
              </p>
            </div>
          </section>
          
          {/* Section 6: Our Vision */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">6. Our Vision</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-brand-magenta/10 rounded-lg p-8 border border-border/30">
                <blockquote className="text-xl font-medium text-foreground leading-relaxed">
                  "Accessibility is not just compliance—it's our commitment to equal opportunity, shared growth, 
                  and innovation without barriers."
                </blockquote>
              </div>
              <p>
                By building inclusive digital experiences, AIHI aims to empower professionals, learners, and 
                businesses alike to achieve more without limitations. Accessibility is more than compliance—it 
                is our commitment to equal opportunity and shared success.
              </p>
            </div>
          </section>
          
        </div>
      </main>
    </div>;
};
export default AccessibilityDocument;