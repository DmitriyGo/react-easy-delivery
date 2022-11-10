import React, { FC, FormEvent, useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

interface MealItemFormProps {
    id: string;
    onAddToCart: (amount: number) => void;
}

type Props = MealItemFormProps;

const MealItemForm: FC<Props> = ({ id, onAddToCart }) => {
    const amountInputRef = useRef<HTMLInputElement>(null);

    const [amountIsValid, setAmountIsValid] = useState(true);

    const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const enteredAmount = Number(amountInputRef.current?.value);

        if (typeof enteredAmount != 'number' || enteredAmount < 1 || enteredAmount > 5) {
            setAmountIsValid(false);
            return;
        }

        onAddToCart(enteredAmount);

    };

    return (
        <form className={classes.form} onSubmit={onFormSubmit}>
            <Input ref={amountInputRef} label='Amount' id={`amount_${id}`} type='number' min='1' max='5' step='1' defaultValue='1' />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
};

export default MealItemForm;