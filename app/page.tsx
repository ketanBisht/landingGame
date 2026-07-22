import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import GameGrid from '@/components/GameGrid';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <HeroSection />
      <GameGrid />
      <CTASection />
    </main>
  );
}
