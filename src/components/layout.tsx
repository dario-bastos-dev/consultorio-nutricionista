import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

function Layout() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}

export default Layout;
