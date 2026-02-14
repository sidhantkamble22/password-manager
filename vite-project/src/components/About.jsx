import React from "react";
import { Lock, ArrowRight, Shield, Zap, Heart } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050b1d] via-[#07142f] to-[#020617] text-white">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full 
          bg-white/5 border border-white/10 text-sm text-sky-400 backdrop-blur">
            <Lock size={16} />
            <span>Your credentials, always protected</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="text-sky-400">Password</span>
            <span className="text-green-400">-</span>
            <span className="text-gray-100">Manager</span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg mb-10">
            Store and manage your website credentials securely.
            Keep everything organized in one safe place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-600 
            transition font-semibold flex items-center gap-2 justify-center">
              Open Vault <ArrowRight size={18} />
            </button>

            <button className="px-8 py-3 rounded-full border border-green-400/40 
            text-green-400 hover:bg-green-400/10 transition font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ================= DEMO VAULT ================= */}
      <section className="flex justify-center px-6 pb-24">
        <div className="w-full max-w-2xl p-6 rounded-2xl 
        bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="flex justify-between mb-6">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="w-3 h-3 rounded-full bg-sky-500"></span>
            </div>
            <span className="text-xs text-gray-400">vault.encrypted</span>
          </div>

          {[
            ["G", "github.com", "john.dev", "bg-sky-500"],
            ["F", "figma.com", "john@design.co", "bg-emerald-500"],
            ["V", "vercel.com", "john_deploy", "bg-red-500"],
          ].map((i, idx) => (
            <div key={idx} className="mb-4 p-4 rounded-xl bg-[#0b1835]">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center font-bold ${i[3]}`}>
                    {i[0]}
                  </div>
                  <div>
                    <p>{i[1]}</p>
                    <p className="text-gray-400 text-sm">{i[2]}</p>
                  </div>
                </div>
                <p className="text-gray-400 tracking-widest">************</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <hr />
      {/* ================= FEATURES ================= */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sky-400 tracking-widest text-sm mb-3">FEATURES</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything you need to stay secure
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            A simple, powerful password manager to protect your digital life.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ["🔑", "Credential Storage"
                
              ],
              ["👁️", "Show / Hide Passwords"],
              ["🔍", "Quick Search"],
              ["🗂️", "Organized Vault"],
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 mb-6 rounded-xl bg-sky-500/20 flex items-center justify-center">
                  {f[0]}
                </div>
                <h3 className="font-semibold">{f[1]}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
        <hr />
      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div>
            <p className="text-green-400 tracking-widest text-sm mb-4">
              ABOUT PASSWORD-MANAGER
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              A password manager <br />
              that respects{" "}
              <span className="text-sky-400">simplicity</span>
            </h2>

            <p className="text-gray-400 mb-6 leading-relaxed">
              In a world where we juggle dozens of online accounts,
              remembering every password is impossible. Password-Manager
              was created to solve this problem with a clean, intuitive
              interface.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Whether it’s email, social media, developer tools, or banking
              portals — everything stays organized in one secure vault.
              No clutter. No complexity.
            </p>
          </div>

          {/* Right Cards */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-4">
              <Shield className="text-sky-400" />
              <div>
                <h4 className="font-semibold mb-2">Security First</h4>
                <p className="text-gray-400 text-sm">
                  Built with a security-first mindset to keep your credentials protected.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-4">
              <Zap className="text-green-400" />
              <div>
                <h4 className="font-semibold mb-2">Simple & Fast</h4>
                <p className="text-gray-400 text-sm">
                  No complicated setup. Access your credentials in seconds.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-4">
              <Heart className="text-red-400" />
              <div>
                <h4 className="font-semibold mb-2">Built for You</h4>
                <p className="text-gray-400 text-sm">
                  Designed for individuals who want clean and reliable password management.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
