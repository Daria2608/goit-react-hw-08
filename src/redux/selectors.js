import { createSelector } from "@reduxjs/toolkit";

export const selectLoading = state => state.contacts.loading;

export const selectError = state => state.contacts.error;

export const selectContacts = state => state.contacts.items;

export const selectFilters = state => state.filters.name;


export const selectfilterContacts = createSelector([selectContacts, selectFilters], (contacts, contactFilter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(contactFilter.toLowerCase()))
})
