const INIT_State = {
    skills: [
        {
            skills: "Web Development",
            range: 60
        },
        {
            skills: 'App Development',
            range: 60,
        }
    ],
}

export const skillreducer = (state = INIT_State, action) => {
    switch (action.type) {
        case 'Manage_Skill':
            return {
                ...state,
                skills: action.payload,
            }

        default:
            return state;
    }

}