
import css from './LoginForm.module.css'
import { Formik, Form, Field } from "formik";
import { toast } from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

export default function LoginForm() {

    const dispatch = useDispatch()
    const handleSubmit = (values, actions) => {
        dispatch(logIn(values)).unwrap().then(data => {toast.success('Success!')}).catch(error => {toast.error('Error!')})
        actions.resetForm();
    }

      return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" autoComplete="username"/>
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" autoComplete="current-password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}

