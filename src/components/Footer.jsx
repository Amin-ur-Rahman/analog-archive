import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & Bio */}
          <div className="col-span-1 md:col-span-1">
            <Link
              href="/"
              className="text-xl font-bold tracking-tighter mb-4 block"
            >
              ANALOG <span className="text-primary">ARCHIVE</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Preserving the tactile soul of mechanical media. We curate the
              finest vintage cameras and vinyl records for the modern collector.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-xs">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/items"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Full Archive
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-xs">
              Collections
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/items?category=Cameras"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Vintage Cameras
                </Link>
              </li>
              <li>
                <Link
                  href="/items?category=Vinyl"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Vinyl Records
                </Link>
              </li>
              <li>
                <Link
                  href="/items?featured=true"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Featured Rarities
                </Link>
              </li>
              <li>
                <Link
                  href="/add-item"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Submit an Item
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social/Legal */}
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-widest text-xs">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Twitter (X)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
          <p>
            © {currentYear} Analog Archive. Built for the preservation of grain.
          </p>
          <p>Designed with Intent.</p>
        </div>
      </div>
    </footer>
  );
}
