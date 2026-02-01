import { Header } from '@/components/Header';
import { BookGrid } from '@/components/BookGrid';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <BookGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
