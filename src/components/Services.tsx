import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Code, 
  Smartphone, 
  Server, 
  Cloud, 
  Zap, 
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react"

export function Services() {
  const services = [
    {
      title: "Full-Stack Development",
      description: "Professional, responsive websites and well-designed web pages at affordable prices.",
      icon: Code,
      features: [
        "Responsive Design",
        "Scalable Architecture", 
        "API Integration",
        "Performance Optimization",
        "SEO Optimization",
        "Cloud Deployment"
      ],
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20"
    },
    {
      title: "Web Application Development",
      description: "Custom web applications built with modern technologies and best practices.",
      icon: Smartphone,
      features: [
        "React/Next.js Development",
        "Progressive Web Apps",
        "Real-time Features",
        "Database Integration",
        "User Authentication",
        "Payment Integration"
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20"
    },
    {
      title: "Backend Solutions", 
      description: "Robust server-side solutions and API development for your applications.",
      icon: Server,
      features: [
        "RESTful API Development",
        "Database Design",
        "Server Configuration",
        "Security Implementation",
        "Performance Tuning",
        "Documentation"
      ],
      color: "text-accent",
      bgColor: "bg-accent/10", 
      borderColor: "border-accent/20"
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud deployment and DevOps practices for scalable applications.",
      icon: Cloud,
      features: [
        "AWS/Cloud Deployment",
        "CI/CD Pipelines",
        "Docker Containerization",
        "Monitoring & Logging",
        "Backup Solutions",
        "Scalability Planning"
      ],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From elegant UIs to robust backends—end-to-end web solutions that grow with your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`glass-card hover-lift border-2 ${service.borderColor} group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Zap className="h-8 w-8 text-primary" />
                <Shield className="h-8 w-8 text-secondary" />
                <Code className="h-8 w-8 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                Ready to Build Something <span className="bg-gradient-primary bg-clip-text text-transparent">Amazing?</span>
              </h3>
              
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                Let's discuss your project and create a solution that exceeds your expectations. 
                From concept to deployment, I'll guide you through every step.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <Badge variant="secondary">Fast Delivery</Badge>
                <Badge variant="secondary">Clean Code</Badge>
                <Badge variant="secondary">Responsive Design</Badge>
                <Badge variant="secondary">SEO Optimized</Badge>
                <Badge variant="secondary">24/7 Support</Badge>
              </div>

              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}