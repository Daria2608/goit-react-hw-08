import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import {selectfilterContacts} from '../../redux/selectors'

export default function ContactList() {
    
    const filterContacts = useSelector(selectfilterContacts)

    return (
        <ul className={css.list}>
            {filterContacts.map((contact) => (
                <li className={css.listItem} key={contact.id}>
                    <Contact data={contact} />
                </li>
            ))}
        </ul>
    )
}