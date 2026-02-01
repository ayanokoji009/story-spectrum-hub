import { books, categories, CategoryId } from '@/data/books';
import { CategoryColumn } from './CategoryColumn';

export function BookGrid() {
  const booksByCategory = categories.reduce((acc, category) => {
    acc[category.id] = books.filter((book) => book.category === category.id);
    return acc;
  }, {} as Record<CategoryId, typeof books>);

  return (
    <section className="container pb-20">
      {/* Desktop: Column Layout */}
      <div className="hidden lg:grid lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <CategoryColumn
            key={category.id}
            categoryId={category.id}
            books={booksByCategory[category.id]}
            index={index}
          />
        ))}
      </div>

      {/* Tablet: 3 Column Grid */}
      <div className="hidden md:grid md:grid-cols-3 lg:hidden gap-6">
        {categories.map((category, index) => (
          <CategoryColumn
            key={category.id}
            categoryId={category.id}
            books={booksByCategory[category.id]}
            index={index}
          />
        ))}
      </div>

      {/* Mobile: Horizontal Scroll */}
      <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
        <div className="flex gap-4" style={{ width: 'max-content' }}>
          {categories.map((category, index) => (
            <CategoryColumn
              key={category.id}
              categoryId={category.id}
              books={booksByCategory[category.id]}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint for mobile */}
      <div className="md:hidden text-center mt-4">
        <p className="text-sm text-muted-foreground animate-pulse-soft">
          ← Swipe to explore more categories →
        </p>
      </div>
    </section>
  );
}
