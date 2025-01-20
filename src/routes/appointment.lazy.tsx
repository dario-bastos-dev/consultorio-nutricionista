import { createLazyFileRoute } from '@tanstack/react-router';
import Appointment from '../pages/appointment';

export const Route = createLazyFileRoute('/appointment')({
  component: Appointment,
});
