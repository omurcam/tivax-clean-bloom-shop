
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleWhatsAppClick = () => {
    if (isOpen) {
      const message = encodeURIComponent("Merhaba, Tivax ürünleri hakkında bilgi almak istiyorum.");
      window.open(`https://wa.me/905555555555?text=${message}`, '_blank');
    } else {
      setIsOpen(true);
    }
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-72 animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <div className="bg-green-500 p-2 rounded-full mr-2">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold">WhatsApp Destek</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-7 w-7" 
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Ürünler, siparişler veya herhangi bir soru için WhatsApp üzerinden 7/24 bize ulaşabilirsiniz.
          </p>
          <Button 
            className="w-full bg-green-500 hover:bg-green-600 text-white" 
            onClick={handleWhatsAppClick}
          >
            <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp ile Mesaj Gönder
          </Button>
        </div>
      )}
      
      <Button
        size="icon"
        onClick={handleWhatsAppClick}
        className={`h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg ${
          isOpen ? "bg-red-500 hover:bg-red-600" : ""
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default WhatsAppButton;
