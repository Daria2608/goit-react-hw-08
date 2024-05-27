import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilters = state => state.filters.name;


export const selectfilterContacts = createSelector([selectContacts, selectFilters], (contacts, contactFilter) => {
    if (!contacts) {
        return
    }
    return contacts.filter(contact => contact.name.toLowerCase().includes(contactFilter.toLowerCase()))
})