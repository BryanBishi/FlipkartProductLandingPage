import { Star, MapPin, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductInfoProps {
  name: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  discount: number;
}

const ProductInfo = ({
  name,
  rating,
  reviews,
  price,
  originalPrice,
  discount,
}: ProductInfoProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-medium text-foreground mb-2">{name}</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-success text-white px-2 py-1 rounded text-sm font-medium">
            {rating} <Star className="w-3 h-3 fill-current" />
          </div>
          <span className="text-muted-foreground text-sm">
            {reviews.toLocaleString()} Ratings & Reviews
          </span>
        </div>
      </div>

      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-medium text-foreground">
          ₹{price.toLocaleString()}
        </span>
        <span className="text-lg text-muted-foreground line-through">
          ₹{originalPrice.toLocaleString()}
        </span>
        <span className="text-success font-medium text-sm">
          {discount}% off
        </span>
      </div>

      <div className="flex gap-2">
        <Badge variant="secondary" className="font-normal">
          Bank Offer
        </Badge>
        <Badge variant="secondary" className="font-normal">
          No Cost EMI
        </Badge>
      </div>

      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2 text-sm">
          <MapPin className="w-4 h-4 text-muted-foreground" />
          <span className="text-foreground">
            Delivery by <span className="font-medium">Tomorrow</span>
          </span>
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <Button variant="default" size="lg" className="flex-1 font-medium">
          <ShoppingCart className="w-4 h-4 mr-2" />
          ADD TO CART
        </Button>
        <Button variant="default" size="lg" className="flex-1 bg-accent hover:bg-accent/90 font-medium">
          BUY NOW
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
