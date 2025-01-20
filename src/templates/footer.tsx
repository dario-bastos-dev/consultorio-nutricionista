import type React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer text-base-content p-10 bg-base-200">
        {/* Logo do consultório*/}
        <div>
          <span className="footer-title">
            <img src="/logo.png" alt="Logotipo do Consultório" className="h-10" />
          </span>
        </div>

        {/* Seção de Links Rápidos */}
        <div>
          <span className="footer-title">Links Rápidos</span>
          <a href="/politica-de-privacidade" className="link link-hover">
            Política de Privacidade
          </a>
          <a href="/termos-de-uso" className="link link-hover">
            Termos de Uso
          </a>
          <a href="/faq" className="link link-hover">
            FAQ
          </a>
          <a href="/contato" className="link link-hover">
            Contato
          </a>
        </div>

        {/* Seção de Informações de Contato */}
        <div>
          <span className="footer-title">Contato</span>
          <p>Rua Exemplo, 123 - Bairro, Cidade - Estado, CEP</p>
          <p>Telefone: (XX) XXXX-XXXX</p>
          <p>E-mail: contato@consultorio.com</p>
        </div>

        {/* Seção de Redes Sociais */}
        <div>
          <span className="footer-title">Redes Sociais</span>
          <div className="flex gap-4">
            <a href="https://facebook.com" className="link link-hover">
              {/*<img src="" alt="" /> Adicionar logo Facebook*/}
            </a>
            <a href="https://twitter.com" className="link link-hover">
              {/*<img src="" alt="" /> Adicionar logo likedin*/}
            </a>
            <a href="https://instagram.com" className="link link-hover">
              {/*<img src="" alt="" /> Adicionar logo instagram*/}
            </a>
          </div>
        </div>
      </footer>

      {/* Direitos Autorais */}
      <footer className="footer footer-center bg-base-200 py-10 border-t-base-300 border-t-2 pt-4">
        <p>{new Date().getFullYear()}© Corpo em Ação. Todos os direitos reservados.</p>
      </footer>
    </>
  );
};

export default Footer;
