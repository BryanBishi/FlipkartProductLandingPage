import { Search, ShoppingCart, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-6 py-3">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold italic">Flipkart</div>
            <div className="text-xs">
              Explore <span className="text-accent">Plus</span>
            </div>
          </div>

          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search for products, brands and more"
                className="pl-10 bg-card text-foreground border-0"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="gap-2">
              <User className="w-5 h-5" />
              <span className="hidden md:inline">Login</span>
            </Button>
            <Button variant="ghost" className="gap-2">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden md:inline">Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
