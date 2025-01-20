import type React from 'react';

const Header: React.FC = () => {
  return (
    <header className="navbar bg-base-100 shadow-lg">
      {/* Logotipo */}
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          <img src="/logo.png" alt="Logotipo do Consultório" className="h-10" />
        </a>
      </div>

      {/* Menu de Navegação */}
      <nav className="flex-none hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/" className="hover:text-primary">
              Início
            </a>
          </li>
          <li>
            <a href="/servicos" className="hover:text-primary">
              Serviços
            </a>
          </li>
          <li>
            <a href="/sobre" className="hover:text-primary">
              Sobre Nós
            </a>
          </li>
          <li>
            <a href="/contato" className="hover:text-primary">
              Contato
            </a>
          </li>
        </ul>
      </nav>

      {/* Botão de Ação Principal (CTA) */}
      <div className="flex-none">
        <a href="/agendar" className="btn btn-primary ml-4">
          Agendar Consulta
        </a>
      </div>

      {/* Ícone de Menu Mobile */}
      <div className="flex-none md:hidden">
        <button type="button" className="btn btn-square btn-ghost">
          {/*<img src="" alt="" /> Adicionar logo*/}
        </button>
      </div>
    </header>
  );
};

export default Header;
