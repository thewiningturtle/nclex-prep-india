import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Video, 
  Users, 
  BookOpen, 
  CheckCircle,
  Clock,
  Target,
  Globe,
  MessageCircle,
  ArrowRight,
  Star,
  Award,
  FileText
} from "lucide-react";

const Courses = () => {
  const mainFeatures = [
    {
      icon: <Video className="h-8 w-8 text-primary" />,
      title: "Live & Recorded Classes",
      description: "Interactive live sessions with instant doubt clearing plus recorded classes for flexible learning",
      highlights: ["Real-time interaction", "Session recordings", "Flexible timing", "Doubt clearing"]
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Real NCLEX-Style Questions",
      description: "Thousands of practice questions that mirror the actual NCLEX exam format and difficulty",
      highlights: ["Latest question bank", "Adaptive testing", "Detailed explanations", "Performance tracking"]
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Step-by-Step Study Plan",
      description: "Structured curriculum designed to cover all NCLEX topics systematically",
      highlights: ["Phased learning", "Topic mastery", "Progress tracking", "Personalized pace"]
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "U.S. Licensing Guidance",
      description: "Complete support for nursing license applications and credential evaluation",
      highlights: ["Document guidance", "Application support", "Credential evaluation", "State-specific help"]
    }
  ];

  const courses = [
    {
      title: "NCLEX-RN Complete Program",
      duration: "3-4 Months",
      mode: "Live + Recorded",
      price: "₹25,000",
      popular: true,
      features: [
        "Comprehensive RN curriculum coverage",
        "300+ hours of live classes",
        "5000+ practice questions",
        "Mock exams and assessments",
        "Personal study coordinator",
        "US licensing guidance included"
      ]
    },
    {
      title: "NCLEX-PN Preparation",
      duration: "2-3 Months", 
      mode: "Live + Recorded",
      price: "₹18,000",
      popular: false,
      features: [
        "Complete PN exam preparation",
        "200+ hours of structured classes",
        "3000+ targeted practice questions",
        "Weekly mock tests",
        "Career guidance sessions",
        "Application support included"
      ]
    },
    {
      title: "Crash Course (RN/PN)",
      duration: "1 Month",
      mode: "Intensive Live",
      price: "₹15,000",
      popular: false,
      features: [
        "Fast-track preparation program",
        "100+ hours intensive classes",
        "2000+ focused practice questions",
        "Daily mock assessments",
        "Last-minute exam strategies",
        "Emergency doubt clearing sessions"
      ]
    }
  ];

  const futureAddons = [
    {
      icon: <MessageCircle className="h-6 w-6 text-accent" />,
      title: "IELTS/OET Preparation",
      description: "English proficiency test preparation for immigration requirements",
      status: "Coming Soon"
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Interview Preparation",
      description: "Mock interviews and coaching for nursing job applications",
      status: "Coming Soon"
    },
    {
      icon: <FileText className="h-6 w-6 text-accent" />,
      title: "Resume & Portfolio Building",
      description: "Professional guidance for creating compelling nursing portfolios",
      status: "Coming Soon"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trust-light to-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            NCLEX Preparation Courses
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Comprehensive coaching programs designed to help you pass NCLEX on your first attempt 
            with confidence and expertise
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Makes Our Courses Special?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven methodology combines expert instruction with practical application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="bg-trust-light rounded-lg p-3 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {feature.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Plans */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible programs designed to fit your schedule and learning preferences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className={`relative p-8 border-0 shadow-lg hover:shadow-xl transition-shadow ${course.popular ? 'ring-2 ring-primary' : ''}`}>
                {course.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {course.title}
                    </h3>
                    <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Video className="h-4 w-4" />
                        <span>{course.mode}</span>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-primary mb-6">
                      {course.price}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className="w-full" size="lg" variant={course.popular ? "default" : "outline"}>
                    <Link to="/contact">
                      Enroll Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Add-ons */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Future Add-on Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're expanding our services to provide complete support for your nursing career abroad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureAddons.map((addon, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg text-center opacity-75">
                <CardContent className="p-0">
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {addon.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {addon.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {addon.description}
                  </p>
                  <Badge variant="secondary" className="bg-accent/20 text-accent">
                    {addon.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your NCLEX Success Journey Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our proven program and take the first step towards your international nursing career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-6 text-lg">
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                WhatsApp for Details
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;