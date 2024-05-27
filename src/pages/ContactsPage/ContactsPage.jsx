import ContactForm from '../../components/ContactForm/ContactForm'
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactList from '../../components/ContactList/ContactList'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoading } from '../../redux/contacts/selectors'
import {fetchContacts} from '../../redux/contacts/operations'
import { useEffect } from 'react'

export default function ContactPage() {
    const dispatch = useDispatch()
    const isLoading = useSelector(selectLoading)

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    return <div>
        <ContactForm />
        <SearchBox />
        {isLoading && <p>Request in progress...</p>}
        <ContactList/>
    </div>
}