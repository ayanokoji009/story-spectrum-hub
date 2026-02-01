import { Book, CategoryId } from '@/data/books';
import { cn } from '@/lib/utils';

interface BookCardProps {
  book: Book;
  index: number;
}

const categoryStyles: Record<CategoryId, { bg: string; border: string; text: string }> = {
  science: {
    bg: 'bg-science-light',
    border: 'border-science/30',
    text: 'text-science-foreground',
  },
  literature: {
    bg: 'bg-literature-light',
    border: 'border-literature/30',
    text: 'text-literature-foreground',
  },
  history: {
    bg: 'bg-history-light',
    border: 'border-history/30',
    text: 'text-history-foreground',
  },
  technology: {
    bg: 'bg-technology-light',
    border: 'border-technology/30',
    text: 'text-technology-foreground',
  },
  'self-development': {
    bg: 'bg-self-dev-light',
    border: 'border-self-dev/30',
    text: 'text-self-dev-foreground',
  },
};

const categoryGradients: Record<CategoryId, string> = {
  science: 'from-science/80 to-science',
  literature: 'from-literature/80 to-literature',
  history: 'from-history/80 to-history',
  technology: 'from-technology/80 to-technology',
  'self-development': 'from-selfdev/80 to-selfdev',
};

export function BookCard({ book, index }: BookCardProps) {
  const styles = categoryStyles[book.category];
  const gradient = categoryGradients[book.category];

  return (
    <div
      className={cn(
        'book-card group cursor-pointer border-2',
        styles.bg,
        styles.border,
        'animate-fade-in-up'
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Book Cover Placeholder */}
      <div
        className={cn(
          'relative h-40 rounded-xl mb-4 overflow-hidden',
          'bg-gradient-to-br',
          gradient,
          'flex items-center justify-center',
          'shadow-lg group-hover:shadow-xl transition-shadow duration-300'
        )}
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
          📖
        </span>
        
        {/* Decorative elements */}
        <div className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full animate-pulse-soft" />
        <div className="absolute bottom-2 left-2 w-4 h-4 bg-white/20 rounded-full animate-pulse-soft stagger-2" />
      </div>

      {/* Book Info */}
      <div className="space-y-2">
        <h3 className={cn(
          'font-display font-bold text-lg leading-tight',
          'group-hover:translate-x-1 transition-transform duration-200',
          styles.text
        )}>
          {book.title}
        </h3>
        
        <p className="text-sm font-medium text-muted-foreground">
          by {book.author}
        </p>
        
        <p className={cn(
          'text-sm leading-relaxed',
          styles.text,
          'opacity-80'
        )}>
          {book.description}
        </p>
      </div>

      {/* Hover indicator */}
      <div className={cn(
        'absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl',
        'bg-gradient-to-r',
        gradient,
        'transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'
      )} />
    </div>
  );
}
