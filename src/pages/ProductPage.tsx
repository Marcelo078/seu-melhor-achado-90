import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { products } from "@/data/products";
import { 
  Star, 
  CheckCircle, 
  ShoppingCart, 
  Shield, 
  Award, 
  MessageCircle, 
  ChevronRight,
  ExternalLink
} from "lucide-react";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const handleCTAClick = () => {
    window.open(product.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Helmet>
        <title>{product.metaTitle}</title>
        <meta name="description" content={product.metaDescription} />
        <meta name="keywords" content={product.keywords.join(', ')} />
        <link rel="canonical" href={`https://seumelhorachado.com/produto/${product.id}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={product.metaTitle} />
        <meta property="og:description" content={product.metaDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://seumelhorachado.com/produto/${product.id}`} />
        
        {/* Schema.org Product */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "description": product.fullDescription,
            "category": product.category,
            "brand": {
              "@type": "Brand",
              "name": product.name
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "url": product.affiliateLink
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "127"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-primary transition-colors">Início</a>
              <ChevronRight className="w-4 h-4" />
              <span className="capitalize">{product.category}</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-primary text-white">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {product.name}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {product.shortDescription}
              </p>
              
              <div className="flex justify-center items-center space-x-6 mb-8">
                <div className="flex items-center text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <span className="ml-2 text-foreground font-semibold">5.0 (127 avaliações)</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-success">
                    <Shield className="w-5 h-5 mr-1" />
                    <span className="text-sm font-medium">Seguro</span>
                  </div>
                  <div className="flex items-center text-primary">
                    <Award className="w-5 h-5 mr-1" />
                    <span className="text-sm font-medium">Aprovado</span>
                  </div>
                </div>
              </div>
              
              {/* Primary CTA */}
              <Button 
                onClick={handleCTAClick}
                size="lg" 
                className="bg-gradient-primary hover:shadow-elegant text-lg px-8 py-4 rounded-full font-bold transition-all duration-300"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Quero Aproveitar Agora
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Description */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">O que é o {product.name}?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {product.fullDescription}
                </p>
                
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-primary mb-4">✨ Por que escolher este produto?</h3>
                  <p className="text-muted-foreground">
                    Selecionado pela nossa equipe de especialistas após rigorosa análise de qualidade, 
                    eficácia e satisfação dos usuários. Garantia de resultado ou seu dinheiro de volta.
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-8">Principais Benefícios</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-card rounded-lg shadow-card">
                      <CheckCircle className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                      <span className="text-foreground font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to Use */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">Como Usar</h2>
                <div className="bg-muted/30 rounded-xl p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.howToUse}
                  </p>
                </div>
              </div>

              {/* Testimonials */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-8">O que nossos clientes dizem</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-card rounded-xl p-6 shadow-card">
                      <div className="flex items-center mb-4">
                        <div className="flex text-yellow-500 mr-3">
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                        <MessageCircle className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-muted-foreground italic leading-relaxed">
                        "{testimonial}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Differentials */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-8">Diferenciais Únicos</h2>
                <div className="space-y-4">
                  {product.differentials.map((differential, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-accent/10 rounded-lg">
                      <Award className="w-6 h-6 text-accent flex-shrink-0" />
                      <span className="text-foreground font-medium">{differential}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-8">Perguntas Frequentes</h2>
                <div className="space-y-6">
                  {product.faqs.map((faq, index) => (
                    <div key={index} className="bg-card rounded-xl p-6 shadow-card">
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-12" />

              {/* Final CTA */}
              <div className="text-center bg-gradient-primary text-white rounded-2xl p-12">
                <h2 className="text-3xl font-bold mb-4">
                  Pronto para transformar sua vida?
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Junte-se a milhares de pessoas que já descobriram os benefícios do {product.name}
                </p>
                
                <Button 
                  onClick={handleCTAClick}
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 rounded-full font-bold transition-all duration-300"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Comprar Agora
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                
                <div className="flex justify-center items-center space-x-6 mt-6 text-white/80">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-1" />
                    <span className="text-sm">Compra Segura</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    <span className="text-sm">Garantia</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="text-sm">5 Estrelas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ProductPage;