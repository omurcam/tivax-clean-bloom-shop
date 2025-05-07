
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md px-4">
        <h1 className="text-8xl font-bold text-tivax-primary mb-4">404</h1>
        <p className="text-2xl text-gray-700 mb-6">Sayfa Bulunamadı</p>
        <p className="text-gray-600 mb-8">
          Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanılamıyor olabilir.
        </p>
        <Button asChild className="btn-primary">
          <Link to="/">
            Ana Sayfaya Dön
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
