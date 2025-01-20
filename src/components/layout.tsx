import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Footer from '../templates/footer';
import Header from '../templates/header';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <TanStackRouterDevtools />
      <Footer />
    </>
  );
}

export default Layout;
