import { ReactNode } from "react";
import styles from './Modal.module.scss';

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div className={styles.modal_overlay}>
          <div onClick={(e) => e.stopPropagation()} className={styles.modal_box}>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
