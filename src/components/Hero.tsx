import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center animated-bg">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <p className="text-lg text-muted-foreground mb-2">Hi there! I'm</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Arghya Ghosh
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
                Full-Stack Architect
              </h2>
              <div className="text-xl md:text-2xl text-muted-foreground mb-6">
                Building Scalable Web Applications
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              Passionate about mastering core Computer Science to solve real-world problems. 
              Specializing in Web3, AI, and Cloud technologies with a focus on CSE-AIML.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover-lift group"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="hover-lift"
              >
                Get in Touch
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for Projects
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                CSE-AIML Final Year
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-primary p-1 hover-glow transition-all duration-500 hover:scale-105">
                <div className="w-full h-full rounded-full bg-background p-2">
                  <img
                    src="/lovable-uploads/14ff5ff7-7cff-447b-b8d2-06d452a47443.png"
                    alt="Arghya Ghosh - Full-Stack Architect"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}