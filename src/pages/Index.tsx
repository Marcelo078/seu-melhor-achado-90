import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Star, Zap, Shield, Award, TrendingUp, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet";

const Index = () => {
  const categories = ['tecnologia', 'saude', 'educacao', 'beleza', 'negocio'];

  return (
    <>
      <Helmet>
        <title>Seu Melhor Achado - Os Melhores Produtos Selecionados Para Você</title>
        <meta name="description" content="Descubra os melhores produtos em tecnologia, saúde, beleza, educação e negócios. Produtos testados, aprovados e com garantia de qualidade. Encontre seu melhor achado hoje!" />
        <meta name="keywords" content="melhores produtos, tecnologia, saúde, beleza, educação, negócios, produtos testados, qualidade garantida" />
        <link rel="canonical" href="https://seumelhorachado.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Seu Melhor Achado - Os Melhores Produtos Selecionados Para Você" />
        <meta property="og:description" content="Descubra os melhores produtos em tecnologia, saúde, beleza, educação e negócios. Produtos testados, aprovados e com garantia de qualidade." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seumelhorachado.com" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Seu Melhor Achado",
            "description": "Os melhores produtos selecionados para você",
            "url": "https://seumelhorachado.com"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative bg-gradient-hero text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-1 text-yellow-400">
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <span className="ml-2 text-white/90">Produtos 5 estrelas</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Conheça os <span className="text-yellow-400">Melhores Produtos</span> Selecionados Para Você!
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                Descobrimos, testamos e aprovamos os produtos mais incríveis do mercado. 
                Economize tempo e dinheiro com nossa curadoria especializada.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Shield className="w-5 h-5" />
                  <span>Produtos Testados</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Award className="w-5 h-5" />
                  <span>Qualidade Garantida</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Resultados Comprovados</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Explorar Produtos Agora
              </Button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="produtos" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Nossos <span className="text-primary">Produtos Selecionados</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Cada produto foi cuidadosamente avaliado pela nossa equipe de especialistas. 
                Qualidade, eficácia e satisfação garantidas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.slice(0, 9).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {products.length > 9 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="font-semibold">
                  Ver Todos os Produtos
                  <CheckCircle className="w-5 h-5 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Categories Section */}
        <section id="categorias" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Explore Por <span className="text-primary">Categoria</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Encontre exatamente o que você precisa
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {categories.map((category) => {
                const categoryCount = products.filter(p => p.category === category).length;
                const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
                
                return (
                  <div key={category} className="text-center group cursor-pointer">
                    <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 group-hover:-translate-y-1">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold text-lg">
                            {categoryCount}
                          </span>
                        </div>
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {categoryName}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {categoryCount} produto{categoryCount !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
