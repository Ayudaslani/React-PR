const initialstate = {
    moive: [],
    onemoive: null,
    isError: "",
    isCreated: false,
    isLoading: false,
    isUpdated: false,
    searchText: ""
}

export const ReducerData = (state = initialstate, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'REJ_ALL':
            return {
                ...state,
                isError: action.message
            }
        case 'ADD_MOIVE':
            return {
                ...state,
                isCreated: true
            }

        case 'GET_ALL_MOIVE':
            return {
                ...state,
                moive: action.payload,
                isLoading: false,
                isCreated: false,
                isError: "",

            }
        case 'GET_ONE_MOIVE':
            return {
                ...state,
                onemoive: action.payload,
            }

        case 'UPDATE_MOIVE':
            return {
                ...state,
                onemoive: null,
                isUpdated: true,
                isLoading: false
            }
        case 'SET_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.payload
            }


        default:
            return state
    }
}