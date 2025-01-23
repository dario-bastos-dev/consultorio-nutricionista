import { Outlet } from '@tanstack/react-router';
import Footer from '../templates/footer';
import Header from '../templates/header';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
