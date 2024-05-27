import { useDispatch } from 'react-redux';
import css from './RegistrationForm.module.css'
import { Formik, Form, Field } from 'formik'
import {register} from '../../redux/auth/operations'

export default function RegistrationForm() {

   const dispatch = useDispatch()

    const handleSubmit = (values, actions) => {
        console.log(values);
        dispatch(register(values))
        actions.resetForm();
    };
    
    return <Formik
        initialValues={{
            name: "",
            email: "",
            password: "",
        }}
        onSubmit={handleSubmit}
    >
        <Form className={css.form} autoComplete="off">
            <label className={css.label}>
                Username
                <Field type="text" name="name" autoComplete="off"/>
            </label>
            <label className={css.label}>
                Email
                <Field type="email" name="email" autoComplete="username"/>
            </label>
            <label className={css.label}>
                Password
                <Field type="password" name="password" autoComplete="current-password"/>
            </label>
            <button type="submit">Register</button>
        </Form>
    </Formik>
}