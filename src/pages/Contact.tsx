
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, Building } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    inquiry: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent successfully!",
      description: "Thank you for contacting us. We'll get back to you within 1-2 business days.",
    });
    setContactForm({
      name: "",
      email: "",
      company: "",
      subject: "",
      inquiry: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our products or want to learn more about Second Brains? 
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="border-2 border-[#ff4822] shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#ff4822] to-[#ff6b47] text-white">
                <CardTitle className="text-2xl flex items-center">
                  <Send className="w-6 h-6 mr-2" />
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  Fill out the form below and we'll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization (Optional)
                    </label>
                    <Input
                      type="text"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                      placeholder="Your company or organization"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <Select value={contactForm.inquiry} onValueChange={(value) => setContactForm({...contactForm, inquiry: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="What can we help you with?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Information</SelectItem>
                        <SelectItem value="products">Product Questions</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        <SelectItem value="education">Educational Institution Inquiry</SelectItem>
                        <SelectItem value="press">Press & Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      type="text"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                      placeholder="Brief subject line"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      placeholder="Tell us more about how we can help you..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#ff4822] hover:bg-[#e63f1f] text-lg py-3">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Company Contact Details */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-[#ff4822] flex items-center">
                  <Building className="w-6 h-6 mr-2" />
                  Company Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#ff4822] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">SECOND BRAINS CO., LTD</p>
                    <p className="text-gray-600">
                      Ho Chi Minh City, Vietnam<br />
                      Business Registration ID: 0318722409<br />
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#ff4822] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">hello@secondbrains.tech</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#ff4822] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+84 868 000 317</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#ff4822] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Business Hours</p>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM (ICT)<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time Info */}
            <Card className="bg-gradient-to-r from-[#ff4822] to-[#ff6b47] text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Response Times</h3>
                <div className="space-y-2 text-white/90">
                  <p><strong>General Inquiries:</strong> 1-2 business days</p>
                  <p><strong>Product Support:</strong> Within 24 hours</p>
                  <p><strong>Partnership Inquiries:</strong> 2-3 business days</p>
                  <p><strong>Press & Media:</strong> Same day response</p>
                </div>
              </CardContent>
            </Card>

            {/* Additional Contact Options */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-[#ff4822]">Other Ways to Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-2">For Educational Institutions</p>
                  <p className="text-gray-600">
                    Special pricing and bulk orders available. Contact our education team at 
                    <span className="text-[#ff4822] font-medium"> education@secondbrains.tech</span>
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold text-gray-900 mb-2">For Press & Media</p>
                  <p className="text-gray-600">
                    Media inquiries and press kit requests: 
                    <span className="text-[#ff4822] font-medium"> press@secondbrains.tech</span>
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900 mb-2">For Partnerships</p>
                  <p className="text-gray-600">
                    Business development and partnership opportunities: 
                    <span className="text-[#ff4822] font-medium"> partnerships@secondbrains.tech</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
