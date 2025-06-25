
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageSquare, Book, Search, Send, HelpCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const [supportForm, setSupportForm] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Support ticket submitted!",
      description: "We've received your request and will respond within 24 hours.",
    });
    setSupportForm({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: ""
    });
  };

  const faqs = [
    {
      question: "How do I get started with Alpha Block Basic?",
      answer: "Getting started is easy! Once you receive your Alpha Block Basic kit, follow the Quick Start Guide included in the package. You can also access our online tutorials at blog.secondbrains.tech for step-by-step instructions and video guides."
    },
    {
      question: "What's the difference between Alpha Block Basic and Pro?",
      answer: "Alpha Block Basic includes 20+ essential programming blocks perfect for beginners, while Alpha Block Pro includes 50+ advanced blocks with enhanced features for complex projects. Pro also includes priority support and advanced documentation."
    },
    {
      question: "Can I use RDX Pro Kit for educational institutions?",
      answer: "Absolutely! The RDX Pro Kit is specifically designed for educational institutions and comes with educator resources, bulk licensing options, and dedicated institutional support. Contact us for special educational pricing."
    },
    {
      question: "How do I access online tutorials and documentation?",
      answer: "All tutorials and documentation are available at blog.secondbrains.tech. You'll also receive access credentials with your product purchase for premium content and advanced tutorials."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day money-back guarantee on all products. If you're not completely satisfied, contact our support team for a full refund. Products must be returned in original condition."
    },
    {
      question: "Do you offer technical support for integration projects?",
      answer: "Yes! Our Pro and Enterprise customers receive priority technical support. We also offer consulting services for complex integration projects. Contact us to discuss your specific needs."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the help you need to make the most of your Second Brains products and learning experience.
          </p>
        </div>

        {/* Quick Actions */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-2 border-gray-100 hover:border-[#ff4822]">
              <CardHeader>
                <Book className="w-12 h-12 text-[#ff4822] mx-auto mb-4" />
                <CardTitle className="text-[#ff4822]">Knowledge Base</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg mb-4">
                  Browse our comprehensive documentation, tutorials, and guides.
                </CardDescription>
                <Button variant="outline" className="border-[#ff4822] text-[#ff4822] hover:bg-[#ff4822] hover:text-white">
                  Browse Docs
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-2 border-gray-100 hover:border-[#ff4822]">
              <CardHeader>
                <Search className="w-12 h-12 text-[#ff4822] mx-auto mb-4" />
                <CardTitle className="text-[#ff4822]">Search FAQs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg mb-4">
                  Find quick answers to commonly asked questions about our products.
                </CardDescription>
                <Button variant="outline" className="border-[#ff4822] text-[#ff4822] hover:bg-[#ff4822] hover:text-white">
                  View FAQs
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300 border-2 border-gray-100 hover:border-[#ff4822]">
              <CardHeader>
                <MessageSquare className="w-12 h-12 text-[#ff4822] mx-auto mb-4" />
                <CardTitle className="text-[#ff4822]">Contact Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg mb-4">
                  Submit a support ticket for personalized assistance from our team.
                </CardDescription>
                <Button className="bg-[#ff4822] hover:bg-[#e63f1f]">
                  Get Help
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-[#ff4822] mr-3" />
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find quick answers to the most common questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left hover:text-[#ff4822] transition-colors duration-200">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-lg leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Support Ticket Form */}
        <section>
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-[#ff4822] shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#ff4822] to-[#ff6b47] text-white">
                <CardTitle className="text-2xl text-center flex items-center justify-center">
                  <Send className="w-6 h-6 mr-2" />
                  Submit a Support Ticket
                </CardTitle>
                <CardDescription className="text-white/90 text-lg text-center">
                  Can't find what you're looking for? Our support team is here to help!
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
                        value={supportForm.name}
                        onChange={(e) => setSupportForm({...supportForm, name: e.target.value})}
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
                        value={supportForm.email}
                        onChange={(e) => setSupportForm({...supportForm, email: e.target.value})}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <Select value={supportForm.category} onValueChange={(value) => setSupportForm({...supportForm, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="product">Product Information</SelectItem>
                        <SelectItem value="billing">Billing & Orders</SelectItem>
                        <SelectItem value="educational">Educational Resources</SelectItem>
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
                      value={supportForm.subject}
                      onChange={(e) => setSupportForm({...supportForm, subject: e.target.value})}
                      placeholder="Brief description of your issue"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={supportForm.message}
                      onChange={(e) => setSupportForm({...supportForm, message: e.target.value})}
                      placeholder="Please provide detailed information about your issue or question..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#ff4822] hover:bg-[#e63f1f] text-lg py-3">
                    <Send className="w-5 h-5 mr-2" />
                    Submit Support Ticket
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600 text-sm text-center">
                    <strong>Response Time:</strong> We typically respond to support tickets within 24 hours during business days. 
                    Pro and Enterprise customers receive priority support with faster response times.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Support;
