import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Hash, Calculator, Eye, Shuffle, Timer } from "lucide-react";
import numberGame from "@/assets/bt-numbergame.png";
import miniGames from "@/assets/bt-minigames.png";
import homeScreen from "@/assets/bt-home.png";
import appScreen from "@/assets/bt-app-screen.png";

const modes = [
  {
    id: "sequence",
    name: "Number Sequence",
    icon: Hash,
    boost: "Logic",
    desc: "Spot the pattern. Predict what comes next. Train pure logical reasoning.",
    color: "270 95% 65%",
    image: numberGame,
  },
  {
    id: "math",
    name: "Quick Math",
    icon: Calculator,
    boost: "Speed",
    desc: "Lightning-fast arithmetic under pressure. Sharpen mental math.",
    color: "190 100% 60%",
    image: miniGames,
  },
  {
    id: "memory",
    name: "Memory Flash",
    icon: Eye,
    boost: "Memory",
    desc: "Snapshots vanish in seconds — recall sequences with precision.",
    color: "320 95% 65%",
    image: appScreen,
  },
  {
    id: "odd",
    name: "Odd One Out",
    icon: Shuffle,
    boost: "Focus",
    desc: "Find the outlier in a sea of shapes, colors, and numbers.",
    color: "220 100% 65%",
    image: miniGames,
  },
  {
    id: "reaction",
    name: "Reaction Time",
    icon: Timer,
    boost: "Reflex",
    desc: "Tap the second the signal flashes. Push your reflexes.",
    color: "190 100% 60%",
    image: homeScreen,
  },
];

const BTGameModes = () => {
  const [active, setActive] = useState(modes[0].id);
  const current = modes.find((m) => m.id === active)!;
  const Icon = current.icon;

  return (
    <section id="modes" className="relative py-24">
      <div className="bt-orb h-[400px] w-[400px] right-0 top-1/3"
           style={{ background: "hsl(var(--bt-blue))" }} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-white/50 mb-3">Game Modes</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Pick your <span className="bt-gradient-text">battlefield</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {modes.map((m) => (
            <button
              key={m.id}
              onClick={() => setActive(m.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === m.id
                  ? "bt-btn-primary"
                  : "bt-btn-outline"
              } `}
            >
              {m.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bt-glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div
                  className="h-14 w-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, hsl(${current.color} / 0.4), hsl(${current.color} / 0.1))`,
                    boxShadow: `0 0 40px hsl(${current.color} / 0.5)`,
                  }}
                >
                  <Icon className="h-7 w-7" style={{ color: `hsl(${current.color})` }} />
                </div>
                <h3 className="text-3xl font-bold mb-3">{current.name}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{current.desc}</p>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                  style={{
                    background: `hsl(${current.color} / 0.15)`,
                    color: `hsl(${current.color})`,
                  }}
                >
                  Boosts {current.boost}
                </div>
              </div>

              {/* Real screenshot */}
              <div
                className="relative rounded-3xl overflow-hidden border border-white/10 mx-auto w-full max-w-[320px]"
                style={{ boxShadow: `0 20px 80px hsl(${current.color} / 0.35)` }}
              >
                <img
                  src={current.image}
                  alt={`${current.name} screenshot`}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BTGameModes;