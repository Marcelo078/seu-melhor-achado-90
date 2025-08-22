import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight } from "lucide-react";

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Uso - Seu Melhor Achado</title>
        <meta name="description" content="Termos de Uso do Seu Melhor Achado. Conheça as condições de uso do nosso site e serviços." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://seumelhorachado.com/termos-uso" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-primary transition-colors">Início</a>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground font-medium">Termos de Uso</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Termos de Uso</h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Última atualização: 22 de agosto de 2024
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground">
                  Ao acessar e usar o site Seu Melhor Achado, você aceita estar vinculado por estes 
                  Termos de Uso e nossa Política de Privacidade. Se você não concordar com qualquer 
                  parte destes termos, não deve usar nosso site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Descrição do Serviço</h2>
                <p className="text-muted-foreground mb-4">
                  O Seu Melhor Achado é uma plataforma que oferece:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Curadoria de produtos de qualidade</li>
                  <li>Análises e avaliações de produtos</li>
                  <li>Links para produtos de parceiros afiliados</li>
                  <li>Conteúdo informativo sobre produtos</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Links de Afiliados</h2>
                <p className="text-muted-foreground mb-4">
                  Este site contém links de afiliados. Isso significa que:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Podemos receber comissão por compras realizadas através dos nossos links</li>
                  <li>Os preços dos produtos não são afetados para o usuário</li>
                  <li>Mantemos nossa independência editorial nas recomendações</li>
                  <li>Sempre divulgamos quando um link é de afiliado</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Uso Aceitável</h2>
                <p className="text-muted-foreground mb-4">
                  Você concorda em usar nosso site apenas para fins legais e de acordo com estes termos. 
                  É proibido:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Usar o site para qualquer finalidade ilegal</li>
                  <li>Tentar acessar áreas restritas do site</li>
                  <li>Interferir no funcionamento do site</li>
                  <li>Copiar conteúdo sem autorização</li>
                  <li>Usar informações para spam ou marketing não solicitado</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Conteúdo e Propriedade Intelectual</h2>
                <p className="text-muted-foreground">
                  Todo o conteúdo deste site, incluindo textos, imagens, logos e design, é protegido 
                  por direitos autorais e outras leis de propriedade intelectual. O uso não autorizado 
                  de qualquer conteúdo é estritamente proibido.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Isenção de Responsabilidade</h2>
                <p className="text-muted-foreground mb-4">
                  O Seu Melhor Achado fornece informações "como estão" e:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Não garante a precisão completa das informações</li>
                  <li>Não se responsabiliza por decisões baseadas no nosso conteúdo</li>
                  <li>Não garante disponibilidade contínua do site</li>
                  <li>Não se responsabiliza por produtos de terceiros</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground">
                  Em nenhuma circunstância seremos responsáveis por danos diretos, indiretos, 
                  incidentais, especiais, consequenciais ou punitivos decorrentes do uso ou 
                  incapacidade de usar nosso site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Modificações dos Termos</h2>
                <p className="text-muted-foreground">
                  Reservamos o direito de modificar estes termos a qualquer momento. Alterações 
                  significativas serão comunicadas através do site. O uso continuado após as 
                  alterações constitui aceitação dos novos termos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Lei Aplicável</h2>
                <p className="text-muted-foreground">
                  Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida 
                  nos tribunais competentes do Brasil.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contato</h2>
                <p className="text-muted-foreground">
                  Para questões sobre estes Termos de Uso, entre em contato:
                </p>
                <div className="bg-muted/30 rounded-lg p-6 mt-4">
                  <p className="text-foreground font-medium">Email: contato@seumelhorachado.com</p>
                  <p className="text-foreground font-medium">Telefone: (11) 99999-9999</p>
                </div>
              </section>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;