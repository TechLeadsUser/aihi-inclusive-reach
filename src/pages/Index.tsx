import AccessibilityHero from "@/components/AccessibilityHero";
import AccessibilityApproach from "@/components/AccessibilityApproach";
import AccessibilityFocus from "@/components/AccessibilityFocus";
import AccessibilityCommitment from "@/components/AccessibilityCommitment";
import AccessibilityContact from "@/components/AccessibilityContact";
import AccessibilityVision from "@/components/AccessibilityVision";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <AccessibilityHero />
      <AccessibilityApproach />
      <AccessibilityFocus />
      <AccessibilityCommitment />
      <AccessibilityContact />
      <AccessibilityVision />
      <Footer />
    </main>
  );
};

export default Index;