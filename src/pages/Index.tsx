
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Book, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#ff4822] to-[#ff6b47] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Building Tomorrow's
            <span className="block text-white/90">Second Brains</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Having fun while building and learning - discover innovative tools that enhance your thinking and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#ff4822] hover:bg-gray-100 text-lg px-8 py-3">
              <Link to="/shop">
                Explore Products <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#ff4822] text-lg px-8 py-3">
              <Link to="/company">
                Learn About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Second Brains, we believe learning should be engaging, building should be enjoyable, 
              and innovation should be accessible to everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ff4822] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="text-white" size={32} />
                </div>
                <CardTitle className="text-[#ff4822]">Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Continuous learning through hands-on experiences and innovative educational tools.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ff4822] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-2xl font-bold">⚡</div>
                </div>
                <CardTitle className="text-[#ff4822]">Build</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Creating powerful tools and systems that amplify human intelligence and creativity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ff4822] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-2xl font-bold">🎯</div>
                </div>
                <CardTitle className="text-[#ff4822]">Fun</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Making the journey of learning and building enjoyable, engaging, and rewarding.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Discover our innovative educational tools and development kits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100 hover:border-[#ff4822]">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-[#ff4822] to-[#ff6b47] rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">αB</div>
                </div>
                <CardTitle className="text-[#ff4822]">Alpha Block Basic</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg mb-4">
                  Essential building blocks for learning programming fundamentals and logical thinking.
                </CardDescription>
                <Button asChild className="w-full bg-[#ff4822] hover:bg-[#e63f1f]">
                  <Link to="/shop">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100 hover:border-[#ff4822]">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-[#ff4822] to-[#ff6b47] rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-white text-5xl font-bold">αB Pro</div>
                </div>
                <CardTitle className="text-[#ff4822]">Alpha Block Pro</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg mb-4">
                  Advanced programming blocks with enhanced features for complex project development.
                </CardDescription>
                <Button asChild className="w-full bg-[#ff4822] hover:bg-[#e63f1f]">
                  <Link to="/shop">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100 hover:border-[#ff4822]">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-[#ff4822] to-[#ff6b47] rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">RDX</div>
                </div>
                <CardTitle className="text-[#ff4822]">RDX Pro Kit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg mb-4">
                  Professional development kit for advanced users and educational institutions.
                </CardDescription>
                <Button asChild className="w-full bg-[#ff4822] hover:bg-[#e63f1f]">
                  <Link to="/shop">
                    Learn More <ArrowRight className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need Help or Have Questions?
            </h2>
            <p className="text-xl text-gray-600">
              We're here to support your learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <MessageSquare className="w-12 h-12 text-[#ff4822] mx-auto mb-4" />
                <CardTitle className="text-[#ff4822]">Get Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg mb-4">
                  Access our knowledge base, FAQs, and submit support tickets for technical assistance.
                </CardDescription>
                <Button asChild variant="outline" className="border-[#ff4822] text-[#ff4822] hover:bg-[#ff4822] hover:text-white">
                  <Link to="/support">
                    Visit Support Center
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Mail className="w-12 h-12 text-[#ff4822] mx-auto mb-4" />
                <CardTitle className="text-[#ff4822]">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg mb-4">
                  Have specific questions or want to learn more? Reach out to our team directly.
                </CardDescription>
                <Button asChild variant="outline" className="border-[#ff4822] text-[#ff4822] hover:bg-[#ff4822] hover:text-white">
                  <Link to="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
