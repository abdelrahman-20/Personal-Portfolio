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

      {/* Main Content */}

      {/* Footer */}
    </div>
  );
};

export default Home;
