import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Eye } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

interface ProductFeature {
  name: string;
  icon: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  features: string[];
  badges?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

const ProductGrid = () => {
  const [products] = useState<Product[]>([
    {
      id: "1",
      name: "Çok Amaçlı Leke Çıkarıcı Portakallı 1 Litre",
      price: 129.90,
      oldPrice: 169.90,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=600&h=600",
      rating: 4.8,
      reviewCount: 126,
      features: ["Vegan", "Ekolojik", "Antibakteriyel"],
      isBestSeller: true
    },
    {
      id: "2",
      name: "Çok Amaçlı Leke Çıkarıcı Portakallı 500 ml",
      price: 79.90,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=600&h=600",
      rating: 4.9,
      reviewCount: 84,
      features: ["Portakal Kokulu", "Doğal", "Leke Çözücü"],
      isNew: true
    },
    {
      id: "3",
      name: "Çok Amaçlı Leke Çıkarıcı Çiçek Kokulu 1 Litre",
      price: 129.90,
      oldPrice: 149.90,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=600&h=600",
      rating: 4.7,
      reviewCount: 59,
      features: ["Çiçek Özlü", "Anti-Statik", "Parlatıcı"]
    },
    {
      id: "4",
      name: "Çok Amaçlı Leke Çıkarıcı Çiçek Kokulu 500 ml",
      price: 79.90,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=600&h=600",
      rating: 4.6,
      reviewCount: 47,
      features: ["Konsantre", "Ekonomik", "Çiçek Kokulu"],
      isNew: true
    },
    {
      id: "5",
      name: "Ultra Güçlü Yağ Çözücü 1 Litre",
      price: 149.90,
      oldPrice: 179.90,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=600&h=600",
      rating: 4.9,
      reviewCount: 103,
      features: ["Yağ Çözücü", "Güçlü Formül", "Mutfak İçin İdeal"]
    },
    {
      id: "6",
      name: "Ultra Güçlü Yağ Çözücü 500 ml",
      price: 89.90,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=600&h=600",
      rating: 4.8,
      reviewCount: 72,
      features: ["Yüksek Konsantre", "Lekelere Anında Etki", "Ekonomik"],
      isBestSeller: true
    }
  ]);

  const handleAddToCart = (product: Product) => {
    toast({
      title: "Sepete Eklendi",
      description: `${product.name} sepetinize eklendi.`,
      duration: 3000,
    });
  };

  const handleQuickBuy = (product: Product) => {
    toast({
      title: "Hızlı Satın Alma",
      description: "Ödeme sayfasına yönlendiriliyorsunuz...",
      duration: 3000,
    });
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">En Çok <span className="text-[#2E7D32]">Satan Ürünler</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Müşterilerimizin en çok tercih ettiği doğal ve etkili temizlik ürünleri
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group relative border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Link to={`/products/${product.id}`} className="block">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.isNew && (
                      <span className="px-2 py-1 bg-[#FFC107] text-white text-xs font-bold rounded-full">YENİ</span>
                    )}
                    {product.isBestSeller && (
                      <span className="px-2 py-1 bg-[#2E7D32] text-white text-xs font-bold rounded-full">ÇOK SATAN</span>
                    )}
                  </div>
                  
                  {/* Features on hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-2 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex justify-center items-center gap-2 text-sm text-[#2E7D32]">
                      {product.features.join(' • ')}
                    </div>
                  </div>
                </div>
              </Link>
              
              <div className="p-4">
                <Link to={`/products/${product.id}`} className="block hover:text-[#2E7D32]">
                  <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
                </Link>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="ml-1 text-sm text-gray-600">({product.reviewCount})</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">₺{product.price.toFixed(2)}</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ₺{product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white"
                    onClick={() => handleQuickBuy(product)}
                  >
                    <Eye className="h-4 w-4 mr-1" /> Hızlı Al
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-[#2E7D32] text-white hover:bg-[#1b5e20]"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" /> Sepete Ekle
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white">
            <Link to="/products">Tüm Ürünleri Gör</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
