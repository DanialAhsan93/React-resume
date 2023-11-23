const INIT_STATE = {
    name: "John Doe",
    font: "",
    role: "IT Manager",
    image: '',
    phone: 34342425,
    email: 'google@gmail.com',
    address: 'George heights, UK',
    city: '',
    country: '',
    linkdin: 'reallygreatsite.com',
    website: 'reallygreatsite.com',
    profile: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut necessitatibus tenetur perspiciatis ',
}


export const namereducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'Field_Edit':
            return {
                ...state,
                [action.field]: action.payload,
            }
        
        case 'Select_Edit':
            return {
                ...state,
                image:action.payload,
            }
        case 'Delete_Image':
            return {
                ...state,
                image:null
            }
        default:
            return state;

    }
}