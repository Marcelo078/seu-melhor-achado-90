import { Link } from "react-router-dom";
import { Star, Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                Seu Melhor Achado
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Descobrindo os melhores produtos selecionados especialmente para você. 
              Qualidade, confiança e resultados garantidos.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Links Rápidos
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Página Inicial
              </Link>
              <Link to="/#produtos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Todos os Produtos
              </Link>
              <Link to="/politica-privacidade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos-uso" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Categorias
            </h3>
            <nav className="flex flex-col space-y-2">
              <a href="/#tecnologia" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Tecnologia
              </a>
              <a href="/#saude" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Saúde & Bem-estar
              </a>
              <a href="/#beleza" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Beleza
              </a>
              <a href="/#negocio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Negócios
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">contato@seumelhorachado.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Brasil</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-muted-foreground">
              <p>&copy; 2024 Seu Melhor Achado. Todos os direitos reservados.</p>
              <div className="flex items-center space-x-4">
                <a href="/sitemap.xml" className="hover:text-primary transition-colors">
                  Sitemap XML
                </a>
                <span>•</span>
                <a href="/politica-privacidade" className="hover:text-primary transition-colors">
                  Privacidade
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};