import { motion } from "framer-motion";
import { Brain, Gamepad2, Zap, Flame, Trophy, Calendar } from "lucide-react";

const features = [
  { icon: Brain, title: "Endless Brain Teasers", desc: "AI keeps generating fresh puzzles you've never seen.", color: "270 95% 65%" },
  { icon: Gamepad2, title: "10+ Mini Games Hub", desc: "Logic, math, memory, reaction — all in one app.", color: "220 100% 65%" },
  { icon: Zap, title: "AI-Generated Challenges", desc: "Difficulty adapts to you in real time.", color: "190 100% 60%" },
  { icon: Flame, title: "Streaks & Rewards", desc: "Daily streaks unlock XP, badges, and skins.", color: "320 95% 65%" },
  { icon: Trophy, title: "Global Leaderboards", desc: "Compete with brains around the world.", color: "270 95% 65%" },
  { icon: Calendar, title: "Daily Challenges", desc: "A fresh, curated puzzle drops every 24 hours.", color: "190 100% 60%" },
];

const BTFeatures = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-white/50 mb-3">Features</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for <span className="bt-gradient-text">curious minds</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bt-glow-card rounded-2xl p-6 group"
              >
                <div
                  className="h-12 w-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, hsl(${f.color} / 0.3), hsl(${f.color} / 0.1))`,
                    boxShadow: `0 0 30px hsl(${f.color} / 0.3)`,
                  }}
                >
                  <Icon className="h-6 w-6" style={{ color: `hsl(${f.color})` }} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{f.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BTFeatures;