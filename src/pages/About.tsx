import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter, MapPin, Calendar, Award, Users, Target, ArrowLeft, Code } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" data-id="b57d9y2ac" data-path="src/pages/About.tsx">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/company-logo.png" alt="Company Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                SSWebTech
              </span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              {/* Removed Services, Industries, and Contact links */}
            </nav>
            <Link to="#" onClick={handleGoBack}>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Back
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white" data-id="7g3er0epr" data-path="src/pages/About.tsx">
        <div className="max-w-7xl mx-auto text-center" data-id="m16rlt5iv" data-path="src/pages/About.tsx">
          <h1 className="text-5xl font-bold mb-6" data-id="mhy5kgtxz" data-path="src/pages/About.tsx">
            About Us
          </h1>
          <p className="text-xl mb-8" data-id="8j78p099x" data-path="src/pages/About.tsx">
            We are committed to innovation and excellence, driving forward with a passion for creating impactful solutions.
          </p>
          <Button variant="default" className="mt-4 bg-white text-indigo-500 hover:bg-indigo-100 transition duration-300" data-id="nr9gbhxf2" data-path="src/pages/About.tsx">
            Learn More
          </Button>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" data-id="q2cs6q74x" data-path="src/pages/About.tsx">
        <div className="max-w-7xl mx-auto" data-id="8p079bgik" data-path="src/pages/About.tsx">
          <div className="text-center mb-16" data-id="mjdl1ii0u" data-path="src/pages/About.tsx">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" data-id="e6tww2pa9" data-path="src/pages/About.tsx">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="gbkhsyz3w" data-path="src/pages/About.tsx">
              Experienced leaders with a proven track record of success and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12" data-id="tvk94tkd7" data-path="src/pages/About.tsx">
            {/* Founder Section */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm" data-id="vhdtzzg8k" data-path="src/pages/About.tsx">
              <CardHeader className="text-center pb-4" data-id="aoebja20c" data-path="src/pages/About.tsx">
                <div className="w-32 h-32 mx-auto mb-6 relative" data-id="xi339jyvq" data-path="src/pages/About.tsx">
                  <img
                    src="/owner-image.jpg"
                    alt="Founder"
                    className="w-full h-full rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300" data-id="pht1e2bmt" data-path="src/pages/About.tsx" />

                  <div className="absolute inset-0 rounded-full group-hover:opacity-0 transition-opacity duration-300" data-id="p4slaobns" data-path="src/pages/About.tsx"></div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2" data-id="41vcuf4z8" data-path="src/pages/About.tsx">
                  YARRU SASIDHAR ROYAL
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-green-600 mb-2" data-id="e9xxej1ax" data-path="src/pages/About.tsx">
                  Founder & CEO
                </CardDescription>
                <div className="flex items-center justify-center text-gray-500 text-sm mb-4" data-id="ig7g4pq59" data-path="src/pages/About.tsx">
                  <MapPin className="w-4 h-4 mr-1" data-id="txvcvwdb8" data-path="src/pages/About.tsx" />
                  Location: Rayachoty
                </div>
                 </CardHeader>
              
              <CardContent className="space-y-6" data-id="fcycsb0ts" data-path="src/pages/About.tsx">
                <div className="space-y-4" data-id="f9fkka68t" data-path="src/pages/About.tsx">
                  <div className="flex items-center text-sm text-gray-600" data-id="s48u6l2se" data-path="src/pages/About.tsx">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" data-id="fxzqe3kbh" data-path="src/pages/About.tsx" />
                    <span data-id="rju1a8a4j" data-path="src/pages/About.tsx">Founded the company in 2025</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed" data-id="m902gatih" data-path="src/pages/About.tsx">
                  YARRU SASIDHAR ROYAL is a visionary entrepreneur with a passion for transforming industries through 
                  innovative technology solutions. With his extensive background in software engineering 
                  and business strategy, he has successfully led multiple startups from concept to 
                  successful exits.
                </p>



                <div className="flex flex-wrap gap-2" data-id="erbk13o03" data-path="src/pages/About.tsx">
                  <Badge variant="outline" data-id="1n7908wc1" data-path="src/pages/About.tsx">Strategic Leadership</Badge>
                  <Badge variant="outline" data-id="6kutvouto" data-path="src/pages/About.tsx">Product Innovation</Badge>
                  <Badge variant="outline" data-id="uy6e7x2bb" data-path="src/pages/About.tsx">Team Building</Badge>
                </div>

                <div className="flex justify-center space-x-4 pt-4 border-t" data-id="mgvr91lfe" data-path="src/pages/About.tsx">
                  <a href="https://www.linkedin.com/in/yarru-sasidhar-royal/" target="" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" data-id="p5iiejrvr" data-path="src/pages/About.tsx">
                      <Linkedin className="w-4 h-4 mr-2" data-id="2mswfbniy" data-path="src/pages/About.tsx" />
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Director Section */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm" data-id="x2s1d9v8i" data-path="src/pages/About.tsx">
              <CardHeader className="text-center pb-4" data-id="c0ygyhocv" data-path="src/pages/About.tsx">
                <div className="w-32 h-32 mx-auto mb-6 relative" data-id="l9ujw8mta" data-path="src/pages/About.tsx">
                  <img
                    src="/director-image.png"
                    alt="Director"
                    className="w-full h-full rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300" data-id="i5i23exvt" data-path="src/pages/About.tsx" />

                  <div className="absolute inset-0 rounded-full group-hover:opacity-0 transition-opacity duration-300" data-id="qw49gi8zm" data-path="src/pages/About.tsx"></div>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2" data-id="a7kdrvz5b" data-path="src/pages/About.tsx">
                  YARRU RAJASEKHAR
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-green-600 mb-2" data-id="zzz3db6di" data-path="src/pages/About.tsx">
                Manager
                </CardDescription>
                <div className="flex items-center justify-center text-gray-500 text-sm mb-4" data-id="ig7g4pq59" data-path="src/pages/About.tsx">
                  <MapPin className="w-4 h-4 mr-1" data-id="txvcvwdb8" data-path="src/pages/About.tsx" />
                  Location: Rayachoty
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6" data-id="tnawesap3" data-path="src/pages/About.tsx">
                <div className="space-y-4" data-id="qq5fqwnb3" data-path="src/pages/About.tsx">
                  <div className="flex items-center text-sm text-gray-600" data-id="itqt9eb5c" data-path="src/pages/About.tsx">
                    <Calendar className="w-4 h-4 mr-2 text-green-500" data-id="ufpbec65g" data-path="src/pages/About.tsx" />
                    <span data-id="injbkntdq" data-path="src/pages/About.tsx">Joined as Manager in 2025</span>
                  </div>
                  
                </div>

                <p className="text-gray-700 leading-relaxed" data-id="czyxw7cov" data-path="src/pages/About.tsx">
                As Manager of SSWebTech, he provides strategic guidance and operational oversight.
He supports key decisions like budgeting and planning with deep responsibility.
His mentorship brings financial insight and trusted support to the team.
With his experience, he strengthens our foundation and drives steady growth.

                </p>

               

                <div className="flex flex-wrap gap-2" data-id="mjnlu8l11" data-path="src/pages/About.tsx">
                  <Badge variant="outline" data-id="5qcpe016a" data-path="src/pages/About.tsx">Technical Architecture</Badge>
                  <Badge variant="outline" data-id="4hp4wdvwz" data-path="src/pages/About.tsx">Operations Management</Badge>
                  <Badge variant="outline" data-id="pg99crmwo" data-path="src/pages/About.tsx">Global Strategy</Badge>
                </div>

                <br />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50" data-id="ztmo3fvvf" data-path="src/pages/About.tsx">
        <div className="max-w-4xl mx-auto text-center" data-id="edo3sokkh" data-path="src/pages/About.tsx">
          <h2 className="text-3xl font-bold text-gray-900 mb-8" data-id="fzc4d9bgf" data-path="src/pages/About.tsx">Our Shared Vision</h2>
          <p className="text-lg text-gray-600 mb-12" data-id="l5vsd7z5r" data-path="src/pages/About.tsx">
            Under their leadership, our company continues to push boundaries and create meaningful 
            impact in the technology industry. Together, YARRU SASIDHAR ROYAL and YARRU RAJASEKHAR have built a culture of 
            innovation, excellence, and continuous growth that drives everything we do.
          </p>
          <div className="grid md:grid-cols-3 gap-8" data-id="5imea5us1" data-path="src/pages/About.tsx">
            <div className="text-center" data-id="q73urwg83" data-path="src/pages/About.tsx">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center" data-id="bpe1bh4cd" data-path="src/pages/About.tsx">
                <Target className="w-8 h-8 text-white" data-id="db942xq52" data-path="src/pages/About.tsx" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2" data-id="pv5k8nwds" data-path="src/pages/About.tsx">Innovation First</h3>
              <p className="text-gray-600" data-id="s9e2kpsq6" data-path="src/pages/About.tsx">Constantly pushing the boundaries of what's possible</p>
            </div>
            <div className="text-center" data-id="y23fbtlhj" data-path="src/pages/About.tsx">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center" data-id="q1bzmnnfw" data-path="src/pages/About.tsx">
                <Users className="w-8 h-8 text-white" data-id="npq1hmibq" data-path="src/pages/About.tsx" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2" data-id="c76jmbrrf" data-path="src/pages/About.tsx">People Focused</h3>
              <p className="text-gray-600" data-id="0yv1jx63h" data-path="src/pages/About.tsx">Building strong teams and lasting relationships</p>
            </div>
            <div className="text-center" data-id="128skkbna" data-path="src/pages/About.tsx">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center" data-id="7muwt823s" data-path="src/pages/About.tsx">
                <Award className="w-8 h-8 text-white" data-id="lzzleoyk6" data-path="src/pages/About.tsx" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2" data-id="djy57f8pt" data-path="src/pages/About.tsx">Excellence Driven</h3>
              <p className="text-gray-600" data-id="cmmrofos2" data-path="src/pages/About.tsx">Delivering exceptional results in everything we do</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600" data-id="4hwgopidu" data-path="src/pages/About.tsx">
        <div className="max-w-4xl mx-auto text-center text-white" data-id="dh0hdm3kr" data-path="src/pages/About.tsx">
          <h2 className="text-3xl font-bold mb-4" data-id="r56qoljwx" data-path="src/pages/About.tsx">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 opacity-90" data-id="ajv788ojj" data-path="src/pages/About.tsx">
            Let's discuss how our experienced team can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-id="e9fch5ym7" data-path="src/pages/About.tsx">
            <Link to="/" data-id="u742gi2bd" data-path="src/pages/About.tsx">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3" data-id="bqq7w0gg1" data-path="src/pages/About.tsx">
                Back to Home
              </Button>
            </Link>
            
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <p className="text-center">&copy; 2025 SSWebTech. All rights reserved. Built with excellence and innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;