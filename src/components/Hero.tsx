import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Code, Zap, Star, Sparkles } from "lucide-react";
export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center animated-bg relative overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-float opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl animate-float opacity-70" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl animate-float opacity-70" style={{
        animationDelay: '4s'
      }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in space-y-8">
            {/* Status Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge className="bg-gradient-primary text-white px-4 py-2 text-sm font-medium hover:scale-105 transition-transform cursor-default">
                <Sparkles className="w-4 h-4 mr-2" />
                Available for Projects
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground font-medium tracking-wide">
                  👋 Hi, I'm
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-primary bg-clip-text text-transparent block mx-0 my-0 py-[6px]">
                    Arghya
                  </span>
                  <span className="text-foreground block">Ghosh</span>
                </h1>
              </div>
              
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
                  Full-Stack Architect
                </h2>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-lg md:text-xl">
                  <span className="text-muted-foreground">Building</span>
                  <span className="bg-gradient-secondary bg-clip-text text-transparent font-semibold">
                    Scalable Web Applications
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Passionate about mastering core Computer Science to solve real-world problems. 
              Specializing in <span className="text-primary font-medium">Web3</span>, 
              <span className="text-accent font-medium"> AI</span>, and 
              <span className="text-secondary font-medium"> Cloud</span> technologies.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {["React", "Node.js", "Python", "Web3", "AI/ML"].map((tech, index) => <div key={tech} className="px-4 py-2 bg-muted/50 backdrop-blur-sm rounded-full text-sm font-medium border border-border/50 hover:scale-105 transition-transform cursor-default" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  {tech}
                </div>)}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection("projects")} className="bg-gradient-primary hover:opacity-90 transition-all duration-300 hover-lift group px-8 py-4 text-lg">
                <Code className="mr-2 h-5 w-5" />
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="hover-lift px-8 py-4 text-lg border-2 hover:bg-muted/50">
                <Zap className="mr-2 h-5 w-5" />
                Let's Talk
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for Hire</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>CSE-AIML Final Year</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Remote Friendly</span>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              {/* Main Profile Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Gradient Ring */}
                <div className="absolute inset-0 bg-gradient-primary rounded-full p-1 hover-glow transition-all duration-500 hover:scale-105 animate-float">
                  <div className="w-full h-full rounded-full bg-background p-3">
                    <img src="/profile-picture-new.jpg" alt="Arghya Ghosh - Full-Stack Architect" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center animate-float shadow-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center animate-float shadow-lg" style={{
                animationDelay: '2s'
              }}>
                  <Zap className="w-5 h-5 text-white" />
                </div>
                
                <div className="absolute top-1/2 -left-8 w-8 h-8 bg-accent rounded-full animate-float shadow-lg" style={{
                animationDelay: '4s'
              }}></div>
                
                <div className="absolute top-1/4 -right-4 w-6 h-6 bg-secondary rounded-full animate-float shadow-lg" style={{
                animationDelay: '1s'
              }}></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-8 left-8 glass-card p-3 rounded-xl animate-float hover:scale-105 transition-transform cursor-default" style={{
              animationDelay: '3s'
            }}>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium">Available</span>
                </div>
              </div>

              <div className="absolute -bottom-4 right-8 glass-card p-3 rounded-xl animate-float hover:scale-105 transition-transform cursor-default" style={{
              animationDelay: '5s'
            }}>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="font-medium">Top Rated</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>;
}