const INIT_STATE = {
    project:[
        {
            projectname:'E-commerce website',
            url:'www.google/ecommerce.com',
            description:'Project decription : Ipsum quasi iure ad voluptates assumenda dolor quae! Repellat.',
            
        }
    ]
} 

export const projectreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'Manage_Project':
            return {
                ...state.project,
                project:action.payload,
            }

        default:
            return state;
    }

}