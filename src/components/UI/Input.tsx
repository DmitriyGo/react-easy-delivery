import React, { FC, ForwardedRef, InputHTMLAttributes } from 'react';
import classes from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string
    id: string
}

type Props = InputProps;

const Input = React.forwardRef<HTMLInputElement, Props>(({label,id, ...rest}, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <div className={classes.input}>
            <label htmlFor={id}>{label}</label>
            <input ref={ref} id={id} {...rest}/>
        </div>
    );
});

export default Input;