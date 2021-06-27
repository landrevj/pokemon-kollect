import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import clsx from 'clsx';

import { Card } from './Card';

interface ModalProps {
  label: string;
  transparent?: boolean;
  isOpen: boolean;
  onRequestClose?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ label, transparent, isOpen, onRequestClose, children, className }: ModalProps) {
  // https://github.com/reactjs/react-modal/issues/133#issuecomment-194034344
  useEffect(() => {
    ReactModal.setAppElement('body');
  }, []);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm'
      className='h-full flex flex-col justify-center place-items-center pointer-events-none focus:outline-none'
    >

      <Card label={label} translucent={transparent ? 'bg-opacity-0' : undefined} className={clsx('pointer-events-auto', className)}>
        {children}
      </Card>

    </ReactModal>
  );
}

Modal.defaultProps = {
  transparent: undefined,
  onRequestClose: undefined,
  className: '',
}
