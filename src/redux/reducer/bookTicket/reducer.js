import { bookTicket } from "./const";

const STATE_DEFAULT = {
  chairs: [],
  cost: 0
};

export const bookTicketReducer = (state = STATE_DEFAULT, action) => {
  switch (action.type) {
    case bookTicket.choose:
      state.chairs.push(action.payload);
      state.cost += action.payload.gia;
      return {
        ...state,
      };
    case bookTicket.delete: {
      const index = state.chairs.findIndex(chair => chair.soGhe === action.payload.soGhe);
      if (index >= 0) {
        state.chairs.splice(index, 1);
        state.cost -= action.payload.gia;
      }
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};