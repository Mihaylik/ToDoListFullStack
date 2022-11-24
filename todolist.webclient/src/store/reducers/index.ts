import { type } from "os";
import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { taskReducer } from "./taskReducer";

export const rootReducer = combineReducers({
    task: taskReducer,
    category: categoryReducer
})

export type RootState = ReturnType<typeof rootReducer>