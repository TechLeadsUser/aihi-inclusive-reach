import navigationIcon from "@/assets/navigation-icon.png";
import readableIcon from "@/assets/readable-icon.png";
import altTextIcon from "@/assets/alt-text-icon.png";
import devicesIcon from "@/assets/devices-icon.png";
const AccessibilityFocus = () => {
  const focusAreas = [{
    icon: navigationIcon,
    title: "Clear Navigation",
    description: "Intuitive, user-friendly design that makes finding information effortless for all users.",
    gradient: "from-primary to-primary/60"
  }, {
    icon: readableIcon,
    title: "Readable Content",
    description: "Optimized layouts, fonts, and contrasts that ensure content is accessible and easy to read.",
    gradient: "from-accent to-accent/60"
  }, {
    icon: altTextIcon,
    title: "Image Descriptions",
    description: "Meaningful alt text for visuals that convey the same information to all users.",
    gradient: "from-brand-magenta to-brand-magenta/60"
  }, {
    icon: devicesIcon,
    title: "Multi-Device Support",
    description: "Accessible across devices and assistive technologies for flexible, inclusive access.",
    gradient: "from-brand-teal to-brand-teal/60"
  }];
  return <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
              Our <span className="brand-gradient">Focus Areas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We prioritize key areas that make the biggest impact on user experience and accessibility.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => <div key={index} className="group bg-card card-gradient rounded-2xl p-6 shadow-card border border-border/50 transition-smooth hover:shadow-brand hover:-translate-y-2">
                <div className="space-y-6">
                  {/* Icon with gradient background */}
                  
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold font-heading group-hover:text-primary transition-smooth">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                  
                  {/* Decorative element */}
                  <div className={`w-full h-1 rounded-full bg-gradient-to-r ${area.gradient} opacity-20 group-hover:opacity-60 transition-smooth`} />
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AccessibilityFocus;