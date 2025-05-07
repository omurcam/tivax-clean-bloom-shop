
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import PromoBanner from "@/components/home/PromoBanner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import ProductGrid from "@/components/home/ProductGrid";
import SocialProof from "@/components/home/SocialProof";
import TrustBadges from "@/components/home/TrustBadges";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import ProductCategories from "@/components/home/ProductCategories";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <PromoBanner />
      <ProductGrid />
      <ProductCategories />
      <FeaturedProducts />
      <SocialProof />
      <TrustBadges />
      <WhatsAppButton />
    </Layout>
  );
};

export default Index;
