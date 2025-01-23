import type React from 'react';
import '../themes/tailwind-config.css';
import { Link } from '@tanstack/react-router';
import Consultorio from '../assets/img/Consultorio.jpg';
import DrCarlos from '../assets/img/Dr.Carlos.jpg';
import DrJoao from '../assets/img/Dr.Joao.jpg';
import DraMaria from '../assets/img/Dra.Maria.jpg';
import Historia from '../assets/img/historia.jpg';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero bg-base-200 py-10 mt-16">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold text-white">Conheça nosso consultório</h1>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-primary">Nossa História</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6 self-center">
              <p>
                Fundado em 2004, o consultório Corpo em Ação nasceu com a missão de oferecer
                atendimento nutricional de excelência, focado na saúde e bem-estar de cada paciente.
                Ao longo de mais de 20 anos, construímos uma sólida reputação na região, priorizando
                sempre a individualidade, o acolhimento e o acompanhamento personalizado para
                alcançar resultados efetivos e duradouros. Nossa equipe de nutricionistas
                experientes e apaixonadas pela nutrição trabalha com dedicação para te ajudar a
                conquistar seus objetivos, seja emagrecer, ganhar massa muscular, melhorar sua
                performance esportiva ou simplesmente adotar um estilo de vida mais saudável. No
                Corpo em Ação, você encontra um ambiente acolhedor e um atendimento humanizado, onde
                cada paciente é tratado de forma única e especial.
              </p>
              <Link to="/appointment" className="button primary">
                Agendar consulta
              </Link>
            </div>
            <div className="card-section">
              <img src={Historia} alt="Nossa História" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-base-300">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">Missão, Visão e Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">Missão</h3>
              <p>Oferecer atendimento médico de qualidade, com foco no bem-estar do paciente.</p>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">Visão</h3>
              <p>Ser referência em saúde e cuidado integral na região.</p>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">Valores</h3>
              <p>Ética, Compromisso, Inovação e Humanização.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-primary">Conheça Nossa Equipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-section">
              <img src={DrJoao} alt="Dr. João Silva" className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-primary">Dr. João Silva</h3>
              <p>Nutricionista para perda de peso.</p>
            </div>
            <div className="card-section">
              <img src={DraMaria} alt="Dra. Maria Souza" className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-primary">Dra. Maria Souza</h3>
              <p>Nutricionista pediátrica.</p>
            </div>
            <div className="card-section">
              <img src={DrCarlos} alt="Dr. Carlos Oliveira" className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-primary">Dr. Carlos Oliveira</h3>
              <p>Nutricionista esportivo.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/contact" className="button primary">
              Falar com um especialista
            </a>
          </div>
        </div>
      </section>

      {/* Estrutura do Consultório */}
      <section className="py-20 bg-base-300">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">Nossa Estrutura</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-section self-center">
              <p>
                Nosso consultório conta com instalações modernas e equipamentos de última geração,
                garantindo conforto e segurança para nossos pacientes. Oferecemos salas de consulta,
                áreas de exames e espaços de espera acolhedores.
              </p>
              <a href="/appointment" className="button primary">
                Agende uma consulta
              </a>
            </div>
            <div className="card-section">
              <img src={Consultorio} alt="Estrutura do Consultório" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-primary">O que Nossos Pacientes Dizem</h2>
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
    </div>
  );
};

export default About;
