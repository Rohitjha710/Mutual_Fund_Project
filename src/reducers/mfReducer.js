import { FETCH_FUNDS, SORT_PARAM } from "../actions/types";
const initialState = {
  fundsList: [],
  sortKey : ""
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_FUNDS:
      return {
        ...state,
        fundsList: action.payload
      }
    case SORT_PARAM:
      return {
          ...state,
          sortKey: action.sortKey,
          fundsList: action.payload
      }
    default:
      return state;
  }
}
