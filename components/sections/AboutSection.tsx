"use client";

import { motion } from "framer-motion";
import { Map, Compass, Gem, Sword } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Map,
      title: "Vast Worlds",
      description: "Explore hand-crafted pixel realms filled with secrets and mysteries.",
    },
    {
      icon: Compass,
      title: "Epic Quests",
      description: "Embark on legendary adventures that shape the fate of mystical lands.",
    },
    {
      icon: Gem,
      title: "Ancient Relics",
      description: "Discover powerful artifacts that unlock new abilities and paths.",
    },
    {
      icon: Sword,
      title: "Strategic Combat",
      description: "Master tactical battles with unique mechanics and challenging foes.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-pixel text-2xl md:text-3xl text-jade-400 mb-4">
            ABOUT THE FRANCHISE
          </h2>
          <p className="font-fantasy text-xl text-amber-500">
            Forged in Pixels, Bound by Legend
          </p>
        </motion.div>

        {/* RPG Dialogue Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rpg-box max-w-4xl mx-auto mb-16"
        >
          <div className="flex items-start gap-4">
            {/* Character Portrait Placeholder */}
            <div className="w-20 h-20 bg-jade-600 rounded-sm flex-shrink-0 flex items-center justify-center">
              <span className="text-4xl">🧙</span>
            </div>
            
            {/* Dialogue Content */}
            <div className="flex-1">
              <p className="font-pixel text-xs text-jade-400 mb-2">
                SAGE ELDRIN
              </p>
              <p className="font-sans text-gray-200 leading-relaxed">
                "Welcome, traveler, to the Jade Compass universe! For generations, 
                adventurers like you have sought the legendary artifacts hidden across 
                our mystical realms. Each journey is unique, each choice matters, 
                and every pixel tells a story. Whether you seek glory in the dungeons 
                of Relic Expedition or master the arcane arts in Astral Codex, 
                your legend begins here."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="pixel-frame text-center group hover:border-jade-400 transition-colors"
              >
                <div className="mb-4 flex justify-center">
                  <Icon 
                    size={32} 
                    className="text-jade-500 group-hover:text-jade-400 transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-pixel text-xs text-jade-400 mb-2">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Studio Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="font-fantasy text-lg text-amber-500 mb-4">
            Crafted with Passion Since 2024
          </p>
          <p className="font-sans text-gray-400 max-w-2xl mx-auto">
            Jade Compass Studios is dedicated to creating memorable pixel-art 
            adventures that blend classic gameplay with modern innovation. 
            Every game is a labor of love, designed to capture the magic of 
            retro gaming while pushing the boundaries of interactive storytelling.
          </p>
        </motion.div>
      </div>
    </section>
  );
}