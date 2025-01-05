const INITIAL_STATE = {
  transactionList: [],
  revenueData: [],
};

const reactAdminReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_TRANSACTION_LIST_SUCCESS":
      return {
        ...state,
        transactionList: action.payload,
      };

    case "FETCH_REVENUE_DATA_SUCCESS":
      return {
        ...state,
        revenueData: action.payload,
      };
    default:
      return state;
  }
};

export default reactAdminReducers;
