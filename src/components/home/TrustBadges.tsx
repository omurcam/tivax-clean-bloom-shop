
import { CreditCard, Calendar, Award, CheckCircle } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: <Calendar className="w-8 h-8 text-[#2E7D32]" />,
      title: "14 Gün İade Garantisi",
      description: "Tüm ürünlerde koşulsuz iade hakkı"
    },
    {
      icon: <Award className="w-8 h-8 text-[#2E7D32]" />,
      title: "Sertifikalı Organik",
      description: "Doğal kaynaklardan elde edilen içerikler"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-[#2E7D32]" />,
      title: "Güvenli Ödeme",
      description: "256-bit SSL şifrelemesi ile güvenli alışveriş"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#2E7D32]" />,
      title: "WhatsApp Desteği",
      description: "7/24 müşteri hizmetleri desteği"
    }
  ];

  return (
    <section className="bg-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-4 transition-transform hover:transform hover:scale-105"
            >
              <div className="p-3 bg-[#E8F5E9] rounded-full mb-3">
                {badge.icon}
              </div>
              <h3 className="font-bold text-lg mb-1">{badge.title}</h3>
              <p className="text-gray-600 text-sm">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
