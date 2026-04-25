import { motion } from "framer-motion";
import { Cpu, Infinity as InfinityIcon, Sliders } from "lucide-react";
import neural from "@/assets/bt-numbergame.png";

const points = [
  { icon: Cpu, title: "Dynamic Puzzles", desc: "Generated on the fly — never repeat." },
  { icon: Sliders, title: "Personalized Difficulty", desc: "Adapts every round to your skill." },
  { icon: InfinityIcon, title: "Endless Gameplay", desc: "Play forever without running dry." },
];

const BTAISection = () => {
  return (
    <section id="ai" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bt-float"
          >
            <div className="absolute inset-0 bt-pulse-glow rounded-full"
                 style={{ background: "var(--bt-gradient)", filter: "blur(80px)", opacity: 0.6 }} />
            <img
              src={neural}
              alt="AI neural network powering Brain Teaser"
              width={1280}
              height={1024}
              loading="lazy"
              className="relative rounded-3xl border border-white/10 w-full"
            />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-widest text-white/50 mb-3"
            >
              The Engine
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Powered by <span className="bt-gradient-text">AI</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg mb-8 max-w-lg"
            >
              No two sessions are the same. Our neural engine crafts fresh challenges
              tuned exactly to where your brain is right now.
            </motion.p>

            <ul className="space-y-4">
              {points.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.li
                    key={p.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex gap-4 items-start bt-glass rounded-xl p-4"
                  >
                    <div className="h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0"
                         style={{ background: "var(--bt-gradient-soft)" }}>
                      <Icon className="h-5 w-5" style={{ color: "hsl(var(--bt-cyan))" }} />
                    </div>
                    <div>
                      <div className="font-semibold">{p.title}</div>
                      <div className="text-sm text-white/60">{p.desc}</div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BTAISection;