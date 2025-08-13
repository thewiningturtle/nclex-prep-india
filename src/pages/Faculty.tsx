import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Award, 
  Users, 
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  BookOpen
} from "lucide-react";

const Faculty = () => {
  const qualifications = [
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "BSc Nursing & Above",
      description: "All our instructors hold Bachelor's degree in Nursing or higher qualifications"
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Clinical Experience",
      description: "Minimum 5+ years of hands-on nursing experience in hospitals and healthcare settings"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "NCLEX Expertise",
      description: "Specialized training in NCLEX curriculum and proven track record of student success"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Teaching Excellence",
      description: "Dedicated educators with passion for mentoring aspiring nurses"
    }
  ];

  const facultyMembers = [
    {
      name: "Dr. Priya Nair",
      qualification: "MSc Nursing, PhD (Nursing Education)",
      specialization: "Medical-Surgical Nursing & NCLEX-RN",
      experience: "8+ Years Teaching, 12+ Years Clinical",
      achievements: [
        "500+ successful NCLEX candidates",
        "Former Clinical Instructor at Apollo Hospital",
        "Published researcher in nursing education",
        "NCLEX expert reviewer"
      ],
      bio: "Dr. Priya brings extensive experience in both clinical practice and nursing education. Her innovative teaching methods and deep understanding of NCLEX requirements have helped hundreds of students achieve their dreams of practicing nursing abroad."
    },
    {
      name: "Prof. Rajesh Kumar",
      qualification: "MSc Nursing (Mental Health)",
      specialization: "Psychiatric Nursing & Patient Care",
      experience: "10+ Years Teaching, 15+ Years Clinical",
      achievements: [
        "300+ students guided to success",
        "Senior Nursing Officer at AIIMS",
        "Expert in psychosocial nursing concepts",
        "Curriculum development specialist"
      ],
      bio: "Prof. Rajesh specializes in making complex psychiatric and psychosocial nursing concepts simple and understandable. His real-world clinical insights help students tackle challenging NCLEX questions with confidence."
    },
    {
      name: "Ms. Sneha Sharma",
      qualification: "BSc Nursing, Certified NCLEX Trainer",
      specialization: "Pediatric Nursing & Fundamentals",
      experience: "6+ Years Teaching, 10+ Years Clinical",
      achievements: [
        "400+ successful NCLEX-PN students",
        "Pediatric ICU specialist",
        "International nursing conference speaker",
        "Student mentorship expert"
      ],
      bio: "Ms. Sneha's caring approach and detailed explanations make learning enjoyable. Her expertise in pediatric nursing and fundamental concepts provides students with a strong foundation for NCLEX success."
    }
  ];

  const teachingApproach = [
    "Interactive live sessions with real-time doubt clearing",
    "Case-based learning with clinical scenarios",
    "Regular assessments and personalized feedback",
    "One-on-one mentoring for struggling students",
    "Updated teaching methods aligned with latest NCLEX changes",
    "Continuous professional development and training"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trust-light to-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Expert Faculty
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Learn from experienced nursing professionals who are dedicated to your NCLEX success
          </p>
        </div>
      </section>

      {/* Faculty Qualifications */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Faculty Qualifications & Standards
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our instructors meet the highest standards of nursing education and clinical experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualifications.map((qual, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg h-full">
                <CardContent className="p-0">
                  <div className="bg-trust-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {qual.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {qual.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {qual.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Members */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Distinguished Instructors
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get to know the experts who will guide you through your NCLEX journey
            </p>
          </div>

          <div className="space-y-12">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    {/* Faculty Photo Placeholder */}
                    <div className="lg:col-span-1">
                      <div className="bg-trust-light rounded-lg p-8 text-center h-full flex flex-col justify-center">
                        <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                          <GraduationCap className="h-12 w-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {faculty.name}
                        </h3>
                        <p className="text-primary font-medium mb-2">
                          {faculty.qualification}
                        </p>
                        <Badge variant="secondary" className="mx-auto">
                          {faculty.specialization}
                        </Badge>
                      </div>
                    </div>

                    {/* Faculty Details */}
                    <div className="lg:col-span-2">
                      <div className="mb-6">
                        <div className="flex items-center space-x-2 mb-4">
                          <Clock className="h-5 w-5 text-primary" />
                          <span className="font-medium text-foreground">{faculty.experience}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {faculty.bio}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4">
                          Key Achievements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {faculty.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start space-x-3">
                              <Star className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Teaching Approach
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe in personalized, student-centered learning that combines theoretical knowledge 
                with practical application. Our faculty uses proven methodologies to ensure every student 
                succeeds in their NCLEX journey.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">
                  Meet Our Faculty
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="bg-trust-light rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">What Makes Us Different</h3>
              <ul className="space-y-4">
                {teachingApproach.map((approach, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{approach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Learn from the Best in the Industry
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our expert faculty is ready to guide you towards NCLEX success with personalized attention and proven methods
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-6 text-lg">
              <Link to="/contact">
                Schedule a Faculty Meeting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                Ask Questions on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;