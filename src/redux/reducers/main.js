import { combineReducers } from "redux";
import { namereducer } from "./Namereducer";
import { educationreducer } from "./Eductionreducer";
import { indexReducer } from "./Idstorage";
import { expertreducer } from "./Experiencereducer";
import { skillreducer } from "./Skills";
import { projectreducer } from "./Project";
import { languagereducer } from "./Language";
const rootred = combineReducers({
    namereducer,
    educationreducer,
    indexReducer,
    expertreducer,
    skillreducer,
    projectreducer,
    languagereducer,
})

export default rootred;

