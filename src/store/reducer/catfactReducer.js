const INITIAL_STATE = {
    catfact: [],
    loading: false
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SUCCESSFULL":
            return { 
                catfact: action.payload
            }
        case 'IS_LOADING':
            return {
                loading: action.payload
            }

        default: 
            return state
            
    }
}