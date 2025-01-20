import type React from 'react';
import '../themes/tailwind-config.css';
import { Link } from '@tanstack/react-router';

const Appointment: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Agende Sua Consulta de Forma Rápida e Segura</h1>
          </div>
        </div>
      </section>

      {/* Passo a Passo do Agendamento */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Como Funciona o Agendamento</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="card-section">
              <h3 className="text-xl font-bold">1. Escolha o Serviço</h3>
              <p>Selecione o tipo de consulta ou exame que deseja.</p>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold">2. Escolha o Profissional</h3>
              <p>Selecione o médico ou especialista.</p>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold">3. Escolha a Data e Horário</h3>
              <p>Selecione um horário disponível.</p>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold">4. Confirmação</h3>
              <p>Confirme seus dados e finalize o agendamento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Agendamento */}
      <section id="formulario" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Agende Sua Consulta</h2>
          <div className="max-w-2xl mx-auto">
            <form className="card-section">
              <div className="form-control">
                <label className="label" htmlFor="name">
                  <span className="label-text">Nome Completo</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">E-mail</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="phone">
                  <span className="label-text">Telefone</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="(XX) XXXX-XXXX"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="service">
                  <span className="label-text">Serviço Desejado</span>
                </label>
                <select className="select select-bordered" required name="service">
                  <option value="">Selecione um serviço</option>
                  <option value="consulta">Consulta Online</option>
                  <option value="exame">Exame Laboratorial</option>
                  <option value="fisioterapia">Fisioterapia</option>
                  <option value="nutricao">Nutrição</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label" htmlFor="professional">
                  <span className="label-text">Profissional</span>
                </label>
                <select className="select select-bordered" required name="professional">
                  <option value="">Selecione um profissional</option>
                  <option value="dr-joao">Dr. João Silva</option>
                  <option value="dra-maria">Dra. Maria Souza</option>
                  <option value="dr-carlos">Dr. Carlos Oliveira</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label" htmlFor="date">
                  <span className="label-text">Data e Horário</span>
                </label>
                <input
                  name="date"
                  type="datetime-local"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="message">
                  <span className="label-text">Mensagem (Opcional)</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Alguma observação ou detalhe adicional?"
                  className="textarea textarea-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="button primary">
                  Confirmar Agendamento
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Confirmação de Agendamento */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Agendamento Confirmado</h2>
          <div className="max-w-2xl mx-auto text-center">
            <div className="card-section">
              <p className="text-xl">Seu agendamento foi confirmado com sucesso!</p>
              <p className="mt-4">Você receberá um e-mail de confirmação com os detalhes.</p>
              <Link to="/" className="button primary">
                Voltar à Página Inicial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
