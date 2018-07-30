export const authorize = (username, password) => ({
    type: 'AUTH_REQUEST',
    payload: { username, password }
});


const initialState = {
    token: null,
    error: null
};

const auth = (state = initialState , action) => {
    switch (action.type) {
        case 'AUTH_SUCCESS': {
            return {...state, token: action.token};
        }
        case 'AUTH_FAILURE': {
            return {...state, error: action.error};
        }
        case 'SIGNOUT': {
            delete state.token;
            delete state.error;
            return {...state};
        }
        default:
            return state;
    }
}

export default auth;