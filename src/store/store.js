import { configureStore } from "@reduxjs/toolkit";
import {persistStore,persistReducer,FLUSH,REHYDRATE,PERSIST,PURGE,REGISTER, PAUSE} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { admin } from "./slice/admin";
import {student} from './slice/student'

const studentPersistConfig = {key:"studentAuth",storage,version:1}
const adminPersistConfig = {key:"adminAuth",storage,version:1}

const studentPersistReducer = persistReducer(studentPersistConfig,student.reducer)
const adminPersistReducer = persistReducer(adminPersistConfig,admin.reducer)

export const Store = configureStore({
    reducer: {
        Student: studentPersistReducer,
        Admin: adminPersistReducer
    },
    middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
        }
    })
});


export const persistor = persistStore(Store);