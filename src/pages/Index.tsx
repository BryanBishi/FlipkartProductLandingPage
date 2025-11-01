import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductSpecs from "@/components/ProductSpecs";
import ProductReviews from "@/components/ProductReviews";
import SimilarProducts from "@/components/SimilarProducts";

import productMain from "@/assets/product-main.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const Index = () => {
  const productImages = [productMain, product2, product3, product4];

  const specs = [
    { label: "Connectivity", value: "Bluetooth 5.0" },
    { label: "Battery Life", value: "Up to 30 hours" },
    { label: "Driver Size", value: "40mm" },
    { label: "Frequency Response", value: "20Hz - 20kHz" },
    { label: "Noise Cancellation", value: "Active Noise Cancellation (ANC)" },
    { label: "Charging Time", value: "2.5 hours" },
    { label: "Weight", value: "250g" },
    { label: "Warranty", value: "1 Year Manufacturer Warranty" },
  ];

  const reviews = [
    {
      author: "Rahul Sharma",
      rating: 5,
      title: "Excellent Sound Quality!",
      comment:
        "The sound quality is amazing. Deep bass and crystal clear highs. Worth every penny!",
      date: "15 days ago",
    },
    {
      author: "Priya Patel",
      rating: 4,
      title: "Great for the price",
      comment:
        "Very comfortable for long hours. Battery life is impressive. Minor issue with the app connectivity.",
      date: "1 month ago",
    },
    {
      author: "Amit Kumar",
      rating: 5,
      title: "Best purchase this year",
      comment:
        "Noise cancellation works like a charm. Perfect for office and travel. Highly recommended!",
      date: "2 months ago",
    },
  ];

  const similarProducts = [
    {
      id: 1,
      name: "Sony WH-1000XM5 Wireless Headphones",
      price: 29990,
      rating: 4.5,
      image: productMain,
    },
    {
      id: 2,
      name: "Bose QuietComfort 45 Headphones",
      price: 32900,
      rating: 4.6,
      image: product2,
    },
    {
      id: 3,
      name: "JBL Live 660NC Wireless Headphones",
      price: 9999,
      rating: 4.3,
      image: product3,
    },
    {
      id: 4,
      name: "Sennheiser Momentum 4 Wireless",
      price: 34990,
      rating: 4.7,
      image: product4,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <ProductGallery images={productImages} />
          <ProductInfo
            name="Premium Wireless Noise-Cancelling Headphones"
            rating={4.5}
            reviews={8247}
            price={24999}
            originalPrice={49999}
            discount={50}
          />
        </div>

        <div className="mb-8">
          <ProductSpecs specs={specs} />
        </div>

        <div className="mb-8">
          <Card className="p-6">
            <h2 className="text-xl font-medium mb-3">Product Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              Experience premium audio quality with our flagship wireless
              headphones. Featuring industry-leading Active Noise Cancellation
              (ANC), these headphones deliver an immersive listening experience
              whether you're commuting, working, or relaxing. The 40mm drivers
              provide rich, detailed sound across all frequencies, while the
              long-lasting battery ensures up to 30 hours of uninterrupted
              playback. Designed for all-day comfort with premium materials and
              ergonomic cushions. Seamlessly switch between devices with
              multipoint Bluetooth connectivity and enjoy crystal-clear calls
              with advanced microphone technology.
            </p>
          </Card>
        </div>

        <div className="mb-8">
          <ProductReviews
            reviews={reviews}
            averageRating={4.5}
            totalReviews={8247}
          />
        </div>

        <div>
          <SimilarProducts products={similarProducts} />
        </div>
      </main>
    </div>
  );
};

export default Index;
