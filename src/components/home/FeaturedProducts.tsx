
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

const FeaturedProducts = () => {
  const [products] = useState<Product[]>([
    {
      id: "1",
      name: "Çok Amaçlı Leke Çıkarıcı Portakallı 1 Litre",
      category: "Leke Çıkarıcı",
      description: "Portakal aromalı güçlü leke çıkarıcı, doğal formülü ile zorlu lekelere anında etki eder.",
      price: 129.90,
      oldPrice: 169.90,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=400&h=400",
      rating: 4.9,
      isBestSeller: true
    },
    {
      id: "2",
      name: "Çok Amaçlı Leke Çıkarıcı Çiçek Kokulu 500 ml",
      category: "Leke Çıkarıcı",
      description: "Çiçek kokulu, ekonomik boyutta leke çıkarıcı. Tüm yüzeylerde güvenle kullanılabilir.",
      price: 79.90,
      image: "https://images.unsplash.com/photo-1618160702425-614595a8bc4e?auto=format&fit=crop&q=80&w=400&h=400",
      rating: 4.7,
      isNew: true
    },
    {
      id: "3",
      name: "Ultra Güçlü Yağ Çözücü 1 Litre",
      category: "Yağ Çözücü",
      description: "Mutfak yüzeylerindeki en inatçı yağları çözen güçlü formül, yüzeyleri parlatır ve hijyen sağlar.",
      price: 149.90,
      oldPrice: 179.90,
      image: "https://images.unsplash.com/photo-1616876195047-522271a959ef?auto=format&fit=crop&q=80&w=400&h=400",
      rating: 4.8
    },
    {
      id: "4",
      name: "Banyo Temizleyici 500 ml",
      category: "Banyo Temizleyici",
      description: "Kireç, sabun kalıntıları ve küf ile mücadele eden güçlü banyo temizleyici.",
      price: 69.90,
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=400&h=400",
      rating: 4.6,
      isNew: true
    }
  ]);

  const handleAddToCart = (product: Product) => {
    toast({
      title: "Sepete Eklendi",
      description: `${product.name} sepetinize eklendi.`,
      duration: 3000,
    });
  };

  const handleAddToWishlist = (product: Product) => {
    toast({
      title: "İstek Listenize Eklendi",
      description: `${product.name} istek listenize eklendi.`,
      duration: 3000,
    });
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-wrap items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Öne Çıkan <span className="text-tivax-primary">Ürünler</span></h2>
            <p className="text-gray-600">
              En popüler ve sevilen temizlik ürünlerimizi keşfedin
            </p>
          </div>
          <Link to="/products" className="text-tivax-primary font-medium hover:underline mt-4 lg:mt-0">
            Tüm Ürünleri Gör →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="card-hover border bg-white overflow-hidden">
              <div className="relative">
                <Link to={`/products/${product.id}`}>
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Link>
                
                {product.isNew && (
                  <Badge className="absolute top-2 left-2 bg-tivax-blue">Yeni</Badge>
                )}
                
                {product.isBestSeller && (
                  <Badge className="absolute top-2 left-2 bg-tivax-orange">Çok Satan</Badge>
                )}
                
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white"
                  onClick={() => handleAddToWishlist(product)}
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-4">
                <Link to={`/products/${product.id}`} className="hover:text-tivax-primary">
                  <h3 className="font-semibold mb-1 line-clamp-1">{product.name}</h3>
                </Link>
                <div className="text-sm text-gray-500 mb-2">{product.category}</div>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">{product.description}</p>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="text-xs ml-1 text-gray-600">({product.rating})</span>
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="font-bold text-lg">{product.price.toFixed(2)} ₺</span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through text-sm ml-2">
                      {product.oldPrice.toFixed(2)} ₺
                    </span>
                  )}
                </div>
                <Button 
                  size="sm" 
                  className="bg-tivax-primary hover:bg-tivax-vivid"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="h-4 w-4 mr-1" /> Ekle
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
