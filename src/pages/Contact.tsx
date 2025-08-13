import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock,
  Send,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your interest. We'll contact you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      action: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email", 
      details: ["info@nclexindia.com", "admissions@nclexindia.com"],
      action: "Send us your queries anytime"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      title: "WhatsApp",
      details: ["+91 98765 43210"],
      action: "Quick support via WhatsApp"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      details: ["Pune, Maharashtra", "Multiple Centers Available"],
      action: "Visit our coaching centers"
    }
  ];

  const faqs = [
    {
      question: "What is the duration of your NCLEX courses?",
      answer: "Our courses range from 1-4 months depending on the program you choose. We offer intensive crash courses and comprehensive preparation programs."
    },
    {
      question: "Do you provide study materials?",
      answer: "Yes, we provide comprehensive study materials including practice questions, mock tests, and reference materials as part of our course package."
    },
    {
      question: "What is your success rate?",
      answer: "We maintain an 85% first-attempt pass rate for our students, which is significantly higher than the national average."
    },
    {
      question: "Do you offer online classes?",
      answer: "Yes, we offer both live online classes and recorded sessions for maximum flexibility. You can choose the mode that suits your schedule."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-trust-light to-background py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch With Us
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Ready to start your NCLEX journey? Contact our expert team for personalized guidance 
            and course recommendations
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="mt-2"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="mt-2"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-foreground">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="mt-2"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-foreground">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your NCLEX goals and any specific questions..."
                        className="mt-2 min-h-[120px]"
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-trust-light rounded-lg p-3 flex-shrink-0">
                            {info.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              {info.title}
                            </h3>
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground mb-1">
                                {detail}
                              </p>
                            ))}
                            <p className="text-sm text-primary font-medium mt-2">
                              {info.action}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick WhatsApp Contact */}
              <Card className="border-success border-2 bg-success/5">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-12 w-12 text-success mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Need Immediate Help?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Chat with our counselors on WhatsApp for instant support
                  </p>
                  <Button asChild size="lg" className="bg-success hover:bg-success/90 text-white">
                    <a 
                      href="https://wa.me/919876543210?text=Hi! I'm interested in NCLEX coaching. Please provide more details." 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Chat on WhatsApp
                      <MessageCircle className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our NCLEX coaching programs
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Business Hours
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Counseling Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Sunday: 10:00 AM - 4:00 PM</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Class Timings</h3>
                  <p className="text-muted-foreground">Morning Batch: 9:00 AM - 12:00 PM</p>
                  <p className="text-muted-foreground">Evening Batch: 6:00 PM - 9:00 PM</p>
                  <p className="text-muted-foreground">Weekend Batch: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;