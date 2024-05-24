import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

const slice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: {
            items: [],
            loading: false,
            error: null
        }
    },
    extraReducers: builder => builder.addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
    }).addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
    }).addCase(fetchContacts.rejected, (state) => {
        state.error = true;
        state.loading = false;
    }).addCase(addContact.pending, (state) => {
        state.error = false;
        state.loading = true;
    }).addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload)
        state.loading = false;
    }).addCase(addContact.rejected, (state) => {
        state.error = true;
        state.loading = false;
    }).addCase(deleteContact.pending, (state) => {
        state.error = false;
        state.loading = true;
    }).addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.loading = false;
    }).addCase(deleteContact.rejected, (state) => {
        state.error = true;
        state.loading = false;
    })
},
);
 
export default slice.reducer;


    // reducers: {
    //     addContact: {
    //         reducer: (state, action) => {
    //             state.items.push(action.payload);

    //         },
    //         prepare: (value) => {
    //             return {
    //               payload: {
    //                 id: crypto.randomUUID(),
    //                 name: value.name,
    //                 number: value.number
    //             }   
    //             }
    //         }
    //     },
    //     deleteContact: (state, action) => {
    //      state.items = state.items.filter(contact => contact.id !== action.payload)
    //     },
    // }