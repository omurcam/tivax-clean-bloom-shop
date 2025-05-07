
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
      name: "Tivax Ferah Lavanta",
      category: "Yüzey Temizleyici",
      description: "Lavanta aromalı yüzey temizleyici, ferahlık ve parlaklık sağlar.",
      price: 89.90,
      oldPrice: 119.90,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=400&h=400",
      rating: 4.9,
      isBestSeller: true
    },
    {
      id: "2",
      name: "Tivax Limon Çiçeği",
      category: "Mutfak Temizleyici",
      description: "Güçlü yağ çözücü formülü ve limon çiçeği kokusuyla mutfağınızı yeniler.",
      price: 99.90,
      image: "https://images.unsplash.com/photo-1618160702425-614595a8bc4e?auto=format&fit=crop&q=80&w=400&h=400",
      rating: 4.7,
      isNew: true
    },
    {
      id: "3",
      name: "Tivax Okyanus Esintisi",
      category: "Banyo Temizleyici",
      description: "Kireç ve sabun kalıntılarıyla mücadele eder, banyo yüzeylerinizi parlatır.",
      price: 79.90,
      oldPrice: 94.90,
      image: "https://images.unsplash.com/photo-1616876195047-522271a959ef?auto=format&fit=crop&q=80&w=400&h=400",
      rating: 4.8
    },
    {
      id: "4",
      name: "Tivax Çam Ormanı",
      category: "Yer Temizleyici",
      description: "Çam ferahlığıyla zemin temizliği, kalıcı parlaklık ve hoş koku sağlar.",
      price: 109.90,
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
