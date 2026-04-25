import { motion } from "framer-motion";
import { Sparkles, Rocket } from "lucide-react";
import mockup from "@/assets/bt-home.png";
import ParticleField from "./ParticleField";

const WHATSAPP_URL = "https://wa.me/919672460166?text=Hi!%20I%20want%20early%20access%20to%20Brain%20Teaser%20AI%20Game%20%F0%9F%A7%A0";

const BTHero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background orbs */}
      <div className="bt-orb h-[500px] w-[500px] -top-32 -left-32"
           style={{ background: "hsl(var(--bt-purple))" }} />
      <div className="bt-orb h-[600px] w-[600px] top-40 -right-40"
           style={{ background: "hsl(var(--bt-cyan))" }} />
      <div className="absolute inset-0 bt-grid-bg" aria-hidden="true" />
      <ParticleField />

      <div className="container mx-auto relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bt-glass rounded-full px-4 py-2 text-sm mb-6"
            >
              <Sparkles className="h-4 w-4" style={{ color: "hsl(var(--bt-cyan))" }} />
              <span>Launching May 1 · Closed Beta Live</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
            >
              Train Your Brain with{" "}
              <span className="bt-gradient-text">AI-Powered</span> Challenges
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0"
            >
              Endless puzzles. Smarter thinking. Real IQ gains.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <span
                aria-disabled="true"
                className="bt-btn-primary rounded-full px-8 py-4 font-semibold inline-flex items-center gap-2 pointer-events-none opacity-70 select-none"
              >
                <Rocket className="h-5 w-5" />
                Coming May 1
              </span>
              <a
                href="#waitlist"
                className="bt-btn-outline rounded-full px-8 py-4 font-semibold inline-flex items-center gap-2"
              >
                Join Early Access
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start text-sm text-white/60"
            >
              <div>
                <div className="text-2xl font-bold bt-gradient-text">10+</div>
                Mini Games
              </div>
              <div>
                <div className="text-2xl font-bold bt-gradient-text">∞</div>
                AI Puzzles
              </div>
              <div>
                <div className="text-2xl font-bold bt-gradient-text">Daily</div>
                Challenges
              </div>
            </motion.div>
          </div>

          {/* Right - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="bt-float relative max-w-md mx-auto">
              <div className="absolute inset-0 bt-orb bt-pulse-glow"
                   style={{ background: "var(--bt-gradient)", filter: "blur(60px)", opacity: 0.7 }} />
              <img
                src={mockup}
                alt="Brain Teaser AI Game app preview"
                width={1024}
                height={1280}
                className="relative rounded-3xl border border-white/10 shadow-2xl w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BTHero;