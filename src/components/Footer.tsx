import { cn } from "@/lib/ulils";

const Footer = () => {
  return (
    <footer
      className={cn(
        "relative py-4 px-12 mt-8 bg-card text-foreground/50 border-t border-primary/20",
        "flex flex-wrap justify-between items-center gap-4",
      )}
    >
      <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      <p>Developed By Abdelrahman Salem</p>
    </footer>
  );
};

export default Footer;
