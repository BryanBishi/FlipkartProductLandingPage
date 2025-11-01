import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

interface Review {
  author: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
}

interface ProductReviewsProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}

const ProductReviews = ({
  reviews,
  averageRating,
  totalReviews,
}: ProductReviewsProps) => {
  const ratingDistribution = [
    { stars: 5, percentage: 65 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 10 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 2 },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-xl font-medium mb-6">Ratings & Reviews</h2>

      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="text-center">
          <div className="text-5xl font-medium mb-2">{averageRating}</div>
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(averageRating)
                    ? "fill-star text-star"
                    : "text-muted"
                }`}
              />
            ))}
          </div>
          <div className="text-muted-foreground text-sm">
            {totalReviews.toLocaleString()} Ratings
          </div>
        </div>

        <div className="md:col-span-2 space-y-2">
          {ratingDistribution.map((dist) => (
            <div key={dist.stars} className="flex items-center gap-3">
              <span className="w-8 text-sm">{dist.stars}★</span>
              <Progress value={dist.percentage} className="h-2 flex-1" />
              <span className="w-12 text-sm text-muted-foreground">
                {dist.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="border-t pt-4 first:border-0 first:pt-0">
            <div className="flex items-start gap-3 mb-2">
              <Avatar>
                <AvatarFallback>
                  {review.author.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{review.author}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "fill-star text-star"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <h4 className="font-medium mb-1">{review.title}</h4>
                <p className="text-muted-foreground text-sm mb-2">
                  {review.comment}
                </p>
                <span className="text-xs text-muted-foreground">
                  {review.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ProductReviews;
