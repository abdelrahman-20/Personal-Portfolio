import { BsEnvelope, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import type { IconType } from "react-icons";

export type ContactInfoItem = {
  label: string;
  displayValue: string;
  copyValue: string;
  href: string;
  icon: IconType;
  external?: boolean;
};

export const contactInfo: ContactInfoItem[] = [
  {
    label: "WhatsApp",
    displayValue: "+20 11 480 216 72",
    copyValue: "+201148021672",
    href: "https://wa.me/201148021672",
    icon: BsWhatsapp,
    external: true,
  },
  {
    label: "Email",
    displayValue: "abdelrahman.salem.1002@gmail.com",
    copyValue: "abdelrahman.salem.1002@gmail.com",
    href: "mailto:abdelrahman.salem.1002@gmail.com",
    icon: BsEnvelope,
  },
  {
    label: "LinkedIn",
    displayValue: "Connect professionally",
    copyValue: "https://www.linkedin.com/in/abdelrahman-salem-267477261",
    href: "https://www.linkedin.com/in/abdelrahman-salem-267477261",
    icon: BsLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    displayValue: "Explore my projects",
    copyValue: "https://github.com/abdelrahman-20",
    href: "https://github.com/abdelrahman-20",
    icon: BsGithub,
    external: true,
  },
];
