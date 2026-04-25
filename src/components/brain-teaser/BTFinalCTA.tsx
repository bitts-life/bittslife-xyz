import { motion } from "framer-motion";
import { Bell, Rocket } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919672460166?text=Hi!%20I%20want%20to%20join%20the%20Brain%20Teaser%20AI%20Game%20waitlist%20%F0%9F%9A%80";

const BTFinalCTA = () => {
  return (
    <section className="relative py-24">
      <div className="bt-orb h-[500px] w-[500px] left-1/2 -translate-x-1/2 top-0"
           style={{ background: "hsl(var(--bt-purple))" }} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bt-glass rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30 bt-grid-bg" aria-hidden="true" />
          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
              Get ready to <span className="bt-gradient-text">train your brain</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
              Be first in line when Brain Teaser AI lands on May 1.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <span
                aria-disabled="true"
                className="bt-btn-primary rounded-full px-8 py-4 font-semibold inline-flex items-center gap-2 pointer-events-none opacity-70 select-none"
              >
                <Rocket className="h-5 w-5" /> Join Waitlist
              </span>
              <span
                aria-disabled="true"
                className="bt-btn-outline rounded-full px-8 py-4 font-semibold inline-flex items-center gap-2 pointer-events-none opacity-70 select-none"
              >
                <Bell className="h-5 w-5" /> Notify Me
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BTFinalCTA;