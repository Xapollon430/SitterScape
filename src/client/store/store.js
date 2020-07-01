import { createStore, combineReducers } from "redux";
import AuthModalReducer from "./reducers/AuthModalReducer";
import GeneralReducer from "./reducers/GeneralReducer";

const rootReducer = combineReducers({
    modalState: AuthModalReducer,
    appState: GeneralReducer,
});

const store = createStore(rootReducer);

export default store;
