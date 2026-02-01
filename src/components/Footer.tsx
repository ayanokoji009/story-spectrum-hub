import { Heart, BookOpen } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-8 border-t border-border/50 bg-gradient-to-t from-muted/30 to-transparent">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-foreground">BookVerse</span>
          </div>

          {/* Made with love */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-literature fill-literature" /> for curious minds
          </p>

          {/* Reading reminder */}
          <p className="text-sm text-muted-foreground">
            📚 Keep reading, keep growing!
          </p>
        </div>
      </div>
    </footer>
  );
}
