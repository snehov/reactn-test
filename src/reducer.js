export const reducer = (state, action) => {
  console.log("lezu pres reducer", state, action)
  switch (action.type) {
    case 'reset':
      return 0;
    case 'increment':
      return {x: state.x + 1};
    case 'incrementTwo':
      return {x: state.x + 2};
    case 'decrement':
      return {x: state.x - 1};
    default:
      return state;
  }
}
export default reducer