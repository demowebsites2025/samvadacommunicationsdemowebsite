import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";


const Footer = () => {
  const currentYear = new Date().getFullYear();



  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contact" },
    ],
    services: [
      { name: "Web Development", path: "/services" },
      { name: "Digital Marketing", path: "/services" },
      { name: "Film Promotions", path: "/services" },
      { name: "Graphic Design", path: "/services" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/Logo.png" alt="Samvada Communications" className="h-12 w-12" />
              <span className="text-xl font-bold">Samvada Communications</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Delivering the best digital solutions with strategy, creativity, and
              impact since 2022. Your partner in building a bold digital presence.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@samvadacommunications.com" className="hover:text-primary-foreground transition-colors">
                info@samvadacommunications.com
              </a>
            </div>
            <div className="mt-2 text-primary-foreground/80">
              📍 S S Complex, Saibrakatte, Shiriyara Village - 576210
            </div>
            <div className="mt-2 text-primary-foreground/80">
              📞 +91 7619394676
            </div>
            <div className="mt-4 text-primary-foreground/80">
              <div className="font-semibold mb-1">Working Hours:</div>
              <div className="text-sm space-y-1">
                <div>Mon – Fri: 9:00 AM – 5:00 PM</div>
                <div>Saturday: 10:00 AM – 6:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} Samvada Communications. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
