
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Facebook, Instagram, Twitter, Send } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Başarıyla kaydoldunuz!",
        description: "İlk siparişiniz için %10 indirim kuponu e-posta adresinize gönderildi.",
        duration: 3000,
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#E8F5E9] text-gray-800">
      <div className="container-custom pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand & Subscription Column */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold text-[#2E7D32]">TIVAX</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-xs">
              Doğanın gücüyle gelen etkili ve keyifli temizlik. Renkli, kokulu, doğal ve güçlü.
            </p>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2 text-[#2E7D32]">
                İlk siparişinizde %10 indirim kazanın!
              </h4>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="E-posta adresiniz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" className="bg-[#2E7D32] hover:bg-[#1b5e20]">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Alışveriş</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/products" className="text-gray-600 hover:text-[#2E7D32]">
                      Tüm Ürünler
                    </Link>
                  </li>
                  <li>
                    <Link to="/bestsellers" className="text-gray-600 hover:text-[#2E7D32]">
                      Çok Satanlar
                    </Link>
                  </li>
                  <li>
                    <Link to="/new-arrivals" className="text-gray-600 hover:text-[#2E7D32]">
                      Yeni Gelenler
                    </Link>
                  </li>
                  <li>
                    <Link to="/packages" className="text-gray-600 hover:text-[#2E7D32]">
                      Temizlik Paketleri
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Bilgi</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/about" className="text-gray-600 hover:text-[#2E7D32]">
                      Hakkımızda
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-gray-600 hover:text-[#2E7D32]">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-gray-600 hover:text-[#2E7D32]">
                      Sıkça Sorulan Sorular
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-600 hover:text-[#2E7D32]">
                      İletişim
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Yardım</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/shipping" className="text-gray-600 hover:text-[#2E7D32]">
                      Kargo & Teslimat
                    </Link>
                  </li>
                  <li>
                    <Link to="/returns" className="text-gray-600 hover:text-[#2E7D32]">
                      İade & Değişim
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-gray-600 hover:text-[#2E7D32]">
                      Gizlilik Politikası
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-gray-600 hover:text-[#2E7D32]">
                      Kullanım Şartları
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="mt-8 pt-6 border-t border-green-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Tivax. Tüm hakları saklıdır.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#2E7D32]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#2E7D32]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#2E7D32]">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
