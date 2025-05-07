
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ProductCategories = () => {
  const categories = [
    {
      id: "kitchen",
      name: "Mutfak Temizleyiciler",
      description: "Yağ ve kiri güçlü formüllerle çözer, mutfağınızı hijyenik ve kokulu yapar.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600&h=400",
      color: "bg-tivax-orange/10",
      borderColor: "border-tivax-orange",
      textColor: "text-tivax-orange"
    },
    {
      id: "bathroom",
      name: "Banyo Temizleyiciler",
      description: "Kireç, sabun kalıntıları ve küf ile mücadele eder, banyonuzu parlak ve taze tutar.",
      image: "https://plus.unsplash.com/premium_photo-1682092609255-088de685fea5?auto=format&fit=crop&q=80&w=600&h=400",
      color: "bg-tivax-blue/10",
      borderColor: "border-tivax-blue",
      textColor: "text-tivax-blue"
    },
    {
      id: "surface",
      name: "Yüzey Temizleyiciler",
      description: "Evinizin her yüzeyinde kullanabileceğiniz çok amaçlı, etkili çözümler.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=600&h=400",
      color: "bg-tivax-primary/10",
      borderColor: "border-tivax-primary",
      textColor: "text-tivax-primary"
    },
    {
      id: "floor",
      name: "Yer Temizleyiciler",
      description: "Zemininize zarar vermeden derinlemesine temizlik sağlar, parlaklık kazandırır.",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=600&h=400",
      color: "bg-tivax-magenta/10",
      borderColor: "border-tivax-magenta",
      textColor: "text-tivax-magenta"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ürün <span className="text-tivax-primary">Kategorilerimiz</span></h2>
          <p className="text-gray-600">
            Evinizin tüm alanları için özel olarak geliştirilmiş ürün çözümlerimizi keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className={`overflow-hidden card-hover border-2 ${category.borderColor} ${category.color}`}
            >
              <div className="relative h-48">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className={`text-xl font-semibold mb-2 ${category.textColor}`}>
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.description}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link 
                  to={`/products/${category.id}`} 
                  className={`inline-flex items-center text-sm font-medium ${category.textColor} hover:underline`}
                >
                  Ürünleri Keşfet <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
