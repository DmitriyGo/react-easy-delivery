import React, { FC } from 'react';
import classes from './Checkout.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

interface CheckoutProps {
    onCartHide: () => void;
    onSubmit: (user: IUser) => void;
}

type Props = CheckoutProps;

const Checkout: FC<Props> = ({ onCartHide, onSubmit }) => {

    return (
        <Formik
            initialValues={{
                name: '',
                phone: '',
                email: '',
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .max(35, 'Must be 35 characters or less')
                    .required('Required'),
                phone: Yup.string()
                    .max(13, 'Must be 13 characters or less')
                    .required('Required'),
                email: Yup.string()
                    .max(35, 'Must be 35 characters or less')
                    .email('Email is not valid')
                    .required('Required'),

            })}
            onSubmit={(values, { resetForm }) => {
                resetForm();
                onSubmit(values);

            }}
        >{({ errors, touched }) => (
            <Form className={classes.form}>
                <div className={[classes.control, touched.name && errors.name ? classes.invalid : ''].join(' ')}>
                    <label htmlFor='name'>Your Name</label>
                    <Field name='name' type='text' />
                    <div><ErrorMessage name='name' /></div>
                </div>
                <div className={[classes.control, touched.phone && errors.phone ? classes.invalid : ''].join(' ')}>
                    <label htmlFor='phone'>Phone Number</label>
                    <Field name='phone' type='text' />
                    <div><ErrorMessage name='phone' /></div>
                </div>
                <div className={[classes.control, touched.email && errors.email ? classes.invalid : ''].join(' ')}>
                    <label htmlFor='email'>Email</label>
                    <Field name='email' type='text' />
                    <div><ErrorMessage name='email' /></div>
                </div>

                <div className={classes.actions}>
                    <button type='button' onClick={onCartHide}>Cancel</button>
                    <button type='submit' className={classes.submit}>Submit</button>
                </div>
            </Form>
        )}
        </Formik>
    );
};

export default Checkout;