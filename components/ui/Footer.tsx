export default function Footer() {
  return (
    <footer className="relative mt-32 border-t-2 border-jade-600 bg-slate-950">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <p className="font-pixel text-xs text-gray-400">
            © 2024 JADE COMPASS STUDIOS
          </p>
          <div className="flex gap-6">
            <a 
              href="#" 
              className="font-pixel text-xs text-gray-500 hover:text-jade-400 transition-colors"
            >
              TWITTER
            </a>
            <a 
              href="#" 
              className="font-pixel text-xs text-gray-500 hover:text-jade-400 transition-colors"
            >
              DISCORD
            </a>
            <a 
              href="#" 
              className="font-pixel text-xs text-gray-500 hover:text-jade-400 transition-colors"
            >
              STEAM
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}