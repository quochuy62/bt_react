import { ReactFormConst } from "./form-const";

export const submitCreator = (payload) => ({
  type: ReactFormConst.Submit,
  payload,
});

export const deleteCreator = (payload) => ({
  type: ReactFormConst.Delete,
  payload,
});

export const editCreator = (payload) => ({
  type: ReactFormConst.Edit,
  payload,
});