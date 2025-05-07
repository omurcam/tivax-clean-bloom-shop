
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Menu, X, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const openWhatsApp = () => {
    const message = encodeURIComponent("Merhaba, Tivax ürünleri hakkında bilgi almak istiyorum.");
    window.open(`https://wa.me/905555555555?text=${message}`, '_blank');
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-md py-4"
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-display font-bold text-[#2E7D32]">TIVAX</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/products" 
              className={`font-medium transition-colors hover:text-[#2E7D32] ${
                isActive('/products') ? 'text-[#2E7D32]' : 'text-gray-700'
              }`}
            >
              Ürünler
            </Link>
            <Link 
              to="/packages" 
              className={`font-medium transition-colors hover:text-[#2E7D32] ${
                isActive('/packages') ? 'text-[#2E7D32]' : 'text-gray-700'
              }`}
            >
              Paketler
            </Link>
            <Link 
              to="/blog" 
              className={`font-medium transition-colors hover:text-[#2E7D32] ${
                isActive('/blog') ? 'text-[#2E7D32]' : 'text-gray-700'
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-[#2E7D32]">
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-700 hover:text-green-500"
              onClick={openWhatsApp}
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative text-gray-700 hover:text-[#2E7D32]"
              asChild
            >
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-[#FFC107] text-white">
                    {cartCount}
                  </Badge>
                )}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative text-gray-700"
              asChild
            >
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-[#FFC107] text-white">
                    {cartCount}
                  </Badge>
                )}
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/products" 
                className={`font-medium py-2 px-4 rounded-md ${
                  isActive('/products') 
                  ? 'bg-[#E8F5E9] text-[#2E7D32]' 
                  : 'hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Ürünler
              </Link>
              <Link 
                to="/packages" 
                className={`font-medium py-2 px-4 rounded-md ${
                  isActive('/packages') 
                  ? 'bg-[#E8F5E9] text-[#2E7D32]' 
                  : 'hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Paketler
              </Link>
              <Link 
                to="/blog" 
                className={`font-medium py-2 px-4 rounded-md ${
                  isActive('/blog') 
                  ? 'bg-[#E8F5E9] text-[#2E7D32]' 
                  : 'hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="pt-2 border-t border-gray-100">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-gray-700"
                  onClick={() => {
                    openWhatsApp();
                    setIsMenuOpen(false);
                  }}
                >
                  <MessageCircle className="h-5 w-5 mr-2" /> 
                  WhatsApp Destek
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-gray-700"
                >
                  <Search className="h-5 w-5 mr-2" /> 
                  Ürün Ara
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
