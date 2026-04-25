import { motion } from "framer-motion";
import { Star, Users } from "lucide-react";

const testimonials = [
  { name: "Rajat A.", role: "Beta Tester", text: "Genuinely addictive. Number Sequence ate my evening." },
  { name: "Dhruv M.", role: "Beta Tester", text: "The AI difficulty curve is uncanny — always just hard enough." },
  { name: "Umang V.", role: "Beta Tester", text: "First brain app I've actually opened daily. Streak: 14 days." },
];

const BTSocialProof = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 bt-glass rounded-full px-4 py-2 text-sm mb-4">
            <Users className="h-4 w-4" style={{ color: "hsl(var(--bt-cyan))" }} />
            Closed Beta in Progress
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Be among the <span className="bt-gradient-text">first testers</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bt-glow-card rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" style={{ color: "hsl(var(--bt-cyan))" }} />
                ))}
              </div>
              <blockquote className="text-white/80 mb-4">"{t.text}"</blockquote>
              <figcaption className="text-sm text-white/60">
                <span className="font-semibold text-white">{t.name}</span> · {t.role}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BTSocialProof;