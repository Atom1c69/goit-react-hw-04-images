import React, { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ dataModal, closeModal }) => {
  const onClickOverlay = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div className={css.Overlay} onClick={onClickOverlay}>
      <div className={css.Modal}>
        <img src={dataModal} alt={dataModal} />
      </div>
    </div>
  );
};