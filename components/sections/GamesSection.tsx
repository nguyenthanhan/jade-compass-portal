import GameCard from "@/components/ui/GameCard";

const games = [
  {
    title: "RELIC EXPEDITION",
    subtitle: "The Lost Temple",
    description: "Navigate treacherous dungeons, solve ancient puzzles, and claim legendary treasures in this pixel-art roguelike adventure.",
    status: "active" as const,
  },
  {
    title: "ASTRAL CODEX", 
    subtitle: "Mystic Realms",
    description: "Master arcane spells and forge alliances in a vast multiplayer world where magic shapes reality itself.",
    status: "developing" as const,
  },
  {
    title: "PROJECT AURORA",
    subtitle: "Coming 2025",
    description: "A mysterious new adventure awaits. Details will be revealed soon.",
    status: "coming-soon" as const,
  },
  {
    title: "UNTITLED PROJECT",
    subtitle: "TBA",
    description: "Something special is brewing in our studios. Stay tuned for announcements.",
    status: "coming-soon" as const,
  },
  {
    title: "UNTITLED PROJECT",
    subtitle: "TBA", 
    description: "Another exciting project in early conceptualization. Follow us for updates.",
    status: "coming-soon" as const,
  },
];

export default function GamesSection() {
  return (
    <section id="games" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-pixel text-2xl md:text-3xl text-jade-400 mb-4">
            GAME COLLECTION
          </h2>
          <p className="font-fantasy text-xl text-amber-500">
            Choose Your Adventure
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <GameCard
              key={index}
              {...game}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}