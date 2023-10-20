import {ReactFormConst} from "./react-form.const";

const stateDefault = {
    ListStudent: [],
    StuEdit: null
};
export const reactFormReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case ReactFormConst.Submit:
            const newListStudent = [...state.ListStudent];
            newListStudent.push(action.payload);
            state.ListStudent = newListStudent;
            return {
                ...state
            };
        case ReactFormConst.Delete:
            {
                const newListStudent = state.ListStudent.filter((p) => p.id !== action.payload);
                state.ListStudent = newListStudent;
                return {
                    ...state
                };
            }
        case ReactFormConst.Edit:
            state.StuEdit = action.payload;
            return {
                ...state
            };
        case ReactFormConst.Update:
            {
                const newListStudent = [...state.ListStudent];
                const index = state.ListStudent.findIndex((p) => p.id === action.payload.id);
                newListStudent.splice(index, 1, action.payload);
                state.ListStudent = newListStudent;
                state.StuEdit = null;
                return {
                    ...state
                };
            }
        default:
            return state;
    }
};
