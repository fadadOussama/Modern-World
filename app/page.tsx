import Header from "@/components/header";
import Hero from "@/components/hero";
import ArchitecturesSection from "@/components/architectures";
import BuildingsSection from "@/components/buildings";
import TestimonialSection from "@/components/testimonial";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden text-mainText bg-mainBg">
      <Header />
      <Hero />
      <ArchitecturesSection />
      <BuildingsSection />
      <TestimonialSection />
      <FooterSection />
    </main>
  );
}
