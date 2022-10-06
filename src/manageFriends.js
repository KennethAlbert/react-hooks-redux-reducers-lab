const initialState = { friends: [] };


export function manageFriends(state=initialState, action) {
  // your code here

  switch (action.type) {
    case "friends/add":
      let newFriend = {
        name: action.payload.name,
        hometown: action.payload.hometown,
        id: action.payload.id,
      };

      let newFriendArray = [...state.friends];
      newFriendArray.push(newFriend);

      return { friends: newFriendArray };

      case "friends/remove":
        return {
          friends: state.friends.filter((friend) => friend.id !== action.payload),
        };

    default:
      return state
  }
}

