/* eslint-disable no-undef */
import { FETCH_FUNDS, SORT_PARAM, FILTER_FUND } from "./types";
export const fetchFunds = () => dispatch => {
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
        type: FETCH_FUNDS,
        payload: filteredFunds.slice(0, 100),
        fund_category,
        fund_type,
        plan
      });
    });
};
export const filteredFunds = (filterBy, value) => dispatch => {
  fetch("https://api.kuvera.in/api/v3/funds.json")
    .then(res => res.json())
    .then(funds => {
      dispatch({ type: FILTER_FUND, filterBy, value ,payload:funds });
    });
  
};
export const sortFundsByParam = (sortKey, order) => dispatch => {
  dispatch({ type: FETCH_FUNDS, payload: [] });
  fetch("https://api.kuvera.in/api/v3/funds.json")
    .then(res => res.json())
    .then(funds => {
      console.log(sortKey + "and" + order);
      let filteredFunds = funds.filter(
        fund => fund.plan !== null && fund.plan !== undefined
      );
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
      dispatch({
        type: SORT_PARAM,
        payload: filteredFunds.slice(0, 100),
        sortKey: sortKey
      });
    });
};
