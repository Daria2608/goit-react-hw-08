import css from './Home.module.css'


export default function Home() {
    return <div className={css.container}> 
        <h1 className={css.title}>Welcome to Phonebook</h1>
        <p className={css.text}>PhoneBook App is a user-friendly mobile application designed to help you efficiently manage and store your contacts' mobile phone numbers. Whether for personal use or business, this app provides a secure and organized way to keep all your important contacts at your fingertips.</p>
        <h2 className={css.header}>Key Features</h2>
        <ul className={css.list}>
            <li className={css.item}>
                <h3 className={css.itemTitle}>Add Contacts</h3>
                <p className={css.text}>Easily add new contacts by entering their name and mobile phone number.</p>
            </li>
            <li className={css.item}>
                <h3 className={css.itemTitle}>Search and Filter</h3>
                <p className={css.text}>Powerful search functionality to quickly find any contact by name or phone number.</p>
            </li>
            <li className={css.item}>
                <h3 className={css.itemTitle}>Security</h3>
                <p className={css.text}>Password-protect the app to prevent unauthorized access.</p>
            </li>
        </ul>
        <p className={css.text}>The PhoneBook is a comprehensive solution for managing your mobile phone contacts, ensuring you can access and organize them effortlessly. With its robust features and user-friendly interface, you’ll never have to worry about losing important contact information again.</p>
    </div>
}