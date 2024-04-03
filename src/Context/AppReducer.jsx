const appReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        Transactions: state.Transactions.filter(transaction => transaction.id !== action.payload)
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        Transactions: [...state.Transactions, action.payload]
      };
    default:
      return state;
  }
};

export default appReducer;
