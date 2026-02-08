import { Heart, Award, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import sobreImage from '../assets/sobre.png';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  const values = [
    {
      icon: Heart,
      title: 'Amor em Cada Receita',
      description: 'Cada produto é feito com carinho e dedicação, pensando em proporcionar momentos de alegria e sabor.'
    },
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Utilizamos apenas ingredientes selecionados e de primeira qualidade para garantir o melhor resultado.'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente é único e trabalhamos para criar a sobremesa perfeita para seu momento especial.'
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[rgb(250,237,237)] to-[rgb(245,240,235)] py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-[rgb(101,67,33)] mb-4">
            Nossa História
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Onde o amor virou receita
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-serif text-[rgb(101,67,33)] mb-6">
                Onde o Amor Virou Receita
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A Neti & Bell nasceu do amor, da família e de uma paixão compartilhada pela confeitaria.
                </p>
                <p>
                  Ivonete, mãe de Simone, e sua tia Isabel sempre encontravam na cozinha um espaço de afeto, união e criatividade. Juntas, preparavam receitas com carinho, especialmente doces, que encantavam toda a família. Cada detalhe, cada ingrediente e cada sabor eram cuidadosamente registrados em um caderno, que guardava não apenas receitas, mas também memórias e histórias.
                </p>
                <p>
                  Esses momentos simples e cheios de amor fizeram tanto sucesso que inspiraram Simone a transformar esse legado em um sonho: abrir sua própria confeitaria, levando adiante tudo o que aprendeu com Ivonete e Isabel.
                </p>
                <p>
                  Assim nasceu a Neti & Bell: uma marca que carrega tradição, afeto e dedicação em cada receita. Hoje, cada doce produzido mantém viva essa herança familiar, conquistando clientes e tornando momentos especiais ainda mais inesquecíveis.
                </p>
                <p>
                  Mais do que confeitaria, a Neti & Bell é a continuidade de uma história feita de amor, sabor e propósito.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={sobreImage}
                  alt="Confeiteira Neti & Bell"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-[rgb(255,253,248)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[rgb(101,67,33)] mb-4">
              Nossos Valores
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e nosso compromisso com você
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-[rgb(250,237,237)] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-[rgb(101,67,33)]" />
                  </div>
                  <h3 className="text-xl font-serif text-[rgb(101,67,33)] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[rgb(101,67,33)] mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Do pedido à entrega, cuidamos de cada detalhe para garantir sua satisfação
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consulta',
                description: 'Entre em contato e conte sobre sua necessidade. Vamos entender sua visão e preferências.'
              },
              {
                step: '02',
                title: 'Personalização',
                description: 'Criamos uma proposta personalizada com sabores, decoração e apresentação exclusivos.'
              },
              {
                step: '03',
                title: 'Produção',
                description: 'Preparamos seu pedido com ingredientes frescos e técnicas artesanais refinadas.'
              },
              {
                step: '04',
                title: 'Entrega',
                description: 'Entregamos seu pedido no prazo, com todo cuidado e atenção que merece.'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-serif text-[rgb(216,180,140)] mb-4 opacity-50">
                  {process.step}
                </div>
                <h3 className="text-xl font-serif text-[rgb(101,67,33)] mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[rgb(101,67,33)] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Vamos Criar Juntos?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Entre em contato e descubra como podemos tornar seu momento ainda mais especial
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-[rgb(101,67,33)] px-8 py-4 rounded-full hover:bg-[rgb(250,237,237)] transition-colors"
          >
            Falar Conosco
          </button>
        </div>
      </section>
    </div>
  );
}
