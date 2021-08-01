import UserActionTypes from "./user.types";
// SINGER ACTIONS
export const userData = user => ({
    type:UserActionTypes.USER_DATA,
    payload: user
});