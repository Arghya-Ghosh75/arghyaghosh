import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter } from "lucide-react"
import extensionImage from "../assets/images/extension.jpeg";
import ecomImage from "../assets/images/EcomImage.jpeg";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      title: "E-Commerce Website",
      description: "Full-stack storefront with product listings, cart/checkout functionality, and responsive UI design. Features user authentication, payment integration, and admin dashboard.",
      image: ecomImage,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web",
      liveDemo: "https://shopittt.netlify.app/",
      github: "https://github.com/Arghya-Ghosh75/Shop-it.git",
      featured: true
    },
    {
      title: "Browser Extension",
      description: "A custom-built browser extension designed to enhance productivity and streamline everyday browsing tasks, user subscriptions, and comment system.",
      image: extensionImage,
      technologies: ["React", "Express", "MySQL", "AWS"],
      category: "Web",
      liveDemo: "https://aurabrowserextension.netlify.app",
      github: "https://github.com/Arghya-Ghosh75/Aura.git",
      featured: true
    },
    {
      title: "Connect 4 Game",
      description: "Interactive Connect 4 game with clean UI, game logic implementation, and reset/undo functionality. Features AI opponent and multiplayer support.",
      image: "/api/placeholder/400/250",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS"],
      category: "Games",
      liveDemo: "#",
      github: "#",
      featured: false
    },
    {
      title: "To-Do List Application",
      description: "CRUD task management application with local storage and simple backend integration. Features task categories, deadlines, and progress tracking.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "LocalStorage"],
      category: "Utilities",
      liveDemo: "#",
      github: "#",
      featured: false
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "Classic Tic-Tac-Toe game with minimax algorithm implementation, responsive grid layout, and score tracking system.",
      image: "/api/placeholder/400/250",
      technologies: ["JavaScript", "CSS Grid", "Algorithm"],
      category: "Games",
      liveDemo: "#",
      github: "#",
      featured: false
    }
  ]

  const categories = ["All", "Web", "Games", "Utilities"]

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 animated-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development work spanning web applications, games, and utility tools
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`${
                activeFilter === category 
                  ? "bg-gradient-primary" 
                  : "hover:bg-muted"
              } transition-all duration-300`}
            >
              <Filter className="mr-2 h-4 w-4" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className={`glass-card hover-lift overflow-hidden group ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
<div className="relative overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-48 object-cover"
  />
  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
</div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge className="bg-gradient-primary text-white">Featured</Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
               <div className="flex gap-3 pt-2">

  <a 
    href={project.liveDemo} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button size="sm" className="w-full bg-gradient-primary hover:opacity-90">
      <ExternalLink className="mr-2 h-4 w-4" />
      Live Demo
    </Button>
  </a>

  <a 
    href={project.github} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex-1"
  >
    <Button size="sm" variant="outline" className="w-full">
      <Github className="mr-2 h-4 w-4" />
      Code
    </Button>
  </a>

</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover-lift">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}