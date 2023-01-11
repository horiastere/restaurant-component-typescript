import styles from './Modal.module.css';

import {useAppDispatch} from '../../app/hooks';

import { closeModal } from './modalSlice';

import { ReactComponent as Close } from '../../assets/close.svg';

type ModalProps = {
  children: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  const dispatch = useAppDispatch();

  const closeModalWindow = () => {
    dispatch(closeModal());
  }

  return (
    <div className={styles.modalWrap}>
      <div className={styles.modalOverlay} onClick={closeModalWindow}></div>
      <div className={styles.modalBody}>
        <Close
          className={styles.buttonClose}
          onClick={closeModalWindow}
        />

        {props.children}
      </div>
    </div>
  );
}

export default Modal;