
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

const PromoBanner = () => {
  const [cartTotal, setCartTotal] = useState(200);
  const [savedAmount, setSavedAmount] = useState(45);
  const freeShippingThreshold = 500;
  const progress = Math.min((cartTotal / freeShippingThreshold) * 100, 100);
  
  useEffect(() => {
    // This would normally be connected to your cart context/state
    const interval = setInterval(() => {
      // Demo: Simulate cart changes for demo purposes
      const randomChange = Math.random() > 0.5 ? 25 : -15;
      setCartTotal(prev => Math.max(100, Math.min(550, prev + randomChange)));
      setSavedAmount(prev => Math.max(10, prev + (randomChange > 0 ? 5 : -3)));
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="bg-[#E8F5E9] py-3 px-4 md:px-8 shadow-sm sticky top-16 z-20">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex-1 w-full">
            {cartTotal < freeShippingThreshold ? (
              <div className="text-center sm:text-left text-sm md:text-base text-[#2E7D32]">
                <span className="font-medium">₺{(freeShippingThreshold - cartTotal).toFixed(2)}</span> daha ekleyin, 
                <span className="font-bold"> ücretsiz kargo </span> 
                fırsatını kaçırmayın!
              </div>
            ) : (
              <div className="text-center sm:text-left text-sm md:text-base text-[#2E7D32] font-medium">
                Tebrikler! Siparişiniz ücretsiz kargo için uygun.
              </div>
            )}
            <Progress value={progress} className="h-2 mt-1 bg-white/50" indicatorClassName="bg-[#2E7D32]" />
          </div>
          <div className="text-[#2E7D32] text-sm md:text-base font-bold animate-pulse">
            Şimdiye kadar <span className="text-[#FFC107]">₺{savedAmount.toFixed(2)}</span> tasarruf ettiniz!
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
