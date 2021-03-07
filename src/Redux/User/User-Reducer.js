const Initial_State = {
  currentuser: null,
};
const UserReducer = (state = Initial_State, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentuser: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
