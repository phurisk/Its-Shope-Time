import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HotDealsSection from '@/components/HotDealsSection';
import CategoriesSection from '@/components/CategoriesSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-background-white">
      <Header />
      <HeroSection />
      <HotDealsSection />
      <CategoriesSection />
      <ValuePropositionSection />
      <ReviewsSection />
      <Footer />
    </main>
  );
}

export default App;
