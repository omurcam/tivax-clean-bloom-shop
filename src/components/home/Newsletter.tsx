
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Teşekkürler!",
        description: "Bültenimize başarıyla abone oldunuz.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="bg-tivax-light/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Kampanyalardan Haberdar Olun</h2>
            <p className="text-gray-600">
              Özel teklifler, indirimler ve yeni ürünlerden ilk siz haberdar olun.
              Bültenimize kayıt olarak %10 indirim kazanın.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="E-posta adresiniz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full px-6"
              required
            />
            <Button 
              type="submit" 
              className="bg-tivax-primary hover:bg-tivax-vivid text-white px-6 rounded-full"
              disabled={isLoading}
            >
              {isLoading ? "Gönderiliyor..." : "Abone Ol"}
            </Button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-4">
            Abone olarak <a href="/privacy" className="underline">Gizlilik Politikamızı</a> kabul etmiş olursunuz.
            Dilediğiniz zaman abonelikten çıkabilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
