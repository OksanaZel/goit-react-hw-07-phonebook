import { configureStore } from '@reduxjs/toolkit';
import contactReducer from "../redux/contacts/phoneBook-reducer";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

// import { combineReducers, createStore} from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

// import { persistStore, persistReducer, FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const contactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter'],
// };

// const store = configureStore({
//     reducer: {
//     contacts: persistReducer(contactsPersistConfig, contactReducer),
// },
//     devTools: process.env.NODE_ENV !== 'production',
//     middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// const persistor = persistStore(store);

// export default {store, persistor};

// const rootReducer = combineReducers({
//     contacts: contactReducer,
// })

// const store = createStore(rootReducer, composeWithDevTools());


