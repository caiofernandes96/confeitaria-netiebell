import { ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { getWhatsAppUrl } from '../config/whatsapp';

interface MenuProps {
  onNavigate: (page: string) => void;
}

interface MenuItem {
  category: string;
  items: {
    name: string;
    description: string;
    imageUrl: string;
  }[];
}

export function Menu({ onNavigate }: MenuProps) {
  const menuData: MenuItem[] = [
    {
      category: 'Bolos Decorados',
      items: [
        {
          name: 'Bolo de Aniversário',
          description: 'Bolo personalizado com massa e recheio à escolha, decoração temática e topper personalizado.',
          imageUrl: 'https://images.unsplash.com/photo-1736959574670-a8ace9856e1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2UlMjBkZWNvcmF0ZWQlMjBwaW5rfGVufDF8fHx8MTc3MDM4NDA5Mnww&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Bolo de Casamento',
          description: 'Bolos elegantes e sofisticados, com estruturas de 2 a 5 andares, decorados com flores naturais ou pasta americana.',
          imageUrl: 'https://images.unsplash.com/photo-1584158531321-2a1fefff2e51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZSUyMHdoaXRlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzAyOTg2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Naked Cake',
          description: 'Bolo rústico com recheio aparente, decorado com frutas frescas, flores e finalização artesanal.',
          imageUrl: 'https://images.unsplash.com/photo-1617922784605-041e1e1a5d8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZGVjb3JhdGVkJTIwY2FrZSUyMHBhc3RlbHxlbnwxfHx8fDE3NzAzODQwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
        }
      ]
    },
    {
      category: 'Doces Gourmet',
      items: [
        {
          name: 'Brigadeiros Premium',
          description: 'Brigadeiros em diversos sabores: tradicional, chocolate belga, pistache, doce de leite, maracujá e mais.',
          imageUrl: 'https://images.unsplash.com/photo-1627434727895-efc6165480fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwcGFzdHJpZXMlMjBzd2VldHMlMjBtYWNhcm9uc3xlbnwxfHx8fDE3NzAzODQwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Cupcakes Decorados',
          description: 'Cupcakes com recheio cremoso e cobertura de buttercream, decorados com toppers e detalhes personalizados.',
          imageUrl: 'https://images.unsplash.com/photo-1697320846048-43f9631634c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlcyUyMGVsZWdhbnQlMjBwYXN0ZWx8ZW58MXx8fHwxNzcwMzg0MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Brownies Artesanais',
          description: 'Brownies de chocolate belga, com textura úmida e crocante, em versões tradicional, nozes e doce de leite.',
          imageUrl: 'https://images.unsplash.com/photo-1675062521318-aa0797eae2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicm93bmllcyUyMGNob2NvbGF0ZSUyMGZ1ZGdlfGVufDF8fHx8MTc3MDM4NDE2OXww&ixlib=rb-4.1.0&q=80&w=1080'
        }
      ]
    },
    {
      category: 'Tortas & Sobremesas',
      items: [
        {
          name: 'Torta de Limão',
          description: 'Massa amanteigada, recheio de limão cremoso e merengue suíço levemente tostado.',
          imageUrl: 'https://images.unsplash.com/photo-1681329142517-6daaa56d3670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbiUyMHRhcnQlMjBwaWUlMjBkZXNzZXJ0fGVufDF8fHx8MTc3MDM4NDE2OXww&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Red Velvet',
          description: 'Tradicional bolo aveludado de cacau com cream cheese, decoração elegante e sabor inconfundível.',
          imageUrl: 'https://images.unsplash.com/photo-1621303838226-5dc7130d5e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB2ZWx2ZXQlMjBjYWtlJTIwc2xpY2V8ZW58MXx8fHwxNzcwMjcyNDM0fDA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Tiramisù',
          description: 'Clássico italiano com camadas de pão de ló embebido em café, creme mascarpone e cacau em pó.',
          imageUrl: 'https://images.unsplash.com/photo-1727056353430-101a9d47d9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aXJhbWlzdSUyMGRlc3NlcnQlMjBsYXllcnN8ZW58MXx8fHwxNzcwMzg0MTY4fDA&ixlib=rb-4.1.0&q=80&w=1080'
        }
      ]
    },
    {
      category: 'Sobremesas em Pote',
      items: [
        {
          name: 'Mousse de Chocolate',
          description: 'Mousse aerada de chocolate belga com camadas de ganache e raspas de chocolate.',
          imageUrl: 'https://images.unsplash.com/photo-1639488296096-1a3e6e7cd5b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwc2xpY2UlMjBkZXNzZXJ0fGVufDF8fHx8MTc3MDI1NjA0MXww&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Pavê de Morango',
          description: 'Camadas de biscoito champagne, creme e morangos frescos, finalizadas com chantilly.',
          imageUrl: 'https://images.unsplash.com/photo-1582970818316-4b4cc756aafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZGVzc2VydHMlMjBqYXIlMjBnbGFzc3xlbnwxfHx8fDE3NzAzODQwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Cheesecake no Pote',
          description: 'Base crocante de biscoito, recheio cremoso de cream cheese e calda de frutas vermelhas.',
          imageUrl: 'https://images.unsplash.com/photo-1582970818316-4b4cc756aafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwZGVzc2VydHMlMjBqYXIlMjBnbGFzc3xlbnwxfHx8fDE3NzAzODQwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080'
        }
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-[rgb(255,253,248)]">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[rgb(250,237,237)] to-[rgb(245,240,235)] py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-[rgb(101,67,33)] mb-4">
            Nosso Cardápio
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore nossa seleção de bolos, doces e sobremesas artesanais. Todas as encomendas são feitas sob medida com ingredientes frescos e selecionados.
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {menuData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 md:mb-24">
              <h2 className="text-3xl md:text-4xl font-serif text-[rgb(101,67,33)] mb-8 text-center md:text-left">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <ImageWithFallback
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif text-[rgb(101,67,33)] mb-3">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <a
                        href={getWhatsAppUrl(`Olá! Gostaria de encomendar: ${item.name}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-[rgb(101,67,33)] hover:text-[rgb(80,50,20)] transition-colors"
                      >
                        <ShoppingBag size={18} />
                        <span className="text-sm">Pedir no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[rgb(250,237,237)]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[rgb(101,67,33)] mb-4">
            Não encontrou o que procura?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Entre em contato conosco! Criamos sobremesas personalizadas para tornar seu momento ainda mais especial.
          </p>
          <a
            href={getWhatsAppUrl('Olá! Gostaria de uma encomenda personalizada')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[rgb(101,67,33)] text-white px-8 py-4 rounded-full hover:bg-[rgb(80,50,20)] transition-colors"
          >
            <ShoppingBag size={20} />
            <span>Fazer Pedido Personalizado</span>
          </a>
        </div>
      </section>
    </div>
  );
}
