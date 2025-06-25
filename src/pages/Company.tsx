
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Company = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <img
            className="h-24 w-auto mx-auto mb-8"
            src="/lovable-uploads/8164f5a5-9958-49cc-9ef4-eb6e0f663110.png"
            alt="Second Brains"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Second Brains
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about creating tools that amplify human intelligence and make learning an enjoyable adventure.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <Card className="border-2 border-[#ff4822] shadow-lg">
            <CardHeader className="bg-gradient-to-r from-[#ff4822] to-[#ff6b47] text-white">
              <CardTitle className="text-3xl text-center">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                To democratize access to innovative educational tools and development platforms, 
                empowering individuals and institutions to build, learn, and create with joy. 
                We believe that the best learning happens when it's engaging, interactive, and fun.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Philosophy Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ff4822] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🧠</span>
                </div>
                <CardTitle className="text-[#ff4822]">Enhance Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  We create tools that augment human cognitive abilities, helping people think more clearly and creatively.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ff4822] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🎮</span>
                </div>
                <CardTitle className="text-[#ff4822]">Make Learning Fun</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Learning should be enjoyable. We design experiences that engage users and make complex concepts accessible.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ff4822] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🚀</span>
                </div>
                <CardTitle className="text-[#ff4822]">Continuous Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  We constantly push boundaries, exploring new ways to make building and learning more effective and enjoyable.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Background Section */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Background</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Second Brains is a proud subsidiary of Alpha Bits, leveraging our parent company's expertise 
                in educational technology and innovative learning solutions. Founded with the vision of making 
                advanced learning tools accessible to everyone, we've grown from a small team of passionate 
                educators and technologists to a leading provider of educational development kits.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Established in October 2024 (Business Registration ID: 0318722409), SECOND BRAINS CO., LTD 
                is officially registered in Vietnam. Our journey began with a simple question: "How can we make 
                learning more engaging and effective?" This led us to develop our flagship products - the Alpha 
                Block series and RDX Pro Kit - which 
                have been adopted by educational institutions, hobbyists, and professionals worldwide.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we continue to innovate at the intersection of education and technology, always with 
                our core principle in mind: having fun while building and learning.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-[#ff4822] flex items-center">
                  <span className="mr-3 text-2xl">🎯</span>
                  Purpose-Driven Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Every product we create serves a clear educational purpose, designed to solve real learning challenges 
                  and enhance the educational experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-[#ff4822] flex items-center">
                  <span className="mr-3 text-2xl">🤝</span>
                  Community First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  We build for our community of learners, educators, and creators, always listening to feedback 
                  and evolving based on real needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-[#ff4822] flex items-center">
                  <span className="mr-3 text-2xl">🌟</span>
                  Quality Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  We're committed to delivering high-quality products that exceed expectations and provide 
                  lasting value to our users.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-[#ff4822] flex items-center">
                  <span className="mr-3 text-2xl">🌍</span>
                  Global Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  We believe education is a universal right and strive to make our tools accessible to learners 
                  around the world, regardless of their background.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Company;
