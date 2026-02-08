import { Menu, X, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { getWhatsAppUrl } from '../config/whatsapp';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', value: 'home' },
    { label: 'Cardápio', value: 'menu' },
    { label: 'Sobre', value: 'about' },
    { label: 'Contato', value: 'contact' },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="text-2xl lg:text-3xl font-serif text-[rgb(101,67,33)]"
          >
            Neti & Bell
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`transition-colors ${
                  currentPage === item.value
                    ? 'text-[rgb(101,67,33)]'
                    : 'text-gray-600 hover:text-[rgb(101,67,33)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 bg-[rgb(101,67,33)] text-white px-6 py-3 rounded-full hover:bg-[rgb(80,50,20)] transition-colors"
          >
            <ShoppingBag size={18} />
            <span>Fazer Pedido</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-600"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    onNavigate(item.value);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 transition-colors ${
                    currentPage === item.value
                      ? 'text-[rgb(101,67,33)]'
                      : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[rgb(101,67,33)] text-white px-6 py-3 rounded-full"
              >
                <ShoppingBag size={18} />
                <span>Fazer Pedido</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
