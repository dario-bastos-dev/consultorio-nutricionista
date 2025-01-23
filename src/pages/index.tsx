import type React from 'react';
import '../themes/tailwind-config.css';
import { Link } from '@tanstack/react-router';
import QuemSomos from '../assets/img/quem-somos.jpg';

const Index: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero min-h-screen bg-hero-pattern">
        <div className="hero-content text-center z-10">
          <div>
            <h1 className="text-5xl font-bold text-white">Sua saúde em primeiro lugar!</h1>
            <p className="py-6 text-gray-100 text-xl">
              Agende consultas online com os melhores especialistas.
            </p>
            <Link to="/appointment" className="button primary btn-wide">
              Comece Agora
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-primary">Quem Somos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card self-center">
              <p>
                Somos um consultório dedicado a oferecer atendimento médico de qualidade, com foco
                no bem-estar do paciente.
              </p>
              <Link to="/about" className="button primary">
                Conheça Nossa História
              </Link>
            </div>
            <div className="card-section">
              <img src={QuemSomos} alt="Sobre Nós" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-base-300">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">Consulta Online</h3>
              <p>Agende consultas com especialistas de forma rápida e segura.</p>
              <Link href="/services" className="button primary">
                Saiba Mais
              </Link>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">Exames Laboratoriais</h3>
              <p>Realizamos exames com precisão e agilidade.</p>
              <Link href="/services" className="button primary">
                Saiba Mais
              </Link>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">Fisioterapia</h3>
              <p>Tratamentos personalizados para recuperação e bem-estar.</p>
              <Link href="/services" className="button primary">
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-primary">O que Nossos Clientes Dizem</h2>
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
