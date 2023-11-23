const INIT_State = {
    education: [
        {
            degree: 'Add your Qualification',
            School: 'Sheikh Zayed h/s school',
            date: '16/05/2021',
            enddate :'16/05/2023'

        }
    ]
}

export const educationreducer = (state = INIT_State, action) => {
    switch (action.type) {
        case 'Manage_Education' :
            return {
                ...state.education,
                education:action.payload
            }
        case 'DLT_EDU': 
            return {
                ...state,
                education: action.payload,
            }

        default:
            return state;
    }

}