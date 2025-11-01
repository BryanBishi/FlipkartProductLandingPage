import { Card } from "@/components/ui/card";

interface Spec {
  label: string;
  value: string;
}

interface ProductSpecsProps {
  specs: Spec[];
}

const ProductSpecs = ({ specs }: ProductSpecsProps) => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-medium mb-4">Specifications</h2>
      <div className="space-y-3">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="grid grid-cols-3 gap-4 py-2 border-b last:border-0"
          >
            <span className="text-muted-foreground">{spec.label}</span>
            <span className="col-span-2 text-foreground">{spec.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ProductSpecs;
