import css from './SearchBox.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../redux/filtersSlice'
import {selectFilters} from '../../redux/selectors'

export default function SearchBox() {
    const filteredContacts = useSelector(selectFilters)
    const dispatch = useDispatch()
    const onSearch = (value) => {
    dispatch(changeFilter(value))
    }

    return (
        <div>
            <p className={css.text}>Find contact by name</p>
            <input className={css.input} type="text" value={filteredContacts} onChange={(e) => onSearch(e.target.value)}/>
        </div>
    )
}