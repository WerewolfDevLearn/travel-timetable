import { useRef, useEffect } from 'react';
import { ModaLProps } from 'types';

export default function CalendarBackdrop({ onCloseModal, children }: ModaLProps) {
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

  return (
    <div
      className="overlay"
      onClick={onOverlayClick}
      onKeyDown={pressEscBtn}
      role="button"
      tabIndex={0}
      ref={overlayRef}
    >
      <div>{children}</div>
    </div>
  );
}
