import React, { FC, ReactNode } from 'react';
import classes from './Modal.module.css';

interface ModalOverlayProps {
    children: ReactNode
}

type Props = ModalOverlayProps;

const ModalOverlay: FC<Props> = ({children}) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{children}</div>
        </div>
    );
};

export default ModalOverlay;