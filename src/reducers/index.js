import { combineReducers } from "redux";
import mfReducer from "./mfReducer";
export default combineReducers({
  funds: mfReducer
});
