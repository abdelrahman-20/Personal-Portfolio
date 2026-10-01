import { useState, type SubmitEventHandler } from "react";
import { Check, Copy, Delete, Send } from "lucide-react";
import { contactInfo } from "../../constants/contactInfo";
import { toast } from "sonner";
import { cn } from "@/lib/ulils";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copyStatus, setCopyStatus] = useState<{
    label: string;
    success: boolean;
  } | null>(null);

  const copyToClipboard = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopyStatus({ label, success: true });
    } catch {
      setCopyStatus({ label, success: false });
    }
  };

  const handleContactSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      const formData = new FormData(event.currentTarget);
      const name = String(formData.get("name") ?? "");
      const email = String(formData.get("email") ?? "");
      const message = String(formData.get("message") ?? "");
      const recipient =
        contactInfo.find((contact) => contact.label === "Email")?.copyValue ??
        "";
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      );

      setTimeout(() => {
        toast("Sending The Message Via Email ✅", {
          position: "bottom-right",
        });
      }, 1000);

      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    } catch (error) {
      setIsSubmitting(false);
      setTimeout(() => {
        toast("Something went wrong, Please Try Again Later ❌", {
          position: "bottom-right",
        });
      }, 1000);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen mx-auto py-24">
      <div className="container max-w-4xl mx-auto text-center z-10 space-y-8">
        {/* SECTION-HEADER */}
        <h2 className="text-4xl md:text-5xl font-bold">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-foreground/70 max-w-3xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT-COLUMN */}
          <div className="gradient-border flex h-full flex-col gap-6 rounded-2xl p-6 shadow-sm backdrop-blur-sm sm:p-8">
            {/* SIMPLE-INTRO */}
            <div className="space-y-2 text-left">
              <h3 className="text-lg font-semibold md:text-xl">
                Contact <span className="text-primary">Information</span>
              </h3>
              <p className="text-sm text-foreground/65">
                Choose the channel that works best for you.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3">
              {contactInfo.map((contact) => {
                const Icon = contact.icon;
                const isCopied =
                  copyStatus?.label === contact.label && copyStatus.success;

                return (
                  <div
                    key={contact.label}
                    className="group flex items-center gap-2 rounded-xl border border-border/60 bg-background/50 p-3 text-left transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 sm:p-4"
                  >
                    <a
                      href={contact.href}
                      target={contact.external ? "_blank" : undefined}
                      rel={contact.external ? "noreferrer" : undefined}
                      className="flex min-w-0 flex-1 items-center gap-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <span className="rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/15">
                        <Icon size={22} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-medium">
                          {contact.label}
                        </span>
                        <span className="block truncate text-sm text-foreground/65">
                          {contact.displayValue}
                        </span>
                      </span>
                    </a>
                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(contact.label, contact.copyValue)
                      }
                      aria-label={`Copy ${contact.label}`}
                      title={`Copy ${contact.label}`}
                      className="shrink-0 rounded-lg p-3 text-foreground/60 transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      {isCopied ? (
                        <Check size={18} aria-hidden="true" />
                      ) : (
                        <Copy size={18} aria-hidden="true" />
                      )}
                    </button>
                  </div>
                );
              })}

              <p className="sr-only" aria-live="polite" role="status">
                {copyStatus
                  ? copyStatus.success
                    ? `${copyStatus.label} copied to clipboard.`
                    : `Could not copy ${copyStatus.label}.`
                  : ""}
              </p>
            </div>
          </div>

          {/* RIGHT-COLUMN */}
          <div className="gradient-border rounded-2xl p-6 text-left shadow-sm backdrop-blur-sm sm:p-8">
            <div className="mb-6 space-y-2">
              <h3 className="text-lg font-semibold md:text-xl">
                Send a <span className="text-primary">Message</span>
              </h3>
              <p className="text-sm text-foreground/65">
                Tell me a little about what you have in mind.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleContactSubmit}>
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-sm font-medium">
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Smith"
                  required
                  maxLength={100}
                  className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm transition-colors placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-sm font-medium">
                  Email address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@example.com"
                  required
                  maxLength={254}
                  className="w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm transition-colors placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="How can I help?"
                  required
                  maxLength={5000}
                  className="w-full resize-y rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm transition-colors placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <button
                  type="submit"
                  className={cn(
                    "cosmic-button flex w-full items-center justify-center gap-2 flex-2",
                    isSubmitting && "cursor-not-allowed opacity-70",
                  )}
                  disabled={isSubmitting}
                >
                  Send Message
                  <Send size={16} aria-hidden="true" />
                </button>

                <button
                  type="reset"
                  className="cosmic-foreground-button flex w-full items-center justify-center gap-2 flex-1"
                  onClick={() => setIsSubmitting(false)}
                >
                  Clear
                  <Delete size={16} aria-hidden="true" />
                </button>
              </div>

              <p className="text-center text-xs text-foreground/55">
                Your default email app will open with your message ready to
                send.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
