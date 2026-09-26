import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import StarsBackground from "../components/StarsBackground";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarsBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
      </main>

      {/* Footer */}
    </div>
  );
};

export default Home;
