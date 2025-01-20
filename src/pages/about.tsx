import type React from 'react';
import '../themes/tailwind-config.css';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero bg-base-200 py-10 mt-16">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold">Conheça nosso consultório</h1>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Nossa História</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-section">
              <p>
                Fundado em 2005, nosso consultório nasceu com a missão de oferecer atendimento
                médico de qualidade, com foco no bem-estar do paciente. Ao longo dos anos, crescemos
                e nos tornamos referência na região, sempre priorizando a humanização e a excelência
                no cuidado.
              </p>
              <a href="/historia" className="button primary">
                Veja Nossa Linha do Tempo
              </a>
            </div>
            <div className="card-section">
              <img src="/nossa-historia.jpg" alt="Nossa História" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Missão, Visão e Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-section">
              <h3 className="text-xl font-bold">Missão</h3>
              <p>Oferecer atendimento médico de qualidade, com foco no bem-estar do paciente.</p>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold">Visão</h3>
              <p>Ser referência em saúde e cuidado integral na região.</p>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold">Valores</h3>
              <p>Ética, Compromisso, Inovação e Humanização.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Conheça Nossa Equipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-section">
              <img src="/dr-joao.jpg" alt="Dr. João Silva" className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold">Dr. João Silva</h3>
              <p>Cardiologista com 15 anos de experiência.</p>
            </div>
            <div className="card-section">
              <img src="/dra-maria.jpg" alt="Dra. Maria Souza" className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold">Dra. Maria Souza</h3>
              <p>Pediatra especializada em cuidados infantis.</p>
            </div>
            <div className="card-section">
              <img src="/dr-carlos.jpg" alt="Dr. Carlos Oliveira" className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold">Dr. Carlos Oliveira</h3>
              <p>Ortopedista com foco em tratamentos minimamente invasivos.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="/equipe" className="button primary">
              Veja Todos os Especialistas
            </a>
          </div>
        </div>
      </section>

      {/* Estrutura do Consultório */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Nossa Estrutura</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-section">
              <p>
                Nosso consultório conta com instalações modernas e equipamentos de última geração,
                garantindo conforto e segurança para nossos pacientes. Oferecemos salas de consulta,
                áreas de exames e espaços de espera acolhedores.
              </p>
              <a href="/visita" className="button primary">
                Agende uma Visita
              </a>
            </div>
            <div className="card-section">
              <img src="/estrutura.jpg" alt="Estrutura do Consultório" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">O que Nossos Pacientes Dizem</h2>
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
