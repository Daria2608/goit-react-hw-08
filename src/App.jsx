import css from './App.module.css'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import { useEffect } from 'react'
import { fetchContacts } from './redux/contactsOps'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoading, selectError, selectContacts } from './redux/selectors'

export default function App() {
  
  const isLoading = useSelector(selectLoading)
  const isError = useSelector(selectError)
  const items = useSelector(selectContacts)
  const dispatch = useDispatch()
 
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
      <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <SearchBox />
      {isLoading && <p>Loading contacts...</p>}
      {isError && <p>Oops! it`s error!</p>}
      <ContactForm />
      {items && <ContactList />}
      
</div>
  )
}



