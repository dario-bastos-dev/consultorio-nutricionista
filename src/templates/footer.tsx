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
            <img src={logo2} alt="Logotipo do Consultório" className="h-16 " />
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
      <footer className="footer footer-center bg-base-300 py-10 border-t-base-200 border-t-2 pt-4 text-white">
        <p>{new Date().getFullYear()}© Corpo em Ação. Todos os direitos reservados.</p>
      </footer>
    </>
  );
};

export default Footer;
