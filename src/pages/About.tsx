import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Clock, 
  Users, 
  CheckCircle,
  Globe,
  Target,
  ArrowRight
} from "lucide-react";

const About = () => {
  const nclexTypes = [
    {
      title: "NCLEX-RN (Registered Nurse)",
      description: "For those seeking to become licensed registered nurses",
      features: [
        "Required for RN licensure in US and Canada",
        "Covers comprehensive nursing knowledge",
        "Higher scope of practice and responsibilities",
        "Better career opportunities and salary"
      ]
    },
    {
      title: "NCLEX-PN (Practical Nurse)", 
      description: "For licensed practical/vocational nurse certification",
      features: [
        "Entry-level nursing examination",
        "Faster pathway to nursing career",
        "Foundation for advancing to RN",
        "Immediate employment opportunities"
      ]
    }
  ];

  const examFormat = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Adaptive Testing",
      description: "Computer adaptive test that adjusts difficulty based on your responses"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Question Range",
      description: "75-145 questions for RN, 85-150 for PN with minimum time requirements"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Content Areas",
      description: "Safe & effective care, health promotion, psychosocial integrity, physiological integrity"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Pass/Fail Decision",
      description: "Results based on ability level relative to passing standard, not percentage correct"
    }
  ];

  const whyImportant = [
    "Gateway to nursing practice in US and Canada",
    "Validates competency and knowledge standards", 
    "Required for state/provincial licensing",
    "Opens doors to international career opportunities",
    "Ensures patient safety through standardized testing",
    "Recognized globally as nursing excellence benchmark"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trust-light to-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Understanding the NCLEX Examination
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Your comprehensive guide to the National Council Licensure Examination 
            for nurses seeking to practice in the United States and Canada
          </p>
        </div>
      </section>

      {/* What is NCLEX */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What is NCLEX?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The National Council Licensure Examination (NCLEX) is a standardized exam 
                that every nursing graduate must pass to obtain a nursing license in the 
                United States and Canada.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Developed by the National Council of State Boards of Nursing (NCSBN), 
                the NCLEX ensures that entry-level nurses have the knowledge, skills, 
                and abilities necessary to perform safely and effectively.
              </p>
              <Button asChild size="lg">
                <Link to="/courses">
                  Start Your Preparation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="bg-trust-light rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Why is NCLEX Important?</h3>
              <ul className="space-y-3">
                {whyImportant.map((reason, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NCLEX Types */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Types of NCLEX Examinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the right examination path based on your nursing education and career goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nclexTypes.map((type, index) => (
              <Card key={index} className="p-8 border-0 shadow-lg h-full">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <ul className="space-y-3">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Format */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              NCLEX Exam Format & Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding the exam format is crucial for effective preparation and success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {examFormat.map((item, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg h-full">
                <CardContent className="p-0">
                  <div className="bg-trust-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
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
            Ready to Conquer the NCLEX?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get expert guidance and structured preparation to pass your NCLEX exam with confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-6 text-lg">
              <Link to="/courses">
                Explore Our Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">
                Get Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;