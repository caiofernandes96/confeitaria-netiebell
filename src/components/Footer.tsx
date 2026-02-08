import { Instagram, Phone, Mail, Heart } from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';
import { INSTAGRAM_URL } from '../config/instagram';

export function Footer() {
  return (
    <footer className="bg-[rgb(250,237,237)] py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif text-[rgb(101,67,33)] mb-4">
              Neti & Bell
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Transformando momentos especiais em doces memórias inesquecíveis.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-[rgb(101,67,33)] mb-4">
              Atendimento
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Segunda a Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 14h</p>
              <p className="text-xs italic mt-4">
                *Encomendas com 48h de antecedência
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-[rgb(101,67,33)] mb-4">
              Redes Sociais
            </h4>
            <div className="flex space-x-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[rgb(101,67,33)] hover:bg-[rgb(255,218,224)] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[rgb(101,67,33)] hover:bg-[rgb(255,218,224)] transition-colors"
              >
                <Phone size={20} />
              </a>
              <a
                href="mailto:sicaclay@gmail.com"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[rgb(101,67,33)] hover:bg-[rgb(255,218,224)] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgb(255,218,224)] mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 flex items-center justify-center">
            Feito com <Heart size={16} className="mx-1 text-[rgb(101,67,33)] fill-current" /> pela Neti & Bell © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
