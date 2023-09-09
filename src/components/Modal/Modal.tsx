import { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { ModaLProps } from 'types';

export default function Modal({ onCloseModal, children }: ModaLProps): JSX.Element {
  const portalElem = document.getElementById('modal') as HTMLElement;

  const overlayRef = useRef<HTMLHeadingElement>(null);

  const pressEscBtn = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === 'Escape') {
      onCloseModal();
    }
  };
  const onOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) onCloseModal();
  };

  useEffect(() => {
    overlayRef.current?.focus();
  }, []);

  return ReactDOM.createPortal(
    <div
      className="overlay"
      onClick={onOverlayClick}
      onKeyDown={pressEscBtn}
      role="button"
      tabIndex={0}
      ref={overlayRef}
    >
      {children}
    </div>,
    portalElem
  );
}
