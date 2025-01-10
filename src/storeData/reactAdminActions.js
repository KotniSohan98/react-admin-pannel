import axios from "axios";

export const FETCH_TRANSACTION_LIST_SUCCESS = "FETCH_TRANSACTION_LIST_SUCCESS";
export const FETCH_REVENUE_DATA_SUCCESS = "FETCH_REVENUE_DATA_SUCCESS";

//Action Creators

export const fetchTransactionListSuccess = (data) => {
  return {
    type: FETCH_TRANSACTION_LIST_SUCCESS,
    payload: data,
  };
};

export const fetchRevenueDataSuccess = (data) => {
  return {
    type: FETCH_REVENUE_DATA_SUCCESS,
    payload: data,
  };
};

export const fetchTransactionList = () => {
  return async (dispatch) => {
    try {
      //   const response = await axios.get("http://localhost:5000/rows/");
      const response = await axios.get(
        "https://react-admin-pannel.onrender.com/rows"
      );
      const data = response.data;
      console.log(data);
      //   setRows(data);
      if (Array.isArray(data) && data) {
        dispatch(fetchTransactionListSuccess(data));
      }
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };
};

export const fetchRevenueData = () => {
  return async (dispatch) => {
    try {
      //   const response = await axios.get("http://localhost:5000/revenue/");
      const response = await axios.get(
        "https://react-admin-pannel.onrender.com/revenue/"
      );
      const data = response.data;
      console.log(data);
      //   setRows(data);
      if (Array.isArray(data) && data) {
        dispatch(fetchRevenueDataSuccess(data));
      }
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };
};
