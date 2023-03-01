import * as types from './actionType';

const initialState = {}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_DISPLAY_COMPONENT:
            return {
                ...state,
                cmp: {
                    componentName: action.payload
                }
            }
        default:
            return state
    }
}

export default authReducer