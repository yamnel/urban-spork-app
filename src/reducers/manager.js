const managerReducerDefaultState = null;

export default (state = managerReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_MANAGER_ID':
            return action.id;

        default:
            return state;
    }
};
