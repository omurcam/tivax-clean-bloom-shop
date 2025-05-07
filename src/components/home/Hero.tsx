
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface SlideProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaLink: string;
}

const slides: SlideProps[] = [
  {
    title: "Anne'ler Günü İndirimi",
    subtitle: "Tüm ürünlerde %40 indirim fırsatını kaçırmayın",
    imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=1920&h=600",
    ctaLink: "/products/mothers-day",
  },
  {
    title: "İlk Siparişinizde %10 İndirim",
    subtitle: "Yeni müşterilerimize özel kupon kodu: MERHABA10",
    imageUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=1920&h=600",
    ctaLink: "/products/new-customer",
  },
  {
    title: "Bahar Temizliği Koleksiyonu",
    subtitle: "Yeni sezon ürünleri ile evinize bahar tazeliğini getirin",
    imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1920&h=600",
    ctaLink: "/products/spring-collection",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-4 w-full relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
              <div 
                className="w-full h-full rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(rgba(46, 125, 50, 0.3), rgba(46, 125, 50, 0.5)), url(${slide.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-tivax-primary/30 to-transparent"></div>
                <div className="absolute inset-0 bg-[url('/pine-texture.png')] opacity-20 mix-blend-overlay"></div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 sm:px-6 lg:px-8 max-w-4xl">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-lg text-white mb-6 max-w-xl mx-auto">
                    {slide.subtitle}
                  </p>
                  <Button asChild size="lg" className="bg-white text-[#2E7D32] hover:bg-[#FFC107] hover:text-white font-semibold px-8 rounded-full transform transition-transform hover:scale-105">
                    <Link to={slide.ctaLink}>
                      Şimdi Alışverişe Başla
                    </Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default Hero;
