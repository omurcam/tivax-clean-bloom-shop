
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  beforeImage?: string;
  afterImage?: string;
  productUsed: string;
}

const SocialProof = () => {
  const [testimonials] = useState<Testimonial[]>([
    {
      id: "1",
      name: "Ayşe Y.",
      avatar: "https://i.pravatar.cc/100?img=1",
      rating: 5,
      text: "Tivax'ın doğal temizleyicileriyle banyomdaki inatçı lekeler tamamen çıktı. Hem temizliyor hem de harika kokuyor!",
      beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=200&h=150",
      afterImage: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=200&h=150",
      productUsed: "Banyo Temizleyici"
    },
    {
      id: "2",
      name: "Mehmet K.",
      avatar: "https://i.pravatar.cc/100?img=2",
      rating: 4,
      text: "Yıllardır kimyasal temizlik ürünlerinden kaçıyordum. Tivax ile evimin her köşesi kimyasal koku olmadan tertemiz.",
      beforeImage: "https://images.unsplash.com/photo-1584728288497-e5f2f32d9380?auto=format&fit=crop&q=80&w=200&h=150",
      afterImage: "https://images.unsplash.com/photo-1594194526481-9280a788ece4?auto=format&fit=crop&q=80&w=200&h=150",
      productUsed: "Çok Amaçlı Temizleyici"
    },
    {
      id: "3",
      name: "Zeynep A.",
      avatar: "https://i.pravatar.cc/100?img=3",
      rating: 5,
      text: "Lavanta kokulu yüzey spreyi favorim oldu! Mobilyalar pırıl pırıl ve ev mis gibi kokuyor. Artık başka marka kullanmıyorum.",
      beforeImage: "https://images.unsplash.com/photo-1693949497234-70d94a5b3789?auto=format&fit=crop&q=80&w=200&h=150",
      afterImage: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=200&h=150",
      productUsed: "Lavanta Özlü Yüzey Spreyi"
    },
    {
      id: "4",
      name: "Can B.",
      avatar: "https://i.pravatar.cc/100?img=4",
      rating: 5,
      text: "Hassas cildim için mükemmel bir ürün! Artık bulaşık yıkarken eldiven kullanmama gerek yok. Hem temizliyor hem de ellerimi tahriş etmiyor.",
      beforeImage: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=200&h=150",
      afterImage: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=200&h=150",
      productUsed: "El ve Cilt Dostu Bulaşık Deterjanı"
    },
    {
      id: "5",
      name: "Deniz T.",
      avatar: "https://i.pravatar.cc/100?img=5",
      rating: 4,
      text: "Çocuklarım ve evcil hayvanlarım var, bu yüzden doğal temizlik ürünleri kullanmak zorundayım. Tivax'ın ürünleri hem güvenli hem de gerçekten etkili!",
      beforeImage: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=200&h=150",
      afterImage: "https://images.unsplash.com/photo-1618510068038-584c5f1eab29?auto=format&fit=crop&q=80&w=200&h=150",
      productUsed: "Doğal Zemin Temizleyici"
    }
  ]);

  return (
    <section className="bg-[#E8F5E9]/50 py-16 md:py-20">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Müşterilerimiz <span className="text-[#2E7D32]">Ne Diyor?</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Binlerce mutlu müşterimizin deneyimlerini ve sonuçlarını keşfedin
          </p>
        </div>

        <Carousel
          opts={{ 
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg p-5 shadow-md h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 flex-grow">"{testimonial.text}"</p>
                  
                  {(testimonial.beforeImage && testimonial.afterImage) && (
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Öncesi</p>
                        <div className="w-24 h-20 rounded-md overflow-hidden">
                          <img src={testimonial.beforeImage} alt="Öncesi" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-[#2E7D32]">→</div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Sonrası</p>
                        <div className="w-24 h-20 rounded-md overflow-hidden">
                          <img src={testimonial.afterImage} alt="Sonrası" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-auto pt-3 flex justify-between items-center text-sm border-t border-gray-100">
                    <span className="text-[#2E7D32] font-medium">
                      {testimonial.productUsed}
                    </span>
                    <span className="text-gray-500">
                      300+ değerlendirme
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 -translate-y-1/2" />
          <CarouselNext className="right-4 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export default SocialProof;
