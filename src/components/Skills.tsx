import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Server, Cpu } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 },
      ],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Frontend",
      icon: Globe,
      skills: [
        { name: "React.js", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Responsive Design", level: 90 },
      ],
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "API Development", level: 85 },
        { name: "Database Design", level: 75 },
      ],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Specializations",
      icon: Cpu,
      skills: [
        { name: "Full-Stack Development", level: 88 },
        { name: "Scalable Systems", level: 80 },
        { name: "Web3", level: 70 },
        { name: "AI/ML", level: 75 },
      ],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    }
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning modern web technologies and emerging fields
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="glass-card hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git", "Docker", "AWS", "Firebase", "MongoDB", "PostgreSQL",
              "REST APIs", "GraphQL", "Testing", "CI/CD", "Agile", "Linux"
            ].map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:scale-105 transition-transform cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}