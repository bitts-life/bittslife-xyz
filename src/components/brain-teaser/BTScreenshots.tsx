import { motion } from "framer-motion";
import home from "@/assets/bt-home.png";
import mini from "@/assets/bt-minigames.png";
import number from "@/assets/bt-numbergame.png";
import app from "@/assets/bt-app-screen.png";
import play from "@/assets/bt-playstore.png";

const shots = [
  { src: home, alt: "Brain Teaser home screen" },
  { src: app, alt: "App dashboard" },
  { src: mini, alt: "Mini-games hub with 10 games" },
  { src: number, alt: "Number sequence puzzle" },
  { src: play, alt: "Brain Teaser AI on Google Play" },
];

const BTScreenshots = () => {
  return (
    <section id="preview" className="relative py-24 overflow-hidden">
      <div className="bt-orb h-[400px] w-[400px] left-0 top-1/2"
           style={{ background: "hsl(var(--bt-purple))" }} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-white/50 mb-3">App Preview</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            See it <span className="bt-gradient-text">in motion</span>
          </h2>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none px-2">
          {shots.map((s, i) => (
            <motion.div
              key={s.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="snap-center flex-shrink-0 w-[260px] md:w-[300px] rounded-3xl overflow-hidden border border-white/10 bt-glow-card"
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="w-full h-auto block"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BTScreenshots;