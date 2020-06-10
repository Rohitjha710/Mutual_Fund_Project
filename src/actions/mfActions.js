import { FETCH_FUNDS, SORT_PARAM } from "./types";
export const fetchFunds = () => dispatch => {
  fetch("https://api.kuvera.in/api/v3/funds.json")
    .then(res => res.json())
    .then(funds => {
       let filteredFunds = funds.filter(fund=>(fund.plan !== null)&&(fund.plan !== undefined))
      dispatch({ type: FETCH_FUNDS, payload: filteredFunds.slice(0, 100) });
    });
};
export const sortFundsByParam = (sortKey, order) => dispatch => {
  dispatch({ type: FETCH_FUNDS, payload: [] });
  fetch("https://api.kuvera.in/api/v3/funds.json")
    .then(res => res.json())
    .then(funds => {
      console.log(sortKey + "and" + order);
      let filteredFunds = funds.filter(fund=>(fund.plan !== null)&&(fund.plan !== undefined));
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
      dispatch({ type: SORT_PARAM, payload: filteredFunds.slice(0, 100),sortKey:sortKey });
    });
};
