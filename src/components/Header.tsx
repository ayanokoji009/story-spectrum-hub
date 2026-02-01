import { BookOpen, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="relative py-12 md:py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-science/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute -top-10 -right-20 w-96 h-96 bg-literature/20 rounded-full blur-3xl animate-pulse-soft stagger-2" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-technology/20 rounded-full blur-3xl animate-pulse-soft stagger-3" />
      </div>

      <div className="container relative z-10 text-center">
        {/* Logo & Title */}
        <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in-up">
          <div className="p-3 bg-primary rounded-2xl shadow-lg animate-float">
            <BookOpen className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-gradient">
            BookVerse
          </h1>
          <Sparkles className="w-6 h-6 text-history animate-wiggle" />
        </div>

        {/* Subtitle */}
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Discover amazing books that will expand your mind, ignite your imagination, 
          and transform your life. 
          <span className="text-primary font-semibold"> Start your reading adventure!</span>
        </p>

        {/* Category Pills */}
        <div 
          className="flex flex-wrap justify-center gap-2 mt-8 animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          {[
            { label: 'Science', color: 'bg-science', icon: '🔬' },
            { label: 'Literature', color: 'bg-literature', icon: '📚' },
            { label: 'History', color: 'bg-history', icon: '🏛️' },
            { label: 'Technology', color: 'bg-technology', icon: '💻' },
            { label: 'Self-Dev', color: 'bg-self-dev', icon: '🌱' },
          ].map((cat) => (
            <span
              key={cat.label}
              className={`${cat.color} text-white px-4 py-2 rounded-full text-sm font-semibold 
                shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 cursor-default
                flex items-center gap-1`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
