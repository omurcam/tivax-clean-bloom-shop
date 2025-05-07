
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  rating: number;
  comment: string;
  productName: string;
}

const Testimonials = () => {
  const [testimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Ayşe Yılmaz",
      position: "Ev Hanımı",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 5,
      comment: "Tivax ürünlerini kullanmaya başladığımdan beri temizlik yapmak çok daha keyifli. Lavanta kokusu favorim, evin her yerinde kalıcı bir koku bırakıyor.",
      productName: "Lavanta Ferahlığı Yüzey Temizleyici"
    },
    {
      id: 2,
      name: "Mehmet Kaya",
      position: "İç Mimar",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      comment: "Doğal içerikli temizleyiciler arıyordum ve Tivax tam aradığım gibi. Hem etkili temizliyor hem de kimyasal koku bırakmıyor. Müşterilerime de öneriyorum.",
      productName: "Çam Ferahlığı Yer Temizleyici"
    },
    {
      id: 3,
      name: "Zeynep Demir",
      position: "Öğretmen",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      comment: "Hassas cildim var ve birçok temizlik ürününden tahriş oluyordum. Tivax'ı kullanmaya başladıktan sonra bu sorun tamamen ortadan kalktı. Üstelik temizlik gücünden ödün vermiyor.",
      productName: "Portakal Bahçesi Mutfak Temizleyici"
    },
    {
      id: 4,
      name: "Ali Tekin",
      position: "Restoran İşletmecisi",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
      rating: 5,
      comment: "Restoranımızda kullanmaya başladık ve müşterilerimizden olumlu geri bildirimler alıyoruz. Temizlik sonrası kalan hoş koku herkesin dikkatini çekiyor.",
      productName: "Limon Ferahlığı Yüzey Temizleyici"
    },
  ]);

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Müşterilerimiz <span className="text-tivax-primary">Ne Diyor?</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tivax ürünlerini kullanan binlerce memnun müşterimizden bazılarının görüşleri
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-hover border">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">{testimonial.productName}</div>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-4">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-sm">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-tivax-primary/10 px-4 py-2 rounded-lg">
            <p className="text-tivax-primary font-medium">
              4.8/5 ortalama puanla binlerce müşterimiz tarafından beğenilmektedir
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
