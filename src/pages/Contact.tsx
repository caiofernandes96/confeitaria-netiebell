import { Phone, Mail, Instagram, Clock, MapPin } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../config/whatsapp';
import { INSTAGRAM_URL } from '../config/instagram';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const contactInfo = [
    {
      icon: Phone,
      title: 'WhatsApp',
      content: WHATSAPP_DISPLAY,
      link: getWhatsAppUrl(),
      action: 'Enviar mensagem'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@neti_e_bell',
      link: INSTAGRAM_URL,
      action: 'Seguir no Instagram'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'sicaclay@gmail.com',
      link: 'mailto:sicaclay@gmail.com',
      action: 'Enviar e-mail'
    }
  ];

  const schedule = [
    { day: 'Segunda a Sexta', hours: '9h às 18h' },
    { day: 'Sábado', hours: '9h às 14h' },
    { day: 'Domingo', hours: 'Fechado' }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(250,237,237)] to-[rgb(245,240,235)] py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-[rgb(101,67,33)] mb-4">
            Entre em Contato
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para transformar seu momento especial em uma doce memória
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all text-center"
                >
                  <div className="w-16 h-16 bg-[rgb(250,237,237)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon size={28} className="text-[rgb(101,67,33)]" />
                  </div>
                  <h3 className="text-xl font-serif text-[rgb(101,67,33)] mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{info.content}</p>
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[rgb(101,67,33)] text-white px-6 py-3 rounded-full hover:bg-[rgb(80,50,20)] transition-colors text-sm"
                  >
                    {info.action}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Schedule */}
            <div className="bg-[rgb(255,253,248)] p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[rgb(250,237,237)] rounded-full flex items-center justify-center mr-4">
                  <Clock size={24} className="text-[rgb(101,67,33)]" />
                </div>
                <h2 className="text-2xl font-serif text-[rgb(101,67,33)]">
                  Horário de Atendimento
                </h2>
              </div>
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-[rgb(250,237,237)] last:border-0"
                  >
                    <span className="text-gray-700">{item.day}</span>
                    <span className="text-[rgb(101,67,33)]">{item.hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 italic mt-6">
                * Encomendas devem ser feitas com 48h de antecedência
              </p>
            </div>

            {/* Location */}
            <div className="bg-[rgb(255,253,248)] p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[rgb(250,237,237)] rounded-full flex items-center justify-center mr-4">
                  <MapPin size={24} className="text-[rgb(101,67,33)]" />
                </div>
                <h2 className="text-2xl font-serif text-[rgb(101,67,33)]">
                  Localização
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Atendemos toda a região de Maricá e Niterói com entrega agendada.
              </p>
              <p className="text-gray-600 mb-6">
                Para retirada em nosso atelier, entre em contato para agendar o melhor horário.
              </p>
              <a
                href={getWhatsAppUrl('Olá! Gostaria de informações sobre entrega')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[rgb(101,67,33)] text-white px-6 py-3 rounded-full hover:bg-[rgb(80,50,20)] transition-colors text-sm"
              >
                Consultar Entrega
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 md:py-24 bg-[rgb(250,237,237)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[rgb(101,67,33)] mb-4">
              Siga no Instagram
            </h2>
            <p className="text-gray-600 mb-6">
              Acompanhe nossos trabalhos, novidades e promoções exclusivas
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              <Instagram size={24} />
              <span>@neti_e_bell</span>
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-2xl text-center">
            <p className="text-gray-600 mb-4">
              Veja nossas últimas criações e inspirações diretamente no Instagram!
            </p>
            <p className="text-sm text-gray-500">
              Stories diários | Bastidores | Dicas de confeitaria | Promoções
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[rgb(101,67,33)] mb-4">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                question: 'Qual a antecedência mínima para encomendas?',
                answer: 'Recomendamos fazer encomendas com pelo menos 48 horas de antecedência. Para bolos personalizados e eventos especiais, sugerimos 5 a 7 dias.'
              },
              {
                question: 'Fazem entregas?',
                answer: 'Sim! Realizamos entregas em toda a região de Maricá e Niterói. O valor e disponibilidade são consultados no momento do pedido via WhatsApp.'
              },
              {
                question: 'É possível personalizar os produtos?',
                answer: 'Com certeza! Trabalhamos com personalização completa de sabores, decoração, cores e temas. Entre em contato para criar algo único.'
              },
              {
                question: 'Trabalham com restrições alimentares?',
                answer: 'Sim, oferecemos opções sem glúten, sem lactose e veganas. Consulte-nos para verificar disponibilidade e sabores.'
              },
              {
                question: 'Como faço para realizar um pedido?',
                answer: 'É simples! Entre em contato pelo WhatsApp, descreva o que precisa e vamos criar a proposta perfeita para você.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-lg font-serif text-[rgb(101,67,33)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-[rgb(101,67,33)] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Pronto para fazer seu pedido?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Estamos ansiosos para criar algo especial para você
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[rgb(101,67,33)] px-8 py-4 rounded-full hover:bg-[rgb(250,237,237)] transition-colors"
          >
            Fazer Pedido Agora
          </a>
        </div>
      </section>
    </div>
  );
}
