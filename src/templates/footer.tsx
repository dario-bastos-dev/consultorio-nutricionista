import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import { Link } from '@tanstack/react-router';
import type React from 'react';
import logo2 from '../assets/logo/Logo-2.png';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer text-base-content p-10 bg-base-300">
        {/* Logo do consultório*/}
        <div>
          <span>
            <Link to="/">
              <img src={logo2} alt="Logotipo do Consultório" className="h-16 " />
            </Link>
          </span>
        </div>

        {/* Seção de Links Rápidos */}
        <div className="text-white">
          <span className="footer-title ">Links Rápidos</span>
          <Link to="/" className="link link-hover">
            início
          </Link>
          <Link to="/services" className="link link-hover">
            Serviços
          </Link>
          <Link to="/about" className="link link-hover">
            sobre
          </Link>
          <Link to="/appointment" className="link link-hover">
            Agendameto
          </Link>
          <Link to="/contact" className="link link-hover">
            Contato
          </Link>
        </div>

        {/* Seção de Informações de Contato */}
        <div className="text-white">
          <span className="footer-title">Contato</span>
          <p>Rua Exemplo, 123 - Bairro, Cidade - Estado, CEP</p>
          <p>Telefone: (99) 9 9999-9999</p>
          <p>E-mail: contato@consultorio.com</p>
        </div>

        {/* Seção de Redes Sociais */}
        <div className="text-white">
          <span className="footer-title">Redes Sociais</span>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="link link-hover"
              rel="noreferrer"
            >
              <FacebookLogo size={32} weight="fill" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="link link-hover"
              rel="noreferrer"
            >
              <LinkedinLogo size={32} weight="fill" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="link link-hover"
              rel="noreferrer"
            >
              <InstagramLogo size={32} weight="fill" />
            </a>
          </div>
        </div>
      </footer>

      {/* Direitos Autorais */}
      <footer className="footer footer-center bg-base-300 py-10 border-t-base-200 border-t-2 pt-4 text-white">
        <p>{new Date().getFullYear()}© Corpo em Ação. Todos os direitos reservados.</p>
      </footer>
    </>
  );
};

export default Footer;
