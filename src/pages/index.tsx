import type React from 'react';
import '../themes/tailwind-config.css';

const Index: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Sua Saúde em Primeiro Lugar</h1>
            <p className="py-6">Agende consultas online com os melhores especialistas.</p>
            <a href="/agendar" className="button primary">
              Comece Agora
            </a>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Quem Somos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-section">
              <p>
                Somos um consultório dedicado a oferecer atendimento médico de qualidade, com foco
                no bem-estar do paciente.
              </p>
              <a href="/sobre" className="button primary">
                Conheça Nossa História
              </a>
            </div>
            <div className="card-section">
              <img src="/sobre-nos.jpg" alt="Sobre Nós" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-section">
              <h3 className="text-xl font-bold">Consulta Online</h3>
              <p>Agende consultas com especialistas de forma rápida e segura.</p>
              <a href="/servicos" className="button primary">
                Saiba Mais
              </a>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold">Exames Laboratoriais</h3>
              <p>Realizamos exames com precisão e agilidade.</p>
              <a href="/servicos" className="button primary">
                Saiba Mais
              </a>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold">Fisioterapia</h3>
              <p>Tratamentos personalizados para recuperação e bem-estar.</p>
              <a href="/servicos" className="button primary">
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">O que Nossos Clientes Dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-section">
              <p>"Atendimento excelente e profissionais muito qualificados!"</p>
              <p className="font-bold">- João Silva</p>
            </div>
            <div className="card-section">
              <p>"Consultas online práticas e eficientes. Recomendo!"</p>
              <p className="font-bold">- Maria Souza</p>
            </div>
            <div className="card-section">
              <p>"Ótima estrutura e atendimento humanizado."</p>
              <p className="font-bold">- Carlos Oliveira</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
