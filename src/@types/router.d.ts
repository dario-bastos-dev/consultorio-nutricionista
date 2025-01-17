import type { router } from '../routes/routes';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
