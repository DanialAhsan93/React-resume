import * as Yup from 'yup';

export const contactsec2Schema = Yup.object ({
    name:Yup.string().min(2).max(25).required('please enter your firstname'),
    lastname:Yup.string().min(2).max(25).required('please enter your lastname'),
    email:Yup.string().email().required('please enter your email'),
    message:Yup.string().required('please enter your message'),
    password:Yup.string().min(8).required('please enter your password'),
    confirm_password:Yup.string()
    .required()
    .oneOf([Yup.ref('password'),null], "Password must match"),

})