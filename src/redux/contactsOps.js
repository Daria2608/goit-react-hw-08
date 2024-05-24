import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://664dc393ede9a2b55654c54a.mockapi.io/'

export const fetchContacts = createAsyncThunk('FetchAllContacts', async (_, thunkAPI) => {
    try {
      const responce = await axios.get('/contacts');
      return responce.data;   
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
   
})

export const addContact = createAsyncThunk('addContact', async (newContact, thunkAPI) => {
    try {
        const responce = await axios.post('/contacts', newContact)
        return responce.data
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const deleteContact = createAsyncThunk('deleteContact', async (contactId, thunkAPI) => {
    try {
        const responce = await axios.delete(`/contacts/${contactId}`)
        return responce.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})