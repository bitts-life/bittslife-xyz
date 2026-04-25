import { motion } from "framer-motion";
import { Puzzle, TrendingUp, Target, Repeat } from "lucide-react";

const benefits = [
  { icon: Puzzle, title: "Improve Memory", desc: "Recall faster, forget less." },
  { icon: TrendingUp, title: "Boost IQ", desc: "Measurable cognitive growth." },
  { icon: Target, title: "Sharpen Focus", desc: "Train sustained attention." },
  { icon: Repeat, title: "Daily Habits", desc: "Tiny sessions, lasting change." },
];

const BTBenefits = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-white/50 mb-3">Why Play</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Real <span className="bt-gradient-text">cognitive gains</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bt-glow-card rounded-2xl p-6 text-center"
              >
                <div
                  className="h-14 w-14 rounded-2xl mx-auto flex items-center justify-center mb-4"
                  style={{ background: "var(--bt-gradient-soft)" }}
                >
                  <Icon className="h-6 w-6" style={{ color: "hsl(var(--bt-cyan))" }} />
                </div>
                <h3 className="font-semibold mb-1">{b.title}</h3>
                <p className="text-sm text-white/60">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BTBenefits;