import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  ArrowUp,
  Heart
} from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "Contact", id: "contact" }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/arghya-ghosh-41271a24b",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      href: "https://github.com/Arghya-Ghosh75",
      label: "GitHub",
      color: "hover:text-accent"
    },
    {
      icon: Mail,
      href: "mailto:arghyaghoshofficial12@gmail.com",
      label: "Email",
      color: "hover:text-primary"
    },
    {
      icon: Phone,
      href: "tel:+917584084350",
      label: "Phone",
      color: "hover:text-secondary"
    }
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                Arghya Ghosh
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Full-Stack Architect passionate about building scalable web applications 
                and mastering core Computer Science to solve real-world problems.
              </p>
            </div>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                arghyaghoshofficial12@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 75840 84350
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-muted-foreground ${social.color} transition-colors duration-200 text-sm`}
                >
                  <social.icon className="h-4 w-4" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} Arghya Ghosh. Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and React</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for Projects
            </div>
            
            <Button
              size="sm"
              variant="ghost"
              onClick={scrollToTop}
              className="hover:bg-muted"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}