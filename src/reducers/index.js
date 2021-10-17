
// the reducer function(our cashier who dispatches actions to store)
const red = (state, action) => {
    if(action.type === "SET_TECHNOLOGIES" ) {
            return {
                ...state,
                tech: action.text
    }
} else {
    return state
}

};

export default red
