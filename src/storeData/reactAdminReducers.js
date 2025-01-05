const INITIAL_STATE = {
  transactionList: [],
};

const reactAdminReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_TRANSACTION_LIST_SUCCESS":
      return {
        ...state,
        transactionList: action.payload,
      };
    default:
      return state;
  }
};

export default reactAdminReducers;
