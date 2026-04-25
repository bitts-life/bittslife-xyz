import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const LAUNCH_DATE = new Date("2026-05-01T00:00:00").getTime();

const useCountdown = () => {
  const [time, setTime] = useState(() => LAUNCH_DATE - Date.now());
  useEffect(() => {
    const i = setInterval(() => setTime(LAUNCH_DATE - Date.now()), 1000);
    return () => clearInterval(i);
  }, []);
  const t = Math.max(0, time);
  return {
    days: Math.floor(t / (1000 * 60 * 60 * 24)),
    hours: Math.floor((t / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((t / (1000 * 60)) % 60),
    seconds: Math.floor((t / 1000) % 60),
  };
};

const BTCountdown = () => {
  const { days, hours, minutes, seconds } = useCountdown();
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success("You're on the list! Opening WhatsApp to confirm your spot…");
    const msg = encodeURIComponent(`Hi! Add me to the Brain Teaser AI Game waitlist. Email: ${email}`);
    window.open(`https://wa.me/919672460166?text=${msg}`, "_blank", "noopener,noreferrer");
    setEmail("");
  };

  const cells = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <section id="waitlist" className="relative py-24 overflow-hidden">
      <div className="bt-orb h-96 w-96 left-1/4 top-1/2"
           style={{ background: "hsl(var(--bt-pink))" }} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bt-glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center"
        >
          <p className="text-sm tracking-widest uppercase text-white/60 mb-3">
            Launching Soon on Play Store
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="bt-gradient-text">Countdown to Launch</span>
          </h2>

          <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto mb-10">
            {cells.map((c) => (
              <div
                key={c.label}
                className="bt-glow-card rounded-2xl py-4 md:py-6"
              >
                <div className="text-3xl md:text-5xl font-extrabold bt-gradient-text tabular-nums">
                  {String(c.value).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm text-white/60 mt-1 uppercase tracking-wider">
                  {c.label}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for early access"
                className="w-full bt-glass rounded-full pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40"
              />
            </div>
            <button
              type="submit"
              className="bt-btn-primary rounded-full px-6 py-3 font-semibold inline-flex items-center justify-center gap-2"
            >
              Notify Me <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BTCountdown;