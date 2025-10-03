import Script from "next/script";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jade Compass Studios",
    "url": "https://jadecompass.com",
    "logo": "https://jadecompass.com/logo.png",
    "description": "Jade Compass Studios creates memorable pixel-art adventures that blend classic gameplay with modern innovation.",
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/jadecompass",
      "https://discord.gg/jadecompass",
      "https://store.steampowered.com/developer/jadecompass"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "VideoGame",
          "name": "Relic Expedition: The Lost Temple",
          "description": "Navigate treacherous dungeons, solve ancient puzzles, and claim legendary treasures in this pixel-art roguelike adventure.",
          "genre": ["Adventure", "Roguelike", "Pixel Art"],
          "gamePlatform": ["PC", "Steam"],
          "applicationCategory": "Game"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "VideoGame",
          "name": "Astral Codex: Mystic Realms",
          "description": "Master arcane spells and forge alliances in a vast multiplayer world where magic shapes reality itself.",
          "genre": ["RPG", "Multiplayer", "Fantasy"],
          "gamePlatform": ["PC", "Steam"],
          "applicationCategory": "Game",
          "inLanguage": "en",
          "contentRating": "Teen"
        }
      }
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
      strategy="afterInteractive"
    />
  );
}