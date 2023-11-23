const INIT_STATE = {
    languages:[
        {
            languages:"English",
        },
        {
            languages:'Urdu',
        }
    ]
}

export const languagereducer = (state= INIT_STATE, action) => {
     
    switch(action.type) {
        case 'Manage_Language' :
            return {
                ...state,
                languages:action.payload,
            }
            default:
            return state
    }
}