import {
  AboutSection,
  AudienceSection,
  // FAQSection,
  Footer,
  HeroSection,
  Preloader,
  // ServicesSection,
  WorkSection,
  TestimonialSection,
} from '@/components';
import FloatingButton from '@/components/Common/FloatingButton';

export default function Home() {
  return (
    <main className="font-sans font-normal text-white">
      <Preloader />
      <HeroSection />
      <AboutSection />
      <AudienceSection />
      {/* <ServicesSection /> */}
      <TestimonialSection />
      <WorkSection />
      {/* <FAQSection /> */}
      <Footer />

      <FloatingButton />
    </main>
  );
}
