import { createAction } from '@reduxjs/toolkit';

const addContact = createAction("phoneBook/addContact", (name, number) => {    
    return {
        payload: {
        // id: nanoid(5),
        name,
        number,
    }
    }
} )

const deleteContact = createAction("phoneBook/deleteContact");
const changeFilter = createAction("phoneBook/changeFilter");


// export const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
// export const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
// export const fetchContactsError = createAction("contacts/fetchContactsError");

// const addContact = (name, number) => ({
//     type: actionsTypes.ADD,
//     payload: {
//         id: nanoid(5),
//         name,
//         number,
//     }
// });

// const deleteContact = (contactId) => ({
//     type: actionsTypes.DELETE,
//     payload: contactId,
// });

// const changeFilter = value => ({
//   type: actionsTypes.CHANGE_FILTER,
//   payload: value,
// });

export default { addContact, deleteContact, changeFilter};
