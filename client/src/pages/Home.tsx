import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Building2, Home as HomeIcon, Briefcase } from "lucide-react";

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
      "Creative Financing preferred (Subject-to, Seller Finance, Lease Options, Wraps, Novations)",
      "Hands-off or semi-passive operations OR operator in place",
      "No licensing-required businesses (unless tied to owner)",
      "Preferred: Laundromats, Car Washes, Vending Routes, Self-serve/automated models",
    ],
  },
  {
    title: "Small Multifamily",
    icon: HomeIcon,
    criteria: [
      "2-4 units",
      "Minimal renovation required",
      "Creative financing only",
      "Located in Southeast or Texas",
    ],
  },
  {
    title: "Large Multifamily",
    icon: Building2,
    criteria: [
      "5+ units",
      "1970-2000 vintage",
      "Sunbelt and Midwest metros (outside FL, LA, CA)",
      "Value-add opportunity with rent growth potential",
      "Creative financing only",
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
          isScrolled ? "bg-black/95 backdrop-blur-sm border-b border-amber-900/30" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.h1 className="text-2xl font-bold text-amber-400">Noah Armstrong</motion.h1>
          <a
            href="mailto:deals@noah-armstrong.com"
            className="text-amber-400 hover:text-amber-300 transition-colors"
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
              "linear-gradient(45deg, #78350f 0%, #000000 50%, #78350f 100%)",
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
            <span className="inline-block px-4 py-2 bg-amber-900/30 border border-amber-400/50 rounded-full text-amber-400 text-sm font-semibold">
              Triple Cross Holdings
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Got a Deal?
            <br />
            <span className="text-amber-400">We Have a Buy Box For That</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            If it fits, we'll buy it. If it doesn't... we'll still take a look. 😉
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
                className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-8 py-6 rounded-lg transition-all hover:shadow-lg hover:shadow-amber-500/50"
              >
                Explore Our Buy Box <ArrowRight className="ml-2" />
              </Button>
            </a>
            <a href="mailto:deals@noah-armstrong.com" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-amber-400 text-amber-400 hover:bg-amber-400/10 font-bold text-lg px-8 py-6 rounded-lg"
              >
                Submit a Deal
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Noah Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-amber-950/10 to-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-amber-400">About Me</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm Noah Armstrong, an entrepreneur and investor focused on building and scaling high-performing assets across real estate, business, and service-based industries. I lead <span className="text-amber-400 font-semibold">Triple Cross Holdings</span>, where we acquire multifamily, self-storage, and car wash properties throughout the southern U.S. Our strategy centers on creative financing, long-term ownership, and operational excellence.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I also co-head the <span className="text-amber-400 font-semibold">Clean Start Car Wash Development Team</span>, where we identify, underwrite, and secure land for new express tunnel projects. Our team focuses on high-traffic, high-growth markets and partners with experienced operators to bring each site from concept to completion efficiently.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Beyond real estate, I'm involved in business acquisitions and the growth of a professional golf organization, where my focus is on improving systems, branding, and sponsor engagement. Across every venture, my goal is simple — build sustainable, profitable frameworks that create lasting value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mount Everest Vision Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-amber-950/20 border-y border-amber-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-amber-400">My Mount Everest</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-semibold">
              My Mount Everest is to help 1,000 underserved individuals become business owners.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I believe ownership is the most direct path to freedom, confidence, and lasting change, not just financially but generationally. Through real estate, service-based businesses, and systems that simplify access to opportunity, my goal is to create frameworks that lower the barrier to entry.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I want people who have never been given a shot to gain the tools, guidance, and partnerships needed to build something of their own. This vision drives everything I build, from acquisitions and development projects to the automation systems behind them. Each business I start or buy is a model that can be replicated, a blueprint someone else can use to climb their own mountain.
            </p>
            <p className="text-lg text-amber-400 font-bold leading-relaxed">
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
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-amber-400"
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
                <Card className="bg-amber-950/20 border-amber-900/50 p-8 h-full hover:border-amber-400/50 transition-all hover:shadow-lg hover:shadow-amber-500/10">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-amber-400 mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Buy Box Section */}
      <section id="buybox" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-amber-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">What We're Buying Right Now</h2>
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
                  <Card className="bg-gradient-to-br from-amber-950/30 to-amber-950/10 border-amber-900/50 p-8 h-full hover:border-amber-400/50 transition-all hover:shadow-lg hover:shadow-amber-500/10 hover:from-amber-950/40">
                    <div className="flex items-center gap-3 mb-6">
                      <Icon className="w-8 h-8 text-amber-400" />
                      <h3 className="text-2xl font-bold text-amber-400">{item.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {item.criteria.map((criterion, i) => (
                        <li key={i} className="flex gap-3 text-gray-300">
                          <span className="text-amber-400 font-bold flex-shrink-0">•</span>
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-amber-950/30 border-y border-amber-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400">Ready to Submit Your Deal?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Send us your deal with address, property details, photos, and purchase price. We move fast and love helping our community close more deals.
            </p>
            <a href="mailto:deals@noah-armstrong.com">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-12 py-6 rounded-lg transition-all hover:shadow-lg hover:shadow-amber-500/50"
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
              <h3 className="text-xl font-bold text-amber-400 mb-4">Noah Armstrong</h3>
              <p className="text-gray-400">Building sustainable, profitable frameworks that create lasting value.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-400 mb-4">Companies</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Triple Cross Holdings</li>
                <li>Clean Start Car Wash Development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-amber-400 mb-4">Get in Touch</h3>
              <a href="mailto:deals@noah-armstrong.com" className="text-amber-400 hover:text-amber-300 transition-colors">
                deals@noah-armstrong.com
              </a>
            </div>
          </div>
          <div className="border-t border-amber-900/30 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Noah Armstrong. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

