import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
// import * as phoneBookActions from "./phoneBook-actions";
import { fetchContacts } from "./phoneBook-operations";

const items = createReducer([], {
    [fetchContacts.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
})

const error = createReducer(null, {
    [fetchContacts.pending]: null,
    [fetchContacts.rejected]: (_,action) => action.payload,
})


// const items = createReducer([], {
//     [actions.addContact]: (state, { payload }) => {
//         if (state.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase())) {
//             alert(`${payload.name} is already in contacts`);
//             return state;
//         }
//         return [payload, ...state]
//     },


//     [actions.deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload),
// })

// const filter = createReducer("", {
//     [actions.changeFilter]: (_, action) => action.payload,
// })

export default combineReducers({
    items,
    isLoading,
    error,
    // filter,
})

// const items = (state = initialContacts, {type, payload}) => {
//     switch (type) {
//         case actionsTypes.ADD:
//             return [payload, ...state];

//         case actionsTypes.DELETE:
//             return state.filter(contact => contact.id !== payload);

//         default: return state;
//     }
// }

// const filter = (state = "", {type, payload}) => {
//     switch (type) {
//         case actionsTypes.CHANGE_FILTER:
//             return payload;

//         default: return state;
//     }
// }

