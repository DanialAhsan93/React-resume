const INIT_State = {
    tempId: "", // Initialize with an empty string or your default value
  };
  
  export const indexReducer = (state = INIT_State, action) => {
    switch (action.type) {
      case "Manage_Index":
        return {
          ...state,
          tempId: action.payload,
        };
      default:
        return state;
    }
  };