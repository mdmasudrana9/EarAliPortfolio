import {
  Youtube,
  Instagram,
  Linkedin,
  Music,
  Twitter,
  Facebook,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted border-t mt-20 border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Logo and Copyright Section */}
        <div className="mb-8 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                EA
              </span>
            </div>
            <span className="text-xl font-semibold text-foreground">
              Ear Ali
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © Ear Ali 2025. All rights reserved.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
          <a
            href="#"
            className="text-muted-foreground hover:text-primary"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary"
            aria-label="TikTok"
          >
            <Music className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
          {/* More Section */}
          <div>
            <h3 className="font-medium text-foreground mb-4">More</h3>
            <ul className="space-y-3">
              {["About", "Jobs", "Contact", "My Account"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Free Content Section */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Free Content</h3>
            <ul className="space-y-3">
              {["Newsletter", "Articles ", "Podcast", "Videos"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Products</h3>
            <ul className="space-y-3">
              {["My Book", "YouTube Academy", "LIFOS"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex justify-between sm:flex-row gap-4 sm:gap-6 md:mt-12 mt-8  pt-8 border-t border-border text-center sm:text-left  sm:justify-start">
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
