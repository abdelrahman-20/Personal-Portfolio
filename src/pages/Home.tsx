import AboutSection from "../components/sections/AboutSection";
import HeroSection from "../components/sections/HeroSection";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/sections/ProjectSection";
import SkillSection from "../components/sections/SkillSection";
import StarsBackground from "../components/sections/StarsBackground";
import ThemeToggle from "../components/ThemeToggle";
import ContactSection from "../components/sections/ContactSection";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground text-sm overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarsBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Shadcn/UI Toaster */}
        <Toaster />

        {/* Sections */}
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
