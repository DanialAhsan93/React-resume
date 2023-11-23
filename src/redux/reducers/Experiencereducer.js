const INIT_STATE = {
    experience:[
        {
        position : 'Position',
        company:'Organization',
        startdate : '16/05/2021',
        enddate : '16/05/2023',
        expdescription : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur illum obcaecati exercitationem, quidem deleniti fugiat nam officia itaque repudiandae eligendi. Et inventore asperiores eum eius itaque sed. Modi, error voluptate'
        }
    ]

}

export const expertreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'Manage_Experience':
            return {
                ...state.experience,
                experience: action.payload,

            }
       
        default:
            return state
    }

}

