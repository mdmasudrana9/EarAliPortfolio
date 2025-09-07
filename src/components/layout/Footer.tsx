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
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
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
        <div className="flex gap-4 mb-12">
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="TikTok"
          >
            <Music className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* More Section */}
          <div>
            <h3 className="font-medium text-foreground mb-4">More</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Jobs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  My Account
                </a>
              </li>
            </ul>
          </div>

          {/* Free Content Section */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Free Content</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Articles & Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Podcast
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Videos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Book Notes
                </a>
              </li>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  My Book
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  YouTube Academy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  LIFOS
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex gap-6 mt-12 pt-8 border-t border-border">
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
