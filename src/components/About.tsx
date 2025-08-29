import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, GraduationCap, Briefcase, Award } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 animated-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a strong foundation in Computer Science, 
            focused on building scalable solutions for real-world challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  Passionate about mastering the core of Computer Science to solve real-world problems
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  Full Stack Architect exploring Web3, AI, and Cloud technologies
                </p>
                <p className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  CSE-AIML focus with hands-on experience in modern web development
                </p>
              </div>
            </div>

            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          {/* Right Content - Timeline */}
          <div className="space-y-6">
            {/* Education */}
            <Card className="glass-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Education</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium">B.Tech, CSE (AIML) - Final Year</p>
                        <p className="text-sm text-muted-foreground">Brainware University</p>
                      </div>
                      <div>
                        <p className="font-medium">12th (CBSE)</p>
                        <p className="text-sm text-muted-foreground">Burdwan Model School</p>
                      </div>
                      <div>
                        <p className="font-medium">10th (ICSE)</p>
                        <p className="text-sm text-muted-foreground">St. Joseph's English Medium School, Katwa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="glass-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Experience</h4>
                    <div>
                      <p className="font-medium">Web Developer Intern</p>
                      <p className="text-sm text-muted-foreground mb-2">InternPe</p>
                      <p className="text-sm text-muted-foreground">
                        Assisted in web development tasks, contributed to front-end/back-end features 
                        and responsive UI design. Gained hands-on experience with modern development practices.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="glass-card hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Web3", "AI/ML", "Cloud Computing", "Full-Stack Development", "Scalable Systems"].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-muted rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}