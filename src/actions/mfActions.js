/* eslint-disable no-undef */
import {
  RESET_SORT,
  RESET_FILTER,
  SORT_PARAM,
  FILTER_FUND,
  FETCH_ALL_FUNDS,
  FUND_DETAILS
} from "./types";
export const resetSort = () => dispatch => {
  dispatch({ type: RESET_SORT });
};
export const resetFilter = () => dispatch => {
  dispatch({ type: RESET_FILTER });
};
export const fetchFundByCode = fundCode => dispatch => {
  fetch(`https://api.kuvera.in/api/v3/funds/${fundCode}.json`)
    .then(fundDetailsResponseObject => fundDetailsResponseObject.json())
    .then(fundDetails => dispatch({ type: FUND_DETAILS, fundDetails }));
};
export const fetchAllFunds = () => dispatch => {
  fetch("https://api.kuvera.in/api/v3/funds.json")
    .then(res => res.json())
    .then(funds => {
      let filteredFunds = funds.filter(
        fund => fund.plan !== null && fund.plan !== undefined
      );
      let fund_category = [],
        fund_type = [],
        plan = [];
      for (let fund of filteredFunds) {
        if (!fund_category.includes(fund.fund_category)) {
          if (fund_category !== null && fund_category !== undefined) {
            fund_category.push(fund.fund_category);
          }
        }
        if (!fund_type.includes(fund.fund_type)) {
          if (fund_type !== null && fund_type !== undefined) {
            fund_type.push(fund.fund_type);
          }
        }
        if (!plan.includes(fund.plan)) {
          if (plan !== null && plan !== undefined) {
            plan.push(fund.plan);
          }
        }
      }

      dispatch({
        type: FETCH_ALL_FUNDS,
        allFunds: filteredFunds,
        topHundredFunds: filteredFunds.slice(0, 100),
        fund_category,
        fund_type,
        plan
      });
    });
};
export const filteredFunds = (
  filterParam,
  value,
  sortKey,
  sortOrder
) => dispatch => {
  dispatch({ type: FILTER_FUND, filterParam, value, sortKey, sortOrder });
};
export const sortFundsByParam = (
  sortKey,
  order,
  typeFilter,
  planFilter,
  categoryFilter
) => dispatch => {
  dispatch({
    type: SORT_PARAM,
    sortKey,
    order,
    typeFilter,
    planFilter,
    categoryFilter
  });
};
