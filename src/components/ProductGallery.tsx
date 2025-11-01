import { useState } from "react";
import { Card } from "@/components/ui/card";

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3 w-20">
        {images.map((image, index) => (
          <Card
            key={index}
            className={`cursor-pointer overflow-hidden transition-all hover:border-primary ${
              selectedImage === index ? "border-2 border-primary" : ""
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="w-full h-20 object-cover"
            />
          </Card>
        ))}
      </div>
      <Card className="flex-1 overflow-hidden">
        <img
          src={images[selectedImage]}
          alt="Product"
          className="w-full h-[500px] object-contain p-8"
        />
      </Card>
    </div>
  );
};

export default ProductGallery;
