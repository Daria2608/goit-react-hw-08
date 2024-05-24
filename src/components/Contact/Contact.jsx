import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from './Contact.module.css'
import { FaUser, FaPhoneAlt } from "react-icons/fa";

export default function Contact({ data }) {
    const dispatch = useDispatch();
    const itemId = data.id;
    return (
        <div className={css.container}>
            <div>
            <p className={css.name}> <FaUser/> {data.name}</p>
            <p className={css.number}> <FaPhoneAlt/> {data.number}</p>   
            </div>
            <button className={css.button} onClick={() => dispatch(deleteContact(itemId))}>Delete</button>
        </div>
    )
}