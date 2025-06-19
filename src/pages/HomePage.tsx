import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Code, Globe, Users, Zap, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from "framer-motion";

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_0lljehp', 'template_a02fp4b', formData, 'TbMGfm4A1K9eEqXz7')
      .then((result) => {
        setSuccessMessage('Thank you! Your message has been sent successfully.Our team will get back to you as soon as possible.');
        setLoading(false);
      }, (error) => {
        console.error('Error sending email:', error);
        setSuccessMessage('Sorry, there was an error sending your message. Please try again later.');
        setLoading(false);
      });
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-gradient-to-br from-white to-gray-100 p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Get in Touch</h2>
        {successMessage ? (
          <p className="text-green-600 text-center mb-4">{successMessage}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <span className="absolute left-3 top-3 text-gray-400">
                <i className="fas fa-user"></i>
              </span>
            </div>
            <div className="relative mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span className="absolute left-3 top-3 text-gray-400">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
            <div className="relative mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <span className="absolute left-3 top-3 text-gray-400">
                <i className="fas fa-comment"></i>
              </span>
            </div>
            {loading ? (
              <button type="button" className="bg-blue-600 text-white p-3 rounded w-full" disabled>Sending...</button>
            ) : (
              <button type="submit" className="bg-blue-600 text-white p-3 rounded w-full hover:bg-blue-700 transition duration-300">Send</button>
            )}
          </form>
        )}
        <button onClick={onClose} className="mt-4 text-red-600 hover:underline">Close</button>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const services = [
  {
    icon: <Globe className="h-8 w-8 text-blue-600" data-id="1vyfa7d16" data-path="src/pages/HomePage.tsx" />,
    title: "Custom Website Development",
    description: "Tailored websites built with modern technologies to meet your specific needs and requirements."
  },
  {
    icon: <Code className="h-8 w-8 text-green-600" data-id="tvsgkftkg" data-path="src/pages/HomePage.tsx" />,
    title: "Web Application Development",
    description: "Full-stack web applications with robust functionality and seamless user experience."
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-600" data-id="fixocscem" data-path="src/pages/HomePage.tsx" />,
    title: "Performance Optimization",
    description: "Lightning-fast websites optimized for speed, SEO, and user engagement."
  },
  {
    icon: <Users className="h-8 w-8 text-orange-600" data-id="30fo8n9tf" data-path="src/pages/HomePage.tsx" />,
    title: "Maintenance & Support",
    description: "Ongoing support and maintenance to keep your website running smoothly."
  }];


  const industries = [
  {
  name: "Educational Institutions",
  icon: "🎓",
  description: "Colleges & Schools",
  link: '/src/pages/institution.html'
},
  { name: "Healthcare", icon: "🏥", description: "Hospitals & Clinics" },
  { name: "Hospitality", icon: "🏨", description: "Hotels & Resorts" },
  { name: "Events", icon: "🚀", description: "Hackathons & Conferences" },
  { name: "Corporate", icon: "🏢", description: "Businesses & Startups" },
  { name: "Non-Profit", icon: "💝", description: "NGOs & Foundations" }];


  const features = [
  "Responsive Design",
  "SEO Optimized",
  "Fast Loading Speed",
  "Mobile-First Approach",
  "Modern UI/UX",
  "Cross-Browser Compatible"];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50" data-id="fdjsr99ln" data-path="src/pages/HomePage.tsx">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50" data-id="ya6gce4rb" data-path="src/pages/HomePage.tsx">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-id="waas28m5w" data-path="src/pages/HomePage.tsx">
          <div className="flex justify-between items-center py-4" data-id="bpea7zidr" data-path="src/pages/HomePage.tsx">
            <Link to="/" className="flex items-center space-x-2" data-id="irr9m44co" data-path="src/pages/HomePage.tsx">
              <img src="/src/pages/company-logo.png" alt="Company Logo" className="w-10 h-10" />
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent" data-id="lbkwm6zr6" data-path="src/pages/HomePage.tsx">
                SSWebTech
              </span>
            </Link>
            <nav className="hidden md:flex space-x-8" data-id="qm9nwf8lj" data-path="src/pages/HomePage.tsx">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors" data-id="vl8nalm41" data-path="src/pages/HomePage.tsx">Services</a>
              <a href="#industries" className="text-gray-700 hover:text-blue-600 transition-colors" data-id="o7skbb7j6" data-path="src/pages/HomePage.tsx">Industries</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors" data-id="qfqmc0ykb" data-path="src/pages/HomePage.tsx">Contact</a>
            </nav>
            <Link to="/about" data-id="rr5id64b6" data-path="src/pages/HomePage.tsx">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" data-id="5lw7iwdec" data-path="src/pages/HomePage.tsx">
                About
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" data-id="hllmh5xbj" data-path="src/pages/HomePage.tsx">
        <div className="max-w-7xl mx-auto text-center" data-id="1qqj674dl" data-path="src/pages/HomePage.tsx">
          <div className="mb-8" data-id="gfutqjviq" data-path="src/pages/HomePage.tsx">
            <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200" data-id="oo07e3smd" data-path="src/pages/HomePage.tsx">
              🚀 Professional Web Development Services
            </Badge>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                  Building Digital
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                >
                  Excellence
                </motion.span>
              </h1>
            </motion.div>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed" data-id="86tkzxlui" data-path="src/pages/HomePage.tsx">
              Transform your vision into reality with our cutting-edge web development solutions. 
              We specialize in creating powerful, scalable websites for educational institutions, 
              healthcare providers, hospitality businesses, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-id="vbvu6jsee" data-path="src/pages/HomePage.tsx">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-3" data-id="168qbyb2k" data-path="src/pages/HomePage.tsx">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" data-id="a8gbi32wg" data-path="src/pages/HomePage.tsx" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2" data-id="nsjmths2z" data-path="src/pages/HomePage.tsx">
                View Our Work
              </Button>
            </div>
          </div>
          
          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-12" data-id="xpclzzrar" data-path="src/pages/HomePage.tsx">
            {features.map((feature, index) =>
            <Badge key={index} variant="secondary" className="px-4 py-2 text-sm" data-id="okkjl04lr" data-path="src/pages/HomePage.tsx">
                <CheckCircle className="w-4 h-4 mr-2 text-green-600" data-id="r7wsgp8yr" data-path="src/pages/HomePage.tsx" />
                {feature}
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" data-id="b88r4as51" data-path="src/pages/HomePage.tsx">
        <div className="max-w-7xl mx-auto" data-id="95ci6f3xb" data-path="src/pages/HomePage.tsx">
          <div className="text-center mb-16" data-id="tsj7xc0ne" data-path="src/pages/HomePage.tsx">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-id="m6a6vv5ou" data-path="src/pages/HomePage.tsx">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-id="3dx52ymdh" data-path="src/pages/HomePage.tsx">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                      className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit"
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50" data-id="apbatomr5" data-path="src/pages/HomePage.tsx">
        <div className="max-w-7xl mx-auto" data-id="ez02c21vv" data-path="src/pages/HomePage.tsx">
          <div className="text-center mb-16" data-id="sccjuylp7" data-path="src/pages/HomePage.tsx">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-id="agtf6qd78" data-path="src/pages/HomePage.tsx">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-id="pyxvvjyur" data-path="src/pages/HomePage.tsx">
              Delivering specialized solutions across diverse sectors
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.a
                key={index}
                href={industry.link || '#'}
                target=''
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:scale-105">
                  <CardHeader className="text-center">
                    <motion.div
                      initial={{ scale: 0.8, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                      className="text-4xl mb-4"
                    >
                      {industry.icon}
                    </motion.div>
                    <CardTitle className="text-lg">{industry.name}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white" data-id="pje2emo63" data-path="src/pages/HomePage.tsx">
        <div className="max-w-7xl mx-auto" data-id="icwswe8kw" data-path="src/pages/HomePage.tsx">
          <div className="grid lg:grid-cols-2 gap-12 items-center" data-id="5xxgj2eer" data-path="src/pages/HomePage.tsx">
            <div data-id="nysuzeze2" data-path="src/pages/HomePage.tsx">
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-id="m284d4ist" data-path="src/pages/HomePage.tsx">Why Choose SSWebTech?</h2>
              <p className="text-lg text-gray-600 mb-8" data-id="2uze5s66q" data-path="src/pages/HomePage.tsx">
                With years of experience in web development, we combine technical expertise 
                with creative design to deliver exceptional digital solutions that drive results.
              </p>
              <div className="space-y-4" data-id="6u6gladbt" data-path="src/pages/HomePage.tsx">
                {[
                "Expert team of developers and designers",
                "Cutting-edge technologies and frameworks",
                "Timely delivery and ongoing support",
                "Competitive pricing and flexible packages",
                "100% satisfaction guarantee"].
                map((point, index) =>
                <div key={index} className="flex items-center space-x-3" data-id="l6eqrwibs" data-path="src/pages/HomePage.tsx">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" data-id="160sczozb" data-path="src/pages/HomePage.tsx" />
                    <span className="text-gray-700" data-id="bbk2hzeoe" data-path="src/pages/HomePage.tsx">{point}</span>
                  </div>
                )}
              </div>
              <div className="mt-8" data-id="719oakfr8" data-path="src/pages/HomePage.tsx">
                <Link to="/about" data-id="obe0qqsvj" data-path="src/pages/HomePage.tsx">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" data-id="9kndye0sv" data-path="src/pages/HomePage.tsx">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" data-id="ebpcq9usk" data-path="src/pages/HomePage.tsx" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 text-center" data-id="cxx9jw8al" data-path="src/pages/HomePage.tsx">
              <div className="bg-white rounded-xl p-6 shadow-lg" data-id="7o3ut01u8" data-path="src/pages/HomePage.tsx">
                <h3 className="text-2xl font-bold text-gray-900 mb-4" data-id="tyao4icyr" data-path="src/pages/HomePage.tsx">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6" data-id="ftqobkkdx" data-path="src/pages/HomePage.tsx">
                  Let's discuss your project and bring your vision to life with our expert team.
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full" data-id="47ib7ji1r" data-path="src/pages/HomePage.tsx">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white" data-id="vwt05jlwh" data-path="src/pages/HomePage.tsx">
        <div className="max-w-7xl mx-auto text-center" data-id="yfr9liv1g" data-path="src/pages/HomePage.tsx">
          <h2 className="text-4xl font-bold mb-4" data-id="q1au7sjlf" data-path="src/pages/HomePage.tsx">Get In Touch</h2>
          <p className="text-xl mb-12 opacity-90" data-id="vfm2tpwkc" data-path="src/pages/HomePage.tsx">
            Ready to transform your digital presence? Let's start the conversation.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12" data-id="gxh9bfctt" data-path="src/pages/HomePage.tsx">
            <div className="flex flex-col items-center bounce">
              <Mail className="h-8 w-8 mb-4" data-id="6p0nfls86" data-path="src/pages/HomePage.tsx" />
              <h3 className="text-lg font-semibold mb-2" data-id="ylbzbsyli" data-path="src/pages/HomePage.tsx">Email Us</h3>
              <p className="opacity-90" data-id="fb157997g" data-path="src/pages/HomePage.tsx">yarrusasi@gmail.com</p>
            </div>
            <div className="flex flex-col items-center bounce">
              <Phone className="h-8 w-8 mb-4" data-id="cglewdhnp" data-path="src/pages/HomePage.tsx" />
              <h3 className="text-lg font-semibold mb-2" data-id="oq7z38j33" data-path="src/pages/HomePage.tsx">Call Us</h3>
              <p className="opacity-90" data-id="pkscskeot" data-path="src/pages/HomePage.tsx">9391502293</p>
            </div>
            <div className="flex flex-col items-center bounce">
              <MapPin className="h-8 w-8 mb-4" data-id="pw7gdlpl1" data-path="src/pages/HomePage.tsx" />
              <h3 className="text-lg font-semibold mb-2" data-id="5rv19l57o" data-path="src/pages/HomePage.tsx">Visit Us</h3>
              <p className="opacity-90" data-id="jd1ep8j3u" data-path="src/pages/HomePage.tsx">K Ramapuram, Rayachoty(M), Annamayya(D)</p>
            </div>
          </div>
          
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3 mt-4" onClick={() => setShowContactForm(true)} data-id="jvn0b0irb" data-path="src/pages/HomePage.tsx">
            Contact Us Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8" data-id="38jjdaqxz" data-path="src/pages/HomePage.tsx">
        <div className="max-w-7xl mx-auto" data-id="mh291822d" data-path="src/pages/HomePage.tsx">
          <div className="grid md:grid-cols-4 gap-8" data-id="nbi2rc0qz" data-path="src/pages/HomePage.tsx">
            <div className="md:col-span-2" data-id="sby0h0dcq" data-path="src/pages/HomePage.tsx">
              <Link to="/" className="flex items-center space-x-2 mb-4" data-id="r1fomt6ss" data-path="src/pages/HomePage.tsx">
                <img src="/src/pages/company-logo.png" alt="Company Logo" className="w-10 h-10" />
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent" data-id="km444ql9y" data-path="src/pages/HomePage.tsx">SSWebTech</span>
              </Link>
              <p className="text-gray-400 mb-4" data-id="ggwm83d6z" data-path="src/pages/HomePage.tsx">
                Building the future of web development, one project at a time. 
                Your trusted partner for digital transformation.
              </p>
            </div>
            <div data-id="b6wx2zamb" data-path="src/pages/HomePage.tsx">
              <h3 className="text-lg font-semibold mb-4" data-id="3vywtniz3" data-path="src/pages/HomePage.tsx">Services</h3>
              <ul className="space-y-2 text-gray-400" data-id="hf4zxzg52" data-path="src/pages/HomePage.tsx">
                <li data-id="lnxlg23ra" data-path="src/pages/HomePage.tsx">Website Development</li>
                <li data-id="3lhuvrayc" data-path="src/pages/HomePage.tsx">Web Applications</li>
                <li data-id="ar1ai4vq4" data-path="src/pages/HomePage.tsx">E-commerce Solutions</li>
                <li data-id="zx6qtl9bc" data-path="src/pages/HomePage.tsx">Maintenance & Support</li>
              </ul>
            </div>
            <div data-id="45mkumhw8" data-path="src/pages/HomePage.tsx">
              <h3 className="text-lg font-semibold mb-4" data-id="vu8c2v84p" data-path="src/pages/HomePage.tsx">Company</h3>
              <ul className="space-y-2 text-gray-400" data-id="nhhfxrvyp" data-path="src/pages/HomePage.tsx">
                <li data-id="ctozp11i2" data-path="src/pages/HomePage.tsx"><Link to="/about" className="hover:text-white transition-colors" data-id="d1fw4d8e9" data-path="src/pages/HomePage.tsx">About Us</Link></li>
                <li data-id="ugifkrtj8" data-path="src/pages/HomePage.tsx">Our Team</li>
                <li data-id="g5wa61hiz" data-path="src/pages/HomePage.tsx">Careers</li>
                <li data-id="scyj8r39r" data-path="src/pages/HomePage.tsx">Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400" data-id="avqnt6oyx" data-path="src/pages/HomePage.tsx">
            <p data-id="40qha6wkp" data-path="src/pages/HomePage.tsx">&copy; 2025 SSWebTech. All rights reserved. Built with excellence and innovation.</p>
          </div>
        </div>
      </footer>
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </div>
  );
};

export default HomePage;
<style>{`
  .fade-in {
    animation: fadeIn 2s ease-in-out;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .bounce {
    animation: bounce 1s infinite;
  }
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
`}</style>