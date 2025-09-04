import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SocialProof from '@/components/sections/SocialProof';
import GalleryShowcase from '@/components/sections/GalleryShowcase';
import ProcessOverview from '@/components/sections/ProcessOverview';
import WhyGermanKitchens from '@/components/sections/WhyGermanKitchens';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SocialProof />
      <GalleryShowcase />
      <ProcessOverview />
      <WhyGermanKitchens />
      <Footer />
    </main>
  );
}