export function TodoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), todo: action.payload, complete: false },
      ];
    case "remove":
      return state.filter((item) => item.id !== action.payload);

    case "toggle":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, complete: !item.complete }
          : item
      );

    default:
      break;
  }
}