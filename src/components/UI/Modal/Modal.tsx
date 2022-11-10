import React, { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

interface ModalProps {
    children: ReactNode
    onCartHide: () => void
}

type Props = ModalProps;


const Modal: FC<Props> = ({children, onCartHide}) => {

    const portalElement = document.getElementById('overlays') as HTMLDivElement;

    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={onCartHide}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
        </>
    );
};

export default Modal;