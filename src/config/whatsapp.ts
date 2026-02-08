/**
 * Configuração central do WhatsApp - Neti & Bell
 * Número: +55 21 98420-6658
 * Para alterar o número no futuro, edite apenas este arquivo.
 */

/** Número no formato internacional sem espaços (para wa.me) */
export const WHATSAPP_NUMBER = '5521984206658';

/** Número formatado para exibição (ex: na página Contato) */
export const WHATSAPP_DISPLAY = '(21) 98420-6658';

/** Mensagem inicial padrão para pedidos */
export const WHATSAPP_DEFAULT_MESSAGE = 'Olá, gostaria de fazer um pedido 🎂';

/**
 * Gera o link para abrir conversa no WhatsApp (web e app).
 * @param message - Mensagem inicial (opcional). Se não informada, usa WHATSAPP_DEFAULT_MESSAGE.
 */
export function getWhatsAppUrl(message?: string): string {
  const text = message ?? WHATSAPP_DEFAULT_MESSAGE;
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
