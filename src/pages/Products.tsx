
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Heart, Eye, Filter, Star } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  features: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

const Products = () => {
  const [products] = useState<Product[]>([
    {
      id: "1",
      name: "Çok Amaçlı Leke Çıkarıcı Portakallı 1 Litre",
      category: "Leke Çıkarıcı",
      description: "Portakal aromalı güçlü leke çıkarıcı, doğal formülü ile zorlu lekelere anında etki eder.",
      price: 129.90,
      oldPrice: 169.90,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=600&h=600",
      rating: 4.8,
      reviewCount: 126,
      features: ["Vegan", "Ekolojik", "Antibakteriyel"],
      isBestSeller: true
    },
    {
      id: "2",
      name: "Çok Amaçlı Leke Çıkarıcı Portakallı 500 ml",
      category: "Leke Çıkarıcı",
      description: "Portakal aromalı güçlü leke çıkarıcı, ekonomik boyutta.",
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
      category: "Leke Çıkarıcı",
      description: "Çiçek kokulu güçlü leke çıkarıcı, bütün yüzeylerde güvenle kullanılabilir.",
      price: 129.90,
      oldPrice: 149.90,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=600&h=600",
      rating: 4.7,
      reviewCount: 59,
      features: ["Çiçek Özlü", "Anti-Statik", "Parlatıcı"],
      isNew: true
    },
    {
      id: "4",
      name: "Çok Amaçlı Leke Çıkarıcı Çiçek Kokulu 500 ml",
      category: "Leke Çıkarıcı",
      description: "Çiçek kokulu, ekonomik boyutta leke çıkarıcı. Tüm yüzeylerde güvenle kullanılabilir.",
      price: 79.90,
      image: "https://images.unsplash.com/photo-1618160702425-614595a8bc4e?auto=format&fit=crop&q=80&w=600&h=600",
      rating: 4.6,
      reviewCount: 47,
      features: ["Konsantre", "Ekonomik", "Çiçek Kokulu"]
    },
    {
      id: "5",
      name: "Ultra Güçlü Yağ Çözücü 1 Litre",
      category: "Yağ Çözücü",
      description: "Mutfak yüzeylerindeki en inatçı yağları çözen güçlü formül, yüzeyleri parlatır ve hijyen sağlar.",
      price: 149.90,
      oldPrice: 179.90,
      image: "https://images.unsplash.com/photo-1616876195047-522271a959ef?auto=format&fit=crop&q=80&w=600&h=600",
      rating: 4.9,
      reviewCount: 103,
      features: ["Yağ Çözücü", "Güçlü Formül", "Mutfak İçin İdeal"],
      isBestSeller: true
    },
    {
      id: "6",
      name: "Ultra Güçlü Yağ Çözücü 500 ml",
      category: "Yağ Çözücü",
      description: "Mutfak yüzeylerindeki en inatçı yağları çözen ekonomik formül.",
      price: 89.90,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=600&h=600",
      rating: 4.8,
      reviewCount: 72,
      features: ["Yüksek Konsantre", "Lekelere Anında Etki", "Ekonomik"]
    },
    {
      id: "7",
      name: "Banyo Temizleyici 1 Litre",
      category: "Banyo Temizleyici",
      description: "Kireç, sabun kalıntıları ve küf ile mücadele eden güçlü banyo temizleyici. Banyonuzu hijyenik ve parlak tutar.",
      price: 119.90,
      oldPrice: 139.90,
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=600&h=600",
      rating: 4.7,
      reviewCount: 68,
      features: ["Kireç Çözücü", "Küf Önleyici", "Hoş Kokulu"],
      isNew: true
    },
    {
      id: "8",
      name: "Banyo Temizleyici 500 ml",
      category: "Banyo Temizleyici",
      description: "Kireç, sabun kalıntıları ve küf ile mücadele eden ekonomik banyo temizleyici.",
      price: 69.90,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=600&h=600",
      rating: 4.6,
      reviewCount: 47,
      features: ["Kireç Çözücü", "Küf Önleyici", "Ekonomik Boy"]
    }
  ]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [...new Set(products.map(product => product.category))];
  
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory) 
    : products;
    
  const productsPerPage = 6;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

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

  const handleAddToWishlist = (product: Product) => {
    toast({
      title: "İstek Listenize Eklendi",
      description: `${product.name} istek listenize eklendi.`,
      duration: 3000,
    });
  };

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <Layout>
      <div className="bg-[#E8F5E9] py-10 mb-8">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Temizlik <span className="text-[#2E7D32]">Ürünlerimiz</span></h1>
          <p className="text-gray-600">
            Doğal, etkili ve güçlü temizlik ürünlerimizi keşfedin
          </p>
        </div>
      </div>
      
      <div className="container-custom mb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold flex items-center mb-4">
                  <Filter className="w-5 h-5 mr-2 text-[#2E7D32]" />
                  Kategoriler
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange(null)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === null 
                        ? 'bg-[#2E7D32] text-white' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    Tüm Ürünler
                  </button>
                  
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category 
                          ? 'bg-[#2E7D32] text-white' 
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Product List */}
          <div className="w-full lg:w-3/4">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="text-xl font-semibold">{selectedCategory || 'Tüm Ürünler'}</h2>
                <p className="text-gray-500 text-sm">{filteredProducts.length} ürün bulundu</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
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
                          <Badge className="px-2 py-1 bg-[#FFC107] text-white text-xs font-bold">YENİ</Badge>
                        )}
                        {product.isBestSeller && (
                          <Badge className="px-2 py-1 bg-[#2E7D32] text-white text-xs font-bold">ÇOK SATAN</Badge>
                        )}
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleAddToWishlist(product);
                        }}
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      
                      {/* Features on hover */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-2 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="flex justify-center items-center gap-2 text-sm text-[#2E7D32]">
                          {product.features.join(' • ')}
                        </div>
                      </div>
                    </div>
                  </Link>
                  
                  <CardContent className="p-4">
                    <Link to={`/products/${product.id}`} className="block hover:text-[#2E7D32]">
                      <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
                    </Link>
                    
                    <div className="text-sm text-gray-500 mb-2">{product.category}</div>
                    
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
                  </CardContent>
                  
                  <CardFooter className="p-4 pt-0">
                    <div className="flex items-center gap-2 w-full">
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
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                      />
                    </PaginationItem>
                    
                    {[...Array(totalPages)].map((_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink 
                          onClick={() => setCurrentPage(i + 1)}
                          isActive={currentPage === i + 1}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
