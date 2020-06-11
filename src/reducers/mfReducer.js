import {
  FETCH_FUNDS,
  SORT_PARAM,
  FETCH_ALL_FUNDS,
  FILTER_FUND
} from "../actions/types";
const initialState = {
  allFunds: [],
  topHundredFunds: [],
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
    case FETCH_ALL_FUNDS:
      return {
        ...state,
        allFunds: action.allFunds,
        topHundredFunds: action.topHundredFunds,
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
          action.filterParam === "fund_category"
            ? action.value
            : state.filters.fund_category,
        fund_type:
          action.filterParam === "fund_type"
            ? action.value
            : state.filters.fund_type,
        plan: action.filterParam === "plan" ? action.value : state.filters.plan
      };
      let noFilters;
          let categoryFilterIsSet =
          filters.fund_category.length === 0 ? false : true;
        let typeFilterIsSet = filters.fund_type.length === 0 ? false : true;
        let planFilterIsSet = filters.plan.length === 0 ? false : true;
  noFilters = !(categoryFilterIsSet || typeFilterIsSet || planFilterIsSet);
      
          if (noFilters) {
        return {
          ...state,
          filters,
          topHundredFunds: state.allFunds.slice(0, 100)
        };
      }
      let filteredFunds = state.allFunds.filter(
        fund =>
          (categoryFilterIsSet ? filters.fund_category.includes(fund.fund_category) : true) &&
          (typeFilterIsSet ? filters.fund_type.includes(fund.fund_type) : true) &&
          (planFilterIsSet ? filters.plan.includes(fund.plan):true)
      );
      return {
        ...state,
        filters,
        topHundredFunds: filteredFunds.slice(0, 100)
      };
    default:
      return state;
  }
}
