import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsApi from "../../services/ContactsApi"
// import * as phoneBookActions from "./phoneBook-actions";

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, {rejectWithValue}) => {      
    try {
        const contacts = await contactsApi.fetchContacts();
        return contacts;
    } catch (error) {
        return rejectWithValue(error);
    }
}
);

// export const fetchContacts = () => async dispatch => {
//     dispatch(phoneBookActions.fetchContactsRequest());

//     try {
//         const contacts = await contactsApi.fetchContacts();
//         dispatch(phoneBookActions.fetchContactsSuccess(contacts));
//     } catch (error) {
//         dispatch(phoneBookActions.fetchContactsError(error));
//     }
// }