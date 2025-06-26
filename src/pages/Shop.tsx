
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, Users, Award } from "lucide-react";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Alpha Block Basic",
      price: "$199",
      description: "Perfect for beginners starting their programming journey. Includes essential building blocks and comprehensive learning materials.",
      features: ["20+ Programming Blocks", "Getting Started Guide", "Online Tutorials", "Community Access"],
      badge: "Beginner Friendly",
      rating: 4.8,
      users: "10K+"
    },
    {
      id: 2,
      name: "Alpha Block Pro",
      price: "$349",
      description: "Advanced programming blocks with enhanced features for complex project development and professional use.",
      features: ["50+ Advanced Blocks", "Project Templates", "Advanced Documentation", "Priority Support"],
      badge: "Most Popular",
      rating: 4.9,
      users: "25K+"
    },
    {
      id: 3,
      name: "RDX Pro Kit",
      price: "$599",
      description: "Professional development kit designed for advanced users, educators, and institutions requiring comprehensive tools.",
      features: ["Complete Development Suite", "Educator Resources", "Enterprise Support", "Custom Integrations"],
      badge: "Professional",
      rating: 4.9,
      users: "5K+"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our innovative educational tools and development kits designed to enhance learning and creativity.
          </p>
          <div className="bg-[#ff4822] text-white px-6 py-3 rounded-full inline-block">
            <span className="font-semibold">🛒 Visit our full shop at shop.secondbrains.tech</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#ff4822] relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-[#ff4822] text-white">
                  {product.badge}
                </Badge>
              </div>
              
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-gradient-to-br from-[#ff4822] to-[#ff6b47] rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">
                    {product.name.includes('Basic') ? 'αB' : 
                     product.name.includes('Pro') && product.name.includes('Alpha') ? 'αB Pro' : 'RDX'}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-[#ff4822] text-xl">{product.name}</CardTitle>
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span>{product.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{product.users} users</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-lg mb-6">
                  {product.description}
                </CardDescription>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-[#ff4822]" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-[#ff4822] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-[#ff4822] hover:bg-[#e63f1f] text-white py-3">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View in Shop
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Shop Link Section */}
        <section className="bg-gradient-to-r from-[#ff4822] to-[#ff6b47] rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Building?</h2>
          <p className="text-xl mb-6 opacity-90">
            Visit our complete online shop for detailed product information, customer reviews, and secure checkout.
          </p>
          <Button size="lg" className="bg-white text-[#ff4822] hover:bg-gray-100 text-lg px-8 py-3">
            <ExternalLink className="w-5 h-5 mr-2" />
            Visit shop.secondbrains.tech
          </Button>
        </section>

        {/* Why Choose Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Second Brains?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ff4822] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎓</span>
                </div>
                <CardTitle className="text-[#ff4822]">Educational Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Designed by educators for educators, our products are backed by pedagogical research and classroom testing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ff4822] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <CardTitle className="text-[#ff4822]">Quality & Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Built to last with premium materials and rigorous testing, ensuring years of productive learning.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ff4822] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💝</span>
                </div>
                <CardTitle className="text-[#ff4822]">Community Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Join thousands of learners worldwide with access to tutorials, forums, and dedicated customer support.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Shop;
