import image_cedabca7d6773d9429a82818e36b9c260e31bd0b from 'figma:asset/cedabca7d6773d9429a82818e36b9c260e31bd0b.png';
import image_bd112575efa905d7be4fc820c259d4e51e3998a0 from 'figma:asset/bd112575efa905d7be4fc820c259d4e51e3998a0.png';
import image_3be16b7b88fd63a812b84554a2e034c13d588d04 from 'figma:asset/3be16b7b88fd63a812b84554a2e034c13d588d04.png';
import image_4320051a929fcdce2fc38984af97265aa077b3ab from 'figma:asset/4320051a929fcdce2fc38984af97265aa077b3ab.png';
import image_37852c412ed77ad37be926276b235135c8368017 from 'figma:asset/37852c412ed77ad37be926276b235135c8368017.png';
import image_5a74e50d4376c3f07f6ce5faf89251ac3ecfbc79 from 'figma:asset/5a74e50d4376c3f07f6ce5faf89251ac3ecfbc79.png';
import image_3118e070a569a59718d0447f2aeda09df3d55109 from 'figma:asset/3118e070a569a59718d0447f2aeda09df3d55109.png';
import image_fa1d8a0102d9eb07992de109db9248eae1e04d7a from 'figma:asset/fa1d8a0102d9eb07992de109db9248eae1e04d7a.png';
import image_2162c3a7c055ad1eb1bd65818a3092c6c82d1f1a from 'figma:asset/2162c3a7c055ad1eb1bd65818a3092c6c82d1f1a.png';
import bannerDesktop from '../assets/hero.png';
import bannerMobile from '../assets/banner-mobile.png';
import docesGourmetImage from '../assets/doces-gourmet.jpg.jpg';
import { getWhatsAppUrl } from '../config/whatsapp';
import { INSTAGRAM_URL } from '../config/instagram';
import { Instagram, ArrowRight } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const products = [
    {
      title: 'Bolos Decorados',
      description: 'Bolos personalizados para todas as ocasiões, feitos com carinho e ingredientes selecionados.',
      imageUrl: image_bd112575efa905d7be4fc820c259d4e51e3998a0,
      imageAlt: 'Bolo decorado elegante'
    },
    {
      title: 'Doces Gourmet',
      description: 'Brigadeiros, beijinhos, cajuzinhos e muito mais, com sabores exclusivos e apresentação impecável.',
      imageUrl: docesGourmetImage,
      imageAlt: 'Doces gourmet artesanais'
    },
    {
      title: 'Sobremesas em Pote',
      description: 'Mousses, pavês e tortas em porções individuais, perfeitas para presentear ou saborear.',
      imageUrl: image_5a74e50d4376c3f07f6ce5faf89251ac3ecfbc79,
      imageAlt: 'Sobremesas em potes de vidro'
    },
    {
      title: 'Kits Festa',
      description: 'Kits completos com bolos, doces e decoração coordenada para sua celebração ser inesquecível.',
      imageUrl: image_37852c412ed77ad37be926276b235135c8368017,
      imageAlt: 'Cupcakes e kit festa'
    }
  ];

  const testimonials = [
    {
      name: 'Ana Paula Silva',
      text: 'Os doces da Neti & Bell são simplesmente perfeitos! Encomendar o bolo de aniversário da minha filha foi a melhor decisão. Todos os convidados elogiaram.',
      rating: 5
    },
    {
      name: 'Mariana Costa',
      text: 'A qualidade e o sabor são incomparáveis. As sobremesas em pote são minhas favoritas, perfeitas para presentear. Super recomendo!',
      rating: 5
    },
    {
      name: 'Juliana Mendes',
      text: 'Atendimento impecável e produtos deliciosos. O bolo de casamento ficou lindo e saboroso. Gratidão eterna!',
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden />
        <picture className="hero__picture">
          <source media="(max-width: 767px)" srcSet={bannerMobile} />
          <source media="(min-width: 768px)" srcSet={bannerDesktop} />
          <img
            src={bannerDesktop}
            alt="Neti & Bell - Bolos decorados, doces e sobremesas feitas com amor"
            className="hero__img"
          />
        </picture>
        <div className="hero__actions">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#1fb855] transition-colors inline-flex items-center justify-center gap-2"
          >
            <span>Fazer Pedido no WhatsApp</span>
            <ArrowRight size={20} />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn hero__btn--instagram"
          >
            <Instagram size={20} />
            <span>Ver Instagram</span>
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-[rgb(255,253,248)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-[rgb(101,67,33)] mb-4">
              Nossos Produtos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cada criação é feita com ingredientes selecionados e muito carinho, pensando em tornar seu momento ainda mais especial
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('menu')}
              className="bg-[rgb(101,67,33)] text-white px-8 py-4 rounded-full hover:bg-[rgb(80,50,20)] transition-colors inline-flex items-center space-x-2"
            >
              <span>Ver Cardápio Completo</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-[rgb(101,67,33)] mb-4">
              Galeria de Delícias
            </h2>
            <p className="text-gray-600">
              Confira alguns dos nossos trabalhos recentes
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              image_cedabca7d6773d9429a82818e36b9c260e31bd0b,
              image_3118e070a569a59718d0447f2aeda09df3d55109,
              image_fa1d8a0102d9eb07992de109db9248eae1e04d7a,
              image_2162c3a7c055ad1eb1bd65818a3092c6c82d1f1a,
              image_37852c412ed77ad37be926276b235135c8368017,
              image_5a74e50d4376c3f07f6ce5faf89251ac3ecfbc79
            ].map((url, index) => (
              <div key={index} className="aspect-square rounded-2xl overflow-hidden group">
                <ImageWithFallback
                  src={url}
                  alt={`Produto Neti & Bell ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-[rgb(250,237,237)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-[rgb(101,67,33)] mb-4">
              O que dizem nossos clientes
            </h2>
            <p className="text-gray-600">
              Histórias e momentos especiais compartilhados
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[rgb(101,67,33)] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Faça sua encomenda hoje
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Entre em contato e vamos criar juntos a sobremesa perfeita para seu momento especial
          </p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[rgb(101,67,33)] px-8 py-4 rounded-full hover:bg-[rgb(250,237,237)] transition-colors inline-flex items-center space-x-2"
          >
            <span>Pedir no WhatsApp</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
