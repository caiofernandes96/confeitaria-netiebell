import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
