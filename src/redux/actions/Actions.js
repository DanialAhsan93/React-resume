
export const FIELD_EDIT = (field, value) => {
    return {
        type: 'Field_Edit',
        field,
        payload: value,
    }
}
export const SELECT_EDIT = (item) => {
    return {
        type: 'Select_Edit',
        payload: item,
    }
}
export const DLT_IMG = (rmv) => {
    return {
        type: 'Delete_Image',
        payload: rmv,
    }
}
export const PRFEDIT = (take, post) => {
    return {
        type: 'Profile_Edit',
        take,
        payload: post,
    }
}
export const manageIndex = (index) => {
    return {
        type: 'Manage_Index',
        payload: index,
    }
}
export const manageexp = (send, Exp ) => {
    return {
        type: 'Edit_Experience',
        send,
        payload: Exp,
    }
}
export const DLT_EDU = (id) => {
    return {
        type: 'Delete_Education',
        id: id,
    }
}
export const ADD_EDUCATION = (obj) => {
    return {
      type: 'Education_Edit',
      payload: obj,
    };
  };
  export const ManageEducation = (education) => {
    return {
      type: 'Manage_Education',
      payload: education,
    };
  };
export const ManageSkill = (skill) => {
    return {
      type: 'Manage_Skill',
      payload: skill,
    };
};
export const ManageExperience = (experience) => {
    return {
      type: 'Manage_Experience',
      payload: experience,
    };
};
export const ManageProject = (project) => {
    return {
      type: 'Manage_Project',
      payload: project,
    };
};
export const Managelanguage = (language) => {
    return {
      type: 'Manage_Language',
      payload: language,
    };
};


//--------------------Sectempmini.js

export const Manage_Field = (fieldtwo, valuetwo) => {
    return {
        type:"Manage_Field",
        fieldtwo,
        payload:valuetwo,
    }
}