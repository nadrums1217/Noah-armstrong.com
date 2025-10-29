import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Building2, Home as HomeIcon, Briefcase, Warehouse } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const buyBoxItems = [
  {
    title: "Businesses",
    icon: Briefcase,
    criteria: [
      "Hands-off or semi-passive OR operator in place",
      "No licensing-required businesses (unless license not tied to owner)",
      "Preferred: Laundromats, Car Washes, Vending Routes, Self-serve/automated",
      "Nationwide",
    ],
  },
  {
    title: "Small Multifamily",
    icon: HomeIcon,
    criteria: [
      "2-4 units",
      "Minimal renovation",
      "Creative financing only",
      "Southeast or Texas",
    ],
  },
  {
    title: "Large Multifamily",
    icon: Building2,
    criteria: [
      "50+ units",
      "Class C preferred",
      "Creative financing preferred",
      "Southeast or Texas",
    ],
  },
  {
    title: "Self-Storage",
    icon: Building2,
    criteria: [
      "Any market, any size",
      "Stabilized, distressed, or value-add welcome",
      "Must allow creative financing",
      "Nationwide",
    ],
  },
  {
    title: "RV or Mobile Home Parks",
    icon: Building2,
    criteria: [
      "15+ pads",
      "Any price point",
      "Value-add and turnkey opportunities",
      "Cap Rate 8%+, Off-market preferred",
    ],
  },
];

