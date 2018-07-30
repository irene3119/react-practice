
const users = (state = {} , action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {...state, loading: true };
        case 'FETCH_USERS_SUCCESS': {
            return {...state, users: action.json, loading: false};
        }
        case 'FETCH_USERS_FAILURE': {
            return {...state, error: action.error, loading: false};
        }
        default:
            return state;
    }
}
export default users;