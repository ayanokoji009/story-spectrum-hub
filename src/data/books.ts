export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  category: 'science' | 'literature' | 'history' | 'technology' | 'self-development';
}

export const books: Book[] = [
  // Science
  {
    id: 'sci-1',
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    description: 'Explore the universe from the Big Bang to black holes in this groundbreaking masterpiece.',
    coverUrl: '',
    category: 'science',
  },
  {
    id: 'sci-2',
    title: 'Cosmos',
    author: 'Carl Sagan',
    description: 'A journey through 15 billion years of cosmic evolution that will inspire wonder.',
    coverUrl: '',
    category: 'science',
  },
  {
    id: 'sci-3',
    title: 'The Origin of Species',
    author: 'Charles Darwin',
    description: 'The revolutionary work that changed our understanding of life on Earth forever.',
    coverUrl: '',
    category: 'science',
  },

  // Literature
  {
    id: 'lit-1',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    description: 'A timeless tale of love, class, and the power of first impressions.',
    coverUrl: '',
    category: 'literature',
  },
  {
    id: 'lit-2',
    title: '1984',
    author: 'George Orwell',
    description: 'A chilling vision of a totalitarian future that remains hauntingly relevant.',
    coverUrl: '',
    category: 'literature',
  },
  {
    id: 'lit-3',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description: 'A powerful story of racial injustice and moral growth in the American South.',
    coverUrl: '',
    category: 'literature',
  },

  // History
  {
    id: 'hist-1',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    description: 'A sweeping narrative of human history from stone age to silicon age.',
    coverUrl: '',
    category: 'history',
  },
  {
    id: 'hist-2',
    title: 'The Art of War',
    author: 'Sun Tzu',
    description: 'Ancient Chinese wisdom on strategy that transcends military applications.',
    coverUrl: '',
    category: 'history',
  },
  {
    id: 'hist-3',
    title: 'Guns, Germs, and Steel',
    author: 'Jared Diamond',
    description: 'Why did history unfold differently on different continents? Find out here.',
    coverUrl: '',
    category: 'history',
  },

  // Technology
  {
    id: 'tech-1',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    description: 'The programmer\'s handbook for writing elegant, maintainable software.',
    coverUrl: '',
    category: 'technology',
  },
  {
    id: 'tech-2',
    title: 'The Innovators',
    author: 'Walter Isaacson',
    description: 'The story of the hackers, geniuses, and geeks who created the digital revolution.',
    coverUrl: '',
    category: 'technology',
  },
  {
    id: 'tech-3',
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    description: 'The exclusive biography of the visionary who changed technology forever.',
    coverUrl: '',
    category: 'technology',
  },

  // Self-Development
  {
    id: 'self-1',
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'Tiny changes that lead to remarkable results. Transform your life one habit at a time.',
    coverUrl: '',
    category: 'self-development',
  },
  {
    id: 'self-2',
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen Covey',
    description: 'Powerful lessons in personal change that have inspired millions worldwide.',
    coverUrl: '',
    category: 'self-development',
  },
  {
    id: 'self-3',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    description: 'A Nobel laureate reveals the two systems that drive the way we think.',
    coverUrl: '',
    category: 'self-development',
  },
];

export const categories = [
  { id: 'science', label: 'Science', icon: '🔬', colorClass: 'science' },
  { id: 'literature', label: 'Literature', icon: '📚', colorClass: 'literature' },
  { id: 'history', label: 'History', icon: '🏛️', colorClass: 'history' },
  { id: 'technology', label: 'Technology', icon: '💻', colorClass: 'technology' },
  { id: 'self-development', label: 'Self-Development', icon: '🌱', colorClass: 'selfdev' },
] as const;

export type CategoryId = typeof categories[number]['id'];
