import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'tecnologia': return 'text-blue-600 bg-blue-50';
      case 'saude': return 'text-green-600 bg-green-50';
      case 'educacao': return 'text-purple-600 bg-purple-50';
      case 'beleza': return 'text-pink-600 bg-pink-50';
      case 'negocio': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <Card className="group h-full bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-0">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(product.category)}`}>
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
            <Star className="w-4 h-4 fill-current" />
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm leading-relaxed">
          {product.shortDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {product.benefits.slice(0, 2).map((benefit, index) => (
              <span 
                key={index}
                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium"
              >
                ✓ {benefit}
              </span>
            ))}
          </div>
          
          <Link to={`/produto/${product.id}`}>
            <Button 
              className="w-full bg-gradient-primary hover:shadow-elegant transition-all duration-300"
              size="lg"
            >
              Saiba mais
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};