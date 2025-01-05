import axios from "axios";

export const FETCH_TRANSACTION_LIST_SUCCESS = "FETCH_TRANSACTION_LIST_SUCCESS";

//Action Creators

export const fetchTransactionListSuccess = (data) => {
  return {
    type: FETCH_TRANSACTION_LIST_SUCCESS,
    payload: data,
  };
};

export const fetchTransactionList = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:5000/rows/");
      const data = response.data;
      console.log(data);
      //   setRows(data);
      dispatch(fetchTransactionListSuccess(data));
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  };
};
