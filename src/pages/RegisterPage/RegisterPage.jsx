import RegistrationForm  from "../../components/RegistrationForm/RegistrationForm"
import css from './RegisterPage.module.css'

export default function RegisterPage() {
    return <div className={css.container}>
        <p className={css.text}>Please register!</p>
       <RegistrationForm/> 
    </div> 
}