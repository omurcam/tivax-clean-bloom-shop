
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-tivax-light to-tivax-soft-peach">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-tivax-primary opacity-10"></div>
        <div className="absolute bottom-12 left-1/3 w-24 h-24 rounded-full bg-tivax-orange opacity-10"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-tivax-blue opacity-10"></div>
      </div>

      <div className="container-custom relative z-10 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full mb-2">
              <span className="text-tivax-primary font-medium">Yeni Başlangıçlar</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Doğanın Gücüyle <span className="text-tivax-primary">Etkili ve Keyifli</span> Temizlik
            </h1>
            <p className="text-lg text-gray-700">
              Renkli, kokulu, doğal ve güçlü temizlik ürünlerimizle evinize bahar tazeliğini getirin. 
              Tivax ile temizlik artık bir keyif!
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button asChild className="btn-primary">
                <Link to="/products">
                  Şimdi Keşfet <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="btn-secondary">
                <Link to="/about">Hakkımızda</Link>
              </Button>
            </div>
            <div className="pt-4 flex items-center space-x-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-tivax-primary">%100</span>
                <span className="text-sm text-gray-600">Doğal İçerik</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-tivax-primary">14+</span>
                <span className="text-sm text-gray-600">Farklı Koku</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-tivax-primary">5000+</span>
                <span className="text-sm text-gray-600">Mutlu Müşteri</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-tivax-primary rounded-full blur-3xl opacity-20 transform -rotate-6"></div>
            <div className="relative bg-white p-3 rounded-2xl shadow-lg transform rotate-3 transition-all hover:rotate-0">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=800&h=800" 
                alt="Tivax Temizlik Ürünleri" 
                className="w-full h-auto rounded-xl" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-lg p-4 transform -rotate-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-tivax-orange"></div>
                  <div className="w-3 h-3 rounded-full bg-tivax-blue"></div>
                  <div className="w-3 h-3 rounded-full bg-tivax-primary"></div>
                  <div className="w-3 h-3 rounded-full bg-tivax-magenta"></div>
                </div>
                <p className="text-xs mt-1">Renkli ve Kokulu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
