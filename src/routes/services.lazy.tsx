import { createLazyFileRoute } from '@tanstack/react-router';
import Services from '../pages/services';

export const Route = createLazyFileRoute('/services')({
  component: Services,
});
