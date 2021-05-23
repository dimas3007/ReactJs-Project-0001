import ActionType from "./globalActionType";

const globalState = {
    totalOrder: 0,
}

// Redux Reducer
const rootReducer = (state = globalState, action) => {
    switch (action.type){
        case ActionType.PLUS_ORDER:
            return {
                ...state,
                totalOrder: state.totalOrder + 1,
            }
        case ActionType.MINUS_ORDER:
            let totalOrder = 0;
            if (state.totalOrder > 0){
                totalOrder = state.totalOrder - 1;
            }
            return {
                ...state,
                totalOrder: totalOrder,
            }
        default:
            return state;
    }
    return state;
}

export default rootReducer;
