"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface GameCardProps {
  title: string;
  subtitle: string;
  description: string;
  status: "active" | "developing" | "coming-soon";
  imagePath?: string;
  delay?: number;
}

export default function GameCard({
  title,
  subtitle,
  description,
  status,
  imagePath,
  delay = 0,
}: GameCardProps) {
  const statusColors = {
    active: "border-jade-500 bg-jade-950/20",
    developing: "border-purple-500 bg-purple-950/20",
    "coming-soon": "border-gray-600 bg-gray-950/20",
  };

  const statusLabels = {
    active: "AVAILABLE NOW",
    developing: "IN DEVELOPMENT",
    "coming-soon": "COMING SOON",
  };

  const statusLabelColors = {
    active: "text-jade-400 bg-jade-950",
    developing: "text-purple-400 bg-purple-950",
    "coming-soon": "text-gray-400 bg-gray-950",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={cn(
        "relative group cursor-pointer",
        "border-2 p-6",
        statusColors[status],
        "transition-all duration-300",
        "hover:shadow-pixel-hover"
      )}
    >
      {/* Status Badge */}
      <div className="absolute -top-3 left-4 px-3 py-1">
        <span className={cn(
          "font-pixel text-xs px-2 py-1",
          statusLabelColors[status]
        )}>
          {statusLabels[status]}
        </span>
      </div>

      {/* Game Image Placeholder */}
      <div className="relative h-48 mb-4 bg-slate-900 rounded overflow-hidden">
        {imagePath ? (
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover pixel-art"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl opacity-20">
              {status === "active" ? "⚔️" : status === "developing" ? "🔮" : "❓"}
            </div>
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="font-pixel text-sm text-jade-400 group-hover:text-jade-300 transition-colors">
          {title}
        </h3>
        <p className="font-fantasy text-lg text-amber-500">
          {subtitle}
        </p>
        <p className="font-sans text-sm text-gray-400 line-clamp-3">
          {description}
        </p>
      </div>

      {/* Action Button */}
      {status === "active" && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 w-full py-2 bg-jade-600 hover:bg-jade-500 text-white font-pixel text-xs uppercase transition-colors"
        >
          Play Now
        </motion.button>
      )}
      {status === "developing" && (
        <button
          disabled
          className="mt-4 w-full py-2 bg-purple-900 text-purple-400 font-pixel text-xs uppercase opacity-50 cursor-not-allowed"
        >
          Coming Soon
        </button>
      )}
      {status === "coming-soon" && (
        <button
          disabled
          className="mt-4 w-full py-2 bg-gray-900 text-gray-500 font-pixel text-xs uppercase opacity-50 cursor-not-allowed"
        >
          TBA
        </button>
      )}
    </motion.div>
  );
}