import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

export function TestimonialCard({ name, text, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <div className="flex mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className="text-[rgb(216,180,140)] fill-current"
          />
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
        "{text}"
      </p>
      <p className="text-[rgb(101,67,33)]">{name}</p>
    </div>
  );
}
