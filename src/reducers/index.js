
// the reducer function(our cashier who dispatches actions to store)
const red = (state, action) => {
    if(action.type === "WITHDRAW_AMOUNT" ) { //perform the withdrawal
        let total = state.balance;
            return {
                ...state,
                balance: (total - action.balance)
    }
}else {
    return state
}

};

export default red
