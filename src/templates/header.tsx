import { Link } from '@tanstack/react-router';
import type React from 'react';
import logo1 from '../assets/logo/Logo-1.png';

const Header: React.FC = () => {
  return (
    <header className="fixed z-50 navbar bg-white shadow-lg">
      <div className="max-sm:flex-col w-full">
        {/* Logotipo */}
        <div className="md:flex-1 w-full">
          <Link href="/">
            <img src={logo1} alt="Logotipo do Consultório" className="h-10" />
          </Link>
        </div>

        {/* Menu de Navegação */}
        <nav className="flex-none hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="hover:text-primary">
                Início
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/appointment" className="hover:text-primary">
                Agendamento
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botão de Ação Principal (CTA) */}
        <div className="max-md:">
          <Link to="/appointment" className="btn btn-primary uppercase ml-4">
            Agendar Consulta
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
