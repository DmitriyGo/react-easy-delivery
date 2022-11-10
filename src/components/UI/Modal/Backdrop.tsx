import React, { FC } from 'react';
import classes from './Modal.module.css'

interface BackdropProps {
    onClick: () => void;
}

type Props = BackdropProps;

const Backdrop: FC<Props> = ({onClick}) => {
    return (
        <div onClick={onClick} className={classes.backdrop}/>
    );
};

export default Backdrop;