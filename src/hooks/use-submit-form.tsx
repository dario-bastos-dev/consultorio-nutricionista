import type React from 'react';
import { useRef } from 'react';

type SubmitFormHook = {
  modalRef: React.RefObject<HTMLDialogElement>;
  handleSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function useSubmitForm(): SubmitFormHook {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission
    e.preventDefault();

    // Open modal
    modalRef.current?.showModal();

    // Reset the form field values
    e.currentTarget.reset();
  };

  // Return the modal reference and the form submission handler
  return { modalRef, handleSubmitForm };
}
