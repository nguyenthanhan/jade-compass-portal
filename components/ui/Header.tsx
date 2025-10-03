import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-sm border-b-2 border-jade-600">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 animate-float">
              <div className="absolute inset-0 bg-jade-500 rounded-sm rotate-45 group-hover:animate-glow"></div>
              <div className="absolute inset-0 bg-jade-600 rounded-sm rotate-45 scale-75"></div>
            </div>
            <span className="font-pixel text-xs text-jade-400 group-hover:text-jade-300 transition-colors">
              JADE COMPASS
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <Link 
              href="#games" 
              className="font-pixel text-xs text-gray-400 hover:text-jade-400 transition-colors uppercase"
            >
              Games
            </Link>
            <Link 
              href="#about" 
              className="font-pixel text-xs text-gray-400 hover:text-jade-400 transition-colors uppercase"
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="font-pixel text-xs text-gray-400 hover:text-jade-400 transition-colors uppercase"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}