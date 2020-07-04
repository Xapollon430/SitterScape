import { createStore, combineReducers } from "redux";
import AuthModalReducer from "./reducers/AuthModalReducer";
import GeneralReducer from "./reducers/GeneralReducer";

const rootReducer = combineReducers({
  modalState: AuthModalReducer,
  appState: GeneralReducer,
});

export default rootReducer;
