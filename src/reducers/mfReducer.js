import { FETCH_FUNDS, SORT_PARAM, FILTER_FUND } from "../actions/types";
const initialState = {
  fundsList: [],
  sortKey: "",
  sortOrder: "",
  filters: { fund_category: [], fund_type: [], plan: [] },
  fund_category: [],
  fund_type: [],
  plan: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_FUNDS:
      return {
        ...state,
        fundsList: action.payload,
        fund_category: action.fund_category,
        fund_type: action.fund_type,
        plan: action.plan
      };
    case SORT_PARAM:
      return {
        ...state,
        sortKey: action.sortKey,
        fundsList: action.payload
      };
    case FILTER_FUND:
      let filters = {
        fund_category:
          action.filterBy === "fund_category"
            ? action.value
            : state.fund_category,
        fund_type:
          action.filterBy === "fund_type" ? action.value : state.fund_type,
        plan: action.filterBy === "plan" ? action.value : state.plan
      };
      let filteredFunds = [...action.payload];
      filteredFunds.filter(
        fund =>
          filters.fund_category.includes(fund.fund_category) ||
          filters.fund_type.includes(fund.fund_type) ||
          filters.plan.includes(fund.plan)
      );
      return {
        ...state,filters,fundsList:filteredFunds
      };
    default:
      return state;
  }
}
