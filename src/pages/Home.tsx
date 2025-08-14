import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Users, 
  BookOpen, 
  Globe, 
  Star,
  ArrowRight,
  Target,
  Award,
  Clock
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "100% NCLEX Syllabus Coverage",
      description: "Complete curriculum coverage ensuring no topic is left behind"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Experienced Nursing Faculty",
      description: "Learn from qualified and experienced nursing professionals"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Flexible Batch Timings",
      description: "Online & offline classes to fit your schedule"
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Critical Thinking & Exam Strategy",
      description: "Focus on developing analytical skills and test-taking strategies"
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Special Attention for All",
      description: "Dedicated support for first-time and repeat test-takers"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "RN, California",
      content: "Thanks to NCLEX India, I cleared my exam in the first attempt! The faculty's guidance was exceptional and the practice questions were exactly like the real exam.",
      rating: 5
    },
    {
      name: "Rahul Patel", 
      role: "RN, Toronto",
      content: "The structured approach and personalized attention helped me understand complex concepts easily. Now I'm working as an RN in Canada!",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      role: "LPN, Texas", 
      content: "From study plan to licensing guidance, everything was perfect. The recorded classes were a lifesaver for my preparation.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Students Trained" },
    { number: "85%", label: "First Attempt Pass Rate" },
    { number: "3+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trust-light to-background py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Ace Your NCLEX —{" "}
              <span className="text-primary">Start Your Journey</span>{" "}
              to the U.S. or Canada Today
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Join India's most trusted NCLEX coaching program. Expert faculty, proven methods, 
              and comprehensive support to help you achieve your dream of nursing abroad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8 py-6 text-lg">
                <Link to="/contact">
                  Join Our Classes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg">
                <Link to="/courses">
                  View Courses
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Offer Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              We Offer
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-trust-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  NCLEX-RN (Registered Nurse) Coaching
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive preparation for Registered Nurse licensure exam
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-trust-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  NCLEX-PN (Practical Nurse) Coaching
                </h3>
                <p className="text-muted-foreground">
                  Specialized training for Practical Nurse certification
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course & Syllabus Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Course & Syllabus
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      Duration
                    </h3>
                    <p className="text-lg text-muted-foreground">2 Months</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Globe className="h-5 w-5 text-primary mr-2" />
                      Mode
                    </h3>
                    <p className="text-lg text-muted-foreground">Classroom in Magarpatta City, Pune</p>
                    <p className="text-lg text-muted-foreground">Live and Online classes</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                    <BookOpen className="h-5 w-5 text-primary mr-2" />
                    Syllabus Includes
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mt-1 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">Safe & Effective Care Environment</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mt-1 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">Health Promotion & Maintenance</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mt-1 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">Psychosocial Integrity</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mt-1 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">Physiological Integrity</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mt-1 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">Pharmacology & Drug Administration</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mt-1 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">Priority & Delegation Questions</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success mt-1 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">Practice Exams & Time Management Skills</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive NCLEX preparation with personalized attention and proven results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-trust-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from our successful students now working abroad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
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
            Ready to Start Your NCLEX Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of successful nurses who achieved their dreams with our expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-6 text-lg">
              <Link to="/contact">
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;