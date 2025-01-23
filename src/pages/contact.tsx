import type React from 'react';
import useSubmitForm from '../hooks/use-submit-form';

const Contact: React.FC = () => {
  const { modalRef, handleSubmitForm } = useSubmitForm();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-4xl font-bold text-white">Estamos Aqui para Ajudar</h1>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-primary">Como Nos Encontrar</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-section">
              {' '}
              <h3 className="text-xl font-bold text-primary">Endereço</h3>
              <p>Rua Exemplo, 123 - Bairro, Cidade - Estado, CEP</p>
            </div>
            <div className="card-section">
              {' '}
              <h3 className="text-xl font-bold text-primary">Telefone</h3>
              <p>(99) 9 9999-9999</p>
            </div>
            <div className="card-section">
              {' '}
              <h3 className="text-xl font-bold text-primary">E-mail</h3>
              <p>contato@consultorio.com</p>
            </div>
          </div>
          <div className="mt-8">
            <iframe
              title="mapa consultório"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.075426745292!2d-46.65382258440639!3d-23.565734367638153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1633023226783!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="formulario" className="py-20 bg-base-300">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-white">Envie uma Mensagem</h2>
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
                <label className="label" htmlFor="subject">
                  <span className="label-text">Assunto</span>
                </label>
                <select className="select select-bordered" name="subject" required>
                  <option value="">Selecione um assunto</option>
                  <option value="agendamento">Agendamento</option>
                  <option value="duvida">Dúvida</option>
                  <option value="sugestao">Sugestão</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label" htmlFor="message">
                  <span className="label-text">Mensagem</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Escreva sua mensagem aqui..."
                  className="textarea textarea-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="button primary">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-primary">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-section">
              {' '}
              <h3 className="text-xl font-bold text-primary">Como posso agendar uma consulta?</h3>
              <p>Você pode agendar uma consulta pelo site, telefone ou pessoalmente.</p>
            </div>
            <div className="card-section">
              {' '}
              <h3 className="text-xl font-bold text-primary">Quais são as formas de pagamento?</h3>
              <p>Aceitamos cartões de crédito, débito e transferência bancária.</p>
            </div>
            <div className="card-section">
              {' '}
              <h3 className="text-xl font-bold text-primary">
                Posso cancelar ou remarcar meu agendamento?
              </h3>
              <p>Sim, entre em contato conosco para cancelar ou remarcar.</p>
            </div>
            <div className="card-section">
              {' '}
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
              <h2 className="section-title text-primary">Mensagem eviada</h2>
              <div className="max-w-2xl mx-auto text-center">
                <div className="card bg-base-100">
                  <p className="text-xl">Sua mensagem foi enviada com sucesso!</p>
                  <p className="my-4">Em breve entraremos em contato com você.</p>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary ml-[80%]">
              Fechar
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Contact;
