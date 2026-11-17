import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import Integration from "@/components/landing/integration";
import Navbar from "@/components/landing/nav";
import Pricing from "@/components/landing/pricing";
import SocialProof from "@/components/landing/social";

const Page = () => {
  return (
    <main className="w-full flex-col relative z-10">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <Integration />
      <Pricing />
    </main>
  );
};

export default Page;
