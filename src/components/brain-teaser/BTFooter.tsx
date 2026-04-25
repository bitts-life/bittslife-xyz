import logo from "@/assets/bt-logo.png";

const BTFooter = () => {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-2 pointer-events-none select-none">
            <img src={logo} alt="Brain Teaser AI logo" width={36} height={36} className="h-9 w-9 rounded-lg object-cover" />
            <span className="font-bold">Brain Teaser <span className="bt-gradient-text">AI</span></span>
          </div>

          <nav className="flex gap-6 justify-center text-sm text-white/60">
            <span className="opacity-60 cursor-not-allowed select-none">Features</span>
            <span className="opacity-60 cursor-not-allowed select-none">Modes</span>
            <span className="opacity-60 cursor-not-allowed select-none">Waitlist</span>
          </nav>

          <div className="text-sm text-white/60 md:text-right">
            A project by{" "}
            <span className="bt-gradient-text font-semibold opacity-70 cursor-not-allowed select-none">
              bittslife.xyz
            </span>
          </div>
        </div>
        <div className="border-t border-white/5 mt-8 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Brain Teaser AI Game. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default BTFooter;