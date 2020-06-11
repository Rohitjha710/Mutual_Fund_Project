import {
  FETCH_FUNDS,
  SORT_PARAM,
  FETCH_ALL_FUNDS,
  FILTER_FUND,
  RESET_SORT
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
function sortFundsGeneric(filteredFunds, sortKey, order) {
  console.log(sortKey + "and" + order);
  let flag = order === "ASC" ? -1 : 1;
  filteredFunds.sort(function(a, b) {
    let x =
      sortKey === "year_1" || sortKey === "year_3"
        ? a["returns"][sortKey]
        : a[sortKey];
    let y =
      sortKey === "year_1" || sortKey === "year_3"
        ? b["returns"][sortKey]
        : b[sortKey];
    if (x < y) {
      return flag;
    } else {
      return flag * -1;
    }
  });
  return filteredFunds;
}
function filterFundsGeneric(filteredFunds, filters) {
  let categoryFilterIsSet = filters.fund_category.length === 0 ? false : true;
  let typeFilterIsSet = filters.fund_type.length === 0 ? false : true;
  let planFilterIsSet = filters.plan.length === 0 ? false : true;
  return filteredFunds.filter(
    fund =>
      (categoryFilterIsSet
        ? filters.fund_category.includes(fund.fund_category)
        : true) &&
      (typeFilterIsSet ? filters.fund_type.includes(fund.fund_type) : true) &&
      (planFilterIsSet ? filters.plan.includes(fund.plan) : true)
  );
}
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
    case RESET_SORT:
        let Filters = {
        ...state.filters
        };
        let isFiltersSet = (Filters.fund_category.length + Filters.fund_type.length +Filters.plan) === 0 ?false:true;
        if(isFiltersSet)
        { 
          let filteredFunds=[...state.allFunds];
          filteredFunds = filterFundsGeneric(filteredFunds,Filters)  
      return {
        
        ...state,
        topHundredFunds: filteredFunds.slice(0, 100),
        sortKey: "",
        sortOrder: ""
      }
        }
      return {
        ...state,
        topHundredFunds: state.allFunds.slice(0, 100),
        sortKey: "",
        sortOrder: ""
      };
    case SORT_PARAM:
      const { sortKey, order, typeFilter, planFilter, categoryFilter } = action;
      let isFilterSet =
        typeFilter.length + categoryFilter.length + planFilter.length === 0
          ? false
          : true;
      let Funds = [...state.allFunds],
        sortedFunds = [];
      sortedFunds = sortFundsGeneric(Funds, sortKey, order);
      if (isFilterSet) {
        let filters = {
          fund_category: categoryFilter,
          fund_type: typeFilter,
          plan: planFilter
        };
        let filteredFunds = filterFundsGeneric(sortedFunds, filters);
        return {
          ...state,
          sortKey: action.sortKey,
          sortOrder: action.order,
          topHundredFunds: filteredFunds.slice(0, 100)
        }
      } else {
        return {
          ...state,
          sortKey: action.sortKey,
          sortOrder: action.order,
          topHundredFunds: sortedFunds.slice(0, 100)
        };
      }
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
      } else {
        let filteredFunds = [...state.allFunds];
        filteredFunds = filterFundsGeneric(filteredFunds, filters);

        if (action.sortKey !== "") {
          console.log("sort funds generic called");
          console.log(action.sortKey + "and" + action.sortOrder);
          filteredFunds = sortFundsGeneric(
            filteredFunds,
            action.sortKey,
            action.sortOrder
          );
        }
        return {
          ...state,
          filters,
          topHundredFunds: filteredFunds.slice(0, 100)
        };
      }
    default:
      return state;
  }
}
