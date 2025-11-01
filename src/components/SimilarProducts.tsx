import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

interface SimilarProductsProps {
  products: Product[];
}

const SimilarProducts = ({ products }: SimilarProductsProps) => {
  return (
    <div>
      <h2 className="text-xl font-medium mb-4">Similar Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            className="overflow-hidden cursor-pointer transition-all hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-medium mb-1 line-clamp-2">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 mb-2">
                <div className="flex items-center gap-1 bg-success text-white px-1.5 py-0.5 rounded text-xs">
                  {product.rating} <Star className="w-3 h-3 fill-current" />
                </div>
              </div>
              <div className="text-lg font-medium">
                ₹{product.price.toLocaleString()}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
