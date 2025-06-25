
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ExternalLink, Mail, Book, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Blog = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our newsletter. You'll receive updates about new posts and products.",
      });
      setEmail("");
    }
  };

  const blogPosts = [
    {
      title: "Building Your First Second Brain: A Beginner's Guide",
      excerpt: "Learn the fundamentals of creating external memory systems that enhance your thinking and productivity.",
      date: "March 15, 2024",
      category: "Tutorial"
    },
    {
      title: "The Science Behind Effective Learning Tools",
      excerpt: "Exploring the cognitive research that informs our product design and educational philosophy.",
      date: "March 10, 2024",
      category: "Research"
    },
    {
      title: "Alpha Block Pro: Advanced Features Deep Dive",
      excerpt: "Discover the powerful capabilities of our professional development kit with practical examples.",
      date: "March 5, 2024",
      category: "Product Update"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog & Newsletter
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay updated with the latest insights, tutorials, and product updates from the Second Brains team.
          </p>
          <div className="bg-[#ff4822] text-white px-6 py-3 rounded-full inline-block">
            <span className="font-semibold">📖 Visit our full blog at blog.secondbrains.tech</span>
          </div>
        </div>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <Card className="border-2 border-[#ff4822] shadow-lg max-w-2xl mx-auto">
            <CardHeader className="bg-gradient-to-r from-[#ff4822] to-[#ff6b47] text-white text-center">
              <CardTitle className="text-2xl flex items-center justify-center">
                <Mail className="w-6 h-6 mr-2" />
                Subscribe to Our Newsletter
              </CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Get the latest articles, tutorials, and product updates delivered to your inbox
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleNewsletterSignup} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-lg py-3"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-[#ff4822] hover:bg-[#e63f1f] text-lg py-3">
                  Subscribe Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
              <p className="text-gray-600 text-sm mt-4 text-center">
                Join 5,000+ educators and learners. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Featured Blog Posts */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">
              Insights and tutorials from our team of educators and developers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100 hover:border-[#ff4822]">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#ff4822] font-semibold bg-[#ff4822]/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="text-[#ff4822] hover:text-[#e63f1f] transition-colors duration-200">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <Button variant="outline" className="border-[#ff4822] text-[#ff4822] hover:bg-[#ff4822] hover:text-white">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Blog Link Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-[#ff4822] to-[#ff6b47] text-white border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <Book className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <h2 className="text-3xl font-bold mb-4">Explore Our Full Blog</h2>
              <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
                Dive deeper into educational technology, programming tutorials, product guides, and insights from our community of learners.
              </p>
              <Button size="lg" className="bg-white text-[#ff4822] hover:bg-gray-100 text-lg px-8 py-3">
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit blog.secondbrains.tech
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Content Categories */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What You'll Find</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#ff4822] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">📚</span>
                </div>
                <CardTitle className="text-[#ff4822] text-lg">Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Step-by-step guides for using our products and learning new concepts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#ff4822] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🔬</span>
                </div>
                <CardTitle className="text-[#ff4822] text-lg">Research</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Educational research and insights that inform our product development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#ff4822] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">💡</span>
                </div>
                <CardTitle className="text-[#ff4822] text-lg">Tips & Tricks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Pro tips and advanced techniques for maximizing your learning experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-[#ff4822] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <CardTitle className="text-[#ff4822] text-lg">Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Latest product updates, new features, and company announcements.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
