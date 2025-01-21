import type React from 'react';
import '../themes/tailwind-config.css';

const Services: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Serviços de Saúde Integrais e Personalizados
            </h1>
          </div>
        </div>
      </section>

      {/* Lista de Serviços */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-primary">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">Consulta Online</h3>
              <p>Agende consultas com especialistas de forma rápida e segura.</p>
              <a href="/consulta-online" className="button primary">
                Saiba Mais
              </a>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">Exames Laboratoriais</h3>
              <p>Realizamos exames com precisão e agilidade.</p>
              <a href="/exames" className="button primary">
                Saiba Mais
              </a>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">Fisioterapia</h3>
              <p>Tratamentos personalizados para recuperação e bem-estar.</p>
              <a href="/fisioterapia" className="button primary">
                Saiba Mais
              </a>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">Nutrição</h3>
              <p>Planos alimentares sob medida para suas necessidades.</p>
              <a href="/nutricao" className="button primary">
                Saiba Mais
              </a>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">Psicologia</h3>
              <p>Atendimento psicológico para cuidar da sua saúde mental.</p>
              <a href="/psicologia" className="button primary">
                Saiba Mais
              </a>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">Odontologia</h3>
              <p>Cuidados odontológicos completos para toda a família.</p>
              <a href="/odontologia" className="button primary">
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-base-300">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">Como Funciona</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">1. Agendamento</h3>
              <p>Escolha o serviço e agende online.</p>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">2. Confirmação</h3>
              <p>Receba a confirmação por e-mail.</p>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">3. Atendimento</h3>
              <p>Realize sua consulta ou exame com segurança.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-primary">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">Como posso agendar uma consulta?</h3>
              <p>Basta clicar no botão 'Agendar Consulta' e seguir os passos.</p>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">Quais são as formas de pagamento?</h3>
              <p>Aceitamos cartões de crédito, débito e transferência bancária.</p>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">
                Posso cancelar ou remarcar meu agendamento?
              </h3>
              <p>Sim, entre em contato conosco para cancelar ou remarcar.</p>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">
                Os exames são cobertos por planos de saúde?
              </h3>
              <p>
                Sim, trabalhamos com a maioria dos planos de saúde. Consulte-nos para mais detalhes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
