import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade - Seu Melhor Achado</title>
        <meta name="description" content="Política de Privacidade do Seu Melhor Achado. Saiba como coletamos, usamos e protegemos suas informações pessoais." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://seumelhorachado.com/politica-privacidade" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-primary transition-colors">Início</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium">Política de Privacidade</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Política de Privacidade</h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Última atualização: 22 de agosto de 2024
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Informações que Coletamos</h2>
                <p className="text-muted-foreground mb-4">
                  Coletamos informações quando você visita nosso site, se inscreve em nossa newsletter, 
                  ou interage com nossos produtos e serviços. As informações coletadas podem incluir:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Nome e endereço de email</li>
                  <li>Informações de navegação e cookies</li>
                  <li>Endereço IP e dados de localização</li>
                  <li>Preferências de produtos e comportamento de compra</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Como Usamos Suas Informações</h2>
                <p className="text-muted-foreground mb-4">
                  Utilizamos as informações coletadas para:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Melhorar nossos produtos e serviços</li>
                  <li>Personalizar sua experiência no site</li>
                  <li>Enviar emails promocionais e newsletters</li>
                  <li>Processar transações e pedidos</li>
                  <li>Analisar tendências e estatísticas do site</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Compartilhamento de Informações</h2>
                <p className="text-muted-foreground mb-4">
                  Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros, 
                  exceto nos seguintes casos:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Com parceiros confiáveis que nos auxiliam na operação do site</li>
                  <li>Quando exigido por lei ou processo legal</li>
                  <li>Para proteger nossos direitos, propriedade ou segurança</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookies e Tecnologias Similares</h2>
                <p className="text-muted-foreground mb-4">
                  Utilizamos cookies para melhorar sua experiência de navegação. Os cookies nos ajudam a:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Lembrar suas preferências</li>
                  <li>Entender como você usa nosso site</li>
                  <li>Melhorar nossos serviços</li>
                  <li>Mostrar anúncios relevantes</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Segurança dos Dados</h2>
                <p className="text-muted-foreground">
                  Implementamos medidas de segurança adequadas para proteger suas informações pessoais 
                  contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos 
                  criptografia SSL e seguimos as melhores práticas de segurança da indústria.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Seus Direitos</h2>
                <p className="text-muted-foreground mb-4">
                  Você tem o direito de:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Acessar suas informações pessoais</li>
                  <li>Corrigir dados incorretos</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Cancelar a inscrição em nossas comunicações</li>
                  <li>Portar seus dados para outro serviço</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contato</h2>
                <p className="text-muted-foreground">
                  Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento 
                  de seus dados pessoais, entre em contato conosco:
                </p>
                <div className="bg-muted/30 rounded-lg p-6 mt-4">
                  <p className="text-foreground font-medium">Email: contato@seumelhorachado.com</p>
                  <p className="text-foreground font-medium">Telefone: (11) 99999-9999</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Alterações na Política</h2>
                <p className="text-muted-foreground">
                  Reservamos o direito de atualizar esta Política de Privacidade a qualquer momento. 
                  Alterações significativas serão comunicadas através do nosso site ou por email.
                </p>
              </section>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;