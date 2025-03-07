import type React from 'react';
import '../themes/tailwind-config.css';
import { Link } from '@tanstack/react-router';
import useSubmitForm from '../hooks/use-submit-form';

const Appointment: React.FC = () => {
  const { modalRef, handleSubmitForm } = useSubmitForm();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Agende Sua Consulta de Forma Rápida e Segura
            </h1>
          </div>
        </div>
      </section>

      {/* Passo a Passo do Agendamento */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-primary">Como Funciona o Agendamento</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">1. Escolha o Serviço</h3>
              <p>Selecione o tipo de consulta ou exame que deseja.</p>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">2. Escolha o Profissional</h3>
              <p>Selecione o médico ou especialista.</p>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">3. Escolha a Data e Horário</h3>
              <p>Selecione um horário disponível.</p>
            </div>
            <div className="card-section">
              <h3 className="text-xl font-bold text-primary">4. Confirmação</h3>
              <p>Confirme seus dados e finalize o agendamento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Agendamento */}
      <section id="formulario" className="py-20 bg-base-300 border-b-4 border-base-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">Agende Sua Consulta</h2>
          <div className="max-w-2xl mx-auto">
            <form className="card-section" onSubmit={handleSubmitForm}>
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
      <dialog id="my_modal" className="modal" ref={modalRef}>
        <div className="modal-box">
          <form method="dialog">
            <button
              type="submit"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <div className="container mx-auto px-4">
              <h2 className="section-title text-primary">Agendamento Confirmado</h2>
              <div className="max-w-2xl mx-auto text-center">
                <div className="card bg-base-100">
                  <p className="text-xl">Seu agendamento foi confirmado com sucesso!</p>
                  <p className="my-4">Você receberá um e-mail de confirmação com os detalhes.</p>
                  <Link to="/" className="button primary">
                    Voltar à Página Inicial
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Appointment;
