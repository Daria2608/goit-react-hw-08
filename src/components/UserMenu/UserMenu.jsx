import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import { logOut } from "../../redux/auth/operations"
import css from './UserMenu.module.css'

export default function UserMenu() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()


    const handlelogout = () => {
        dispatch(logOut())
    }

    return <div className={css.container}>
        <p>Welcome {user.email} !</p>
        <button className={css.button} type="button" onClick={handlelogout}>Log out</button>
    </div>
} 