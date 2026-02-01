import { Book, categories, CategoryId } from '@/data/books';
import { BookCard } from './BookCard';
import { cn } from '@/lib/utils';

interface CategoryColumnProps {
  categoryId: CategoryId;
  books: Book[];
  index: number;
}

const headerStyles: Record<CategoryId, string> = {
  science: 'bg-science',
  literature: 'bg-literature',
  history: 'bg-history',
  technology: 'bg-technology',
  'self-development': 'bg-self-dev',
};

const columnBgStyles: Record<CategoryId, string> = {
  science: 'bg-science-light/50',
  literature: 'bg-literature-light/50',
  history: 'bg-history-light/50',
  technology: 'bg-technology-light/50',
  'self-development': 'bg-self-dev-light/50',
};

export function CategoryColumn({ categoryId, books, index }: CategoryColumnProps) {
  const category = categories.find((c) => c.id === categoryId);
  if (!category) return null;

  return (
    <div
      className={cn(
        'category-column min-w-[300px] md:min-w-0',
        columnBgStyles[categoryId],
        'animate-fade-in-up'
      )}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Category Header */}
      <div
        className={cn(
          'category-header flex items-center justify-center gap-2',
          headerStyles[categoryId],
          'shadow-lg hover:shadow-xl transition-shadow duration-300',
          'hover:scale-105 transform transition-transform cursor-default'
        )}
      >
        <span className="text-2xl animate-bounce-slow">{category.icon}</span>
        <span className="text-lg">{category.label}</span>
      </div>

      {/* Books */}
      <div className="flex flex-col gap-4 mt-4">
        {books.map((book, bookIndex) => (
          <BookCard key={book.id} book={book} index={bookIndex} />
        ))}
      </div>
    </div>
  );
}
