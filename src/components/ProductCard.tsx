import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export function ProductCard({ title, description, imageUrl, imageAlt }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="aspect-square overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif text-[rgb(101,67,33)] mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
