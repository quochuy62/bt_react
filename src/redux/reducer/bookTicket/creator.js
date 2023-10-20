import { bookTicket } from "./const";

export const deleteCreator = (payload) => {
  return {
    type: bookTicket.delete,
    payload,
  };
};

export const chosenCreator = (payload) => ({
  type: bookTicket.choose,
  payload,
});