const whyWorkItems = [
  {
    title: "Fast Execution",
    description: "We move quickly and decisively on deals that fit our criteria.",
  },
  {
    title: "Creative Financing",
    description: "We specialize in creative structures that traditional lenders won't touch.",
  },
  {
    title: "Operational Excellence",
    description: "We build sustainable, profitable frameworks that create lasting value.",
  },
  {
    title: "Partnership Mindset",
    description: "We're committed to helping others climb their mountain alongside us.",
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur-sm border-b border-[#49879c]/30" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/triple-cross-holdings-logo.png" 
              alt="Triple Cross Holdings" 
              className="h-8 object-contain"
            />
            <motion.h1 className="text-2xl font-bold text-[#49879c]">Noah Armstrong</motion.h1>
          </div>
          <a
            href="mailto:deals@noah-armstrong.com"
            className="text-[#49879c] hover:text-[#5a9fb8] transition-colors"
          >
            Submit a Deal
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage:
              "linear-gradient(45deg, #49879c 0%, #000000 50%, #49879c 100%)",
            backgroundSize: "200% 200%",
          }}
        />

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <img 
              src="/triple-cross-holdings-logo.png" 
              alt="Triple Cross Holdings" 
              className="h-16 object-contain mx-auto"
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Got a Deal?
            <br />
            <span className="text-[#49879c]">We Have a Buy Box For That</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            If it fits, we'll buy it. If it doesn't... we'll still take a look.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            We specialize in creative financing across multifamily real estate, business acquisitions, and service-based assets throughout the southern U.S.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#buybox" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-[#49879c] hover:bg-[#3a6a7f] text-white font-bold text-lg px-8 py-6 rounded-lg transition-all hover:shadow-lg hover:shadow-[#49879c]/50"
              >
                Explore Our Buy Box <ArrowRight className="ml-2" />
              </Button>
            </a>
            <a href="mailto:deals@noah-armstrong.com" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-[#49879c] text-[#49879c] hover:bg-[#49879c]/10 font-bold text-lg px-8 py-6 rounded-lg"
              >
                Submit a Deal
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Memberships Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-black border-y border-[#49879c]/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-12"
          >
            Active Member
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-12 flex-wrap"
          >
            <div className="flex flex-col items-center gap-3">
              <img 
                src="/owners-club-logo.png" 
                alt="Owners Club member" 
                className="h-20 object-contain"
              />
              <p className="text-sm text-gray-400">Owners Club Member</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <img 
                src="/subto-logo.png" 
                alt="SUBTO member" 
                className="h-20 object-contain"
              />
              <p className="text-sm text-gray-400">SUBTO Member</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Noah Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-[#49879c]/10 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#49879c]">About Me</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm Noah Armstrong, an entrepreneur and investor focused on building and scaling high-performing assets across real estate, business, and service-based industries. I lead <span className="text-[#49879c] font-semibold">Triple Cross Holdings</span>, where we acquire multifamily, self-storage, and car wash properties throughout the southern U.S. Our strategy centers on creative financing, long-term ownership, and operational excellence.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I also co-head a <span className="text-[#49879c] font-semibold">Car Wash Development Team</span>, where we identify, underwrite, and secure land for new express tunnel projects. Our team focuses on high-traffic, high-growth markets and partners with experienced operators to bring each site from concept to completion efficiently. We welcome Owners Club and Zero Down 2.0 members to partner with us to use their vouchers.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Beyond real estate, I'm involved in business acquisitions and the growth of a professional golf organization, where my focus is on improving systems, branding, and sponsor engagement. Across every venture, my goal is simple — build sustainable, profitable frameworks that create lasting value.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img 
                src="/noah-solo.jpg" 
                alt="Noah Armstrong" 
                className="rounded-lg shadow-2xl shadow-[#49879c]/20 max-w-sm w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mount Everest Vision Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#49879c]/20 border-y border-[#49879c]/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#49879c]">My Mount Everest</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-semibold">
              My Mount Everest is to help 1,000 underserved individuals become business owners.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I believe ownership is the most direct path to freedom, confidence, and lasting change, not just financially but generationally. Through real estate, service-based businesses, and systems that simplify access to opportunity, my goal is to create frameworks that lower the barrier to entry.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I want people who have never been given a shot to gain the tools, guidance, and partnerships needed to build something of their own. This vision drives everything I build, from acquisitions and development projects to the automation systems behind them. Each business I start or buy is a model that can be replicated, a blueprint someone else can use to climb their own mountain.
            </p>
            <p className="text-lg text-[#49879c] font-bold leading-relaxed">
              Success for me is not just reaching the summit. It is bringing others up with me.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-[#49879c]"
          >
            Why Work With Me
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {whyWorkItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-[#49879c]/20 border-[#49879c]/50 p-8 h-full hover:border-[#49879c]/50 transition-all hover:shadow-lg hover:shadow-[#49879c]/10">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#49879c] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#49879c] mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section - Team Photos */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-[#49879c]/10 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-[#49879c]"
          >
            Our Community
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* With Pace & Jamil */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#49879c]/20 border-[#49879c]/50 overflow-hidden hover:border-[#49879c]/50 transition-all hover:shadow-lg hover:shadow-[#49879c]/10 h-full flex flex-col">
                <img 
                  src="/noah-with-pace-jamil.jpg" 
                  alt="Noah with Pace Morby and Jamil Damji" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-[#49879c] mb-2">Building Partnerships</h3>
                  <p className="text-gray-300">Connected with industry leaders focused on creative financing and deal flow.</p>
                </div>
              </Card>
            </motion.div>

            {/* Owners Club Meetup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#49879c]/20 border-[#49879c]/50 overflow-hidden hover:border-[#49879c]/50 transition-all hover:shadow-lg hover:shadow-[#49879c]/10 h-full flex flex-col">
                <img 
                  src="/owners-club-meetup.jpg" 
                  alt="Owners Club community meetup" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-[#49879c] mb-2">Owners Club Community</h3>
                  <p className="text-gray-300">Part of a thriving community of entrepreneurs and investors committed to building wealth together.</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Buy Box Section */}
      <section id="buybox" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-[#49879c]/10 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#49879c]">What We're Buying Right Now</h2>
            <p className="text-lg text-gray-300">
              Make sure to include address, property details, and purchase price if you're submitting a deal to our team. Any additional information is also appreciated!
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {buyBoxItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="bg-gradient-to-br from-[#49879c]/30 to-[#49879c]/10 border-[#49879c]/50 p-8 h-full hover:border-[#49879c]/50 transition-all hover:shadow-lg hover:shadow-[#49879c]/10 hover:from-[#49879c]/40">
                    <div className="flex items-center gap-3 mb-6">
                      <Icon className="w-8 h-8 text-[#49879c]" />
                      <h3 className="text-2xl font-bold text-[#49879c]">{item.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {item.criteria.map((criterion, i) => (
                        <li key={i} className="flex gap-3 text-gray-300">
                          <span className="text-[#49879c] font-bold flex-shrink-0">•</span>
                          <span>{criterion}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#49879c]/30 border-y border-[#49879c]/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#49879c]">Ready to Submit Your Deal?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Send us your deal with address, property details, photos, and purchase price. We move fast and love helping our community close more deals.
            </p>
            <a href="mailto:deals@noah-armstrong.com">
              <Button
                size="lg"
                className="bg-[#49879c] hover:bg-[#3a6a7f] text-black font-bold text-lg px-12 py-6 rounded-lg transition-all hover:shadow-lg hover:shadow-[#49879c]/50"
              >
                Send Your Deal <ArrowRight className="ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 bg-black border-t border-amber-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#49879c] mb-4">Noah Armstrong</h3>
              <p className="text-gray-400">Building sustainable, profitable frameworks that create lasting value and help others climb their mountain.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#49879c] mb-4">Companies</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Triple Cross Holdings</li>
                <li>Armstrong Rentals</li>
                <li>NJ360 Virtual Tours</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#49879c] mb-4">Get in Touch</h3>
              <a href="mailto:deals@noah-armstrong.com" className="text-[#49879c] hover:text-[#5a9fb8] transition-colors">
                deals@noah-armstrong.com
              </a>
            </div>
          </div>
          <div className="border-t border-[#49879c]/30 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Noah Armstrong. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

