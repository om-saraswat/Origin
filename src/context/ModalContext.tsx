'use client';

import React, { createContext, useContext, useState } from 'react';

interface ModalContextType {
  isBookModalOpen: boolean;
  openBookModal: () => void;
  closeBookModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const openBookModal = () => setIsBookModalOpen(true);
  const closeBookModal = () => setIsBookModalOpen(false);

  return (
    <ModalContext.Provider value={{ isBookModalOpen, openBookModal, closeBookModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
